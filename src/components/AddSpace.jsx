import { useState } from "react"
import { Link } from "react-router-dom"

function AddSpace({ onClick }) {
  const [textchange, setTextChange] = useState("")

  const textFun = (e) => {
    setTextChange(e.target.value)
  }

  return (
    <>
      <div id='addSpace'>
        <input onChange={textFun} type='text' />
        <button onClick={onClick}>Add</button>
      </div>
      <Link to='/about' className="link-dec">
        <h3>About Page</h3>
      </Link>
    </>
  )
}

export default AddSpace
