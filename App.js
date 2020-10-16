import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import VideoGallery from "./components/VideoGallery";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <VideoGallery />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
});
