import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import logo from "../../Asset/checklogo.jpg";
console.log("Image source:", logo);
const Login = ({ navigation }) => {
  const colors = ["red", "blue", "green", "orange", "purple"];
  const [colorIndex, setColorIndex] = useState(0);
  const [Nameset, SetName] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.header}>
        Organic Products Deliver At your doorsteps
      </Text>
      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="brown" style={styles.icon} />
        <TextInput
          placeholder="Email ID"
          style={styles.input}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="phone" size={20} color="blue" style={styles.icon} />
        <TextInput
          placeholder="Mobile Number"
          style={styles.input}
          keyboardType="phone-pad"
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="black" style={styles.icon} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="map-marker" size={20} color="red" style={styles.icon} />
        <TextInput
          placeholder="Pincode"
          style={styles.input}
          onChangeText={(value) => SetName(value)}
          keyboardType="number-pad"
        />
      </View>
      <Text style={[styles.loginMethodText, { color: colors[colorIndex] }]}>
        Choose your login method
      </Text>
      <View style={styles.buttonrow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ProductHeader")}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Sellerdetail")}
        >
          <Text style={styles.buttonText}>admin</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.undertext}>By continuing, you agree to our</Text>
        <TouchableOpacity>
          <Text style={styles.policyText}>
            <Text style={styles.linkText}>Terms of Service</Text>
            <Text> & </Text>
            <Text style={styles.linkText}>Privacy Policy</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    paddingTop: 70,
  },
  logo: {
    width: 100,
    height: 100,
  },
  header: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: "80%",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  buttonrow: {
    flexDirection: "row",
    rowGap: 5,
  },
  button: {
    backgroundColor: "darkgreen",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  undertext: {
    paddingTop: 30,
    paddingBottom: 40,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  policyText: {
    fontSize: 16,
    textAlign: "center",
  },
  linkText: {
    color: "blue",
  },
  loginMethodText: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "900",
  },
});
export default Login;
