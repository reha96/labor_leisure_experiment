import {BrowserRouter as Router,  
  Routes, Route} from 'react-router-dom'
import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Home2 from './Pages/Home2';
import Home3 from './Pages/Home3';
import Confirm from './Pages/Confirm';
import Tasks from './Pages/Tasks';
import Labor from './Components/Labor';
import LaborPractice from './Components/LaborPractice';
import Leisure from './Components/Leisure';
import LeisurePractice from './Components/LeisurePractice';
import End from './Pages/End';
import TasksPractice from './Pages/TasksPractice';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import LotteryWin from './Pages/LotteryWin';
import LotteryLose from './Pages/LotteryLose';
import Home1 from './Pages/Home1';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="id" element={<Home1 />} />
          <Route path="next" element={<Home2 />} />
          <Route path="next2" element={<Home3 />} />
          <Route path="practice" element={<TasksPractice />}>
            <Route path="leisure" element={<LeisurePractice />} />
            <Route path="labor" element={<LaborPractice/>}/>
          </Route>
          {/* <Route path="practicealt" element={<TasksPracticeAlt />}>
            <Route path="leisurealt" element={<LeisurePracticeAlt />} />
            <Route path="labor" element={<LaborPractice/>}/>
          </Route> */}
          
          <Route path="confirm" element={<Confirm />} />
          <Route path='lotl' element={<LotteryLose/>}/>
          <Route path="tasks" element={<Tasks />}>
            <Route path="leisure" element={<Leisure />} />
            <Route path="labor" element={<Labor/>}/>
          </Route>
          {/* <Route path="tasksalt" element={<TasksAlt />}>
            <Route path="leisurealt" element={<LeisureAlt />} />
            <Route path="labor" element={<Labor/>}/>
          </Route> */}
          <Route path='end' element={<End/>}/>
          <Route path='lotwin' element={<LotteryWin/>}/>
          <Route path='lotl' element={<LotteryLose/>}/>
        </Routes>
     </Router>
    </div>
  );
}
  
export default App;
