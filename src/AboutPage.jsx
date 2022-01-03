import { Link } from "react-router-dom"

function AboutPage() {
  return (
    <div className="container">
      <h1>My origian todo application</h1>
      <h2>I am trying to practice my react knowledge by building this app</h2>
      <hr />
      <h4>Version: 0.1</h4>

      <Link to='/' className="link-dec">
        <h3>Back</h3>
      </Link>
    </div>
  )
}

export default AboutPage
