import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Button from "./Components/Button";
import Herro from "./Components/Herro";
import Links from "./Components/Links";
import LogInButton from "./Components/LogInButton";
import NoPermission from "./Components/NoPermission";
import NameForm from "./Components/NameForm";
import FormSubmit from "./Components/FormSubmit";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./index.css";
import useDocumentTitle from "./My Custom Hooks/useDocumentTitle";
import useProductCounter from "./My Custom Hooks/useProductCounter";
import Bax from "./Bax";

const root = document.querySelector("#root");
const user = { age: "31", firstName: "Babucarr", lastName: "Badjie" };
render(
  <h2 className="subtitle">
    {" "}
    Hi {user.firstName} {user.lastName}, you are {user.age} years old.
  </h2>,
  root
);

function capitalise(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
const name = "brendan";
const owner = "Babucarr";
const demo = document.querySelector("#demo");

render(
  <p className="user-info">
    Hi {capitalise(name)}, welcome to {owner}'s website
  </p>,
  demo
);

// Function Component. A React Component's name has to start with an uppercase.
//Define one component per file for easier maintenance.//

function Footer() {
  return (
    <div>
      <h3>Company name</h3>
      <p>All right reserves</p>
    </div>
  );
}
const RealMadrid = document.querySelector("#real-madrid");
render(<Footer></Footer>, RealMadrid);

//rendering from Herro Component
//Herro Component is in the Component folder
const herro = document.querySelector("#herro");
render(<Herro />, herro);

//render from multiple components
function App() {
  return (
    <>
      <Button />

      <Button />

      <Links />
    </>
  );
}
render(<App />, document.querySelector("#multiple-components"));

//Children props
const login = document.querySelector("#log-in");
render(<LogInButton>Login</LogInButton>, login);

// state in javascript
// useState is a react hook
function SportTimer() {
  const [seconds, setSeconds] = useState(0);
  return (
    <>
      <h1>{seconds} seconds elapsed</h1>
      {/* increment seconds state by 1, when you click on the button*/}
      <button disabled={seconds === 60} onClick={() => setSeconds(seconds + 1)}>
        Click to add 1
      </button>
    </>
  );
}
render(<SportTimer />, document.querySelector("#second-root"));

//Event, state and closure//
//Closure concept in JavaScript. A closure is when a function contains another function,
//the inner function gains access to the outer function variable(s)//
function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrementClick() {
    setCount(count + 1);
  }
  return (
    <>
      <div>You have clicked {count} times</div>
      <button onClick={handleIncrementClick}>Click here</button>
    </>
  );
}
render(<Counter />, document.querySelector("#counter-root"));

//Event in javaScript//
function Navbar() {
  return (
    <>
      <select
        className="countries"
        onClick={() => console.log("You have changed the country")}
      >
        <option>The Gambia</option>
        <option>Taiwan</option>
        <option>Canada</option>
      </select>
    </>
  );
}
render(<Navbar />, document.querySelector("#country-root"));

//Condtional state change

function Clock() {
  const [seconds, setSeconds] = useState(0);

  function handleIncreaseClick() {
    if (seconds < 59) {
      setSeconds(seconds + 1);
    } else if (seconds === 59) {
      setSeconds(0);
    }
  }
  return (
    <>
      <h1>{seconds} seconds</h1>
      <button onClick={handleIncreaseClick}>Add 1 second</button>
    </>
  );
}
render(<Clock />, document.querySelector("#clock-root"));

//Conditional state change:props //
function Mode(props) {
  const [count, setCounter] = useState(0);

  function handModeClick() {
    if (props.mode === "increment") {
      setCounter(count + 1);
    } else if (props.mode === "decrement") {
      setCounter(count - 1);
    }
  }
  return (
    <>
      <h2>{props.mode}ing counter</h2>
      <h3>{count} times</h3>
      <button onClick={handModeClick}>{props.mode}</button>
    </>
  );
}
render(
  <>
    <Mode mode="increment" />
    <Mode mode="decrement" />
  </>,
  document.querySelector("#mode-root")
);

