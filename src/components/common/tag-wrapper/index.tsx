import React from 'react';
import './styles.scss';
import { ITagWrapper } from './interface';

const TagWrapper = (props: ITagWrapper) => {
  const { children } = props;

  return (
    <div id="adarsh-tag-wrapper">
      <div className="code">&nbsp;&nbsp;&nbsp;&nbsp;&lt;html&gt;</div>
      <div className="code">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;
      </div>
      <div className="container">{children}</div>
      <div className="code">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;body/&gt;
      </div>
      <div className="code">&nbsp;&nbsp;&nbsp;&nbsp;&lt;html/&gt;</div>
    </div>
  );
};

export default TagWrapper;
