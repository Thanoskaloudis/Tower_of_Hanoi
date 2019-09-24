import React from "react";

const discColours = [
    '#b3b3e6',
    '#ff9f80',
    '#99ff66',
    '#99ffff',
    '#ffff66',
    '#ffb366',
    '#ffb3ff',
    '#b3b3ff',
  ];

const Disc = ({size, topDisc, startDrag}) => {
    const discWidth = (size + 1.5) * 20;
    const discStyle = {
      width: discWidth + 'px',
      backgroundColor: discColours[size % 8],
    };
  
  return (
    <div
      className="disc"
      style={discStyle}
      draggable={topDisc}
      onDragStart={startDrag}
    >
      <span className="disc-label">{size}</span>
    </div>
  );
};

export default Disc;
