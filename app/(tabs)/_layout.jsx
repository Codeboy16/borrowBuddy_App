import { Tabs } from "expo-router";
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => <Feather name="home" size={35} color="black" />,
          // tabBarIcon: ({ color, focused }) => (
          //   <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} /> ..Add Logo For Home Screen
          // ),
        }}
      />
      {/* Chats Section */}
      <Tabs.Screen
        name="Chats"
        options={{
          title: "Chats",
          tabBarIcon: () => <Ionicons name="chatbubble-ellipses-outline" size={35} color="black" />,
        }}
      />
       {/* Camera Section */}
      <Tabs.Screen
        name="Camera"
        options={{
          title: "",
          tabBarIcon: () => (
            <AntDesign name="pluscircleo" size={45} color="black" />
          ),
        }}
      />
        {/* Carts Section */}
      <Tabs.Screen
        name="Carts"
        options={{
          title: "Carts",
          tabBarIcon: () => (
            <AntDesign name="shoppingcart" size={35} color="black" />
          ),
        }}
      />
      {/* User Section */}
      <Tabs.Screen
        name="User"
        options={{
          title: "User",
          tabBarIcon: () => <AntDesign name="user" size={35} color="black" />,
        }}
      />
    </Tabs>
  );
}

