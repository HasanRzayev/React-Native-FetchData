import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';

const ToDo = () => {
  const [todo, setTodo] = useState({});
  const [todos, setTodos] = useState([]);

  const getToDos = async () => {
    try {
      const response = await fetch("http://192.168.1.70:5001/cards");
      if (response.ok) {
        const data = await response.json();
        setTodos(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const AddTodo = async () => {
    try {
      const response = await fetch("http://192.168.1.70:5001/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(todo),
      });

      if (response.ok) {
        getToDos();
        setTodo({});
      }
    } catch (error) {
      console.error(error);
    }
  };

  const DeleteToDo = async (id) => {
    try {
      const response = await fetch(`http://192.168.1.70:5001/cards/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        getToDos();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getToDos();
  }, []);

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-xl font-bold text-center text-blue-600">Add Todo</Text>

      <View className="bg-white p-4 rounded-lg shadow-md mt-4">
        <TextInput
          className="border border-gray-300 rounded-md p-2 mb-2"
          placeholder="Enter title"
          value={todo?.title || ""}
          onChangeText={(text) => setTodo({ ...todo, title: text })}
        />
        <TextInput
          className="border border-gray-300 rounded-md p-2 mb-2"
          placeholder="Enter description"
          value={todo?.description || ""}
          onChangeText={(text) => setTodo({ ...todo, description: text })}
        />

        <TouchableOpacity className="bg-blue-500 p-3 rounded-md" onPress={AddTodo}>
          <Text className="text-white text-center font-bold">Göndər</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        ListHeaderComponent={() => <Text className="text-lg font-semibold mt-4">Todos</Text>}
        contentContainerStyle={{ gap: 16 }}
        data={todos}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View className="bg-white p-4 rounded-lg shadow-md">
            <Text className="text-lg font-semibold">{item.title}</Text>
            <Text className="text-gray-500">{item.description}</Text>
            <TouchableOpacity className="bg-red-500 p-2 mt-2 rounded-md" onPress={() => DeleteToDo(item._id)}>
              <Text className="text-white text-center">Sil</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default ToDo;