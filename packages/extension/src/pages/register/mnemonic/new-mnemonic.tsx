import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { RegisterConfig } from '@owallet/hooks';
import { observer } from 'mobx-react-lite';
import { FormattedMessage, useIntl } from 'react-intl';
import useForm from 'react-hook-form';
import { AdvancedBIP44Option, BIP44Option, useBIP44Option } from '../advanced-bip44';
import style from '../style.module.scss';
import { Alert, Button, ButtonGroup, Form } from 'reactstrap';
import { Input, PasswordInput } from '../../../components/form';
import { BackButton } from '../index';
import { NewMnemonicConfig, useNewMnemonicConfig, NumWords } from './hook';
import { useStore } from '../../../stores';
// import classNames from 'classnames';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const bip39 = require('bip39');

export const TypeNewMnemonic = 'new-mnemonic';

interface SeedData {
  words: string;
}
interface AccountData {
  name: string;
  password: string;
  confirmPassword: string;
}

export const NewMnemonicIntro: FunctionComponent<{
  registerConfig: RegisterConfig;
}> = observer(({ registerConfig }) => {
  const { analyticsStore } = useStore();

  return (
    <Button
      block
      onClick={(e) => {
        e.preventDefault();

        registerConfig.setType(TypeNewMnemonic);
        analyticsStore.logEvent('Create account started', {
          registerType: 'seed'
        });
      }}
      className={style.newWalletBtn}
    >
      <FormattedMessage id="register.intro.button.new-account.title" />
    </Button>
  );
});

