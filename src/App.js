
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      <Mobile></Mobile>
      <LoadTodos></LoadTodos>

    </div>
  );
}


// common style 

const boxStyle = {

  backgroundColor: 'salmon',
  margin: '20px',
  padding: '20px 0',
  borderRadius: '20px'
}
const trueCheck = {

  backgroundColor: 'green',
  margin: '20px',
  padding: '20px 0',
  borderRadius: '20px'
}
const flaseCheck = {

  backgroundColor: 'red',
  margin: '20px',
  padding: '20px 0',
  borderRadius: '20px'
}


// Mobile 

function Mobile() {

  const [charge, setCharge] = useState(100);

  const down = () => {

    if (!charge) {
      setCharge(0)
    }

    else {
      const downCharge = charge - 10;
      setCharge(downCharge)
    }

  }
  const up = () => {

    if (charge <= 99) {

      const downCharge = charge + 10;
      setCharge(downCharge)

    }


  }


  return (<div>
    <h1>Mobile Charge : {charge}</h1>

    <button onClick={down}>battery down</button>
    <button onClick={up}>battery up</button>


  </div >)




}




// todo list

function LoadTodos() {

  const [todos, setTodos] = useState([])

  useEffect(() => {

    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [])


  return (<div>
    {
      todos.map(todo => <ShowTodo title={todo.title} completed={todo.completed} ></ShowTodo>)
    }




  </div>)
}

function ShowTodo(props) {


  if (props.completed) {

    return (<div style={trueCheck}>
      <h1>Title : {props.title} </h1>
    </div>)
  }

  return (<div style={flaseCheck}>
    <h1>Title : {props.title} </h1>
  </div>)


}




function District(props) {

  const [power, setPower] = useState(1);


  const boostPower = () => {

    const newPower = power * 2;

    setPower(newPower);
  }

  return (<div style={boxStyle}>

    <h1>District Name : {props.name}</h1>

    <p>Info : {props.info}</p>
    <h3>Power : {power}</h3>
    <button onClick={boostPower}>Bost Powers</button>
  </div>)

}

export default App;
