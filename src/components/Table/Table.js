import React, { Component } from 'react';
import './Table.css';
import Row from '../Row/Row';

class Table extends Component {

  render() {

    return (

      <div className='table-list'>

        <table>
          <thead>
            <tr>
              <th id='name-header' onClick={this.props.sort} className='name'> Name </th>
              <th id='email-header' onClick={this.props.sort} className='email'> E-mail address </th>
              <th id='phone-header' onClick={this.props.sort}
                  colSpan='2'> Phone number </th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.rows.map( (row, i)=>
                  <Row save={this.props.save} delete={this.props.delete}
                       row={row} key={i} id={i} />
              )
            }
          </tbody>

        </table>

      </div>

    )

  }

}

export default Table;
