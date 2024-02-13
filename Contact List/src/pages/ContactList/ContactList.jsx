import './ContactList.scss'
import Sidevar from '../../components/Sidebar/Sidebar'
import ContactItem  from '../../components/ContactItem/ContactItem'

const ContactList = () =>{
  return(
    <main className='container rounded'>
      <div className="row">
        <div className="col-3">
          <Sidevar/>
        </div>
        <div className="col-9">
          <ContactItem/>
        </div>
      </div>
    </main>
  )
}
export default ContactList