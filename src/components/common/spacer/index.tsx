import React from 'react';

interface SpacerProps {
  height: number;
}

const Spacer = (props: SpacerProps) => {
  const { height } = props;
  return (
    <div
      style={{
        height: `${height}px`,
      }}
    />
  );
};

export default Spacer;
