import { useState } from "react"
import { Link } from "react-router-dom"

function AddSpace() {
  const [textchange, setTextChange] = useState("")
  let [addition, setAddition] = useState("")

  const textFun = (e) => {
    setTextChange(e.target.value)
  }

  const btnfunction = () => {
    setAddition(textchange)
  }

  return (
    <>
      <div id='addSpace'>
        <input onChange={textFun} type='text' />
        <button onClick={btnfunction}>Add</button>
      </div>
      <div>
        <h3>Whatever: {addition}</h3>
      </div>

      <Link to='/about' className="link-dec">
        <h3>About Page</h3>
      </Link>
    </>
  )
}

export default AddSpace
