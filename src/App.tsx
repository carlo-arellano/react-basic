import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "./components/ListGroup/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ButtonStyled from "./components/Button/ButtonStyled";
import { AiFillAmazonCircle } from "react-icons/ai";
import Like from "./components/Like";

const items = ["Apple", "Banana", "Cherry", "Strawberry", "Orange"];

function App() {
  const handleSelectItem = (item: string) => {
    console.error(`Selected item: ${item}`);
  };

  const [alertVisible, setAlertVisibility] = useState(false);
  const [isLike, setIsLike] = useState(false);

  return (
    <>
      <div>
        <h1>Components</h1>
        <br />
        <ListGroup
          items={items}
          heading="Fruits"
          onSelectItem={handleSelectItem}
        ></ListGroup>

        <br />
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>
            <b>Warning!</b> There is an incoming alert box.
          </Alert>
        )}
        <Button
          color="secondary"
          size="lg"
          onClick={() => setAlertVisibility(true)}
        >
          Show Alert
        </Button>

        <br />
        <br />
        <ButtonStyled
          color="primary"
          onClick={() => console.error("Order placed")}
        >
          <AiFillAmazonCircle size="20" />
          &nbsp;Order Now
        </ButtonStyled>

        <br />
        <br />
        <Like isLike={isLike} onClick={() => setIsLike(!isLike)} />
      </div>
    </>
  );
}

export default App;
