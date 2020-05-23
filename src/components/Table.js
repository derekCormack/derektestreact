import React, { Component } from 'react';
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table';
import './Table.css';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'

// const Table = (props) => {
//   return (
//     <div>
//       <BootstrapTable data={props.data}>
//         <TableHeaderColumn isKey dataField='id'>
//           ID
//         </TableHeaderColumn>
//         <TableHeaderColumn dataField='name'>
//           Name
//         </TableHeaderColumn>
//         <TableHeaderColumn dataField='value'>
//           Value
//         </TableHeaderColumn>
//       </BootstrapTable>
//     </div>
//   );
// }


class Table extends Component {

  ///YOU CAN WRITE WHATEVER YOU WANT ABOVE RENDER METHOD..ABOVE

  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey dataField='id'>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='name'>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='email'>
            Email 
          </TableHeaderColumn>
          <TableHeaderColumn dataField="username">
            User Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='website'>
            Website
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
 
export default Table;