import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

export default function GoalInput(props) {
  const [goal, setGoal] = useState("");

  const goalInputHandler = (value) => {
    setGoal(value);
  };

  const addGoalHandler = () => {
    props.onAddGoal(goal);
    setGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={goal}
          placeholder="Course Goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "60%",
    marginRight: 10,
    padding: 10,
  },
});
