import React from 'react';
import loader from './load.gif';

const Load = () => {
  return (
    <>
      <img
        src={loader}
        alt='Loading'
        style={{
          position: 'absolute',
          right: '50%',
          bottom: '60%',
          transform: 'translate(50%,60%)',
        }}
      />
    </>
  );
};

export default Load;
