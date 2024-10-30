import { Text, View } from "react-native";
import react from "react";
import '../../global.css';

export default function HomeScreen() {
  return (
    <View className="mt-5 pt-5">
      <Text className="text-center text-2xl">Hello Borrow Buddy Home Page</Text>
      <Text className="text-center text-4xl py-5 border-2 font-bold rounded-xl">Hello Hack Q</Text>
    </View>
  );
}

