import { CVMWallet } from '@owallet/types';

export const getCVMWalletFromWindow: () => Promise<
  CVMWallet | undefined
> = async () => {
  if (window.owallet) {
    return window.owallet;
  }

  if (document.readyState === 'complete') {
    return window.owallet;
  }

  return new Promise((resolve) => {
    const documentStateChange = (event: Event) => {
      if (
        event.target &&
        (event.target as Document).readyState === 'complete'
      ) {
        resolve(window.owallet);
        document.removeEventListener('readystatechange', documentStateChange);
      }
    };

    document.addEventListener('readystatechange', documentStateChange);
  });
};
