// style
import './App.scss'
//import react-router-dom
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//import componets
import Header from './components/Header/Header'
import ContactList from './components/ContactList/ContactList'
import NewContant from './components/NewContact/NewContact'
import UpdateContact from './components/UpdateContact/UpdateContact'
import NotFound from './components/NotFound/NotFound'

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<ContactList />}/>
        <Route path='/new-contact' element={<NewContant/>} />
        <Route path='/update-contact' element={<UpdateContact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>

    </Router>
  )
}

export default App
