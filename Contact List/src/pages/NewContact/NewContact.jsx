import './NewContact.scss'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { validationSchema } from '../../assets/validation/Validation'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addContact } from '../../redux/actions'

const NewContact = () =>{
  const navigate = useNavigate()
  const dispatch = useDispatch()

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


  const handleSubmit = (values) => { 
    dispatch(addContact(values))
    navigate('/')
  }

  return(
    <div className="container">
      <div className="rounded AddPage shadow-lg">
        <Formik initialValues={initialValues} validationSchema={validationSchema}  onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <h1 className='text-center'> Add new contact</h1>
              <hr />
              <div className='m-4'>
                <label htmlFor='name'>Name</label>
                <Field className='form-control fs-5' type='text' name='name' id='name'/>
                <ErrorMessage name='name' component='p' className='text-danger position-absolute' />
              </div>
              <div className='m-4'>
                <label htmlFor='phone'>Phone</label>
                <Field className='form-control fs-5' type='text' name='phone' id='phone'/>
                <ErrorMessage name='phone' component='p' className='text-danger position-absolute'/>
              </div>
              <div className='m-4'>
                <label htmlFor='email'>Email</label>
                <Field className='form-control fs-5' type='email' name='email' id='email'/>
                <ErrorMessage name='email' component='p' className='text-danger position-absolute'/>
              </div>
              <div className='m-4'>
                <label htmlFor='avatar'>Avatar</label>
                <Field className='form-control fs-5' type='number' name='avatar' id='avatar' min={0} max={99}/>
                <ErrorMessage name='avatar' component='p' className='text-danger position-absolute'/>
              </div>
              <div className='m-4'>
                <label htmlFor='gender'>Gender</label>
                <Field className='form-control fs-5' as='select' name='gender' placeholder='Choose gender'>
                  <option value=''>Choose gender</option>
                  <option value='men'>Men</option>
                  <option value='women'>Women</option>
                </Field>
                <ErrorMessage name='gender' component='p' className='text-danger position-absolute'/>
              </div>

              <div className='m-4'>
                <label htmlFor='status'>Status</label>
                <Field className='form-control fs-5' as='select' name='status'>
                  <option value=''>Choose status</option>
                  <option value='Work'>Work</option>
                  <option value='Family'>Family</option>
                  <option value='Private'>Private</option>
                  <option value='Friends'>Friends</option>
                </Field>
                <ErrorMessage name='status' component='p' className='text-danger position-absolute'/>
              </div>
              <div className='m-4'>
                <label htmlFor='favorite' className='form-check-label fs-5'>Favorit</label>
                <Field className='form-check-input m-1 fs-4' type='checkbox' name='favorite' id='favorite'/>
                <ErrorMessage name='favorite' component='p' className='text-danger position-absolute'/>
              </div>
              <div className="m-4">
              <button type='submit' className='btn btn-primary btn-lg form-control' disabled={isSubmitting}>Add</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default NewContact