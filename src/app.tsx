import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Office, OfficeProps} from './office/Office';
import {AddEmployee} from './ui/AddEmployee';
import {AddEditorialDesk} from './ui/AddEditorialDesk';
import {Funds} from './ui/Funds';
import {DateTime} from './ui/DateTime';
import update from 'immutability-helper';
import './styles/app.scss';

interface AppState extends OfficeProps {
  funds: number,
  timeElapsed: number,
  timeSpeed: number,
  revenue: number,
  costs: number
}

class App extends React.Component<{}, {}> {

  state: AppState;
  interval: number;

  constructor (props) {
    super(props);
    this.state = {
      world: {
        people: [],
        editorialDesks: []
      },
      funds: 20000,
      costs: 11,
      revenue: 0,
      timeElapsed: 473387585,
      timeSpeed:    10000000
    };
  }

  render () {
    return <div className="app">
      <div className="office">  
        <Office world = {this.state.world}/>
      </div>
      <div className="ui">
        <Funds funds= {this.state.funds} costs= {this.state.costs} revenue= {this.state.revenue}/>
        <DateTime timeElapsed= {this.state.timeElapsed}/>
        <div>
          <AddEmployee addEmployee= {() => { this.addEmployee() } }/>
          <AddEditorialDesk addEditorialDesk= {() => { this.addEditorialDesk() } }/>
        </div>
      </div>
    </div>;
  }

  tick () {
    const numEmployees = this.state.world.people.length;
    const numDesks = this.state.world.editorialDesks.length;
    
    const newRevenue = numEmployees * numDesks * 5;
    const newCosts = 11 + (numEmployees * 8);

    this.setState(update(this.state, {
      timeElapsed: {$set: this.state.timeElapsed + this.state.timeSpeed},
      revenue: {$set: newRevenue},
      costs: {$set: newCosts},
      funds: {$set: this.state.funds + newRevenue - newCosts}
    }));
  }

  componentDidMount () {
    this.interval = setInterval(this.tick.bind(this), 200);
  }

  componentWillUnmount () {
    clearInterval(this.interval);
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