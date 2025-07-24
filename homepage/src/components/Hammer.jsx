import React from 'react';

function Hammer({ show, x, y }) {
  if (!show) return null;

  return (
    <img
      src="https://cdn.pixabay.com/photo/2017/01/10/23/01/symbol-1970473_1280.png"
      alt="Hammer"
      style={{
        position: 'absolute',
        top: y,
        left: x,
        width: '65px',
        height: '65px',
        pointerEvents: 'none',
        transform: 'rotate(-45deg)',
        zIndex: 10,
      }}
    />
  );
}

export default Hammer;
