import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from "./components/minicomponents/Footer";
import Header from "./components/minicomponents/Header";
import Homepage from "./components/pages/Homepage";
import ResultsPage from "./components/pages/ResultPage";
import information from "./data/data.json";

function App() {
return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route
            path="/Item/:parameter"
            render={({ match }) => (
              <ResultsPage
                parameter={match.params.parameter}
                information={information}
              />
            )}
          />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;