import React, { Component } from 'react'; //import React Component
import { render } from 'react-dom';

const EXAMPLE_SENATORS = [  
  { id: 'C000127',  name: 'Maria Cantwell', state: 'WA',  party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

/* Your code goes here */

// #1
export class App extends Component {

  render() {

    // #7
    let appSenators = this.props.senators;

    // #3 and #7
    let newDiv = (
      <div className="container">
      
        <h1>US Senators 2019</h1>

        <SenatorTable senators={appSenators}/>

      </div>);

    return newDiv;

  }
}

// #3
export class SenatorTable extends Component {

  render() {

    // #6 and #7
    let senatorRows = this.props.senators.map((senatorObject) => { //EXAMPLE_SENATORS.map((senatorObject) => {

      return <SenatorRow senator={senatorObject} key={senatorObject.id} />
    
    });

    // #4
    let newTable = (
      
      <table className="table table-bordered">
      
        
        <TableHeader cols={['Name', 'State', 'Phone', 'Twitter']}/>

        <tbody>
        
          {senatorRows}
        
        </tbody>

      </table>

    );
    return newTable;

  }

}

// #4 
export class TableHeader extends Component {

  render() {

    let colNames = this.props.cols.map((colName) => {
      let th = <th key={colName}>{colName}</th>;
      return th;
    });

    let tableHeader = (

      <thead>
      
        <tr>
        
          {colNames}
        
        </tr>
      
      </thead>

    );

    return tableHeader;

  }

}


// #5
export class SenatorRow extends Component {

  render() {

    let senatorObject = this.props.senator;
    let partyState = senatorObject.party.slice(0, 1) + " - " + senatorObject.state;
    let phoneHref = "tel:" + senatorObject.phone;
    let twitterHref = "https://twitter.com/" + senatorObject.twitter;

    let tableRow = (

      <tr>
      
        <td>{senatorObject.name}</td>
        <td>{partyState}</td>
        <td>
        
          <a href={phoneHref}>{senatorObject.phone}</a>
        
        </td>
        
        <td>
        
          <a href={twitterHref}>@{senatorObject.twitter}</a>

        </td>
      
      </tr>

    )

    return tableRow;

  }

}
