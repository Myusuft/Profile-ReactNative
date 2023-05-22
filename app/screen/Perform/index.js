import {
  ScrollView,
  View,
} from "react-native";
import React, { useState } from "react";
import Text from "../../component/Text";
import { Fonts, HEIGHT, WIDTH } from "../../assets/style";

function Perform({ navigation, route }) {

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
              <View style={{ position: "relative", top: 20, left: 10 }}>
                <Text bold fontSize={24}>
                  Performance
                </Text>
              </View>
            </View>
            
            
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Perform;
