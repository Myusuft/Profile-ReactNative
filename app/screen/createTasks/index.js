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
import { BackLogin, BackTask } from "../../assets/images";
import Text from "../../component/Text";
import { Fonts, HEIGHT, WIDTH } from "../../assets/style";
import images from "../../assets/images";
import { Picker } from "@react-native-picker/picker";
import SelectDropdown from "react-native-select-dropdown";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

function CreateTasks({ navigation, route }) {
  const [isEnable, setIsEnable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState();
  const data = ["Present", "Leave", "Absent", "Sick"];
  const placeholder = "Select an option";

  //Datepicker
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateSelection = () => {
    const formattedDate = moment().format("MMM DD, YYYY");
    setSelectedDate(formattedDate);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date.toLocaleDateString('en-US'));
    hideDatePicker();
  };

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
              {/* <TouchableOpacity>
                <BackTask width={25} height={50} />
              </TouchableOpacity> */}

              <TouchableOpacity onPress={() => navigation.navigate("Task")}>
                <BackTask width={20} height={20} />
              </TouchableOpacity>

              <View style={{ position: "relative", top: -33, left: 90 }}>
                <Text bold fontSize={24}>
                  Time Sheet Form
                </Text>
              </View>
            </View>

            <View style={{ marginHorizontal: 1, marginTop: -10 }}>
              <View>
                <Text bold fontSize={16} color="#000">
                  Title
                </Text>
              </View>
            </View>
            <View
              style={{
                borderWidth: 1,
                marginTop: 8,
                borderColor: "#A7A7A7",
                backgroundColor: "#FFFF",
                borderRadius: 8,
                padding: 12,
                width: 350,
                height: 50,
              }}
            >
              <TextInput
                placeholder="Enter Task Title"
                placeholderTextColor={"#D3D3D3"}
              ></TextInput>
            </View>

            <View style={{ marginHorizontal: 1, marginTop: 25 }}>
              <View>
                <Text bold fontSize={16} color="#000">
                  Date
                </Text>
              </View>
            </View>
            {/* <View
              style={{
                borderWidth: 1,
                marginTop: 8,
                borderColor: "#A7A7A7",
                backgroundColor: "#FFFF",
                borderRadius: 8,
                padding: 12,
                width: 350,
                height: 50,
              }}
            >
              <TextInput
                placeholder="Select Date"
                placeholderTextColor={"#D3D3D3"}
              ></TextInput>
            </View> */}
            <View
              style={{
                borderWidth: 1,
                marginTop: 8,
                borderColor: "#A7A7A7",
                backgroundColor: "#FFFF",
                borderRadius: 8,
                width: 350,
                height: 50,
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "center",
                  paddingHorizontal: 12,
                }}
                onPress={showDatePicker}
              >
                <Text style={{ fontSize: 16, color: "#D3D3D3" }}>
                  {selectedDate ? selectedDate : "Select Date"}
                </Text>
              </TouchableOpacity>

              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>

            <View style={{ marginHorizontal: 1, marginTop: 25 }}>
              <View>
                <Text bold fontSize={16} color="#000">
                  Time
                </Text>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  marginTop: 8,
                  marginRight: 4,
                  borderColor: "#A7A7A7",
                  backgroundColor: "#FFFF",
                  borderRadius: 8,
                  padding: 12,
                  height: 50,
                }}
              >
                <TextInput
                  placeholder="Start Time"
                  placeholderTextColor="#D3D3D3"
                />
              </View>
              <View
                style={{
                  width: 20,
                  height: 5,
                  backgroundColor: "#000",
                  borderBottomWidth: 1,
                  borderBottomColor: "#FFF",
                  marginTop: 30,
                }}
              />
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  marginTop: 8,
                  marginLeft: 4,
                  borderColor: "#A7A7A7",
                  backgroundColor: "#FFFF",
                  borderRadius: 8,
                  padding: 12,
                  height: 50,
                }}
              >
                <TextInput
                  placeholder="End Time"
                  placeholderTextColor="#D3D3D3"
                />
              </View>
            </View>

            <View style={{ marginHorizontal: 1, marginTop: 20 }}>
              <View>
                <Text bold fontSize={16} color="#000">
                  Status
                </Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  marginTop: 8,
                  borderColor: "#A7A7A7",
                  backgroundColor: "#FFFF",
                  borderRadius: 8,
                  width: 350,
                  height: 50,
                  alignContent: "center",
                }}
              >
                <TouchableOpacity style={{ flex: 1, width: 350 }}>
                  <SelectDropdown
                    marginTop={-80}
                    style={{ marginTop: -80, width: 350 }}
                    data={data}
                    defaultValue={placeholder}
                    onSelect={(selectedItem) => console.log(selectedItem)}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ marginHorizontal: 1, marginTop: 25 }}>
              <View>
                <Text bold fontSize={16} color="#000">
                  Activities
                </Text>
              </View>
            </View>
            <View
              style={{
                borderWidth: 1,
                marginTop: 8,
                borderColor: "#A7A7A7",
                backgroundColor: "#FFFF",
                borderRadius: 8,
                padding: 12,
                width: 350,
                height: 146,
              }}
            >
              <TextInput
                placeholder="Write Your Activities"
                placeholderTextColor={"#D3D3D3"}
                multiline={true}
                numberOfLines={4}
                style={{
                  textAlignVertical: "top",
                }}
              ></TextInput>
            </View>

            <View style={{ marginTop: 27, height: 100, marginBottom: 50 }}>
              <TouchableOpacity
                // onPress={registerAuth}
                disabled={isEnable}
                style={{
                  opacity: isEnable ? 0.5 : 1,
                  backgroundColor: "#18DCFF",
                  borderRadius: 8,
                  paddingVertical: 12,
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                {isLoading ? (
                  <ActivityIndicator size="small" color="#FFFFFF" />
                ) : (
                  <Text bold fontSize={16}>
                    Submit
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default CreateTasks;
