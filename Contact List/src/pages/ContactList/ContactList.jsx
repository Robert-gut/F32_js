import './ContactList.scss'

//import components
import Sidevar from '../../components/Sidebar/Sidebar'
import ContactItem  from '../../components/ContactItem/ContactItem'
import NotFound from '../NotFound/NotFound'


const ContactList = ({ stor, onDeleteContact }) =>{
  return(
    <main className='container rounded'>
      <div className="row">
        <div className="col-3">
          <Sidevar stor={stor}/>
        </div>
        <div className="col-9">
          <ContactItem stor={stor} onDeleteContact={onDeleteContact}/>
        </div>
      </div>
    </main>
  )
}

export default ContactList