//Configurable counting
function Counting(props) {
  const [counter, setCounter] = useState(0);
  const { incrementBy } = props;

  function handleIncrementClick() {
    setCounter(counter + incrementBy);
  }

  return (
    <>
      <h2>{counter} times clicked</h2>
      <button onClick={handleIncrementClick}>Add {incrementBy}</button>
    </>
  );
}

render(
  <>
    <Counting incrementBy={1} />
    <Counting incrementBy={2} />
    <Counting incrementBy={5} />
  </>,
  document.querySelector("#incrementBy-root")
);

//Conditional Component rendering
function Admin(props) {
  if (props.userType !== "admin") {
    return <NoPermission />;
  }
  return (
    <div>
      <h1>Welcome Admin</h1>
      <p>The Admin portal allows you to manage all your items</p>
    </div>
  );
}
// Sample usage (do not modify)
render(
  <>
    <Admin userType="admin" />
    <Admin userType="client" />
  </>,
  document.querySelector("#conditionalRendering-root")
);

// Multiple states in a component//
function Countdown() {
  const [count, setCount] = useState(5);
  const [lives, setLives] = useState(3);
  function handleCountdownClick() {
    if (count > 0) {
      setCount(count - 1);
    } else if (count === 0) {
      setCount(5);
      setLives(lives - 1);
    }
  }
  return (
    <>
      {" "}
      <h2>Attempts remaining: {count}</h2>
      <button disabled={lives === 0} onClick={handleCountdownClick}>
        Count down
      </button>
      <h3>Lives remaining: {lives}</h3>{" "}
    </>
  );
}
render(<Countdown />, document.querySelector("#countdown-root"));

//state with Arrays
function PhoneApps(props) {
  const items = props.items;
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
const apps = ["Messanger", "WhatsApp", "Line", "LinkedIn", "Instagram"];
render(<PhoneApps items={apps} />, document.querySelector("#apps-root"));

//Products Component such that it returns a ul with one li per product (from the products state).
function Products() {
  const [products] = useState(["Almond", "Cashew", "Rice", "Water"]);

  return (
    <ul>
      {products.map((product) => (
        <li key={product}>{product}</li>
      ))}
    </ul>
  );
}

render(<Products />, document.querySelector("#product-root"));

//Implement the Wallet Component such that clicking on the Undo button
//will remove the last item from the transactions array.
function Wallet() {
  const [transactions, setTransactions] = useState([]);

  function handleDepositClick() {
    setTransactions([...transactions, transactions.length + 1]);
  }

  function handleUndoClick() {
    setTransactions(transactions.slice(0, transactions.length - 1));
  }

  return (
    <>
      <button onClick={handleDepositClick}>Deposit</button>
      <button onClick={handleUndoClick}>Undo</button>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>{transaction}</li>
        ))}
      </ul>
    </>
  );
}
render(<Wallet />, document.querySelector("#wallet-root"));

//Person Component such that it increments the person's age when you click on the button.
function Person() {
  const [user, setUser] = useState({
    id: "D0801",
    name: "Babucarr",
    department: "Technical",
    age: 31,
  });
  function handlePersonClick() {
    setUser({ ...user, age: user.age + 1 });
  }
  return (
    <div>
      <p>
        {user.name} ID number {user.id} who's in the {user.department} department is{" "}
        {user.age} years old
      </p>
      <button disabled={user.age === 100} onClick={handlePersonClick}>
        Increment age
      </button>
    </div>
  );
}
render(<Person />, document.querySelector("#person-root"));

//OrderInsurance Component such that you can add/remove the insurance :
//Clicking on the Add insurance button will add the insurance: 
//"basic" key / value pair to the order state.
//Clicking on the Remove insurance button will remove 
//the insurance key and its value from the object.
function OrderInsurance() {
  const [order, setOrder] = useState({
    id: 1,
    items: [1, 4, 10],
  });
  function handleAddInsuranceClick() {
    setOrder({ ...order, insurance: "basic" });
  }
  function handleRemoveInsuranceClick() {
    const { insurance, ...modifiedOrder } = order;
    setOrder(modifiedOrder);
  }
  return (
    <div>
      <h1>Your order</h1>
      {order.insurance ? <p>Order is insured</p> : <p>Order is not insured</p>}
      <button
        onClick={handleAddInsuranceClick}
        disabled={order.insurance === "basic"}
      >
        Add insurance
      </button>
      <button
        onClick={handleRemoveInsuranceClick}
        disabled={order.insurance === undefined}
      >
        Remove insurance
      </button>
    </div>
  );
}

