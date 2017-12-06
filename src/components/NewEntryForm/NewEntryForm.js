import React from 'react';
import './NewEntryForm.css';

// using functional stateless component

const NewEntryForm = ( { handleSubmit, handleChange } ) => (

      <div className='new-entry-form'>
        <form onSubmit={ handleSubmit } action=''>
          <label htmlFor='name'></label>
          <input id='name' type='text' className='name'
                 placeholder='Full name' required
                 onChange={ handleChange } />

          <label htmlFor='email'></label>
          <input id='email' type='email' className='email'
                 placeholder='E-mail address' required
                 onChange={ handleChange } />

          <label htmlFor='phone'></label>
          <input id='phone' type='tel' className='phone'
                 placeholder='Phone number' required maxLength='15'
                 onChange={ handleChange } />

          <button type='submit'> Add new </button>
        </form>
      </div>

)


export default NewEntryForm;
