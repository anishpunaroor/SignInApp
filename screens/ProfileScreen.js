import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProfileScreen = ({ route, navigation }) => {
  const { user } = route.params;
  console.log("user from google", user);
  return (
    <View>
      <Text style={styles.text}>Profile Screen</Text>
      <Text style = {styles.text}>Welcome </Text>
      <Text style = {styles.name}> {user.name} !</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    text: {
        textAlign: 'center', 
        marginTop: 100, 
        fontSize: 20
    },
    name: {
        textAlign: 'center', 
        fontWeight: 'bold',
        color: 'blue', 
        marginTop: 10 , 
        fontSize: 20
    }
});