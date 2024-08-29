import Login from "./Login";
import WelcomeMessage from "./WelcomeMessage";



function WelcomeScreen4({loggedIn}){
 return (
    <div>
        {loggedIn ? <WelcomeMessage/> : <Login/>}
    </div>
 )
}

export default WelcomeScreen4;