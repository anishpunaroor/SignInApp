import React from "react";
import { StyleSheet, View, Button } from "react-native";
import * as Google from "expo-google-app-auth";

const LoginScreen = ({ navigation }) => {
  const signInAsync = async () => {
    console.log("LoginScreen.js 6 | loggin in");
    try {
      const { type, user } = await Google.logInAsync({
        iosClientId: `413058845235-ud562r7rrlbq7pns1822mbj4a8k6g7ji.apps.googleusercontent.com`,
        androidClientId: `413058845235-8n1ikjh0etn2sln6fo2oppb22qhf9ti8.apps.googleusercontent.com`,
      });

      if (type === "success") {
        // Then you can use the Google REST API
        console.log("LoginScreen.js 17 | success, navigating to profile");
        navigation.navigate("Profile", { user });
      }
    } catch (error) {
      console.log("LoginScreen.js 19 | error with login", error);
    }
  };

  return (
    <View style={styles.container}>
      <Button 
        title="Login with Google"
        color="#f194ff" 
        onPress={signInAsync} 
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        marginTop: 100
    }
});