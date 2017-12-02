import React, { Component } from 'react';

class NewEntryForm extends Component {

  render() {

    return (
      <div className='new-entry-form'>
        <form onSubmit={ this.props.handleSubmit } action=''>
          <label htmlFor='name'></label>
          <input id='name' type='text'
                 placeholder='Full name'
                 onChange={this.props.handleChange} />

          <label htmlFor='email'></label>
          <input id='email' type='text'
                 placeholder='E-mail address'
                 onChange={this.props.handleChange} />

          <label htmlFor='phone'></label>
          <input id='phone' type='text'
                 placeholder='Phone number'
                 onChange={this.props.handleChange} />

          <button type='submit' onClick={this.props.handleSubmit} > Add new </button>
        </form>
      </div>
    )

  }

}

export default NewEntryForm;
