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
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <p>New Componet: Hurray</p>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

function Person(){
  return(
    <div className="wrapper">
      <h1>Sakib Hasan</h1>
      <h2 style={{color: 'white'}} >Sher Ali Gazi</h2>
  
    </div>
  );
}
function Friend(){
  return(
    <div className="wrapper1">
      <h1>Sakib Hasan</h1>
      <h2 style={{color: 'white'}} >Sher Ali Gazi</h2>
  
    </div>
  );
}
export default App;
