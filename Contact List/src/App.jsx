// style
import './App.scss'
//import react-router-dom
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//import componets
import Header from './components/Header/Header'
import ContactList from './pages/ContactList/ContactList'
import NewContant from './pages/NewContact/NewContact'
import UpdateContact from './pages/UpdateContact/UpdateContact'
import NotFound from './pages/NotFound/NotFound'

// hooks
import { useState } from 'react'

function App() {
  const [stor, setStor] = useState(
    [
      {
        id: "020852d9-8fc4-4a05-b542-4ff8d37d1ac5",
        name: "Test",
        phone: "3124124 123 123",
        email: "master@email.com",
        avatar: 'https://randomuser.me/api/portraits/women/94.jpg',
        gender: "Women",
        status: "Work",
        favorite: false
      }
    ]
  )

  const handleNewContact = (newContact) => {
    setStor(prevStor => [...prevStor, newContact])
    console.log(stor);
  }

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<ContactList stor={stor}/>}/>
        <Route path='/new-contact' element={<NewContant onNewContact={handleNewContact}/>} />
        <Route path='/update-contact' element={<UpdateContact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>

    </Router>
  )
}

export default App
