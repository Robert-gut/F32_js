import './App.scss'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import ContactList from './pages/ContactList/ContactList'
import NewContant from './pages/NewContact/NewContact'
import UpdateContact from './pages/UpdateContact/UpdateContact'
import NotFound from './pages/NotFound/NotFound'
import { Provider} from 'react-redux'
import store from './store'
import Context from './Context'

function App() {

  return (
    <Provider store={store}>
      <Context>
        <Router>
        <Header/>
          <Routes>
            <Route path='/' element={<ContactList/>}/>
            <Route path='/new-contact' element={<NewContant/>} />
            <Route path='/update-contact/:id' element={<UpdateContact/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </Router>
      </Context>
    </Provider>
  )
}
export default App
