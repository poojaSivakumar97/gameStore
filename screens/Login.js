import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 50 }}>
        <Text style={{ color: "#20315f", fontSize: 32, fontWeight: "bold" }}>
          GAME STORE
        </Text>
      </View>
      <Image
        source={require("../assets/gaming.png")}
        style={{
          width: 400,
          height: 300,
          transform: [{ rotate: "-15deg" }],
        }}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Onboarding")}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "900",
            fontSize: 22,
            marginRight: 6,
          }}
        >
          Let's Begin
        </Text>

        <MaterialIcons name="login" size={22} color={"white"} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  buttonContainer: {
    backgroundColor: "#AD40AF",
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10,
    marginBottom: 50,
  },
});

export default Login;
