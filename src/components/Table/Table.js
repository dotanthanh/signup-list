import React from 'react';
import './Table.css';
import Row from '../Row/Row';

// use functional stateless component

const Table = ( { sort, save, rows, deleteRow } ) => (

      <div className='table-list'>

        <table>
          <thead>
            <tr>
              <th id='name-header' onClick={ sort } className='name'> Name </th>
              <th id='email-header' onClick={ sort } className='email'> E-mail address </th>
              <th id='phone-header' onClick={ sort }
                  colSpan='2'> Phone number </th>
            </tr>
          </thead>
          <tbody>
            {
              rows.map( (row, i)=>
                  <Row save={ save } deleteRow={ deleteRow }
                       row={ row } key={ i } id={ i } />
              )
            }
          </tbody>

        </table>

      </div>

)


export default Table;
