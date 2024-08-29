
import WelcomeMessage from "./WelcomeMessage";

function WelcomeScreen3({ loggedIn, isHuman }) {
    return (
    <div>
    {loggedIn && isHuman && <WelcomeMessage/>}
    Note: If you dont see the welcome message, you're
    not logged in or you are a bot.
    </div>
    );
   }
   export default WelcomeScreen3;