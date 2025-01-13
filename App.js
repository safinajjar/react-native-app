import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <View>
        <Text
          style={{
            margin: 16,
            borderWidth: 2,
            borderColor: "#ccc123",
            padding: 16,
            borderRadius: 8,
          }}
        >
          My name is John Doe
        </Text>
      </View>
      <Button title="Click me!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
