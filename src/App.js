import FrontPage from './FrontPage'
import AllFellows from './AllFellows'
import AllProjects from './AllProjects'
import './App.css';

function App() {
  return (
    <div className="wrapper">
    
    <div className="pages">
    <FrontPage/>
    </div>
    <div className="pages">
    <AllFellows/>
    </div>
    <div className="pages">
    <AllProjects/>
    </div>
    </div>
    
  );
}

export default App;
