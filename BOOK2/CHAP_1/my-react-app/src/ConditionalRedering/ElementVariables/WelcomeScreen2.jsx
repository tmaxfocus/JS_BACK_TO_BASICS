import Message from "../../Expressions/Message";
import WelcomeMessage from "./WelcomeMessage";

function WelcomeScreen2({ loggedIn }) {
  return (
    <div>
      {loggedIn && <WelcomeMessage />}
      Note: if you dont see the welcome message, you're not logged in.
    </div>
  );
}

export default WelcomeScreen2;
