import * as React from "react";
import * as ReactDOM from "react-dom";
import {Office, OfficeProps} from './office/office';

interface AppState extends OfficeProps {
}

class App extends React.Component<{}, {}> {

  state: AppState;

  constructor (props) {
    super(props);
    this.state = {
      world: {
        objects: []
      }
    };
  }
  render () {
    return <div className="app">
      <div className="office">  
        <Office world = {this.state.world}/>
      </div>
    </div>;
  }
  
}

ReactDOM.render(
  <App/>,
  document.getElementById("react-dom")
);