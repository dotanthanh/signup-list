import React, { Component } from 'react';
import { randomData } from '../../static/random-data';
import NewEntryForm from '../NewEntryForm/NewEntryForm';
import './ListContent.css';
import { sortByCategory, isValidated } from '../../utils/utils';
import Table from '../Table/Table';

class ListContent extends Component {

  constructor(props) {

    super(props);

    // state contain data to display and
    // values of input fields for new entry

    this.state = {
      data: randomData,
      name: '',
      email: '',
      phone: ''
    };

    // binding context for functions, these functions are likely to be passed
    // to children component

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.sort = this.sort.bind(this);
  }

  // function for handle submission when new entry is added

  handleSubmit(event){
    event.preventDefault();
    const newRow = {
      name: this.state.name,
      email: this.state.email.replace(' ',''),
      phone: this.state.phone.replace(' ','')
    } ;

    // check validation for the entry to get submitted
    if ( isValidated(newRow) ) {

      // concatenate the current array of entries with the new entry
      this.setState({
        data: [ newRow, ...this.state.data]
      });
      event.target.reset();
    }

    // error display when validation is not met
    else {
      alert(' Name should contain only letters. \n Email should contains a domain name follow after "@" \n Phone should contains only less than 16 digits.\n All fields are required.');
    }
  }

  // function for saving changes made to an entry to the array
  // of entries stored in state.data

  saveChanges(row, key) {
    const data = this.state.data;
    data[key] = row;
    this.setState({
      data: data
    });
  }

  // function for updating state value of input field
  // when those fields' value change

  handleChange(event) {
    event.preventDefault();

    const value = event.target.value;

    // switch case to identify which input field was modified
    // and update the state correspondingly
    switch (event.target.id) {
      case 'name':
        this.setState({
          name: value
        })
        break;
      case 'email':
        this.setState({
          email: value.replace(/ /g,'')
        })
        break;
      case 'phone':
        this.setState({
          phone: value.replace(/ /g,'')
        })
        break;
      default :
        console.log('Error: no such field included');
        break;
    }
  }

  // function for deleting a row, take argument of key/id/position
  // of the entry in current array

  deleteRow( key ) {

    // copy the current array of entries and remove the entry with provided key
    const data = this.state.data;
    data.splice(key,1);

    // set the array stored in state to the new array (with entry deleted)
    this.setState({
      data: data
    })
  }


  // function to sort the current array of entries based on
  // selected headers ( name/email/phone )

  sort(event) {
    event.preventDefault();

    // switch case to identify which header was selected to be
    // the standard of sorting
    switch (event.target.id) {
      case 'email-header':
        this.setState( this.state.data.sort( sortByCategory('email') ) ) ;
        break;
      case 'phone-header':
        this.setState( this.state.data.sort( sortByCategory('phone') ) ) ;
        break;
      default:
        this.setState( this.state.data.sort( sortByCategory('name') ) ) ;
        break;
    }
  }

  // render the template and pass the properties to children components
  render() {

    return (
      <div className='list-content'>

        <h3> List of participants </h3>

        <NewEntryForm handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit} />

        <Table rows={this.state.data} sort={this.sort}
               delete={this.deleteRow}
               save={this.saveChanges} />

      </div>
    )

  }

}

export default ListContent;
