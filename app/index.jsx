import { View, Text, StatusBar } from "react-native";
import React from "react";
import { Link, Redirect, Stack } from "expo-router";

const index = () => {
	return (
		<View>
			{/* <Link href="/home" className="text-3xl">
				Go to home
			</Link>
			<Text style={{}}>hello</Text> */}
			<Redirect href="/home" />
		</View>
	);
};

export default index;
