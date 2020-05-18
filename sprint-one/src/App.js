import React from "react";
import "./styles/styles.css";
import Header from "./components/Header";
import MainContentWrapper from "./components/MainContentWrapper";

class App extends React.Component {
  state = {
    sideVideosList: [
      {
        id: 1,
        title: "Become A Travel Pro In One Easy Lesson",
        user: "Todd Welch",
        thumbnailUrl: "assets/Images/video-list-1.jpg",
      },
      {
        id: 2,
        title: "Les Houches The Hidden Gem Of The Chamonix",
        user: "Cornelia Blair",
        thumbnailUrl: "assets/Images/video-list-2.jpg",
      },
      {
        id: 3,
        title: "Travel Health Useful Medical Information For",
        user: "Glen Harper",
        thumbnailUrl: "assets/Images/video-list-3.jpg",
      },
      {
        id: 4,
        title: "Cheap Airline Tickets Great Ways To Save",
        user: "Emily Harper",
        thumbnailUrl: "assets/Images/video-list-4.jpg",
      },
      {
        id: 5,
        title: "Take A Romantic Break In A Boutique Hotel",
        user: "Ethan Owen",
        thumbnailUrl: "assets/Images/video-list-5.jpg",
      },
      {
        id: 6,
        title: "Choose The Perfect Accommodations",
        user: "Lydia Perez",
        thumbnailUrl: "assets/Images/video-list-6.jpg",
      },
      {
        id: 7,
        title: "Cruising Destination Ideas",
        user: "Timothy Austin",
        thumbnailUrl: "assets/Images/video-list-7.jpg",
      },
      {
        id: 8,
        title: "Train Travel On Track For Safety",
        user: "Scotty Cranmer",
        thumbnailUrl: "assets/Images/video-list-8.jpg",
      },
    ],

    mainVideo: {
      id: 1,
      title: "BMX Rampage: 2018 Highlights",
      user: "By Red Cow",
      timestamp: "12/18/2018",
      videoUrl: "VIDEO URL HERE",
      imageUrl: "IMAGE URL HERE",
      views: "1,001,023",
      likes: "110,985",
      duration: 42,
      description:
        "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
      commentsList: [
        {
          name: "Micheal Lyons",
          timestamp: "12/18/2018",
          comment:
            "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
        },
        {
          name: "Gary Wong",
          timestamp: "12/12/2018",
          comment:
            "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        },
        {
          name: "Theodore Duncan",
          timestamp: "11/15/2018",
          comment:
            "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
        },
      ],
    },
  };

  render() {
    return (
      <div className="App">
        <Header />
        <MainContentWrapper
          commentsArray={this.state.mainVideo.commentsList}
          videosArray={this.state.sideVideosList}
          mainVideoDetails={this.state.mainVideo}
        />
      </div>
    );
  }
}

export default App;
