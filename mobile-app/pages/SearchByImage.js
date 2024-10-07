import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  APP_ID,
  MODEL_ID,
  MODEL_VERSION_ID,
  PAT,
  USER_ID,
} from "../context/temp.js";
import { View, Button, StyleSheet, Image, Alert } from "react-native";
import NavigationBar from "./NavigationBar";
import * as ImagePicker from "expo-image-picker";

const imageAPI = axios.create({
  baseURL:
    "https://api.clarifai.com/v2/models/" +
    MODEL_ID +
    "/versions/" +
    MODEL_VERSION_ID,
});

export default function SearchByImage({ navigation }) {
  const [image, setImage] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChoosePhoto = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: "Images",
        base64: true,
      });
      if (result) {
        setImage(result.assets[0]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleIdentify = () => {
    console.log("IDENTIFY");
    setSubmitting(true);
  };

  useEffect(() => {
    const getIdentification = async (photo) => {
      const response = await imageAPI.post(
        "/outputs",
        {
          user_app_id: {
            user_id: USER_ID,
            app_id: APP_ID,
          },
          inputs: [
            {
              data: {
                image: {
                  base64: photo,
                },
              },
            },
          ],
        },
        { headers: { Accept: "application/json", Authorization: "Key " + PAT } }
      );

      // console.log(response.data.outputs[0].data.concepts[0].name);
      navigation.navigate("IngredientDetailsScreen", {
        ingredientName: response.data.outputs[0].data.concepts[0].name.toUpperCase(),
      });
    };
    if (submitting) {
      getIdentification(image.base64);
    }
  }, [submitting]);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {image && (
          <View>
            <Image
              source={{ uri: image.uri }}
              style={{ width: 300, height: 300 }}
            />
            <Button
              title="Identify"
              onPress={handleIdentify}
              buttonStyle={styles.buttonStyle}
            />
          </View>
        )}
        <Button
          title="Choose Photo"
          onPress={handleChoosePhoto}
          buttonStyle={styles.buttonStyle}
        />
      </View>
      <NavigationBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  buttonStyle: {
    backgroundColor: "#20B2AA",
    marginTop: 10,
    borderRadius: 5,
  },
});
