import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons";

const TabsLayout = () => {
	return (
		<Tabs>
			<Tabs.Screen
				name="home"
				options={{
					title: "Home",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? "home" : "home-outline"}
							size={24}
							color={focused ? "#ABF600" : ""}
						/>
					),
				}}
			/>
		</Tabs>
	);
};

export default TabsLayout;
