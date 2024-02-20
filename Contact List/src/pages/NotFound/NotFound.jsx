import { useState, useEffect } from "react"

const NotFound = () =>{
  const [count, setCount] = useState(0)
  // console.log('test');

  //1 
  // useEffect(() => {
  //   console.log('test');
  // })

  // 2
  // useEffect(() => {
  //   console.log('test');
  // },[])

  // 3
  // useEffect(() => {
  //   console.log('test');
  // },[count])

  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  

  // useEffect(() => {
  // fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  // },[count])

  // ///////////////////////////////////////////////////////
  const [timer, setTimer] = useState(0)

  // setInterval(()=>{
  //   console.log('test');
  //   setTimer(timer + 1)
  // }, 1000)

  useEffect(() => {
    const tim = setInterval(()=>{
      console.log('test');
      setTimer(timer + 1)
    }, 1000)
    return () => clearInterval(tim)
  })


  return(
    <div className="container">
      <h1>NotFound</h1>
      <p className="fs-3 fw-bold">You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click my +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        Click my -1
      </button>
      <br />
      <span>TIMER: {timer}</span>
    </div>
  )
}

export default NotFound