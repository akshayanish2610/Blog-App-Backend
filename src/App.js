import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAll from './components/ViewAll';
import MyPost from './components/MyPost';
import AddPost from './components/AddPost';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>

        <Route path='/viewall' element={<ViewAll/>}/>
        <Route path='/post' element={<MyPost/>}/>
        <Route path='/add' element={<AddPost/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Registration/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
