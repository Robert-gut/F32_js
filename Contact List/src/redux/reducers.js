import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT, SEARCH_CONTACT} from './type'

const intialState = {
  contacts: [
    {
      id: "020852d9-8fc4-4a05-b542-4ff8d37d1ac5",
      name: "Test",
      phone: "3124124 123 123",
      email: "master@email.com",
      avatar: '95',
      gender: "women",
      status: "Work",
      favorite: false
    },
    {
      id: "020852d9-8fc4-4a05-b542-4ff8d37d1ab5",
      name: "Test2",
      phone: "3124124 123 123",
      email: "master@email.com",
      avatar: '93',
      gender: "women",
      status: "Work",
      favorite: false
    }
  ],
  searchTerm: '',
}

const reducer = (state = intialState, action) => {
  switch (action.type){
    case ADD_CONTACT:
      return{
        ...state,
        contacts: [...state.contacts, action.payload]
      }
    case DELETE_CONTACT:
      return{
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }
    case EDIT_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact => {
          if (contact.id === action.payload.id) {
            return {
              ...action.payload.updatedContact
            }
          }
          return contact
        })
      }
    case SEARCH_CONTACT:
      return{
        ...state,
        searchTerm: action.payload
      }
    default:
      return state
  }
}

export default reducer