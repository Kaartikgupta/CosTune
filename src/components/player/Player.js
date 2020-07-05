import _ from "lodash";
import React, { Component } from "react";
import { Container } from "react-bootstrap";

import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./search_bar";
import VideoList from "./video_list";
import VideoDetail from "./video_detail";
import "./player.css";
const API_KEY = "AIzaSyBW0oSav4dxS16hVjK_VWsL1jJRDjzmpoI";

//  Create a new component.
class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch("Cyberpunk 2077 Teaser Trailer");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      // this.setState({ videos: videos });
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term);
    }, 1000);

    return (
      <Container>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </Container>
    );
  }
}

//  Take this component's generated HTML and put it
// on the page (in the DOM)
//ReactDOM.render(<Player />, document.querySelector(".container-fluid"));
export default Player;
