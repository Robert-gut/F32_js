import './ContactList.scss'

//import components
import Sidevar from '../../components/Sidebar/Sidebar'
import ContactItem  from '../../components/ContactItem/ContactItem'


const ContactList = ({ stor }) =>{
  return(
    <main className='container rounded'>
      <div className="row">
        <div className="col-3">
          <Sidevar/>
        </div>
        <div className="col-9">
          <ContactItem stor={stor}/>
        </div>
      </div>
    </main>
  )
}

export default ContactList