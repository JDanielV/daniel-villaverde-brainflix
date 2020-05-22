import React from "react";
import "./styles/styles.css";
import Header from "./components/Header";
import MainContentWrapper from "./components/MainContentWrapper";
import VideoUpload from "./components/VideoUpload";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import axios from "axios";

const API_KEY = "?api_key=421e4c50-688c-40be-b94e-48ad7fe69918";

class App extends React.Component {
  // API URL - access this with 'this.apiLink'
  apiLink = `https://project-2-api.herokuapp.com`;
  videosListEndpoint = "/videos/";
  mainVideoEndpoint = "";

  state = {
    videosList: [],
    mainVideo: {},
  };

  getVideosList() {
    axios
      .get(`${this.apiLink}${this.videosListEndpoint}${API_KEY}`)
      .then((response) => {
        console.log("Video list data is retrieved");
        this.setState({ videosList: response.data });
        console.log(this.state.videosList);
      });
  }

  getVideo(videoId) {
    axios
      .get(`${this.apiLink}${this.videosListEndpoint}${videoId}${API_KEY}`)
      .then((response) => {
        console.log("Video data is retrieved");

        this.setState({ mainVideo: response.data });
        console.log(this.state.mainVideo);
      });
  }

  componentDidMount() {
    this.getVideosList();
    this.getVideo("1af0jruup5gu");
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/video-upload" component={VideoUpload} />
            <MainContentWrapper
              commentsArray={this.state.mainVideo.comments}
              videosArray={this.state.videosList}
              mainVideoDetails={this.state.mainVideo}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
