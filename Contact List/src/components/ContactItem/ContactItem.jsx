const ContactItem = ({ stor }) =>{
  return(
    <>
    <h1>ContactItem</h1>
    {stor.map((contact) => (
      <div key={contact.id}>
        <img src={contact.avatar} alt="avatar"/>
        <div>
          <h3>{contact.name}</h3>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
          <p>{contact.status}</p>
        </div>
      </div>
    ))}

    </>
  )
}

export default ContactItem