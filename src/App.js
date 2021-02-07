import FrontPage from './FrontPage'
import AllFellows from './AllFellows'
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
    </div>
    
  );
}

export default App;
