import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Office, OfficeProps} from './office/Office';
import {AddEmployee} from './ui/AddEmployee';
import {AddEditorialDesk} from './ui/AddEditorialDesk';
import {Funds} from './ui/Funds';
import update from 'immutability-helper';

interface AppState extends OfficeProps {
  funds: number,
  date: Date
}

class App extends React.Component<{}, {}> {

  state: AppState;

  constructor (props) {
    super(props);
    this.state = {
      world: {
        objects: [],
        people: [],
        editorialDesks: []
      },
      funds: 10000,
      date: new Date(0)
    };
  }

  render () {
    return <div className="app">
      <div className="office">  
        <Office world = {this.state.world}/>
      </div>
      <div className="ui">
        <Funds funds= {this.state.funds}/>
        <AddEmployee addEmployee= {() => { this.addEmployee() } }/>
        <AddEditorialDesk addEditorialDesk= {() => { this.addEditorialDesk() } }/>
      </div>
    </div>;
  }

  addEmployee(){
    const employeeHireCost = 1000;
    const newEmployee = {
      name: "employee name",
      role: "journalist"
    };
    this.setState(update(this.state, {
        world: {people: {$push: [newEmployee]}},
        funds: {$set: this.state.funds - employeeHireCost } 
      } ));
  }

  addEditorialDesk(){
    const editorialDeskHireCost = 3000;
    const newDesk = {
      name: "editorial desk",
      role: "journalist"
    };
    this.setState(update(this.state, {
        world: {editorialDesks: {$push: [newDesk]}},
        funds: {$set: this.state.funds - editorialDeskHireCost } 
      } ));
  }
  
}

ReactDOM.render(
  <App/>,
  document.getElementById("react-dom")
);