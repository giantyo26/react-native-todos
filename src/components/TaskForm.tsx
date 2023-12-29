import { useForm } from "react-hook-form";
import { View, StyleSheet, TextInput } from "react-native";
import { Todo, addTodos, updateTodos } from "../api/todos";
import { QueryClient, useMutation, useQueryClient } from "react-query";
import { useState } from "react";

const TaskForm = async (id?: number) => {
  const { handleSubmit, control } = useForm();
    const [todo, setTodo] = useState<Todo>()
  const queryClient = useQueryClient();

//   const updateTodo = useMutation(updateTodos, {
//     onSuccess: () => {
//       queryClient.invalidateQueries("getTodos");
//     },
//   });

  const addTodo = useMutation(addTodos, {
    onSuccess: () => {
      queryClient.invalidateQueries("getTodos");
    },
  });
  return (
    <View>
      <TextInput>test</TextInput>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TaskForm