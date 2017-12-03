import React, { Component } from 'react';
import './Row.css';
import { isValidated } from '../../utils/utils';

class Row extends Component {

  constructor(props) {
    super(props);

    // local state of the component
    // inEdit (boolean) to identify which mode the component is currently in
    // so component can render the suitable template

    // name, email, phone is resemble the values of the contained entry
    // in root array . When we edit or display, we use local state. If the edit is saved,
    // we update root array with our new (name, email, phone) in local state,
    // otherwise we dismiss it.
    this.state = {
      inEdit: false,
      name: this.props.row.name,
      email: this.props.row.email,
      phone: this.props.row.phone
    };

    // binding the correct context for function
    this.toggleMode = this.toggleMode.bind(this);
    this.onChanges = this.onChanges.bind(this);
    this.save = this.save.bind(this);
  }

  // update local state when props get changed
  // for example when new entry is added
  componentWillReceiveProps(nextProps) {
    this.setState({
      inEdit: false,
      name: nextProps.row.name,
      email: nextProps.row.email,
      phone: nextProps.row.phone
    })
  }

  // function for switching between edit/display mode
  // re-assign value of entry in root array to our local state
  toggleMode() {
    this.setState({
      inEdit: !this.state.inEdit,
      name: this.props.row.name,
      email: this.props.row.email,
      phone: this.props.row.phone
    });
  }

  // function for updating state value of input field
  // when those fields' value change

  onChanges(event) {
    event.preventDefault();
    const value = event.target.value;

    // switch case to identify which input field was modified
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

  // function for saving changes made to current entry
  // to the root array (in ListContent)

  save() {
    const newRow = {
      name: this.state.name,
      email: this.state.email.replace(/ /g,''),
      phone: this.state.phone.replace(/ /g,'')
    };

    // check validation for current local state values (name, email, phone)
    // if validation is ok, we call save() method received from parent
    // component ListContent, otherwise we roll back the local state (with no changes applied)
    if ( isValidated(newRow) ) {
      this.props.save(newRow, this.props.id);
      this.toggleMode();
    }
    else {
      alert(' Name should contain only letters.\n Email should contains a domain name follow after "@".\n Phone should contains only less than 16 digits.\n All fields are required.');
    }
  }

  render() {

    // indentify which mode we are in
    // if we are in edit mode, we display form template
    // otherwise we display normal table row
    if (!this.state.inEdit) {
      return (
        <tr>
          <td> { this.props.row.name } </td>
          <td> { this.props.row.email } </td>
          <td> { this.props.row.phone } </td>
          <td>
            <button type='button' onClick={ ()=>{
              this.props.delete(this.props.id);
            } }>
              <span className='glyphicon glyphicon-trash'></span>
            </button>
            <button type='button' onClick={this.toggleMode}>
              <span className='glyphicon glyphicon-pencil'></span>
            </button>
          </td>
        </tr>
      )
    }
    else {
      return (
        <tr>
          <td className='editable' colSpan='4'>
          <form>
            <label htmlFor='full-name'></label>
            <input id='name' type='text' className='name'
                   value={this.state.name}
                   onChange={this.onChanges} required />

            <label htmlFor='email'></label>
            <input id='email' type='email' className='email'
                   value={this.state.email}
                   onChange={this.onChanges} required />

            <label htmlFor='phone'></label>
            <input id='phone' type='tel' className='phone'
                   value={this.state.phone} maxLength='15'
                   onChange={this.onChanges} required />

            <button id='save' type='button' onClick={this.save} > Save </button>

            <button id='cancel' type='button' onClick={this.toggleMode}> Cancel </button>

          </form>
          </td>
        </tr>
      )
    }

  }

}

export default Row;
