import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Picker,
  FlatList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const ThumbnailGallery = ({ videoList, setVideo, sortVideos }) => {
  const [sortTitle, setSortTitle] = useState();

  const renderVideos = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.item}>
          <Image
            style={styles.image}
            source={{
              uri: item.thumb,
            }}
          />
          <View style={styles.play}>
            <TouchableOpacity onPress={() => setVideo(item)}>
              <FontAwesome name="play" size={26} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.background}></View>
        </View>
        <Text style={{ fontSize: 12 }}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={sortTitle}
        style={{ height: 50, width: 200 }}
        onValueChange={(itemValue, itemIndex) => {
          setSortTitle(itemValue);
          sortVideos(itemValue);
        }}
      >
        <Picker.Item label="Video order" value="default" />
        <Picker.Item label="Title ascending" value="ascending" />
        <Picker.Item label="Title descending" value="descending" />
      </Picker>

      <View style={styles.videosListHolder}>
        <FlatList
          data={videoList}
          renderItem={renderVideos}
          numColumns={3}
          keyExtractor={(item) => item.thumb}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  card: {
    paddingVertical: 5,
    margin: 5,
    width: "30%",
    height: 150,
  },
  image: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  play: {
    opacity: 0.8,
    position: "absolute",
    zIndex: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    zIndex: 9,
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    top: 0,
    left: 0,
    opacity: 0.4,
  },
  pickerHolder: {
    paddingVertical: 5,
    width: "100%",
  },
  videosListHolder: {
    width: "100%",
    paddingBottom: 80,
  },
});

export default ThumbnailGallery;
