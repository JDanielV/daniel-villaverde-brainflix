import React from "react";
import VideoContentWrapper from "./VideoContentWrapper";
import VideosList from "./VideosList";
import MainVideo from "./MainVideo";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import axios from "axios";

const API_KEY = "?api_key=421e4c50-688c-40be-b94e-48ad7fe69918";

class MainContentWrapper extends React.Component {
  apiLink = `https://project-2-api.herokuapp.com`;
  videosListEndpoint = "/videos/";

  state = {
    videosList: [],
    mainVideo: {},
  };

  getVideosList = () => {
    axios
      .get(`${this.apiLink}${this.videosListEndpoint}${API_KEY}`)
      .then((response) => {
        console.log("Video list data is retrieved");
        this.setState({ videosList: response.data });
      });
  };

  getVideo = (videoId) => {
    axios
      .get(`${this.apiLink}${this.videosListEndpoint}${videoId}${API_KEY}`)
      .then((response) => {
        console.log("Video data is retrieved");

        this.setState({ mainVideo: response.data });
      });
  };

  componentDidMount() {
    this.getVideosList();
    this.getVideo("1af0jruup5gu");
  }

  componentDidUpdate(previousProps) {
    const oldVideoId = previousProps.match.params.id;
    const newVideoId = this.props.match.params.id;
    if (newVideoId === oldVideoId) {
      console.log("same video ID");
    } else {
      console.log("getting new video");
      this.getVideo(newVideoId);
    }
  }

  // SubmitComment function in parent, catching
  // the "comment" input from CommentsSection
  submitComment = (event, comment, videoId) => {
    event.preventDefault();

    const name = "Anon User";
    const commentObj = { name: name, comment: comment };

    axios
      .post(
        `${this.apiLink}${this.videosListEndpoint}${videoId}/comments${API_KEY}`,
        commentObj
      )
      .then((response) => {
        // console.log(response.data);
        this.getVideo(videoId);
      })
      .catch((err) => console.log(err));
    console.log("we finished posting");
  };

  render() {
    return (
      <div className="main-content">
        <MainVideo mainVideoDetails={this.state.mainVideo} />
        <div className="main-content__wrapper">
          <VideoContentWrapper
            commentsArray={this.state.mainVideo.comments}
            mainVideoDetails={this.state.mainVideo}
            submitComment={this.submitComment}
          />
          <VideosList
            videosArray={this.state.videosList}
            mainVideoId={this.state.mainVideo.id}
          />
        </div>
      </div>
    );
  }
}

export default MainContentWrapper;
