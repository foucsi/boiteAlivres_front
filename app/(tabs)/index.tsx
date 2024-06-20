import { View, Text, StyleSheet } from 'react-native';
import Welcome from "@/app/(tabs)/welcome";

export default function Tab() {
  return (
      <Welcome />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});