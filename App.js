import logo from './logo.svg';
import './App.css';

import AppBar from './components/AppBar';
import Banner from './components/Banner';
import Menu from './components/Menu';
import Pick from './components/Pick';
import Comments from './components/Comments';


function App() {
  return (
    <>
    <AppBar/>
    <Banner/>
    <Menu/>
    <Pick/>
    <Comments/>
    <div className='text-center my-3 small text-danger'>copyright 2023-2024</div>
    </>
    
  );
}

export default App;
