import {
  View,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  HEIGHT,
  Shadow,
  WIDTH,
  horizontalScale,
  verticalScale,
} from "../../assets/style";

import Text from "../../component/Text";
import images from "../../assets/images";
const Profile = () => {
  return (
    <View>
      <ImageBackground
        source={images.BG_PROFILE}
        resizeMode="cover"
        style={{
          width: WIDTH,
          height: 495,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            borderWidth: 2,
            marginTop: 80,
            borderRadius: 90,
            borderColor: "#FBD2A5",
          }}
        >
          <Image
            source={images.IMG_PERSON2}
            style={{
              width: 120,
              height: 120,
            }}
          />
        </TouchableOpacity>
        <View style={{ marginTop: 16, alignItems: "center" }}>
          <Text bold fontSize={20}>
            Muhammad Yusuf
          </Text>
          <Text bold fontSize={18} color="#909090">
            React Native Developer
          </Text>
        </View>
      </ImageBackground>

      <View style={{ marginHorizontal: 16, marginTop: -190 }}>
        <View
          style={[
            {
              padding: 16,
              borderRadius: 12,
              backgroundColor: "#FFFF",
            },
            Shadow,
          ]}
        >
          <View>
            <DataProfil kolom="ID" isi="A20123" />
            <DataProfil kolom="Email" isi="mhyusuft@gmail.com" />
            <DataProfil kolom="Date Of Birth" isi="14 July 2003" />
            <View style={{ flexDirection: "row" }}>
              <Text bold style={{ flex: 1 }}>
                Gender
              </Text>
              <Text
                bold
                color="#A7A7A7"
                style={{ flex: 1, textAlign: "right" }}
              >
                Male
              </Text>
            </View>
          </View>
        </View>

        <View
          style={[
            {
              padding: 16,
              borderRadius: 12,
              backgroundColor: "#FFFF",
              marginTop: 20,
            },
            Shadow,
          ]}
        >
          <View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "column" }}>
                <Text bold style={{ flex: 1 }}>
                  Team
                </Text>
                <Text bold color="#A7A7A7" style={{ flex: 1 }}>
                  React Native
                </Text>
              </View>
              <Image
                source={images.IMG_TEAM}
                style={{
                  marginLeft: 150,
                  flex: 1,
                  resizeMode: "contain",
                  width: 96,
                  height: 35,
                }}
              />
            </View>
          </View>
        </View>

        <View
          style={[
            {
              padding: 16,
              borderRadius: 12,
              backgroundColor: "#FFFF",
              marginTop: 20,
            },
            Shadow,
          ]}
        >
          <View
            style={{
              borderBottomWidth: 1,
              paddingBottom: 10,
              borderColor: "#D3D3D3",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={images.GUARD}
                style={{
                  resizeMode: "contain",
                  width: 96,
                  height: 35,
                }}
              />
              <Text bold style={{ flex: 1 }}>
                Privacy and Security
              </Text>
              <Image
                source={images.ARROW}
                style={{
                  resizeMode: "contain",
                  width: 20,
                  height: 20,
                }}
              />
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              paddingBottom: 10,
              paddingTop: 10,
              borderColor: "#D3D3D3",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={images.HELP}
                style={{
                  resizeMode: "contain",
                  width: 96,
                  height: 35,
                }}
              />
              <Text bold style={{ flex: 1 }}>
                Help
              </Text>
              <Image
                source={images.ARROW}
                style={{
                  resizeMode: "contain",
                  width: 20,
                  height: 20,
                }}
              />
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              paddingBottom: 10,
              paddingTop: 10,
              borderColor: "#D3D3D3",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={images.ABOUT}
                style={{
                  resizeMode: "contain",
                  width: 96,
                  height: 35,
                }}
              />
              <Text bold style={{ flex: 1 }}>
                About Us
              </Text>
              <Image
                source={images.ARROW}
                style={{
                  resizeMode: "contain",
                  width: 20,
                  height: 20,
                }}
              />
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              paddingBottom: 10,
              paddingTop: 10,
              borderColor: "#D3D3D3",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={images.LOG_OUT}
                style={{
                  resizeMode: "contain",
                  width: 96,
                  height: 35,
                }}
              />
              <Text bold style={{ flex: 1 }}>
                Logout
              </Text>
              <Image
                source={images.ARROW}
                style={{
                  resizeMode: "contain",
                  width: 20,
                  height: 20,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const DataProfil = (props) => {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Text bold style={{ flex: 1 }}>
          {props.kolom}
        </Text>
        <Text bold color="#A7A7A7" style={{ flex: 1, textAlign: "right" }}>
          {props.isi}
        </Text>
      </View>
      <View
        style={{
          borderTopWidth: 1,
          borderColor: "#D3D3D3",
          marginVertical: 13,
        }}
      />
    </View>
  );
};
const AppInfo = (props) => {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={images.PRIVACY}
          style={{
            marginLeft: 150,
            flex: 1,
            resizeMode: "contain",
            width: 96,
            height: 35,
          }}
        />
        <Text bold style={{ flex: 1 }}>
          {props.kolom}
        </Text>
        <Image
          source={images.ARROW}
          style={{
            marginLeft: 150,
            flex: 1,
            resizeMode: "contain",
            width: 96,
            height: 35,
          }}
        />
      </View>
      <View
        style={{
          borderTopWidth: 1,
          borderColor: "#D3D3D3",
          marginVertical: 13,
        }}
      />
    </View>
  );
};

export default Profile;
