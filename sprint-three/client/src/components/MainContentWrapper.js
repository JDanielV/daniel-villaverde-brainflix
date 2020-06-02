import React from "react";
import VideoContentWrapper from "./VideoContentWrapper";
import VideosList from "./VideosList";
import MainVideo from "./MainVideo";
import axios from "axios";

class MainContentWrapper extends React.Component {
  apiLink = `http://localhost:5000`;
  videosListEndpoint = "/videos/";

  state = {
    videosList: [],
    mainVideo: {},
  };

  getVideosList = () => {
    axios.get(`${this.apiLink}${this.videosListEndpoint}`).then((response) => {
      console.log("Video list data is retrieved");
      this.setState({ videosList: response.data });
    });
  };

  getVideo = (videoId) => {
    axios
      .get(`${this.apiLink}${this.videosListEndpoint}${videoId}`)
      .then((response) => {
        console.log("Video data is retrieved");
        this.setState({ mainVideo: response.data[0] });
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

  render() {
    return (
      <div className="main-content">
        <MainVideo mainVideoDetails={this.state.mainVideo} />
        <div className="main-content__wrapper">
          <VideoContentWrapper
            commentsArray={this.state.mainVideo.comments}
            mainVideoDetails={this.state.mainVideo}
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
