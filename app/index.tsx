import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Text>Welcome screen</Text>
        <Link href="/login">Go to home screen</Link>
    </View>
  );
}
