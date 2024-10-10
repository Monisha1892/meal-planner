import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Button } from "react-native-elements";

const api = axios.create({
  baseURL: "http://localhost:3011",
});

export default function LoginForm({ route, navigation }) {
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
        const response = await api.post("/login", {
          args: { email: submitEmail, password: submitPassword },
        });

        const data = response.data;

        if (data.response === "Success") {
          try {
            await AsyncStorage.setItem("UserJWT", data.token);
            navigation.navigate("Home");
          } catch (e) {
            console.log(e);
          }
        } else if (data.response === "Incorrect email or password") {
          Alert.alert(data.response);
        }
      };

      login();
    }
  }, [submitEmail, submitPassword]);

  return (
    <SafeAreaView resizeMode="contain" style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <View>
        <TextInput
          placeholder="EMAIL"
          value={email}
          onChangeText={setEmail}
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.input}
        />
        <TextInput
          placeholder="PASSWORD"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.input}
        />
      </View>
      <View>
        <Button title="Sign In" style={styles.button} onPress={handleSubmit} />
        <Text style={styles.details}>Don't Have Account?&nbsp;</Text>
        <Pressable
          onPress={() => navigation.navigate("SignUp", { setIsSignedIn })}
        >
          <Text style={styles.signup}>Sign Up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FF6347",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#20B2AA",
    marginTop: 10,
    borderRadius: 5,
  },
  input: {
    height: 60,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  details: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2E8B57",
    marginTop: 5,
  },
  signup: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF8C00",
    marginBottom: 10,
  },
});
