import { useState } from "react"

const NotFound = () =>{
  const [count, setCount] = useState(0)

  return(
    <div>
      <h1>NotFound</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click my
      </button>
      <button onClick={() => setCount(count - 1)}>
        Click my2
      </button>

    </div>
  )
}

export default NotFound