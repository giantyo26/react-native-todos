import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TaskList from "./src/components/TaskList";
import { QueryClient, QueryClientProvider } from "react-query";
import TaskForm from "./src/components/TaskForm";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <View style={styles.container}>
      <QueryClientProvider client={queryClient}>
        {/* <TaskForm /> */}
        <TaskList />
        <StatusBar style="auto" />
      </QueryClientProvider>
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
