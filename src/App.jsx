import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Card from "./components/Card.jsx";
import CourseInfo from "./components/CourseInfo.jsx";
import Home from "./pages/Home.jsx";
import { courses } from "./data/courses.js";

function App() {
  return (
    <>     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/courses" element={<Courses />} /> */}
          <Route path="/course-info" element={<CourseInfo course={courses[0]}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
