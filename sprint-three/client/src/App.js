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
  withRouter,
} from "react-router-dom";
import axios from "axios";

class App extends React.Component {
  apiLink = `http://localhost:5000`;
  videosListEndpoint = "/videos/";
  uploadVideo = (event, title, descr, videoId) => {
    event.preventDefault();
    const newUploadData = {
      title: title,
      description: descr,
    };

    axios
      .post(`${this.apiLink}${this.videosListEndpoint}`, newUploadData)
      .then((response) => {
        this.props.history.push("/videos");
      })
      .catch((err) => console.log(err));
    console.log("we finished uploading video");
  };
  render() {
    return (
      <div className="App">
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
          <Route
            path="/video-upload"
            render={(props) => (
              <VideoUpload uploadVideo={this.uploadVideo} {...props} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
