import './App.css';
import { Route, Routes } from "react-router-dom"
// import Directory from "./pages/Directory"
import Employee from "./pages/Employee"
import Main from "./pages/Main"
// import Nav from "./components/Nav"
// import EmployeeList from './components/EmployeeList';
// import EmployeeListItem from './components/EmployeeListItem';


function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/directory" element={<Directory />} /> */}
        <Route path="/employee/:id" element={<Employee />} />
      </Routes>
    </div>
  );
}

export default App;
