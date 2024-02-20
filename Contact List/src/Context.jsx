import { createContext } from "react";

export const TestContext = createContext()

const Context = (props) => {
  const value = {
    name: 'Rob',
  }


  return (
    <TestContext.Provider value={value}>
      {props.children}
    </TestContext.Provider>
  )
}

export default Context