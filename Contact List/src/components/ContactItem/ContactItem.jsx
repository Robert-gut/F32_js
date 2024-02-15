import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { deleteContact } from "../../redux/actions"

const ContactItem = () =>{
  const contacts = useSelector(state => state.contacts)
  const searchTerm = useSelector(state => state.searchTerm)
  const dispatch = useDispatch()

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id))
  }

  const filteredContacts = 
  searchTerm 
  ? contacts.filter(contact => contact.name.toLowerCase().includes(searchTerm))
  : contacts

  return(
    <>
    <div className="container-fluid">
      <div className="row border-bottom">
        <div className="col-4 ">
          <h4 className="text-primary m-4">Name</h4>
        </div>
        <div className="col-4">
          <h4 className="text-primary m-4">Phone</h4>
        </div>
        <div className="col-4">
          <h4 className="text-primary m-4">Email</h4>
        </div>
      </div>
    </div>
    {filteredContacts.map(contact => (
      <div key={contact.id} className="row p-4">
        <div className="col-2">
        <img className="rounded-circle" src={`https://randomuser.me/api/portraits/${contact.gender}/${contact.avatar}.jpg`} alt="avatar"/>
        </div>
        <div className="col-10 row">
          <div className="col-3">
            <h3>{contact.name}</h3>
            <p>{contact.status}</p> 
          </div>
          <div className="col-3">
            <p>{contact.phone}</p>
          </div>
          <div className="col-3">
            <p>{contact.email}</p>
          </div>
          <div className="col-3">
            <Link to={`/update-contact/${contact.id}`}><button>edit</button></Link>
            <button onClick={() => handleDeleteContact(contact.id)}>delete</button>
          </div>
        </div>
      </div>
    ))}

    </>
  )
}

export default ContactItem