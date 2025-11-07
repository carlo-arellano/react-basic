import "./App.css";
import { use, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "./components/ListGroup/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ButtonStyled from "./components/Button/ButtonStyled";
import { AiFillAmazonCircle } from "react-icons/ai";
import Like from "./components/Like";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

const items = ["Apple", "Banana", "Cherry", "Strawberry", "Orange"];

function App() {
  const handleSelectItem = (item: string) => {
    console.error(`Selected item: ${item}`);
  };

  const [alertVisible, setAlertVisibility] = useState(false);
  const [isLike, setIsLike] = useState(false);

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 3", quantity: 1 },
    ],
  });

  const handleUpdateGame = () => {
    // Updating the nested object
    setGame({
      ...game,
      player: {
        ...game.player,
        name: "Mark",
      },
    });

    // Updating the array
    setPizza({
      ...pizza,
      toppings: [...pizza.toppings, "hot sauce"],
    });

    // Updating the array of objects
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });

    console.error(cart);
  };

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Expense 1", amount: 100, category: "Entertainment" },
    {
      id: 2,
      description: "Expense 2",
      amount: 100,
      category: "Transportation",
    },
    { id: 3, description: "Expense 3", amount: 100, category: "Groceries" },
    { id: 4, description: "Expense 4", amount: 100, category: "Utilities" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <>
      <div>
        <h1>Components</h1>

        <h2 className="mt-5">Expense Tracker</h2>
        <div className="mb-5">
          <ExpenseForm
            onSubmit={(data) =>
              setExpenses([
                ...expenses,
                { ...expenses, id: expenses.length + 1, ...data },
              ])
            }
          />
        </div>
        <div className="mb-3">
          <ExpenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
        </div>
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />

        <h2 className="mt-5">Form</h2>
        <Form />

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

        <br />
        <br />
        <ButtonStyled color="secondary" onClick={handleUpdateGame}>
          Update Game Variable
        </ButtonStyled>

        <br />
        <br />
        <ExpandableText maxChars={100}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
          vitae, est molestiae nihil tempore nulla, minima ullam labore
          reprehenderit reiciendis veritatis. Incidunt deserunt omnis
          repellendus voluptates quos neque labore eaque!
        </ExpandableText>
      </div>
    </>
  );
}

export default App;
