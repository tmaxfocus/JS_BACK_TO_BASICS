import "./App.css";
import WelcomeScreen from "./ConditionalRedering/ElementVariables/WelcomeScreen";
import WelcomeScreen2 from "./ConditionalRedering/ElementVariables/WelcomeScreen2";
import WelcomeScreen3 from "./ConditionalRedering/ElementVariables/WelcomeScreen3";
import WelcomeScreen4 from "./ConditionalRedering/ElementVariables/WelcomeScreen4";
import Message from "./Expressions/Message";
import CustomerList from "./MakingList/CustomerList";
import Searchform from "./Searchform";

function App() {
  const _customers = [
    {
      customerId: "1",
      address: "234 Pine Street",
      city: "Pinewood",
      state: "IL",
    },
    {
      customerId: "2",
      address: "456 Elm Street",
      city: "Elmwood",
      state: "MI",
    },
    {
      customerId: "3",
      address: "678 Maple Street",
      city: "Maplewood",
      state: "OH",
    },
    {
      customerId: "4",
      address: "901 Chestnut Street",
      city: "Chestnut",
      state: "SC",
    },
  ];

  return (
    <>
      <Searchform></Searchform>
      <Message messageType={"error"} message={"Hello world"} />
      <WelcomeScreen loggedIn={false}></WelcomeScreen>
      <WelcomeScreen2 loggedIn={true}></WelcomeScreen2>
      <WelcomeScreen3 loggedIn={true} isHuman={true}></WelcomeScreen3>
      <WelcomeScreen4 loggedIn={false}></WelcomeScreen4>
      <CustomerList customers={_customers}></CustomerList>
    </>
  );
}

export default App;
