import { View, Text, StatusBar, StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons";

// Define the TabIcon component
const TabIcon = ({ name, focused, color, icon }) => {
	return (
		<View style={styles.iconWrapper}>
			<Ionicons
				name={icon}
				size={26}
				color={focused ? "#ABF600" : color}
			/>
			<Text
				style={[styles.tabText, { color: focused ? "#ABF600" : color }]}
			>
				{name}
			</Text>
		</View>
	);
};

const TabsLayout = () => {
	return (
		<>
			<StatusBar barStyle="light-content" />
			<Tabs
				screenOptions={{
					tabBarShowLabel: false,
					tabBarActiveTintColor: "white",
					tabBarInactiveTintColor: "#CDCDE0",
					tabBarStyle: {
						backgroundColor: "#161622",
						borderTopWidth: 1,
						borderTopColor: "#232522",
						height: 80,
						display: "flex",
						justifyContent: "center",
						paddingTop: 20,
					},
				}}
			>
				<Tabs.Screen
					name="home"
					options={{
						title: "Home",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								icon={focused ? "home" : "home-outline"}
								color={color}
								name="Home"
								focused={focused}
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
							<TabIcon
								icon={focused ? "fitness" : "fitness-outline"}
								color={color}
								name="Warm-Ups"
								focused={focused}
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
							<TabIcon
								icon={
									focused
										? "basketball"
										: "basketball-outline"
								}
								color={color}
								name="Start"
								focused={focused}
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
							<TabIcon
								icon={focused ? "person" : "person-outline"}
								color={color}
								name="Profile"
								focused={focused}
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
							<TabIcon
								icon={focused ? "settings" : "settings-outline"}
								color={color}
								name="Settings"
								focused={focused}
							/>
						),
					}}
				/>
			</Tabs>
		</>
	);
};

export default TabsLayout;

const styles = StyleSheet.create({
	iconWrapper: {
		alignItems: "center",
		justifyContent: "center",
		width: "100",
	},
	tabText: {
		marginTop: 5,
		fontSize: 12,
		fontFamily: "Poppins-Regular",
	},
});
