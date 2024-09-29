import React, { useEffect, useState } from "react";
import { Alert, SafeAreaView, Text, View } from "react-native";
import { Pressable, TextInput } from "react-native-gesture-handler";

const api = axios.create({
  baseURL: "http://localhost:3011",
});

export default function SignUpForm({ route, navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  function handleSubmit() {
    validateFormValues(firstName, lastName, email, password, confirmPassword);

    if (isFormValid) {
      setSubmitting(true);
    }
  }

  function validateFormValues(
    firstName,
    lastName,
    email,
    password,
    confirmPassword
  ) {
    let errorRecord = {};

    // Validate First Name
    if (!firstName) {
      errorRecord.firstName = "First name is required.";
    } else if (firstName.trim().length === 0) {
      errorRecord.firstName = "First name cannot be empty.";
    }

    // Validate Last Name
    if (!lastName) {
      errorRecord.lastName = "Last name is required.";
    } else if (lastName.trim().length === 0) {
      errorRecord.lastName = "Last name cannot be empty.";
    }

    // Validate Email
    if (!email) {
      errorRecord.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errorRecord.email = "Email is invalid.";
    }

    // Validate Password
    if (!password) {
      errorRecord.password = "Password is required.";
    } else if (password.length < 6) {
      errorRecord.password = "Password must be at least 6 characters.";
    }

    // Validate Confirm Password
    if (!confirmPassword) {
      errorRecord.confirmPassword = "Password must be confirmed.";
    } else if (confirmPassword !== password) {
      errorRecord.confirmPassword = "Passwords must match.";
    }

    setErrors(errorRecord);
    setIsFormValid(Object.keys(errorRecord).length === 0);
  }

  useEffect(() => {
    if (submitting === true) {
      const signUp = async () => {
        const response = await api.post("/signup", {
          args: { email, firstName, lastName, password },
        });

        const data = response.data;

        if (data.response === "Success") {
          try {
            await AsyncStorage.setItem("UserJWT", data.token);
            const { setIsSignedIn } = route.params;
            setIsSignedIn(true);

            navigation.navigate("Home");
          } catch (e) {
            console.log(e);
          }
        } else if (data.response === "Could not create user.") {
          Alert.alert(
            "Could not create user. Please double check your information and try again."
          );
        }
      };

      signUp();
    }
  }, [submitting]);

  return (
    <SafeAreaView resizeMode="contain">
      <Text>Sign Up</Text>
      <View>
        <TextInput
          placeholder="FIRST NAME"
          value={firstName}
          onChangeText={setFirstName}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="LAST NAME"
          value={lastName}
          onChangeText={setLastName}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="EMAIL"
          value={email}
          onChangeText={setEmail}
          autoCorrect={false}
          autoCapitalize="none"
          inputMode="email"
        />
        <TextInput
          placeholder="PASSWORD"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="CONFIRM PASSWORD"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>
      <View>
        <Pressable onPress={handleSubmit}>
          <Text>Sign Up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
