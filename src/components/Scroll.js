// eslint-disable-next-line no-unused-vars
import React from 'react';

const Scroll = (props) => {
  return (
    <div
      style={{overflow: 'scroll', border: '1px solid blue', height: '800px'}}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
