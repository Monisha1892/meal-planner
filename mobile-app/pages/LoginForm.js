import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3011",
});

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitEmail, setSubmitEmail] = useState(null);
  const [submitPassword, setSubmitPassword] = useState(null);

  function handleSubmit() {
    setSubmitEmail(email);
    setSubmitPassword(password);
  }

  useEffect(() => {
    if (submitEmail && submitPassword) {
      const login = async () => {
        console.log("start login");
        const response = await api.post("/login", {
          args: { email: submitEmail, password: submitPassword },
        });

        const data = response.data;

        if (data.response === "Success") {
          Alert.alert(`Welcome ${data.firstName} ${data.lastName}`);
        } else if (data.response === "Incorrect email or password") {
          Alert.alert(data.response);
        }
      };

      login();
    }
  }, [submitEmail, submitPassword]);

  return (
    <SafeAreaView resizeMode="contain">
      <Image />
      <Text>Login</Text>
      <View>
        <TextInput
          placeholder="EMAIL"
          value={email}
          onChangeText={setEmail}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="PASSWORD"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>
      <View>
        <Pressable onPress={() => Alert.alert("Forget Password!")}>
          <Text>Forgot Password?</Text>
        </Pressable>
      </View>
      <View>
        <Pressable onPress={handleSubmit}>
          <Text>LOGIN</Text>
        </Pressable>
        <Text>
          Don't Have Account?<Text> Sign Up</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
