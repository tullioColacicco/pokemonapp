import { FC } from "react"
import { Link } from "react-router-dom"

const Header: FC = () => {
    return (
        <div className="header">
    
        
        <Link to="/" className="nes-btn" >Home</Link>
        <Link to="/myPokemon" className="nes-btn is-success">Pokemon</Link>
        <Link to='/packs' className="nes-btn is-warning">Packs</Link>
      {/* <span className="nes-text is-primary">Home</span>
      <span className="nes-text is-primary">Packs</span> */}
        
        </div>
    )
    
}

export default Header