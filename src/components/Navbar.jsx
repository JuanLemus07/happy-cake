import { Link } from "react-router-dom";
import "../assets/css/style.css"

const Navbar = () =>{
  return(
    <div className="navbar">
      <Link to="/"><img src="/src/assets/img/logo-hc.png" className="logo" /></Link>
        <section>
          <Link to="/contacto"><button>Contacto</button></Link>
          <Link to="/cakes"><button>Cakes</button></Link>
        </section>
    </div>

  )
}
export default Navbar;