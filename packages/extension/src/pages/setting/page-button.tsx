import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import stylePageButton from './page-button.module.scss';

export const PageButton: FunctionComponent<
  {
    title: string;
    paragraph?: string;
    subParagraph?: string;
    icons?: React.ReactElement[];
    styleTitle?: React.CSSProperties;
    styleparagraph?: React.CSSProperties;
    customModal?: any;
  } & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { title, paragraph, subParagraph, icons, styleTitle, styleparagraph, customModal } = props;

  const attributes = { ...props };
  delete attributes.paragraph;
  delete attributes.subParagraph;
  delete attributes.icons;

  return (
    <div
      className={classnames(stylePageButton.container, {
        [stylePageButton.withSubParagraph]: subParagraph != null
      })}
      {...attributes}
    >
      <div className={stylePageButton.innerContainer}>
        <h1 style={styleTitle}>{title}</h1>
        {paragraph ? <p style={styleparagraph}>{paragraph}</p> : null}
        {subParagraph ? <p>{subParagraph}</p> : null}
      </div>
      <div style={{ flex: 1 }} />
      {icons
        ? icons.map((icon, i) => {
            return (
              <div className={stylePageButton.iconContainer} key={i.toString()}>
                <div style={{ flex: 1 }} />
                {icon}
                <div style={{ flex: 1 }} />
              </div>
            );
          })
        : null}
    </div>
  );
};

export const PageButtonAccount: FunctionComponent<
  {
    title: string;
    paragraph?: string;
    subParagraph?: string;
    icons?: React.ReactElement[];
    styleTitle?: React.CSSProperties;
    styleparagraph?: React.CSSProperties;
    ind?: number;
  } & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { title, paragraph, subParagraph, icons, styleTitle, styleparagraph, ind } = props;

  const attributes = { ...props };
  delete attributes.paragraph;
  delete attributes.subParagraph;
  delete attributes.icons;

  return (
    <div
      className={classnames(stylePageButton.containerAccount, {
        [stylePageButton.withSubParagraph]: subParagraph != null,
        [stylePageButton.bgAccount]: ind % 2 == 0
      })}
      {...attributes}
    >
      <div className={stylePageButton.innerContainer}>
        <h1 style={styleTitle}>{title}</h1>
        {paragraph ? <p style={styleparagraph}>{paragraph}</p> : null}
        {subParagraph ? <p>{subParagraph}</p> : null}
      </div>
      <div style={{ flex: 1 }} />
      {icons
        ? icons.map((icon, i) => {
            return (
              <div className={stylePageButton.iconContainer} key={i.toString()}>
                <div style={{ flex: 1 }} />
                {icon}
                <div style={{ flex: 1 }} />
              </div>
            );
          })
        : null}
    </div>
  );
};
