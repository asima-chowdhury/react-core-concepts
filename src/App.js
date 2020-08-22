import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';//style - 1

function App() {
  /* 1st-portion start 
  var name = "Asima";
  var person = {
    name: "Asima",
    job: "Student"
  };
  var style = {
    color: 'blue',
    backgroundColor: 'cyan'
  }//style - 2
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>

        <h1>Name : {name}</h1>
        <h2 style={style}>Person : {person.name + " " + person.job}</h2>
        <h3 style={{ backgroundColor: 'chocolate' }}> style - 3  </h3>
        <p className="" >Math {(2 + 7) * 100}</p>
        <p>React Day!</p>
        

      </header>
    </div>
  );
  1st-portion end */
  /* 2nd-portion start
  return(
    <div className="App">
      <header className="App-header">
        <p>Create Component</p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
  function Person(){
    const personStyle ={
      border:'2px solid yellow',
      margin:'10px'
    }
    return(
      // <div style={{border:'2px solid red', margin:'10px'}}>   // by inline style 
      <div style={personStyle}>   // by object called 
        <h1>Name : Shakib Al Hasan</h1>
        <h3>Hero Of the Year</h3>
      </div>
    )
  }
  2nd-portion end */
  /*3rd-portion start
  return(
    <div className="App">
      <header className="App-header">
        <p>Pass Dynamic data</p>
        <Person name="Asima" university="LU"></Person>
        <Person name="Naima" university="JRRMC"></Person>
        <Person name="Arif" university="SIU"></Person>
      </header>
    </div>
  );
  function Person(props){
    const personStyle ={
      border:'2px solid yellow',
      margin:'10px'
    }
    console.log(props); //Object name: "Asima" university: "LU" // Object name: "Naima" university: "JRRMC" //Object name: "Arif" university: "SIU"
    return(
      <div style={personStyle}>  
        <h1>Name : {props.name}</h1>
        <h3>Student Of {props.university}</h3>
      </div>
    )
  }
  3rd-portion end */
  /*4th-portion start
  const students =['Asima', 'Naima' ,'Arif', 'Salma'];
  return(
    <div className="App">
      <header className="App-header">
        <p>Pass Dynamic data</p>
        <Person name={students[0]} university="LU"></Person>
        <Person name={students[1]} university="JRRMC"></Person>
        <Person name={students[2]} university="SIU"></Person>
        <Person name={students[3]} university="SIU"></Person>
        <Person></Person>
      </header>
    </div>
  );
  function Person(props){
    const personStyle ={
      border:'2px solid yellow',
      width:'400px'
    }
    console.log(props); //Object name: "Asima" university: "LU" // Object name: "Naima" university: "JRRMC" //Object name: "Arif" university: "SIU"
    return(
      <div style={personStyle}>  
        <h4>Name : {props.name}</h4>
        <h4>Student Of {props.university}</h4>
      </div>
    )
  }
  4th-portion end */

  /*5th-portion start 
  const products = [
    { name: 'Photoshop', price: '$90.00' },
    { name: 'Illustrator', price: '$60.00' },
    { name: 'PDF', price: '$6.00' }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <p>Pass Object Component</p>
        <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>-->> deStructure
      </header>
    </div>
  );
  function Product(props) {
    const productStyle = {
      border: '1px solid gray',
      borderRadius: '5px',
      backgroundColor: 'lightgray',
      height: '200px',
      width: '200px',
      float: 'left'
    }
    console.log(props);
    const {name, price} = props.product;//deStructure
    console.log(name, price);//deStructure
    return (
      <div style={productStyle}>
        <h3>{props.name}</h3>
        <h5>{props.price}</h5>
        <h3>{props.product.name}</h3>
        <h5>{props.product.price}</h5>
         <h3>{name}</h3>-->> deStructure
        <h5>{price}</h5>
        <button>Buy Now</button>
      </div>
    )
  }
  5th-portion end */
  /*6th-portion start 
  const nayoks = ['Razzak', 'Jasim', 'Alamgir', 'Salman', 'Sakib', 'Bappi'];
  // const nakoyNames = nayoks.map(nayok => nayok);
  // console.log(nakoyNames);

  const products = [
    { name: 'Photoshop', price: '$90.00' },
    { name: 'Illustrator', price: '$60.00' },
    { name: 'PDF', price: '$6.00' },
    { name: 'Premier El', price: '$249.99' }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <p>Create multiple components from an array of objects</p>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(prod => <Product asima={prod}></Product>)
        }
      </header>
    </div>
  );
  function Product(props) {
    const productStyle = {
      border: '1px solid gray',
      borderRadius: '5px',
      backgroundColor: 'lightgray',
      color: 'black',
      height: '200px',
      width: '200px',
      float: 'left'
    }
    console.log(props);
    const { name, price } = props.asima;//-->>> const { name, price } = { name: 'Photoshop', price: '$90.00' };
    console.log(name, price);
    return (
      <div style={productStyle}>
        <h3>{name}</h3>
        <h5>{price}</h5>
        <button>Buy Now</button>
      </div>
    )
  }

  6th-portion end */
  /*7th-portion start 
  const nayoks = ['Razzak', 'Jasim', 'Alamgir', 'Salman', 'Sakib', 'Bappi'];
  // const nakoyNames = nayoks.map(nayok => nayok);
  // console.log(nakoyNames);

  const products = [
    { name: 'Photoshop', price: '$90.00' },
    { name: 'Illustrator', price: '$60.00' },
    { name: 'PDF', price: '$6.00' },
    { name: 'Premier El', price: '$249.99' }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <p>Introduction to Component state</p>
        <Counter></Counter>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(prod => <Product asima={prod}></Product>)
        }
      </header>
    </div>
  );
  function Counter() {
    const [count, setCount] = useState(0);
    // /* 1st way:
    //   const handleIncrease = () => {
    //   console.log('clicked');
    //    const newCount = count + 1;
    //    setCount(newCount);
    // };* 1st way end
    // /* 2nd way:
    //   const handleIncrease = () => {setCount(count + 1)}
    //   <button onClick={handleIncrease}>Increase</button>; 
    //  2nd way end *
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count - 1)}>Decrease</button>
        <button onClick={()=>setCount(count + 1)}>Increase</button>
      </div>
    )
  }
  function Product(props) {
    const productStyle = {
      border: '1px solid gray',
      borderRadius: '5px',
      backgroundColor: 'lightgray',
      color: 'black',
      height: '200px',
      width: '200px',
      float: 'left'
    }
    console.log(props);
    const { name, price } = props.asima;//-->>> const { name, price } = { name: 'Photoshop', price: '$90.00' };
    console.log(name, price);
    return (
      <div style={productStyle}>
        <h3>{name}</h3>
        <h5>{price}</h5>
        <button>Buy Now</button>
      </div>
    )
  }

  7th-portion end */
  /*8th-portion start 
  8th-portion end */
  const products = [
    { name: 'Photoshop', price: '$90.00' },
    { name: 'Illustrator', price: '$60.00' },
    { name: 'PDF', price: '$6.00' },
    { name: 'Premier El', price: '$249.99' }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <p>Load dynamic data, API call useEffect integrate state</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(prod => <Product asima={prod}></Product>)
        }
      </header>
    </div>
  );
  function Counter() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    )
  }
  function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      console.log('Calling useEffect');
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        // .then(data=> console.log(data))
        .then(data => setUsers(data))
    }, [])
    return (
      <div>
        <h3>Dynamic Users: {users.length}</h3>
        <ul>
          {
            console.log(users)
          }
          {
            // users.map(user => <li>{user.name}</li>)
            // users.map(user => <li>{user.phone}</li>)
            users.map(user => <li>{user.email}</li>)
          }
        </ul>
      </div>
    )
  }
  function Product(props) {
    const productStyle = {
      border: '1px solid gray',
      borderRadius: '5px',
      backgroundColor: 'lightgray',
      color: 'black',
      height: '200px',
      width: '200px',
      float: 'left'
    }
    console.log(props);
    const { name, price } = props.asima;//-->>> const { name, price } = { name: 'Photoshop', price: '$90.00' };
    console.log(name, price);
    return (
      <div style={productStyle}>
        <h3>{name}</h3>
        <h5>{price}</h5>
        <button>Buy Now</button>
      </div>
    )
  }

}

export default App;