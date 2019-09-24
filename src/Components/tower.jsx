import React from 'react';
import Disc from './disc';


const Tower = ({towerDiscs, startTopDiscDrag, dropDisc}) => {
    return (
        <div
        className='tower'
        onDragOver={(e) => {e.preventDefault()}}
        onDrop={dropDisc}
      >
        <div className='tower-pillar'/>
        <div className='tower-base' />
        <div className='disc-group'>
          {towerDiscs.map((size, i) =>
            <Disc
              key={size.toString()}
              size={size}
              topDisc={i===0}
              startDrag={startTopDiscDrag}
            />
          )}
        </div>
      </div>
    );
}
 
export default Tower;