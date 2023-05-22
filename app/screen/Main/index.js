import { View, Text, Button, Image } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../Profile";
import Home from "../Home";
import Perform from "../Perform";
import Task from "../Task";
import Leads from "../Canvas";
import CreateTasks from "../createTasks";

import images, {
  HomeIcon,
  ProfileIcon,
  TaskIcon,
  PerformIcon,
  CanvasIcon,
} from "../../assets/images";
import { TouchableOpacity } from "react-native-gesture-handler";

const Tab = createBottomTabNavigator();
const AddBarButton = () => (
  <View>
    <TouchableOpacity style={{ alignItems: "center" }}>
      <Image
        source={images.ADD_LEADS}
        resizeMode="cover"
        height={25}
        width={25}
        style={{
          top: -9,
          alignItems: "center",
        }}
      />
    </TouchableOpacity>
  </View>
);
const Main = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "#04325F",
          tabBarInactiveTintColor: "#CED1D4",
          tabBarIcon: ({ focused, color, size }) => {
            let tabBarIcon = {
              Home: <HomeIcon width={size} height={size} fill={color} />,
              Task: <TaskIcon width={size} height={size} fill={color} />,
              Add: <AddBarButton />,
              Perform: <PerformIcon width={size} height={size} fill={color} />,
              Profile: <ProfileIcon width={size} height={size} fill={color} />,
            };
            return <View>{tabBarIcon[route.name]}</View>;
          },
          tabBarStyle: {
            paddingBottom: 10,
            paddingTop: 10,
            height: 70,
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Task" component={Task} />
        <Tab.Screen
          name="Add"
          component={CreateTasks}
          options={{
            tabBarStyle: { display: "none" },
          }}
        />
        <Tab.Screen name="Perform" component={Perform} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </View>
  );
};

export default Main;
