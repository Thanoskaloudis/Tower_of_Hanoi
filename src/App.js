import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Towers from "./Components/towers";
import { ButtonToolbar, Button, Dropdown } from "react-bootstrap";
import Solution from "./Components/solution";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {value:5};
    this.dropdownData = this.dropdownData.bind(this);
  }

  dropdownData = (event) => {
    let level = event.target.id;
    this.setState({ value:level });
    console.log(level);
  }

  render() {
    return (
      <React.Fragment>
        <main className="maincontainer">
          <div className="headercontainer">
          <h1>Welcome to Tower of Hanoi</h1>
          <p>1. Only one disk can be moved at a time.<br></br>
2.Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.<br></br>
3.No larger disk may be placed on top of a smaller disk.
</p>
          </div>
          <Towers discsNumber={this.state.value} />
          <div id="buttons">
            <ButtonToolbar>
              <Button variant="success" >Solve</Button>
              <Dropdown>
                <Dropdown.Toggle variant="info" id="dropdown-basic">
                  Level
                </Dropdown.Toggle>
                <Dropdown.Menu onChange={this.dropdownData}> 
                  <Dropdown.Item id="1" >
                    1
                  </Dropdown.Item>
                  <Dropdown.Item  id="2" >
                    2
                  </Dropdown.Item>
                  <Dropdown.Item  id="3" >
                    3
                  </Dropdown.Item>
                  <Dropdown.Item  id="4" >
                    4
                  </Dropdown.Item>
                  <Dropdown.Item id="5" >
                    5
                  </Dropdown.Item>
                  <Dropdown.Item id="6" >
                    6
                  </Dropdown.Item>
                  <Dropdown.Item id="7" >
                    7
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button
                variant="danger"
                onClick={() => window.location.reload(false)}
              >
                Restart
              </Button>
            </ButtonToolbar>
          </div>
          <Solution/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