render(<OrderInsurance />, document.querySelector("#insurance-root"));

//Forms in jsx. user age with defaultValue attribute
function User(props) {
  return (
    <form>
      <input type="number" defaultValue={props.age} name="age" />
    </form>
  );
}
render(
  <>
    <User age={23} />
    <User age={26} />
  </>,
  document.querySelector("#age-root")
);

// input controlled and replace NAME by the user's name from the input.
function Name() {
  const [name, setName] = useState("");
  return (
    <>
      <h3>Please write your text here</h3>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Provide your name"
        onChange={(event) => setName(event.target.value)}
      />
      <p>Hello {name}, welcome to my website</p>
    </>
  );
}

render(<Name />, document.querySelector("#name-root"));

//input controlled and replace QUANTITY by the user's quantity from the input.
function OrderItem() {
  const [quantity, setQuantity] = useState(0);
  return (
    <>
      <h2>You can select the quantity you need here</h2>
      <input
        type="number"
        name="quantity"
        value={quantity}
        placeholder="select quantity"
        onChange={(event) => setQuantity(event.target.value)}
      />
      <p>You have ordered {quantity} item(s)</p>
    </>
  );
}
render(<OrderItem />, document.querySelector("#quantity-root"));

//select element from the dropdown options
function Country() {
  const [country, setCountry] = useState("");
  return (
    <>
      <h2>Choose your Country</h2>
      <select
        value={country}
        onChange={(event) => setCountry(event.target.value)}
      >
        <option value={"blank"}>---</option>
        <option value={"gambia"}>The Gambia</option>
        <option value={"senegal"}>Senegal</option>
        <option value={"nigeria"}>Nigeria</option>
      </select>
    </>
  );
}
render(<Country />, document.querySelector("#favorite-root"));

//textarea element
function Comment() {
  const [comment, setComment] = useState("");
  return (
    <>
      <h1>Write your comment below</h1>
      <textarea
        value={comment}
        placeholder={"Please write your comment here"}
        onChange={(event) => setComment(event.target.value)}
      >
        comment
      </textarea>
    </>
  );
}
render(<Comment />, document.querySelector("#comment-root"));

//multiple input
function MultipleInput() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  return (
    <>
      <h2>Please provide your informaion</h2>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Your name"
        onChange={(event) => setName(event.target.value)}
      ></input>
      <input
        type="text"
        name="address"
        value={address}
        placeholder="Your address"
        onChange={(e) => setAddress(e.target.value)}
      ></input>
      <p>
        Your name is {name}, and your address is {address}
      </p>
    </>
  );
}
render(<MultipleInput />, document.querySelector("#multipleInput-root"));

//Submitting a form

function SubmitForm() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="name" />
      <input type="submit" value="send for review" />
    </form>
  );
}
render(<SubmitForm />, document.querySelector("#submitForm-root"));

//Registration form
function RegisterForm() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [motivation, setMotivation] = useState("");

  return (
    <>
      <h2>Please fill out the registeration form</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <select
          name="type"
          value={type}
          onChange={(event) => setType(event.target.value)}
        >
          <option>Choose a type</option>
          <option>client</option>
          <option>merchant</option>
        </select>
        <textarea
          name="motivation"
          placeholder="Your motivation to join"
          value={motivation}
          onChange={(event) => setMotivation(event.target.value)}
        />
        <input type="submit" value="Register" />
      </form>
      <p>
        Your name is {name}. You would like to register as {type} because{" "}
        {motivation}.
      </p>
    </>
  );
}

render(<RegisterForm />, document.querySelector("#register-root"));

