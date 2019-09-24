import _ from 'lodash';
import React from 'react';
import Tower from './tower';

const towers = 3;

class Towers extends React.Component {
  constructor(props) {
    super(props);
    let first = _.range(1, this.props.discsNumber + 1);
    let discs = _.map(Array(towers), (val, i) =>
      i === 0 ? first : []
    );
    this.state = {discs,discsNumber:this.props.value};
  }


  startTopDisc(activeTower) {
    this.activeTower = activeTower;
  }

  dropDisc(destTower) {
    const sourceTower = this.activeTower;
    this.activeTower = null;
    if (sourceTower === destTower || sourceTower === null) return;

    this.setState((state) => {
      const disc = state.discs[sourceTower][0];
      if (state.discs[destTower][0] < disc) return state;

      let discs = [...state.discs];
      discs[sourceTower] = _.tail(discs[sourceTower]);
      discs[destTower] = [disc, ...state.discs[destTower]];
      return {discs};
    });
  }

  render() {
    return (
      <div>
        {this.state.discs.map((towerDiscs, i) =>
          <Tower
            key={i+1}
            towerDiscs={towerDiscs}
            startTopDisc={() => this.startTopDisc(i)}
            dropDisc={() => this.dropDisc(i)}
          />
        )}
      </div>
    );
  }
}

export default Towers;