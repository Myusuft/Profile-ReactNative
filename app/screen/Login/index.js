import {
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import images, { EyeIcon, EyeSlashIcon } from "../../assets/images";
import { Fonts, HEIGHT, WIDTH } from "../../assets/style";
import Text from "../../component/Text";
import Satelite from "../../services/satelite";

import { store } from "../../store/storage";
import { saveProfile } from "../../store/action/actionProfile";
const { dispatch } = store;

const Login = ({ navigation, route }) => {
  const [isEnable, setIsEnable] = useState(true);
  //useState bersifat asyncronus butuh waktu
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [visible, setVisible] = useState(true);
  const [errorMaIL, seteErorMaIL] = useState("");
  const [errorPass, seteErorPass] = useState("");
  const [isLoading, setisLoading] = useState(false);
  // custom hook
  // ketika state ada perubahan  akan meload ulang mencoba membaca kembali state

  useEffect(() => {
    validation();
  }, [password, email]); //ketika ada perubahan akan dilakukan useEffect

  const validation = () => {
    let vmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email && password) {
      if (password.length < 8 && password.length < 8) {
        seteErorPass("password harus 8 karakter");
      } else {
        seteErorPass("");
      }
      setIsEnable(false);

    } else {
      if (password) {
        seteErorPass("");
      } else {
        seteErorPass("Password harus diisi");
      }
      if (email) {
        seteErorMaIL("");
      } else {
        seteErorMaIL("Email harus diisi");
      }

      setIsEnable(true);
    }
  };
  loginAuth = async () => {
    const body = {
      email: email,
      password: password,
    };
    setIsEnable(true);
    setisLoading(true);
    try {
      const login = await Satelite.post("/auth/login", body);
      console.log(JSON.stringify(login.data, null, 2));
      navigation.navigate("Main");
      dispatch(saveProfile(res.data));
    } catch (error) {
      console.log(JSON.stringify(error.response, null, 2));
      //  seteErorMaIL("not valid");
      //  seteErorPass("not valid");
    } finally {
      //dieksekusi ketika response selesai
      setisLoading(false);
      setIsEnable(false);
    }
  };
  return (
    <ImageBackground
      style={{ width: WIDTH, height: HEIGHT }}
      resizeMode="cover"
      source={images.BG_SCREEN}
    >
      <View style={{ marginHorizontal: 16 }}></View>

      <View style={{ marginTop: 90, marginHorizontal: 16 }}>
        <Text fontSize={16} color={"#fff"}>
          Email
        </Text>
        <View
          style={{
            marginTop: 8,

            backgroundColor: "#273C75",
            borderRadius: 8,
            borderWidth: 1,
            borderColor: errorMaIL ? "#EA8685" : "#132040",
            padding: 12,
          }}
        >
          <TextInput
            value={email}
            // keyboardType={"email-address"}
            // autoCapitalize="none"
            style={{
              color: "#fff",
              fontSize: 16,

              fontFamily: Fonts.Nunito.Regular,
            }}
            placeholder="Enter Your Email"
            placeholderTextColor={"#D3D3D3"}
            onChangeText={(value) => {
              console.log("valu mail", value);
              setEmail(value);
              validation();
            }}
          />
        </View>
        <View style={{ position: "absolute", bottom: -25, right: 5 }}>
          <Text color="#EA8685">{errorMaIL}</Text>
        </View>
      </View>

      <View style={{ marginTop: 27, marginHorizontal: 16 }}>
        <Text fontSize={16} color={"#fff"}>
          Password
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: errorPass ? "#EA8685" : "#132040",
            marginTop: 8,

            backgroundColor: "#273C75",
            borderRadius: 8,
            padding: 12,
          }}
        >
          <TextInput
            value={password}
            secureTextEntry={visible}
            style={{
              color: "#fff",
              fontSize: 16,

              fontFamily: Fonts.Nunito.Regular,
            }}
            placeholder="Password"
            placeholderTextColor={"#D3D3D3"}
            onChangeText={(value) => {
              console.log("valu pass", value);
              setPassword(value);
              validation();
            }}
          />
          <TouchableOpacity
            onPress={() => setVisible(!visible)}
            style={{
              position: "absolute",
              right: 12,
              top: 15,
            }}
          >
            {visible ? (
              <EyeSlashIcon width={20} height={20} />
            ) : (
              <EyeIcon width={20} height={20} />
            )}
          </TouchableOpacity>
          <View style={{ position: "absolute", bottom: -25, right: 5 }}>
            <Text color="#EA8685">{errorPass}</Text>
          </View>
        </View>

        <Text style={{ marginTop: 5, marginLeft: 5 }} color="#F6E58D">
          Forgot Password ?
        </Text>
      </View>

      {/* //login button */}
      <TouchableOpacity
        disabled={isEnable}
        onPress={loginAuth}
        style={{
          opacity: isEnable ? 0.5 : 1,
          marginHorizontal: 16,
          paddingVertical: 12,
          alignItems: "center",
          marginTop: 20,
          backgroundColor: "#18DCFF",
          borderRadius: 8,
        }}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#160520" />
        ) : (
          <Text bold fontSize={16}>
            Login
          </Text>
        )}
      </TouchableOpacity>
      <View style={{ marginTop: 20, alignItems: "center" }}>
        <Text color="#fff">
          {" "}
          Dont have an account ?{" "}
          <Text onPress={() => navigation.navigate("Register")} color="#F6E58D">
            signUp
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Login;
