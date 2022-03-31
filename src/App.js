import logo from './logo.svg';
import './App.css';
import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';

/*
const num = 5656;
const singer = {name:"Mahfuz", job: "Male singer"}
const singer1 = {name:"Eva", job: "Female singer"}

const singerStyle ={
  backgroundColor:'blue',
  color: 'white',
}
*/
/*function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <div className='numStyle'>
        <p>Number: {num+4444}</p>
      </div>
      <div className="music">
        <p style={singerStyle}>Name: {singer.name} {singer.job}</p>
        <p style={{backgroundColor:'blue',color: 'white',}}>Name: {singer1.name} {singer1.job}</p>
      </div>
    </div>
  );
}
*/

function App(){
  return(
    <div className="App">
      <Person nayok = "Rubel" nayika = "Bithi"></Person>
      <Person nayok = "Manna" nayika = "Moushumi"></Person>
      <Person nayok = "Riaj" nayika = "shabnur"></Person>
      <p>New Componet: Hurray</p>
      <Friend name = "A" from="Childhood"></Friend>
      <Friend name = "B" from="school"></Friend>
      <Friend name = "D" from="University"></Friend>
    </div>
  );
}

function Person(props){
  return(
    <div className="wrapper">
      <h1>{props.nayok}</h1>
      <p>{props.nayika}</p>
  
    </div>
  );
}
function Friend(props){
  return(
    <div className="wrapper1">
      <h1>{props.name}</h1>
      <p>{props.from}</p>
    </div>
  );
}
export default App;
