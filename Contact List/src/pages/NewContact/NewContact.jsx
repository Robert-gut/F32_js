//css
import './NewContact.scss'

//valid
import * as Yup from 'yup'
import {Formik, Form, Field, ErrorMessage} from 'formik'

import { v4 as uuidv4 } from 'uuid';

const NewContact = () =>{

  const initialValues = {
    id: uuidv4(),
    name: '',
    phone: '',
    email: '',
    avatar: '',
    gender: '',
    status: '',
    favorite: ''
  }

  const handleSubmit = (values, {setSubmitting} ) => {
    console.log(values);
    setSubmitting(true)
  }

  return(
    <div className="container">
      <div className="modal-content rounded AddPage">
        <div className="modal-header">
          <h1 className='text-center'> Add new contact</h1>
        </div>
        <Formik initialValues={initialValues}  onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label htmlFor='name'>Name</label>
                <Field type='text' name='name' id='name'/>
                <ErrorMessage name='name'/>
              </div>
              <div>
                <label htmlFor='phone'>Phone</label>
                <Field type='text' name='phone' id='phone'/>
                <ErrorMessage name='phone'/>
              </div>
              <div>
                <label htmlFor='email'>Email</label>
                <Field type='email' name='email' id='email'/>
                <ErrorMessage name='email'/>
              </div>
              <div>
                <label htmlFor='avatar'>Avatar</label>
                <Field type='text' name='avatar' id='avatar'/>
                <ErrorMessage name='avatar'/>
              </div>
              <div>
                <label htmlFor='gender'>Gender</label>
                <Field as='select' name='gender'>
                  <option value=''>Choose gender</option>
                  <option value='Men'>Men</option>
                  <option value='Women'>Women</option>
                </Field>
                <ErrorMessage name='avatar'/>
              </div>
              <div>
                <label htmlFor='status'>Status</label>
                <Field as='select' name='status'>
                  <option value=''>Choose status</option>
                  <option value='Work'>Work</option>
                  <option value='Family'>Family</option>
                  <option value='Private'>Private</option>
                  <option value='Friends'>Friends</option>
                </Field>
                <ErrorMessage name='avatar'/>
              </div>
              <div>
                <label htmlFor='favorit'>Favorit</label>
                <Field type='checkbox' name='favorit' id='favorit'/>
                <ErrorMessage name='favorit'/>
              </div>
              <button type='submit' className='btn btn-primary btn-lg' disabled={isSubmitting}>Add</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default NewContact