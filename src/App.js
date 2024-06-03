import './App.css';
import UserList from './components/userList';
import RegistrationForm from './components/formRegister';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import UserDetails from './components/userdetails';
import UpdateForm from './components/updateForm';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={UserList}/>
          <Route path="/register" Component={RegistrationForm}/>
          <Route path='userdetails' Component={UserDetails} />
          <Route path='formupdate' Component={UpdateForm}/>
        </Routes>
      </Router>
  );
}

export default App;
