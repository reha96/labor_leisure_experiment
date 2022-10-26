import {BrowserRouter as Router, Link, 
  Routes, Route} from 'react-router-dom'
import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Home2 from './Pages/Home2';
import Confirm from './Pages/Confirm';
import Tasks from './Pages/Tasks';
import Labor from './Components/Labor';
import LaborPractice from './Components/LaborPractice';
import Leisure from './Components/Leisure';
import LeisurePractice from './Components/LeisurePractice';
import End from './Pages/End';
import TasksAlt from './Pages/TasksAlt';
import LeisureAlt from './Components/LeisureAlt';
import TasksPractice from './Pages/TasksPractice';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
  
function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/next" element={<Home2 />} />
          <Route path="/next/tasksp" element={<TasksPractice />}>
            <Route path="leisure" element={<LeisurePractice />} />
            <Route path="labor" element={<LaborPractice/>}/>
          </Route>
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/tasks" element={<Tasks />}>
            <Route path="leisure" element={<Leisure />} />
            <Route path="labor" element={<Labor/>}/>
          </Route>
          <Route path="/tasksalt" element={<TasksAlt />}>
            <Route path="leisurealt" element={<LeisureAlt />} />
            <Route path="labor" element={<Labor/>}/>
          </Route>
          <Route path='/end' element={<End/>}/>
        </Routes>
     </Router>
    </div>
  );
}
  
export default App;
