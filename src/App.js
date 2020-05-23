import React, { Component, useEffect } from 'react';
import './App.css';
import Table from './components/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  
  //Steps:
  //call fetch() with endpoint
  //get data and pass it to data variable
  //adjust Table accordingly

  //Using ComponentDidMount React hook lifecycle method to get data from API...

  componentDidMount() {
    //fetch method returns a promise!!! to fullfill that promise, we will use .then()
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(result => {
        //We get result when promise is fullfilled
          this.setState({
            users: result
          });
          console.log("is data there? ", result);
        },
        (error) => {
          //We get error when promise is rejected
          console.log("We got error! ", error);
        }
      )
  }
  
  render() {
    return (
      <div className="App">
        <p className="Table-header">Basic Table</p>
        <Button>This is bootstrap button</Button>
        {/* this Table below is a child component */}
        <Table data={this.state.users} />
      </div>
    );
  }
}

export default App;