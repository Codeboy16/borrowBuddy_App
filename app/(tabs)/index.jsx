import { Text, TextInput, View, ScrollView } from "react-native";
import react from "react";
import "../../global.css";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState, useEffect } from "react";

export default function HomeScreen() {
  const [msg, setMsg] = useState(true);
  return (
    <View className="mx-3 mt-5 pt-5" >
      <ScrollView>
        {/* Header Section */}
      <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, marginHorizontal:2 }}>
      <Ionicons name="menu" size={46} color="black" />
      <TextInput
        style={{
          flex: 1,
          marginHorizontal: 6,
          borderWidth: 2,
          height: 48,
          borderRadius: 25,
          paddingHorizontal: 15,
          fontSize: 20,
        }}
        placeholder="Search here...."
        placeholderTextColor="black"
        autoComplete="off"
        maxLength={30}
      />
      {msg ? (
        <Ionicons
          name="notifications-sharp"
          size={37}
          color="black"
          onPress={() => setMsg(false)}
        />
      ) : (
        <MaterialIcons
          name="notifications-active"
          size={37}
          color="black"
          onPress={() => setMsg(true)}
        />
      )}
    </View>
    {/* Body Section */}
      </ScrollView>
    </View>
  );
}
