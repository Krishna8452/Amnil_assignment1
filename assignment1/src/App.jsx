import UserList from "./components/userList"
import UserForm from "./components/UserForm";
import ButtonAppBar from "./shared/Header";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <ButtonAppBar/>
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="/createUser" element={<UserForm/>}/>
      </Routes>
    </Router>
  )
}

export default App