//ResetForm Component such that it resets the form when the user submits the form.
function ResetForm() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [reason, setReason] = useState("");

  function handleSubmitForm(event) {
    event.preventDefault();
    setName("");
    setType("");
    setReason("");
  }

  return (
    <>
      <h2>Reseting the form after submitting</h2>
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
        />
        <select
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>----</option>
          <option>Football</option>
          <option>Basketball</option>
          <option>Tennis</option>
        </select>
        <textarea
          name="reason"
          value={reason}
          onChange={(event) => setReason(event.target.value)}
          placeholder="Reason"
        />
        <input type="submit" value="Register" />
      </form>
      <p>
        Your name is {name}. Your favorite sport is {type} because {reason}.
      </p>
    </>
  );
}
render(<ResetForm />, document.querySelector("#reset-root"));

//Labeling form items
function UserInfo() {
  const [name, setName] = useState("");
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input type="submit" />
      <p>Hello {name}</p>
    </form>
  );
}

render(<UserInfo />, document.querySelector("#user-root"));

//Actions inside .map
//Let's say you have a list of items that you're iterating over
//in JSX with .map and you want to have a
//button for every one of these items and that button should log the item that was clicked.
function List() {
  const items = [1, 2, 3, 4, 5];

  function handleButtonClick(item) {
    console.log(item);
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>
          {item}
          <button onClick={() => handleButtonClick(item)}>Log me</button>
        </li>
      ))}
    </ul>
  );
}
render(<List />, document.querySelector("#list-root"));

//lifting Form's state up. Uses the NameForm.js component
function EmailApp() {
  const [email, setEmail] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  return (
    <div>
      <h3>[This is demonstrating lifting Form's state up]</h3>
      <p>You logged in as {email}</p>
      <NameForm email={email} onEmailChange={handleEmailChange} />
    </div>
  );
}
render(<EmailApp />, document.querySelector("#email-root"));

//FormSubmit.js
function SubmitApp() {
  const [user, setUser] = useState("");

  function handleUserChange(event) {
    setUser(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    setUser("");
  }
  return (
    <div>
      <h2>
        Hello {user}, welcome to our website! Feel free to explore and learn
      </h2>
      <FormSubmit
        user={user}
        onUserChange={handleUserChange}
        onFormSubmit={handleFormSubmit}
      />
    </div>
  );
}
render(<SubmitApp />, document.querySelector("#formSubmit-root"));

//TodoForm, Todolist
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [entry, setEntry] = useState("");

  function handleEntryChange(event) {
    setEntry(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    // add the new entry
    setTodos([...todos, entry]);
    // reset/empty the textbox
    setEntry("");
  }
  return (
    <div>
      <h3>This is Todo demo</h3>
      <TodoForm
        entry={entry}
        onEntryChange={handleEntryChange}
        onFormSubmit={handleFormSubmit}
      />
      <TodoList todos={todos} />
    </div>
  );
}

render(<TodoApp />, document.querySelector("#Todo-root"));

//functional state update
function FunctionalStateUpdate() {
  const [count, setCount] = useState(0);

  console.log("render date");

  function handleClickButton() {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <button disabled={count === 50} onClick={handleClickButton}>
      Click me {count}
    </button>
  );
}
render(<FunctionalStateUpdate />, document.querySelector("#stateUpdate-root"));

//useEffect hook
//Counter title condition
//Countdown timer such that it shows X times as the page's title
//where X is the number of times the button has been clicked.
function UpdatePageTitle() {
  const [times, setTimes] = useState(0);

  useEffect(() => {
    if (times === 0) {
      document.title = "Welcome";
    } else {
      document.title = `${times} times clicked`;
    }
  });

  return (
    <>
      <h2>{times} times clicked</h2>
      <button onClick={() => setTimes((prevTimes) => prevTimes + 1)}>
        Add 1
      </button>
    </>
  );
}

render(<UpdatePageTitle />, document.querySelector("#updatePageTitle-root"));

//Products page title
//Products component such that it updates the page title to:
//Add your first product when there are no products yet
//You have 1 product when there's only 1 product
//You have X products (where X is the number of products) in all other cases
function ProductItems() {
  const [productItem, setProductItem] = useState([]);

  useEffect(() => {
    if (productItem.length === 0) {
      document.title = `Add your first product`;
    } else if (productItem.length === 1) {
      document.title = `You have 1 product`;
    } else {
      document.title = `You have ${ProductItems.length} products`;
    }
  });

  function handleButtonClick() {
    setProductItem([
      ...productItem,
      {
        id: productItem.length,
      },
    ]);
  }

  return (
    <>
      <h1>This is a demo of useEffect conditional page title display</h1>
      <h2>You have clicked {productItem.length} times</h2>
      <button onClick={handleButtonClick}>Add a product</button>
    </>
  );
}

render(<ProductItems />, document.querySelector("#productItem-root"));

//Effect with clean up
function TimerApp() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    document.title = "Welcome";
    const timeId = setTimeout(() => {
      document.title = "Still there?";
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  });

  return (
    <>
      <h2>Effect Clean up demo</h2>
      <p>{seconds}</p>
      <button onClick={() => setSeconds((prevSeconds) => prevSeconds + 1)}>
        Click here
      </button>
    </>
  );
}

render(<TimerApp />, document.querySelector("#timer-root"));

//Building a clock

function ClockTime() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <h2>The time will be display here</h2>
      <p>{date.toLocaleTimeString()}</p>
    </>
  );
}
render(<ClockTime />, document.querySelector("#clockTime-root"));

