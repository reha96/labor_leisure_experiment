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
import MPL from "./Pages/MPL";
import Survey1 from "./Pages/Survey1";
import Survey2 from "./Pages/Survey2";
import Survey3 from "./Pages/Survey3";
import Survey4 from "./Pages/Survey4";
import Survey5 from "./Pages/Survey5";
import EndSurvey from "./Pages/EndSurvey";
import Survey6 from "./Pages/Survey6";
import Survey7 from "./Pages/Survey7";

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
          <Route path=":userId/mpl" element={<MPL />} />
          <Route path=":userId/confirm" element={<Confirm />} />
          <Route path=":userId/lotl" element={<LotteryLose />} />
          <Route path=":userId/lotw" element={<LotteryWin />} />
          <Route path=":userId/tasks" element={<Tasks />}>
            <Route path=":userId/tasks/leisure" element={<Leisure />} />
            <Route path=":userId/tasks/labor" element={<Labor />} />
          </Route>
          <Route path=":userId/end" element={<End />} />
          <Route path=":userId/s1" element={<Survey1 />} />
          <Route path=":userId/s2" element={<Survey2 />} />
          <Route path=":userId/s3" element={<Survey3 />} />
          <Route path=":userId/s4" element={<Survey4 />} />
          <Route path=":userId/s5" element={<Survey5 />} />
          <Route path=":userId/s6" element={<Survey6 />} />
          <Route path=":userId/s7" element={<Survey7 />} />
          <Route path=":userId/endsurvey" element={<EndSurvey />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
