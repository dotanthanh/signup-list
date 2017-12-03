import React, { Component } from 'react';
import './NewEntryForm.css';

class NewEntryForm extends Component {

  render() {

    // render the template with properties/functions received from
    // parent component ListContent

    return (
      <div className='new-entry-form'>
        <form onSubmit={ this.props.handleSubmit } action=''>
          <label htmlFor='name'></label>
          <input id='name' type='text' className='name'
                 placeholder='Full name' required
                 onChange={this.props.handleChange} />

          <label htmlFor='email'></label>
          <input id='email' type='email' className='email'
                 placeholder='E-mail address' required
                 onChange={this.props.handleChange} />

          <label htmlFor='phone'></label>
          <input id='phone' type='tel' className='phone'
                 placeholder='Phone number' required maxLength='15'
                 onChange={this.props.handleChange} />

          <button type='submit'> Add new </button>
        </form>
      </div>
    )

  }

}

export default NewEntryForm;
