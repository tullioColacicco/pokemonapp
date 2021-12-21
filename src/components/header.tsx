import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {Auth} from 'aws-amplify'
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import {  Dispatch, SetStateAction } from "react";

 interface User {
  sub: string;
  identities: string;
  email_verified: boolean;
  email: string;
}
interface Props {
  setUser: Dispatch<SetStateAction<User| null>> 
}
const Header = ({setUser}: Props) => {
  
  const [test, setTest] = useState<User| null>(null)



const checkUser =async () => {
 
  const user = await Auth.currentAuthenticatedUser( )
  console.log('user: ', user);
  setUser(user.attributes)
  setTest(user.attributes)
  
}

const signIn = async() => {
  await Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google})
 const user = await Auth.currentAuthenticatedUser( )
 console.log(user);
setUser(user.attributes)
setTest(user.attributes)

}

useEffect( () => {
  checkUser()
 
  
}, [])
    return (
        <div className="header">
    {!test?  
    <>
        <button onClick={signIn} >sign in</button>
        <button onClick={checkUser} >check user</button>
        <button onClick={()=> Auth.signOut()} >sign out</button></>
:
<>
        <Link to="/" className="nes-btn" >Home</Link>
        <Link to="/myPokemon" className="nes-btn is-success">Pokemon</Link>
        <Link to='/packs' className="nes-btn is-warning">Packs</Link>
        </>
}
        
        </div>
    )
    
}

export default Header