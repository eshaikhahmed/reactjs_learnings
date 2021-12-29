import logo from './logo.svg';
import './App.css';
import ListRendering from './components/list-renderings/ListRendering';
import EmployeeList from './components/list-rendering-index-pattern/EmployeeList';
import Stylesheet from './components/stylesheet/Stylesheet';
import Inline from './components/stylesheet/Inline'
import CssModule from './components/stylesheet/CssModule';
import EmployeeForm from './components/forms/EmployeeForm';

function App() {
  return (
    <div>
        {/* <ListRendering /> */}
        <EmployeeList />
        <Stylesheet />
        <CssModule />
        <EmployeeForm />
    </div>
  );
}

export default App;
