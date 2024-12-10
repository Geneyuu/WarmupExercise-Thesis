import { View, Text } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const index = () => {
	return (
		<View>
			<Link href="/home" className="text-3xl">
				Go to home
			</Link>
			<Text style={{}}>hello</Text>
		</View>
	);
};

export default index;
