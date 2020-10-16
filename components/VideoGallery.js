import React, { useState, useEffect, useRef } from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";
import videosJson from "../videosJson";
import ThumbnailGallery from "../widgets/ThumbnailGallery";

const VideoGallery = () => {
  const [video, setVideo] = useState(videosJson.categories[0].videos[0]);
  const [videoList, setVideoList] = useState(videosJson.categories[0].videos);

  const sortVideos = (sortingType) => {
    var i = (a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0);
    let newVideos = videoList;
    switch (sortingType) {
      case "ascending":
        newVideos = videoList.sort(i);
        break;
      case "descending":
        newVideos = videoList.reverse(i);
        break;
      default:
        newVideos = videoList.sort(i);
    }
    setVideoList(newVideos);
  };

  return (
    // <ScrollView>
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Test Video Gallery</Text>
      <VideoPlayer
        height={300}
        // playbackCallback={() => alert("bla")}
        videoProps={{
          //   onPlaybackStatusUpdate: () => alert("bla"),
          shouldPlay: true,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: {
            uri: video.sources[0],
          },
        }}
        inFullscreen={false}
      />
      <View style={styles.container}>
        <ThumbnailGallery
          videoList={videoList}
          setVideo={setVideo}
          sortVideos={sortVideos}
        />
      </View>
    </View>
    /* </ScrollView> */
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
  },
  imageHolder: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
  },
});

export default VideoGallery;
