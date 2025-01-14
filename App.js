import * as SystemUI from "expo-system-ui";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

SystemUI.setBackgroundColorAsync("#1e085a");

export default function App() {
  const [courseGoals, setcourseGoals] = useState([]);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  const addGoalHandler = (goal) => {
    setcourseGoals((currentGoals) => [
      ...currentGoals,
      {
        text: goal,
        id: Math.random().toString(),
      },
    ]);
    setIsAddModalVisible(false);
  };

  const deleteGoalHandler = (id) => {
    setcourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={() => setIsAddModalVisible(true)}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={isAddModalVisible}
          onCancel={() => setIsAddModalVisible(false)}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            alwaysBounceVertical={false}
            keyExtractor={(item, _) => item.id}
            renderItem={(itemData) => (
              <GoalItem
                id={itemData.item.id}
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              />
            )}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
