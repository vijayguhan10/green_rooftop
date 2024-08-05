import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate("TrackOrder")}
      >
        <Image
          source={{
            uri: "https://www.kindpng.com/picc/m/33-336582_order-tracking-track-order-icon-png-transparent-png.png",
          }}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate("ProductHeader")}
      >
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/6001/6001923.png",
          }}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate("OrderHistory")}
      >
        <Image
          source={{
            uri: "https://static.thenounproject.com/png/3157802-200.png",
          }}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  iconContainer: {
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export default Footer;
