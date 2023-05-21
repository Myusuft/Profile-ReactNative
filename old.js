import { StatusBar } from "expo-status-bar";
import { Component, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

function App() {
  let num = 1;

  const [addNumber, setNumber] = useState(0);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AddImage />
      <InputText />
      <Text>This is {addNumber}</Text>
      <TouchableOpacity
        onPress={() => setNumber(addNumber + 1)}
        style={{ backgroundColor: "gold" }}
      >
        <Text>BUTTON+</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setNumber(addNumber - 1)}
        style={{ backgroundColor: "grey" }}
      >
        <Text>BUTTON - </Text>
      </TouchableOpacity>
      <Increment />

      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
      <TextClass />
    </View>
  );
}
const AddImage = () => {
  return (
    <Image
      source={{ uri: "https://placeimg.com/640/480/arch" }}
      style={{ width: 300, height: 300 }}
    />
  );
};

const InputText = () => {
  return <TextInput style={{ borderWidth: 4, width: 300, marginTop: 10 }} />;
};
const styles = StyleSheet.create({
  container: {
    padding: 22,
    flex: 1,
    backgroundColor: "#fff",
  },
});

const Greeting = (props) => {
  return (
    <View>
      <Text>Halo, {props.name}!</Text>
    </View>
  );
};
const Increment = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    if (count + 1 >= 10) {
      Alert.alert("Max");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>{count}</Text>
      <TouchableOpacity
        title="Increment"
        onPress={handleIncrement}
        style={{ backgroundColor: "blue" }}
      >
        <Text>TOMBOL</Text>
      </TouchableOpacity>
    </View>
  );
};
class TextClass extends Component {
  render() {
    return (
      <View
        style={{ marginTop: 20, flexDirection: "row", borderWidth: 1, flex: 1 }}
      >
        <View style={{ borderWidth: 1, backgroundColor: "red", flex: 2 }} />
        <View style={{ borderWidth: 1, backgroundColor: "green", flex: 1 }} />
        <View style={{ borderWidth: 1, backgroundColor: "blue", flex: 1 }} />
      </View>
    );
  }
}

export default App;
