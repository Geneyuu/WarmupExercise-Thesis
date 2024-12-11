import {
	View,
	Text,
	StatusBar,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons";

// Define the TabIcon component
const TabIcon = ({ name, focused, color, icon, onPress }) => {
	return (
		<TouchableOpacity style={styles.iconWrapper} onPress={onPress}>
			{focused && <View style={styles.focusedBorder} />}
			<Ionicons
				name={icon}
				size={27}
				color={focused ? "#ABF600" : color}
			/>
			<Text
				style={[styles.tabText, { color: focused ? "#ABF600" : color }]}
			>
				{name}
			</Text>
		</TouchableOpacity>
	);
};

const TabsLayout = () => {
	return (
		<>
			<StatusBar barStyle="light-content" />
			<Tabs
				screenOptions={({ route, navigation }) => {
					let iconName;
					let tabName;

					if (route.name === "home") {
						iconName = "home";
						tabName = "Home";
					} else if (route.name === "warmups") {
						iconName = "fitness";
						tabName = "Warm-Ups";
					} else if (route.name === "startexercise") {
						iconName = "basketball";
						tabName = "Start";
					} else if (route.name === "profile") {
						iconName = "person";
						tabName = "Profile";
					} else if (route.name === "settings") {
						iconName = "settings";
						tabName = "Settings";
					}

					return {
						tabBarShowLabel: false,
						tabBarActiveTintColor: "white",
						tabBarInactiveTintColor: "white",
						tabBarStyle: {
							backgroundColor: "#161622",
							borderTopColor: "#232522",
							height: 100,
							borderTopWidth: 0,
							paddingTop: 20,
						},
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								icon={
									focused ? iconName : `${iconName}-outline`
								}
								color={color}
								name={tabName}
								focused={focused}
								onPress={() => navigation.navigate(route.name)}
							/>
						),
					};
				}}
			>
				<Tabs.Screen
					name="home"
					options={{ title: "Home", headerShown: false }}
				/>
				<Tabs.Screen
					name="warmups"
					options={{ title: "Warm-Ups", headerShown: false }}
				/>
				<Tabs.Screen
					name="startexercise"
					options={{ title: "Start", headerShown: false }}
				/>
				<Tabs.Screen
					name="profile"
					options={{ title: "Profile", headerShown: false }}
				/>
				<Tabs.Screen
					name="settings"
					options={{ title: "Settings", headerShown: false }}
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
		width: "60",
		paddingTop: 10, // Add padding to avoid clipping with the border
	},
	tabText: {
		marginTop: 5,
		fontSize: 12,
		fontFamily: "Karla-Regular",
	},
	focusedBorder: {
		width: "100%",
		height: 3,
		backgroundColor: "#ABF600",
		position: "absolute",
		top: -21,
	},
});