export const NewMnemonicPage: FunctionComponent<{
  registerConfig: RegisterConfig;
}> = observer(({ registerConfig }) => {
  const newMnemonicConfig = useNewMnemonicConfig(registerConfig);
  const bip44Option = useBIP44Option();

  return (
    <React.Fragment>
      {newMnemonicConfig.mode === 'account' ? (
        <AccountCreationPage registerConfig={registerConfig} newMnemonicConfig={newMnemonicConfig} />
      ) : null}
      {newMnemonicConfig.mode === 'generate' ? (
        <GenerateMnemonicModePage
          registerConfig={registerConfig}
          newMnemonicConfig={newMnemonicConfig}
          bip44Option={bip44Option}
        />
      ) : null}
      {newMnemonicConfig.mode === 'verify' ? (
        <VerifyMnemonicModePage
          registerConfig={registerConfig}
          newMnemonicConfig={newMnemonicConfig}
          bip44Option={bip44Option}
        />
      ) : null}
    </React.Fragment>
  );
});
//acount creation
export const AccountCreationPage: FunctionComponent<{
  registerConfig: RegisterConfig;
  newMnemonicConfig: NewMnemonicConfig;
}> = observer(({ registerConfig, newMnemonicConfig }) => {
  const intl = useIntl();
  // const [walletData, setWalletData] = useState({ name: '', password: '' }); // State for wallet data

  const { register, handleSubmit, getValues, errors } = useForm<AccountData>({
    defaultValues: {
      name: newMnemonicConfig.name,
      password: '',
      confirmPassword: ''
    }
  });
  return (
    <div>
      <Form
        className={style.formContainer}
        onSubmit={handleSubmit(async (data: AccountData) => {
          newMnemonicConfig.setName(data.name);
          newMnemonicConfig.setPassword(data.password);
          newMnemonicConfig.setMode('generate');
        })}
      >
        <Input
          label={intl.formatMessage({
            id: 'register.name'
          })}
          styleInputGroup={{
            border: '1px solid rgba(8, 4, 28, 0.12)'
          }}
          type="text"
          name="name"
          ref={register({
            required: intl.formatMessage({
              id: 'register.name.error.required'
            })
          })}
          error={errors.name && errors.name.message}
        />
        {registerConfig.mode === 'create' && (
          <>
            <PasswordInput
              label={intl.formatMessage({
                id: 'register.create.input.password'
              })}
              styleInputGroup={{
                border: '1px solid rgba(8, 4, 28, 0.12)'
              }}
              name="password"
              ref={register({
                required: intl.formatMessage({
                  id: 'register.create.input.password.error.required'
                }),
                validate: (password: string): string | undefined => {
                  if (password.length < 8) {
                    return intl.formatMessage({
                      id: 'register.create.input.password.error.too-short'
                    });
                  }
                }
              })}
              error={errors.password && errors.password.message}
            />
            <PasswordInput
              label={intl.formatMessage({
                id: 'register.create.input.confirm-password'
              })}
              styleInputGroup={{
                border: '1px solid rgba(8, 4, 28, 0.12)'
              }}
              name="confirmPassword"
              ref={register({
                required: intl.formatMessage({
                  id: 'register.create.input.confirm-password.error.required'
                }),
                validate: (confirmPassword: string): string | undefined => {
                  if (confirmPassword !== getValues()['password']) {
                    return intl.formatMessage({
                      id: 'register.create.input.confirm-password.error.unmatched'
                    });
                  }
                }
              })}
              error={errors.confirmPassword && errors.confirmPassword.message}
            />
          </>
        )}
        <Button color="" type="submit" block className={style.nextBtn}>
          <FormattedMessage id="register.create.button.next" />
        </Button>
      </Form>
      <BackButton
        onClick={() => {
          registerConfig.clear();
        }}
      />
    </div>
  );
});
//seed creation
export const GenerateMnemonicModePage: FunctionComponent<{
  registerConfig: RegisterConfig;
  newMnemonicConfig: NewMnemonicConfig;
  bip44Option: BIP44Option;
}> = observer(({ registerConfig, newMnemonicConfig, bip44Option }) => {
  const intl = useIntl();

  const { register, handleSubmit, getValues, errors } = useForm<SeedData>({
    defaultValues: {
      // name: newMnemonicConfig.name,
      words: newMnemonicConfig.mnemonic
      // password: '',
      // confirmPassword: ''
    }
  });
  const [copySuccess, setCopySuccess] = useState('Copy to clipboard');

  const copyToClipboard = () => {
    if (newMnemonicConfig && newMnemonicConfig.mnemonic) {
      navigator.clipboard.writeText(newMnemonicConfig.mnemonic);
      setCopySuccess('Copied!');
    } else {
      console.error('newMnemonicConfig.mnemonic is not defined');
    }
  };

  return (
    <div>
      <Alert color="warning">
        <h3 style={{ color: 'white' }}>
          <FormattedMessage id="register.create.warning.keep-your-mnemonic.header" />
        </h3>
        <ul>
          <li>
            <FormattedMessage id="register.create.warning.keep-your-mnemonic.paragraph1" />
          </li>
          <li>
            <FormattedMessage id="register.create.warning.keep-your-mnemonic.paragraph2" />
          </li>
        </ul>
      </Alert>
      <div className={style.title}>
        {intl.formatMessage({
          id: 'register.create.title'
        })}
        <div style={{ float: 'right' }}>
          <ButtonGroup size="sm" style={{ marginBottom: '4px' }}>
            <Button
              type="button"
              color=""
              outline={newMnemonicConfig.numWords !== NumWords.WORDS12}
              style={{
                backgroundColor: newMnemonicConfig.numWords !== NumWords.WORDS12 ? 'white' : '#ab8aff',
                color: newMnemonicConfig.numWords !== NumWords.WORDS12 ? 'gray' : 'white'
              }}
              onClick={() => {
                newMnemonicConfig.setNumWords(NumWords.WORDS12);
              }}
            >
              <FormattedMessage id="register.create.toggle.word12" />
            </Button>
            <Button
              type="button"
              color=""
              style={{
                backgroundColor: newMnemonicConfig.numWords !== NumWords.WORDS24 ? 'white' : '#ab8aff',
                color: newMnemonicConfig.numWords !== NumWords.WORDS24 ? 'gray' : 'white'
              }}
              outline={newMnemonicConfig.numWords !== NumWords.WORDS24}
              onClick={() => {
                newMnemonicConfig.setNumWords(NumWords.WORDS24);
              }}
            >
              <FormattedMessage id="register.create.toggle.word24" />
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <Form
        className={style.formContainer}
        onSubmit={handleSubmit(async (data: SeedData) => {
          newMnemonicConfig.setMode('verify');
        })}
      >
        {/* <TextArea
          className={style.mnemonic}
          style={{
            border: '1px solid rgba(8, 4, 28, 0.12)',
            color: '#ab8aff'
          }}
          autoCapitalize="none"
          placeholder={intl.formatMessage({
            id: 'register.create.textarea.mnemonic.place-holder'
          })}
          name="words"
          rows={newMnemonicConfig.numWords === NumWords.WORDS24 ? 5 : 3}
          readOnly={true}
          value={newMnemonicConfig.mnemonic}
          ref={register({
            required: 'Mnemonic is required',
            validate: (value: string): string | undefined => {
              if (value.split(' ').length < 8) {
                return intl.formatMessage({
                  id: 'register.create.textarea.mnemonic.error.too-short'
                });
              }

              if (!bip39.validateMnemonic(value)) {
                return intl.formatMessage({
                  id: 'register.create.textarea.mnemonic.error.invalid'
                });
              }
            }
          })}
          error={errors.words && errors.words.message}
        /> */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <div
            className={style.mnemonic}
            style={{
              border: '1px solid rgba(8, 4, 28, 0.12)',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 3fr)',
              gap: '10px',
              borderRadius: '6px',
              // flexDirection: 'row',
              // flexWrap: 'wrap',
              justifyContent: 'center',
              padding: '20px',
              width: '100%'
            }}
          >
            {newMnemonicConfig.mnemonic.split(' ').map((word, index) => (
              <div
                key={index}
                style={{
                  // flexGrow: 1,
                  justifyContent: 'center',
                  // alignItems: 'center',
                  border: '1px solid rgba(8, 4, 28, 0.12)',
                  borderRadius: '13px',
                  color: '#ab8aff',
                  padding: '10px',
                  textAlign: 'center',
                  margin: '0px',
                  minWidth: '0'
                }}
              >
                {word}
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => copyToClipboard()}
            style={{
              background: 'none',
              border: 'none',
              marginTop: '10px',
              fontFamily: 'IBM Plex Sans',
              padding: '20px 0'
            }}
          >
            <img
              src={require('../../../public/assets/img/filled.svg')}
              alt="Copy to clipboard"
              width={16}
              height={16}
            />
            <span style={{ color: '#ab8aff', marginRight: '5px' }}>{copySuccess}</span>
          </button>
        </div>
        {errors.words && <div className="error-message">{errors.words.message}</div>}
        {/* <Input
          label={intl.formatMessage({
            id: 'register.name'
          })}
          styleInputGroup={{
            border: '1px solid rgba(8, 4, 28, 0.12)'
          }}
          type="text"
          name="name"
          ref={register({
            required: intl.formatMessage({
              id: 'register.name.error.required'
            })
          })}
          error={errors.name && errors.name.message}
        />
        {registerConfig.mode === 'create' ? (
          <React.Fragment>
            <PasswordInput
              label={intl.formatMessage({
                id: 'register.create.input.password'
              })}
              styleInputGroup={{
                border: '1px solid rgba(8, 4, 28, 0.12)'
              }}
              name="password"
              ref={register({
                required: intl.formatMessage({
                  id: 'register.create.input.password.error.required'
                }),
                validate: (password: string): string | undefined => {
                  if (password.length < 8) {
                    return intl.formatMessage({
                      id: 'register.create.input.password.error.too-short'
                    });
                  }
                }
              })}
              error={errors.password && errors.password.message}
            />
            <PasswordInput
              label={intl.formatMessage({
                id: 'register.create.input.confirm-password'
              })}
              styleInputGroup={{
                border: '1px solid rgba(8, 4, 28, 0.12)'
              }}
              name="confirmPassword"
              ref={register({
                required: intl.formatMessage({
                  id: 'register.create.input.confirm-password.error.required'
                }),
                validate: (confirmPassword: string): string | undefined => {
                  if (confirmPassword !== getValues()['password']) {
                    return intl.formatMessage({
                      id: 'register.create.input.confirm-password.error.unmatched'
                    });
                  }
                }
              })}
              error={errors.confirmPassword && errors.confirmPassword.message}
            />
          </React.Fragment>
        ) : null} */}
        <AdvancedBIP44Option bip44Option={bip44Option} />
        <Button color="" type="submit" block className={style.nextBtn}>
          <FormattedMessage id="register.create.button.next" />
        </Button>
      </Form>
      <BackButton
        onClick={() => {
          newMnemonicConfig.setMode('account');
        }}
      />
    </div>
  );
});

export const VerifyMnemonicModePage: FunctionComponent<{
  registerConfig: RegisterConfig;
  newMnemonicConfig: NewMnemonicConfig;
  bip44Option: BIP44Option;
}> = observer(({ registerConfig, newMnemonicConfig, bip44Option }) => {
  const wordsSlice = useMemo(() => {
    const words = newMnemonicConfig.mnemonic.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].trim();
    }
    return words;
  }, [newMnemonicConfig.mnemonic]);

  const [randomizedWords, setRandomizedWords] = useState<string[]>([]);
  const [suggestedWords, setSuggestedWords] = useState<string[]>([]);

  useEffect(() => {
    // Set randomized words.
    const words = newMnemonicConfig.mnemonic.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].trim();
    }
    words.sort((word1, word2) => {
      // Sort alpahbetically.
      return word1 > word2 ? 1 : -1;
    });
    setRandomizedWords(words);
    // Clear suggested words.
    setSuggestedWords([]);
  }, [newMnemonicConfig.mnemonic]);

  const { analyticsStore } = useStore();

  return (
    <div>
      <div style={{ minHeight: '153px' }}>
        <div className={style.buttons}>
          {suggestedWords.map((word, i) => {
            return (
              <Button
                key={word + i.toString()}
                onClick={() => {
                  const word = suggestedWords[i];
                  setSuggestedWords(suggestedWords.slice(0, i).concat(suggestedWords.slice(i + 1)));
                  randomizedWords.push(word);
                  setRandomizedWords(randomizedWords.slice());
                }}
              >
                {word}
              </Button>
            );
          })}
        </div>
      </div>
      <hr />
      <div style={{ minHeight: '153px' }}>
        <div className={style.buttons}>
          {randomizedWords.map((word, i) => {
            return (
              <Button
                key={word + i.toString()}
                onClick={() => {
                  const word = randomizedWords[i];
                  setRandomizedWords(randomizedWords.slice(0, i).concat(randomizedWords.slice(i + 1)));
                  suggestedWords.push(word);
                  setSuggestedWords(suggestedWords.slice());
                }}
              >
                {word}
              </Button>
            );
          })}
        </div>
      </div>
      <Button
        color="primary"
        type="submit"
        disabled={suggestedWords.join(' ') !== wordsSlice.join(' ')}
        block
        style={{
          marginTop: '30px'
        }}
        onClick={async (e) => {
          e.preventDefault();

          try {
            await registerConfig.createMnemonic(
              newMnemonicConfig.name,
              newMnemonicConfig.mnemonic,
              newMnemonicConfig.password,
              bip44Option.bip44HDPath
            );
            analyticsStore.setUserProperties({
              registerType: 'seed',
              accountType: 'mnemonic'
            });
          } catch (e) {
            alert(e.message ? e.message : e.toString());
            registerConfig.clear();
          }
        }}
        data-loading={registerConfig.isLoading}
      >
        <FormattedMessage id="register.verify.button.register" />
      </Button>
      <BackButton
        onClick={() => {
          newMnemonicConfig.setMode('generate');
        }}
      />
    </div>
  );
});
