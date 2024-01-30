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
    favorite: false
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    phone: Yup.string().required('Phone is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    avatar: Yup.string().url('Invalid URL').required('Avatar is required'),
    gender: Yup.string().oneOf(['Men', 'Women'], 'Invalid gender').required('Gender is required'),
    status: Yup.string().oneOf(['Work', 'Family', 'Private', 'Friends'], 'Invalid status').required('Status is required'),
    favorite: Yup.boolean()
  })

  const handleSubmit = (values, {setSubmitting} ) => {
    console.log(values);
    setSubmitting(true)
  }

  return(
    <div className="container">
      <div className="modal-content rounded AddPage">
        <div className="modal-header">
          <h1 className='text-center text-danger'> Add new contact</h1>
        </div>
        <Formik initialValues={initialValues} validationSchema={validationSchema}  onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label htmlFor='name'>Name</label>
                <Field type='text' name='name' id='name'/>
                <ErrorMessage name='name' component='p' className='text-danger' />
              </div>
              <div>
                <label htmlFor='phone'>Phone</label>
                <Field type='text' name='phone' id='phone'/>
                <ErrorMessage name='phone' component='p' className='text-danger'/>
              </div>
              <div>
                <label htmlFor='email'>Email</label>
                <Field type='email' name='email' id='email'/>
                <ErrorMessage name='email' component='p' className='text-danger'/>
              </div>
              <div>
                <label htmlFor='avatar'>Avatar</label>
                <Field type='text' name='avatar' id='avatar'/>
                <ErrorMessage name='avatar' component='p' className='text-danger'/>
              </div>
              <div>
                <label htmlFor='gender'>Gender</label>
                <Field as='select' name='gender' placeholder='Choose gender'>

                  <option value='Men'>Men</option>
                  <option value='Women'>Women</option>
                </Field>
                <ErrorMessage name='avatar' component='p' className='text-danger'/>
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
                <ErrorMessage name='avatar' component='p' className='text-danger'/>
              </div>
              <div>
                <label htmlFor='favorite'>Favorit</label>
                <Field type='checkbox' name='favorite' id='favorite'/>
                <ErrorMessage name='favorite' component='p' className='text-danger'/>
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