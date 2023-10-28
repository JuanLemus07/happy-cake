import { Link } from "react-router-dom"

const Contacto = () => {
  return (
    <div className="contacto">
      <h2> Cuentanos tu idea </h2>
      <form className="form">
          <>
            <label>Nombre</label>
            <input type="text" id="name" name="user_name" />
          </>
          <>
            <label>Correo electrónico</label>
            <input type="email" id="mail" name="user_email" />
          </>
          <>
            <label>Mensaje</label>
            <textarea id="msg" name="user_message"></textarea>
          </>
          <button>Enviar</button>
      </form>
      <div className="volver">
        <Link to="/"><button>Volver al home</button></Link>
      </div>
    </div>
  )
}

export default Contacto;