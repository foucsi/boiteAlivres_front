import { Text, View } from "react-native";
import Login from "@/app/login";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Login />
    </View>
  );
}
