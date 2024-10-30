import { Tabs } from "expo-router";
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Hides the header for all tabs
        tabBarLabelStyle: { fontSize: 16,fontWeight: 'bold' }, // Increase the font size
        tabBarStyle: { height: 72, paddingBottom: 5, paddingTop:5}, // Increase tab bar height
        tabBarActiveTintColor: '#1529fe', // Set active color for icon and text
        tabBarInactiveTintColor: '#1e2a34', // Set inactive color for icon and text
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          // tabBarIcon: ({ color }) => <Entypo name="home" size={35} color={color} />,
          tabBarIcon: ({ color }) => <Feather name="home" size={35} color={color} />,
        }}
      /> 
      <Tabs.Screen
        name="Chats"
        options={{
          title: "Chats",
          tabBarIcon: ({ color }) => <Ionicons name="chatbubble-ellipses-outline" size={35} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Camera"
        options={{
          title: "",
          tabBarIcon: ({color}) => (
            <AntDesign name="pluscircleo" size={46} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Carts"
        options={{
          title: "Carts",
          tabBarIcon: ({color}) => (
            <AntDesign name="shoppingcart" size={35} color={ color } />
          ),
        }}
      />
      <Tabs.Screen
        name="User"
        options={{
          title: "User",
          tabBarIcon: ({color}) => <AntDesign name="user" size={35} color={color} />,
        }}
      />
    </Tabs>
  );
}
