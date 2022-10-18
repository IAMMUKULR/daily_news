import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import LoadingBar from "react-top-loading-bar";
import NewsComponent from "./components/NewsComponent";

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <NewsComponent
                setprogress={setProgress}
                key="general"
                category="General"
              />
            }
          />

          <Route
            exact
            path="/business"
            element={
              <NewsComponent
                setprogress={setProgress}
                key="business"
                category="Business"
              />
            }
          />

          <Route
            exact
            path="/sports"
            element={
              <NewsComponent
                setprogress={setProgress}
                key="sports"
                category="Sports"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <NewsComponent
                setprogress={setProgress}
                key="entertainment"
                category="Entertainment"
              />
            }
          />
          <Route
            exact
            path="/politics"
            element={
              <NewsComponent
                setprogress={setProgress}
                key="politics"
                category="Politics"
              />
            }
          />

          <Route
            exact
            path="/health"
            element={
              <NewsComponent
                setprogress={setProgress}
                key="health"
                category="Health"
              />
            }
          />

          <Route
            exact
            path="/science"
            element={
              <NewsComponent
                setprogress={setProgress}
                key="science"
                category="Science"
              />
            }
          />

          <Route
            exact
            path="/technology"
            element={
              <NewsComponent
                setprogress={setProgress}
                key="technology"
                category="Technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
