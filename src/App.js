// import logo from './logo.svg';
import './App.css';
import './components/body.css';
// import First from './components/first';
// import Second from './components/sec';
// import Navbar from './components/nav';
// import Footer from './components/footer';
// import Body from './components/content';
// import Car from './components/car';
// import Home from './components/Home';
import Counter from './components/counter';


function App() {
//   const x = 11;
// let text = "Goodbye";
// if (x < 10) {
//   text = "Hello";
// }

// const myElement = <h1>{text}</h1>;


// const carInfo = { name: "Ford", model: "Mustang" };
// const ar=[1,3,5,6,"hi"];
  return (
    <>
    {/* <Navbar/>
    <First></First>
    <Second></Second>
    <Body/>
    <Footer/>
    <Car/> */}
    {/* <Home Car={carInfo} bike="hero" bike2={ar}/> */}
    {/* <Home div="maruti"/> */}
    <Counter/>
    
    {/* { myElement} */}
    </>
  );
}

export default App;


// this code likha tha return ke andar but work nahi kar raha tha isliye commment kiya
// <div>
// <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>



// First ko call kiya hai return me kyoki hamne import First name se kiya hai kyoki hamara function name First tha 