import React, { Component } from 'react';

class Row extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inEdit: 'false',
      name: this.props.row.name,
      email: this.props.row.email,
      phone: this.props.row.phone
    };

    this.toggleMode = this.toggleMode.bind(this);
    this.onChanges = this.onChanges.bind(this);
  }

  toggleMode() {
    this.setState({
      inEdit: !this.state.inEdit
    });
  }

  onChanges(event) {
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

  render() {

    if (this.state.inEdit) {
      return (
        <tr >
          <td> { this.props.row.name } </td>
          <td> { this.props.row.email } </td>
          <td> { this.props.row.phone } </td>
          <td>
            <button type='button' onClick={ ()=>{
              this.props.delete(this.props.id);
            } }>
              <span>Delete</span>
            </button>
            <button type='button' onClick={this.toggleMode}>
              <span>Edit</span>
            </button>
          </td>
        </tr>
      )
    }
    else {
      return (
        <tr>
          <td colSpan='4'>
          <form>
            <label htmlFor='full-name'></label>
            <input id='name' type='text'
                   value={this.state.name}
                   onChange={this.onChanges} />

            <label htmlFor='email'></label>
            <input id='email' type='text'
                   value={this.state.email}
                   onChange={this.onChanges} />

            <label htmlFor='phone'></label>
            <input id='phone' type='text'
                   value={this.state.phone}
                   onChange={this.onChanges} />

            <button type='button' onClick={ ()=>{
                this.props.save({
                  name: this.state.name,
                  email: this.state.email,
                  phone: this.state.phone
                }, this.props.id);
                this.toggleMode();
            } } > Save </button>

            <button type='button' onClick={this.toggleMode}> Cancel </button>

          </form>
          </td>
        </tr>
      )
    }

  }

}

export default Row;
