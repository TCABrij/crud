import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Filter_list from "./components/Navbar";
import Users from './components/Users'
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <>
      <Router>
        <h1 className="proj-title">Database</h1>
        <Filter_list />
        <Routes>
          <Route path="" element={<Users/>}></Route>
          <Route path="/create" element={<CreateUser/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
