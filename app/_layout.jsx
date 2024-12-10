import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect, Slot, Stack } from "expo-router";
import "../global.css";

const RootLayout = () => {
	return (
		// <Stack>
		// 	<Stack.Screen name="index" />
		// </Stack>
		<Slot />
	);
};

export default RootLayout;

const styles = StyleSheet.create({});
