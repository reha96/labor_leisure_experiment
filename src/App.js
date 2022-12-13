import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Home2 from "./Pages/Home2";
import Home3 from "./Pages/Home3";
import Confirm from "./Pages/Confirm";
import Tasks from "./Pages/Tasks";
import Labor from "./Components/Labor";
import LaborPractice from "./Components/LaborPractice";
import Leisure from "./Components/Leisure";
import LeisurePractice from "./Components/LeisurePractice";
import End from "./Pages/End";
import TasksPractice from "./Pages/TasksPractice";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import LotteryWin from "./Pages/LotteryWin";
import LotteryLose from "./Pages/LotteryLose";
import Home1 from "./Pages/Home1";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="id" element={<Home1 />} />
          <Route path=":userId/next" element={<Home2 />} />
          <Route path=":userId/next2" element={<Home3 />} />
          <Route path=":userId/practice" element={<TasksPractice />}>
            <Route path=":userId/leisure" element={<LeisurePractice />} />
            <Route path=":userId/labor" element={<LaborPractice />} />
          </Route>
          <Route path=":userId/confirm" element={<Confirm />} />
          <Route path=":userId/lotl" element={<LotteryLose />} />
          <Route path=":userId/lotw" element={<LotteryWin />} />
          <Route path=":userId/tasks" element={<Tasks />}>
            <Route path=":userId/tasks/leisure" element={<Leisure />} />
            <Route path=":userId/tasks/labor" element={<Labor />} />
          </Route>
          <Route path=":userId/end" element={<End />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
