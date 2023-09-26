import UserForm from "./components/UserForm";
import ButtonAppBar from "./shared/Header";
import UserList from "./components/UserList";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (<>
    <ButtonAppBar/>
    <Router>
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="/createUser" element={<UserForm/>}/>
      </Routes>
    </Router>
    </>
  )
  
}

export default App
