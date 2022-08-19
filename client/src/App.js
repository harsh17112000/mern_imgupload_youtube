import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/register' element={ <Register />} />
      </Routes>
     
    </>
  );
}

export default App;