//Flag for running Effect
//stopwatch

function StopWatch() {
  const [time, setTime] = useState(0);
  const [runner, setRunner] = useState(false);

  useEffect(() => {
    if (runner) {
      let timerid = setTimeout(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      return () => {
        clearTimeout(timerid);
      };
    }
  });

  function handleStartPauseClick() {
    setRunner((previousValue) => !previousValue);
  }

  function handlResetClick() {
    setTime(0);
    setRunner(false);
  }
  return (
    <>
      <h2>You can start the stopwatch by clicking the buttons</h2>
      <p>{time}</p>
      <button onClick={handleStartPauseClick}>Start/Pause</button>
      <button onClick={handlResetClick}>Reset</button>
    </>
  );
}
render(<StopWatch />, document.querySelector("#stopWatch-root"));

//fetch API
function FetchUsers() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://react-tutorial-demo.firebaseio.com/users.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);
  return JSON.stringify(users || "");
}
render(<FetchUsers />, document.querySelector("#fetchUsers-root"));

//fetch data error 1 with conditional rendering
function People() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://react-tutorial-demo.firebaseio.com/users.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);
  if (!users) {
    return null;
  }

  return (
    <>
      <h1>Users ({users.length})</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

render(<People />, document.querySelector("#people-root"));

//fetch API data error 2 with conditional rendering
function SettingsInfo() {
  const [settings, setSettings] = useState();

  useEffect(() => {
    fetch("https://react-tutorial-demo.firebaseio.com/settings.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSettings(data);
      });
  }, []);
  if (settings === undefined) {
    return null;
  }

  return (
    <>
      <h2>Notifications</h2>
      <p>
        Welcome {settings.type}. <br />
        You have {settings.push_notifications ? "enabled" : "disabled"} push
        notifications and {settings.dark_mode ? "enabled" : "disabled"} dark
        mode.
      </p>
    </>
  );
}

render(<SettingsInfo />, document.querySelector("#settings-root"));

//fetch data error with logical && operator
function UsersInfo() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://react-tutorial-demo.firebaseio.com/users.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  return (
    <>
      <h1>Users Information</h1>
      <ol>
        {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ol>
    </>
  );
}

render(<UsersInfo />, document.querySelector("#usersInfo-root"));

//Handling fetch loading
function LoadUsers() {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://react-tutorial-demo.firebaseio.com/users.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setUsers(data);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  );
}

render(<LoadUsers />, document.querySelector("#loading-root"));

//fetch onClick
//When the user clicks on the button (Load users), it should fetch the users
//While the fetch request is loading, the button should be disabled.

