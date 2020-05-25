import React from "react";
import "./styles/styles.css";
import Header from "./components/Header";
import MainContentWrapper from "./components/MainContentWrapper";
import VideoUpload from "./components/VideoUpload";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import axios from "axios";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Redirect exact from="/" to="/videos" />
          <Switch>
            <Route
              path="/videos/"
              exact
              render={(props) => <MainContentWrapper {...props} />}
            />
            <Route
              path="/videos/:id"
              render={(props) => <MainContentWrapper {...props} />}
            />
            <Route path="/video-upload" component={VideoUpload} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
