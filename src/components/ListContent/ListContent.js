import React, { Component } from 'react';
import { randomData } from '../../static/random-data';
import NewEntryForm from '../NewEntryForm/NewEntryForm';
import Row from '../Row/Row';
import './ListContent.css';
import { sortByName, sortByEmail, sortByPhone } from '../../utils/utils';

class ListContent extends Component {

  constructor(props) {

    super(props);
    this.state = {
      data: randomData,
      name: '',
      email: '',
      phone: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.sort = this.sort.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state);
    this.setState({
      data: [ {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone
      }, ...this.state.data ]
    });
  }

  saveChanges(row, key) {
    console.log(row);
    const data = this.state.data;
    data[key] = row;
    this.setState({
      data: data
    })
  }

  handleChange(event) {
    event.preventDefault();

    const value = event.target.value;

    switch (event.target.id) {
      case 'name':
        this.setState({
          name: value
        })
        break;
      case 'email':
        this.setState({
          email: value
        })
        break;
      case 'phone':
        this.setState({
          phone: value
        })
        break;
      default :
        console.log('Error: no such field included');
        break;
    }
  }

  deleteRow( key ) {
    const data = this.state.data;
    data.splice(key,1);
    this.setState({
      data: data
    })
  }

  sort(event) {
    event.preventDefault();
    switch (event.target.id) {
      case 'email-header':
        this.setState( this.state.data.sort(sortByEmail) ) ;
        break;
      case 'phone-header':
        this.setState( this.state.data.sort(sortByPhone) ) ;
        break;
      default:
        this.setState( this.state.data.sort(sortByName) ) ;
        break;
    }
  }

  render() {

    var rows = this.state.data.map( (row, i) => (

      <Row row={row} key={i} id={i}
           delete={this.deleteRow}
           save={this.saveChanges} />

    ) );

    return (
      <div className='list-content'>

        <h3> List of participants </h3>

        <NewEntryForm handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit} />

        <div className='table-list'>

          <table>
            <thead>
              <tr>
                <th id='name-header' onClick={this.sort} className='name'> Name </th>
                <th id='email-header' onClick={this.sort} className='email'> E-mail address </th>
                <th id='phone-header' onClick={this.sort}
                    colSpan='2'> Phone number </th>
              </tr>
            </thead>
            <tbody>
              { rows }
            </tbody>

          </table>

        </div>

      </div>
    )

  }

}

export default ListContent;
