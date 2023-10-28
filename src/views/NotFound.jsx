import { Link } from "react-router-dom"
const NotFound = () => {
  return (
    <div className="e404">
      <img src="/src/assets/img/404-error.jpg" alt="" />
      <div className="volver">
        <Link to="/"><button>Volver al home</button></Link>
      </div>
    </div>
  )
}

export default NotFound