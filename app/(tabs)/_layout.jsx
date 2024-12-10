import { View, Text, StatusBar } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons";

const TabsLayout = () => {
	return (
		<>
			<StatusBar barStyle="light-content" />
			<Tabs
				screenOptions={{
					tabBarShowLabel: true,
					tabBarActiveTintColor: "white",
					tabBarInactiveTintColor: "#CDCDE0",
					tabBarStyle: {
						backgroundColor: "#161622",
						borderTopWidth: 1,
						borderTopColor: "#232522",
						height: 80,
						display: "flex",
						justifyContent: "center",
						paddingTop: "15",
					},
					// tabBarItemStyle: {
					//  display: "flex",
					//  alignItems: "center",
					//  justifyContent: "center",
					// },
				}}
			>
				<Tabs.Screen
					name="home"
					options={{
						title: "Home",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<Ionicons
								name={focused ? "home" : "home-outline"}
								size={26}
								color={focused ? "#ABF600" : "white"}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="warmups"
					options={{
						title: "Warm-Ups",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<Ionicons
								name={focused ? "fitness" : "fitness-outline"}
								size={26}
								color={focused ? "#ABF600" : "white"}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="startexercise"
					options={{
						title: "Start",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<Ionicons
								name={
									focused
										? "basketball"
										: "basketball-outline"
								}
								size={26}
								color={focused ? "#ABF600" : "white"}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="profile"
					options={{
						title: "Profile",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<Ionicons
								name={focused ? "person" : "person-outline"}
								size={26}
								color={focused ? "#ABF600" : "white"}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="settings"
					options={{
						title: "Settings",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<Ionicons
								name={focused ? "settings" : "settings-outline"}
								size={26}
								color={focused ? "#ABF600" : "white"}
							/>
						),
					}}
				/>
			</Tabs>
		</>
	);
};

export default TabsLayout;
