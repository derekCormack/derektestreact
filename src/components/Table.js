import React, { Component } from 'react';
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table';
import './Table.css';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'

const Table = (props) => {
  return (
    <div>
      <BootstrapTable data={props.data}>
        <TableHeaderColumn isKey dataField='rank'>
          Rank
        </TableHeaderColumn>
        <TableHeaderColumn dataField='name'>
          Name
        </TableHeaderColumn>
        <TableHeaderColumn dataField='logo_url'>
          Logo
        </TableHeaderColumn>
        <TableHeaderColumn dataField='price'>
          Price
        </TableHeaderColumn>
        <TableHeaderColumn dataField='high'>
          ATH
        </TableHeaderColumn>
        <TableHeaderColumn dataField='circulating_supply'>
          cirSupply
        </TableHeaderColumn>
        <TableHeaderColumn dataField='circulating_supply'>
          maxSupply
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
//           </TableHeaderColumn>
//         </BootstrapTable>
//       </div>
//     );
//   }
// }
 
export default Table;