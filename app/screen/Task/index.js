import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import { BackLogin, BackTask, TaskIcon } from "../../assets/images";
import Text from "../../component/Text";
import { Fonts, HEIGHT, WIDTH } from "../../assets/style";
import images from "../../assets/images";

function Task({ navigation, route }) {
  const [isEnable, setIsEnable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState();

  return (
    <View
      style={{
        width: WIDTH,
        height: HEIGHT,
        backgroundColor: "#fff",
        paddingTop: 20,
      }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ marginHorizontal: 16, alignContent: "center" }}>
          <View style={{ marginTop: 20, position: "absolute", left: 2 }}>
            <View>
              <View style={{ position: "relative", top: -3, left: 10 }}>
                <Text bold fontSize={24}>
                  Time Sheet
                </Text>
              </View>
            </View>
            <TouchableOpacity>
            <View
              style={{
                boxSizing: "border-box",
                position: "absolute",
                width: 343,
                flex: 0,
                left: 16,
                top: 50,
                backgroundColor: "#FFFFFF",
                borderWidth: 0.5,
                borderColor: "#A7A7A7",
                borderRadius: 12,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={images.TASK}
                  style={{
                    width: 40,
                    height: 40,
                    marginLeft: 16,
                    marginTop: 16,
                  }}
                />

                <Text
                  bold
                  fontSize={20}
                  style={{ marginLeft: 5, marginTop: 16 }}
                >
                  Developer New Feature
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 16,
                  marginTop: 16,
                }}
              >
                <Image
                  source={images.FLAG}
                  style={{
                    width: 12,
                    height: 16,
                  }}
                />
                <Text fontSize={11} marginLeft={5} color="#7A7A7A">
                  April 20,2023
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 16,
                  marginTop: 8,
                  marginRight: 16,
                }}
              >
                <Text fontSize={11} bold>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 16,
                  marginTop: 8,
                  marginRight: 16,
                  marginBottom: 16,
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#70A1FF",
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    borderRadius: 16,
                  }}
                >
                  <Text fontSize={11} bold color="#FFFF">
                    Present
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#CED1D4",
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    borderRadius: 16,
                    marginLeft: 5,
                  }}
                >
                  <Text fontSize={11} bold color="#FFFF">
                    08:00 - 17: 00
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            
            
              
            </TouchableOpacity>
            
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Task;
