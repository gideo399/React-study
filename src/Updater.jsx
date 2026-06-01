import React,{useState} from "react"

function Updater() {
  const [count, setCount] = useState(0)

  function Decrement() {
    setCount(count - 1)
  }
  function Increment() {
    setCount(c => c + 1)
     setCount(c => c + 1)
      setCount(c => c + 1)
  }

  function Reset() {
    setCount(0)
  }


  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={Decrement}>
        Decrement
      </button>
      <button onClick={Increment}>
        Increment
      </button>
      <button onClick={Reset}>
        Reset
      </button>
    </div>
  )
}

export default Updater