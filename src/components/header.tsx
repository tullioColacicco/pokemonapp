import { FC } from "react"
import { Link } from "react-router-dom"
import {Auth} from 'aws-amplify'
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";

const Header: FC = () => {
const checkUser =async () => {
  const user = await Auth.currentAuthenticatedUser( )
  console.log('user: ', user);
}
    return (
        <div className="header">
    
        <button onClick={()=> Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google})} >sign in</button>
        <button onClick={checkUser} >check user</button>
        <button onClick={()=> Auth.signOut()} >sign out</button>
        <Link to="/" className="nes-btn" >Home</Link>
        <Link to="/myPokemon" className="nes-btn is-success">Pokemon</Link>
        <Link to='/packs' className="nes-btn is-warning">Packs</Link>
      {/* <span className="nes-text is-primary">Home</span>
      <span className="nes-text is-primary">Packs</span> */}
        
        </div>
    )
    
}

export default Header