import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  var person = {name:"solimullah",
                job:"matikata"}
    
    var person2 = {
      name: "monika",
      job: "khawa and ghum"
    }
    var style ={
      color: "black",
      backgroundColor : "yellow"
    }
    const nayok = ['alom', 'jalom', 'palom']
    const products =[
      {name:"kalllu",price:"50"},
      {name:"jhallu",price:"80"},
      {name:"illu",price:"89"}
    ]
  const prooductNames = products.map(product => product.name );
  console.log(prooductNames)
  const nayokNames = nayok.map(nayok => nayok)
  console.log(nayokNames)
  return (
   
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p style={style}>my react app {5*8} {person.name +" "+ person.job} <h1 style={{backgroundColor:"cyan"}}>another one:  {person2.name +" "+person2.job}</h1>  <br/>
          this is the second line
        </p> */}
        
        <p>i am react person</p>
        <ul>{
          products.map(product => <Product> product{product} </Product>  )
            }</ul>
        <Counter>new one</Counter>
        <Users></Users>
        <Person name="the hulo bilai"></Person>
        <Person name ="the gulo billai"></Person>
        <Person name="the gaal bilai"></Person>
        <Person name={nayok[2]}></Person>
        <Product name="table"></Product>
        <Product name={products[0].name} value={products[0].price}></Product>
        {/* <Product product={products[1]}></Product> */}
        <Product></Product>
        <p>
          <ul>
            {
              nayok.map(nayok => <li>{nayok}</li>  )
            }
            {
              products.map(product=> <li>{product.name} {product.price}</li> )
            }
          </ul>
          <ul>
            <li>{nayok[0]}</li>
          </ul>
        </p>
      </header>
    </div>
  );
}
function Person(props){
  return( <div style={{border:"2px solid red", color:"yellow",marginBottom:"5px"}}>
    <h1>name:{props.name} </h1>
  <h3>something is better than nothing</h3>
</div>)
  }

function Product(props){
  const ProductStyle={
    border:"2px solid black",
    borderRadius:"5px",
    width :'500px',
    height:"250px"
    
  }

  return(
    <div style={ProductStyle}>
      <h4>product name:{props.name}</h4>
      <h2>price:{props.value}</h2>
      <h4>Buy now:</h4>
    </div>
  )
 }
 function Users(){
  const [user,setUser] = useState([])
  useEffect (()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res =>res.json())
    .then (data => setUser(data))
    
  },[])

   return(
     <div>
       <h1>Dynamic User:{user.length}</h1>
   <ul>
     {
       user.map(users => <li>{users.name}</li> )
     }
   </ul>
     </div>
   )
 }
 


 function Counter(){
   const [count,setCount] = useState(500)
  const handleIncrease =()=> {
    const newCount = count+1;
    setCount(newCount)
  }

  
   return(
     <div>
       <h1>count:{count}</h1>
       <button onClick ={()=>setCount(count-1)}  >Decrease</button>
       <button onClick={handleIncrease}>Increae</button>
     </div>
   )
 }
  export default App;
