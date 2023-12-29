import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { useQuery } from "react-query";
import { getTodos } from "../api/todos";

const TaskList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getTodos"],
    queryFn: getTodos,
  });

  console.log(data);
  if (isLoading) {
    <ActivityIndicator />;
  }
  if (isError) {
    <Text>Error</Text>;
  }
  type TodosProps = {
    // id: number
    todo: string;
    completed: boolean;
  };

  const Todos = ({ todo, completed }: TodosProps) => (
    <View>
      <Text>{todo}</Text>
      <Text>{completed}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data.todos}
        renderItem={({ item }) => (
          <Todos todo={item.todo} completed={item.completed} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  todo: {
    flex: 1,
    fontSize: 12,
  },
});

export default TaskList;
