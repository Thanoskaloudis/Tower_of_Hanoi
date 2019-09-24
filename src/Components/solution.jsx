import React, { Component } from "react";

class Sulution extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moves: [{disc:1,from:'Source',to:'Destination'}]
    };
    this.hadleSolution = this.hadleSolution.bind(this);
  }

  hadleSolution = (discs, source, middle, destination) => {
    if (discs === 1) {
      this.setState({ disc: 1, from: source, to: destination });
    } else {
      this.hadleSolution(discs - 1, source, destination, middle);

      this.setState({ disc: discs, from: source, to: destination });

      this.hadleSolution(discs - 1, middle, source, destination);
    }
  };

  render() {
    return (
    <div>
        {
          /* implementing the animations */
          }
    </div>
    );
  }
}

export default Sulution;
