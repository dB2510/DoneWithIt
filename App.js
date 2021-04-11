import React from "react";
import { View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
// Object {
//   "fontScale": 1.100000023841858,
//   "height": 891.4285714285714,
//   "scale": 2.625,
//   "width": 411.42857142857144,
// }

export default function App() {
  return (
    // <View
    //   style={{
    //     backgroundColor: "#fff",
    //     flex: 1,
    //     flexDirection: "row", // horizontal
    //     justifyContent: "center", // main axis
    //     alignItems: "center", // secondary axis
    //     alignContent: "center",
    //     flexWrap: "wrap"
    //   }}
    // >
    //   <View style={{
    //     backgroundColor: "dodgerblue",
    //     width: 100,
    //     height: 100,
    //   }}/>
    //   <View style={{
    //     backgroundColor: "gold",
    //     width: 100,
    //     height: 100,
    //     top: 20,
    //     left: 20,
    //     position: "relative"
    //   }}/>
    //   <View style={{
    //     backgroundColor: "tomato",
    //     width: 100,
    //     height: 100,
    //   }}/>
    // </View>
    // <WelcomeScreen/>
    <ViewImageScreen/>
  );
}