function FetchOnClick() {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(false);

  function handleButtonClick() {
    setIsLoading(true);
    fetch("https://react-tutorial-demo.firebaseio.com/users.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setUsers(data);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      }, []);
  }

  return (
    <>
      <button onClick={handleButtonClick} disabled={isLoading}>
        Load users
      </button>
      <h1>Users</h1>
      <ul>
        {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  );
}

render(<FetchOnClick />, document.querySelector("#fetchOnClick-root"));

//fetch onChange
//CurrencyConversion component such that it fetches the rate of the selected currency
//from the below API:
//Replacing {currency} with usd, eur or cad will return the rate for that currency,
//for example: https://react-tutorial-demo.firebaseio.com/currencies/cad.json

function CurrencyConversion() {
  const [currency, setCurrency] = useState("");
  const [rate, setRate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (currency) {
      setIsLoading(true);
      fetch(
        `https://react-tutorial-demo.firebaseio.com/currencies/${currency}.json`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            setRate(data);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [currency]);

  function handleCurrencyChange(event) {
    setCurrency(event.target.value);
  }

  return (
    <>
      <h2>Currency rates</h2>
      <select onChange={handleCurrencyChange} disabled={isLoading}>
        <option value="">Select a currency</option>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="cad">CAD</option>
      </select>
      <h3>
        1 {currency.toUpperCase()} = {rate} USD
      </h3>
    </>
  );
}

render(
  <CurrencyConversion />,
  document.querySelector("#currencyConversion-root")
);

//fetch POST
//GradeForm component such that it sends the grade to the API when the form is submitted
//endpoint:https://api.learnjavascript.online/demo/react/grades
//method: POST
function GradeForm() {
  const [grade, setGrade] = useState(0);

  function handleFormSubmit(event) {
    event.preventDefault();
    fetch("https://api.learnjavascript.online/demo/react/grades", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ grade: grade }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("grade added");
        console.log(data);
      });
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="number"
        value={grade}
        name="grade"
        onChange={(event) => setGrade(event.target.value)}
        placeholder="Enter the grade"
      />
      <input type="submit" />
    </form>
  );
}

render(<GradeForm />, document.querySelector("#gradeForm-root"));

//fetch POST
//CurrencySelector component such that it sends the currency to the API
//every time the user selects a currency.
function CurrencySelector() {
  const [currency, setCurrency] = useState("");

  useEffect(() => {
    if (currency) {
      console.log(currency);
      fetch("https://react-tutorial-demo.firebaseio.com/preferences.json", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ currency: currency }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    }
  }, [currency]);

  function handleCurrencyChange(event) {
    setCurrency(event.target.value);
  }

  return (
    <>
      <h3>Select currency</h3>
      <select onChange={handleCurrencyChange}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="cad">CAD</option>
      </select>
      <h1>{currency}</h1>
    </>
  );
}

render(<CurrencySelector />, document.querySelector("#currencySelector-root"));

//My first custom hook
//Define a function called useWelcomeGreeting that logs to the console:
//"Welcome to my app" only once after the component has rendered the first time.
function useWelcomeGreeting() {
  useEffect(() => {
    console.log("Welcome to my app");
  }, []);
}
function CustomHook() {
  useWelcomeGreeting();
  return <h1>My App</h1>;
}
render(<CustomHook />, document.querySelector("#myOwnHook-root"));

//Write your own custom hook and call it useDocumentTitle
//This custom hook should accept a title parameter
// and update the page's title (via document.title).
//It should also update the page's title whenever the title changes.
//After you write the custom hook, use it in the CustomHook component to set the title to
// 'X products in your shopping list' where X is the number of products.
function MyCustomHook() {
  const [count, setCount] = useState(0);
  useDocumentTitle(`${count} products in your shopping list`);

  function handleIncrementClick() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleDecrementClick() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <>
      <h2>{count}</h2>
      <button onClick={handleIncrementClick}>+</button>
      <button onClick={handleDecrementClick} disabled={count <= 0}>
        -
      </button>
    </>
  );
}

render(<MyCustomHook />, document.querySelector("#myCustomHook-root"));

//Custom hooks with state
//Refactor the CustomHookState component by moving the counter logic into
//the useProductCounter.js file as a custom hook.
function CustomHookState() {
  const { count, increment, decrement } = useProductCounter();

  return (
    <>
      <h1>The number of the items selected will be display here</h1>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}

render(<CustomHookState />, document.querySelector("#CustomHookState-root"));
