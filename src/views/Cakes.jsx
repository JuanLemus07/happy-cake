import { Link } from "react-router-dom"

const Cakes = () => {
  return (
    <div className="cakes">
      <h2> Escoge tu sabor preferido </h2>

      <div className="flavors">
        <img src="/src/assets/img/bombon-blue-cake.jpg" alt="bombom cake" className="cake" />
        <img src="/src/assets/img/chocolate-cake.jpg" alt="chocolate cake" className="cake" />
        <img src="/src/assets/img/coffe-cake.webp" alt="coffe cake" className="cake" />
        <img src="/src/assets/img/leather-cake.webp" alt="leather cake" className="cake" />
      </div>
      <div className="flavors">
        <img src="/src/assets/img/curazao-cake.jpg" alt="curazao cake" className="cake" />
        <img src="/src/assets/img/gold-cake.jpg" alt="gold cake" className="cake" />
        <img src="/src/assets/img/manjar-cake.jpg" alt="manjar cake"className="cake"  />
        <img src="/src/assets/img/rustick-cake.jpg" alt="rustik cake" className="cake" />
      </div>
      <div className="flavors">
        <img src="/src/assets/img/maracuya-cake.jpg" alt="maracuya cake" className="cake" />
        <img src="/src/assets/img/raimbow-cake.jpg" alt="raimbow cake" className="cake" />
        <img src="/src/assets/img/rose-cake.jpg" alt="rose cake" className="cake" />
        <img src="/src/assets/img/white cake.jpg" alt="white cake" className="cake" />
      </div>
      
      <Link to="/"><button>Volver al home</button></Link>
    </div>
  )
}

export default Cakes;