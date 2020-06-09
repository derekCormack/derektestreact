import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './Table.css';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'

function imageFormatter(cell, row) {
  //depending on which URL passed, we will use class name...
  //graph: https://s2.coinmarketcap.com/generated/sparklines/web/7d/usd/1720.png
  //logo: https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg
  let classes = []
  if(cell.toString().includes("coinmarketcap")) {
    classes.push("graph-class");
  } else {
    classes.push("logo-class");
  }

  return <img className={ classes.join(" ") } src={ cell } />;
}

function valueColor(cell) {
  // cell = "0.05 %"
  // cell.indexOf(" ") = 4
  // cell.substring(4, 0) = "0.05"
  // Number("0.05") = 0.05
  if (Number(cell.substring(cell.indexOf(" "),0)) >= 0) {
    return <span className="priceDeltaPositive">{ cell }</span>
  } else {
    return <span className="priceDeltaNegative">{ cell }</span>
  }
}


const Table = (props) => {
  return (
    <div>
      <BootstrapTable data={props.data} key={props.data.Rank} striped hover version='4'>
        <TableHeaderColumn width="70px" dataAlign="center" isKey={true} dataField='Rank'>
          Rank
        </TableHeaderColumn>
        <TableHeaderColumn width="50px" dataField='Logo' dataFormat={ imageFormatter }>
        </TableHeaderColumn>
        <TableHeaderColumn width="70px" dataField='Id'>
          Id
        </TableHeaderColumn>
        <TableHeaderColumn width="90px" dataField='PriceDelta' dataFormat={ valueColor }>
        </TableHeaderColumn>
        <TableHeaderColumn width="120px"  dataField='Price'>
          Price
        </TableHeaderColumn>
        <TableHeaderColumn width="120px" dataField='ATH'>
          ATH
        </TableHeaderColumn>
        <TableHeaderColumn width="170px" dataField='TableGraph' dataFormat={ imageFormatter }>
          Graph
        </TableHeaderColumn>
        <TableHeaderColumn width="120px" dataField='CircSupply'>
          CircSupply
        </TableHeaderColumn>
        <TableHeaderColumn width="120px" dataField='MaxSupply'>
          MaxSupply
        </TableHeaderColumn>
      </BootstrapTable>
    </div>
  );
}


// class Table extends Component {

//   render() {
//     return (
//       <div>
//         <BootstrapTable data={this.props.data}>
//           <TableHeaderColumn isKey dataField='number'>
//                 <tr class="table-primary">test row one....................................</tr>
//                 <tr class="table-secondary">test row one....................................</tr>
//                 <tr class="table-success">test row one....................................</tr>
//                 <tr class="table-danger">test row one....................................</tr>
//                 <tr class="table-warning">test row one....................................</tr>
//                 <tr class="table-light">test row one....................................</tr>
//                 <tr class="table-info">test row one....................................</tr>
//                 <tr class="table-active">test row one....................................</tr>
//           <tr class="table-active">...</tr>
//          </TableHeaderColumn>
//         </BootstrapTable>
//       </div>
//     );
//   }
// }

export default Table;