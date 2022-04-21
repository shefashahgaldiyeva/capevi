import { Route, Routes } from 'react-router-dom';
import './App.css';
import Arrow from './components/Arrow';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

function App() {
    return (
        <div className="App">
        <Header/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        <Footer/>
        <Arrow/>
        
        </div>
    );
}

export default App;
