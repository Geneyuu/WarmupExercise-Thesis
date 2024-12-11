import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Redirect, Slot, Stack, SplashScreen } from "expo-router";
import "../global.css";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
	const [fontsLoaded, error] = useFonts({
		"Karla-Regular": require("../assets/font/Karla-Regular.ttf"),
		"Karla-Bold": require("../assets/font/Karla-Bold.ttf"),
		"Karla-SemiBold": require("../assets/font/Karla-SemiBold.ttf"),
		"Karla-BoldItalic": require("../assets/font/Karla-BoldItalic.ttf"),
		"Karla-ExtraBold": require("../assets/font/Karla-ExtraBold.ttf"),
		"Karla-ExtraBoldItalic": require("../assets/font/Karla-ExtraBoldItalic.ttf"),
		"Karla-ExtraLight": require("../assets/font/Karla-ExtraLight.ttf"),
		"Karla-ExtraLightItalic": require("../assets/font/Karla-ExtraLightItalic.ttf"),
		"Karla-Italic": require("../assets/font/Karla-Italic.ttf"),
		"Karla-Light": require("../assets/font/Karla-Light.ttf"),
		"Karla-LightItalic": require("../assets/font/Karla-LightItalic.ttf"),
		"Karla-Medium": require("../assets/font/Karla-Medium.ttf"),
		"Karla-MediumItalic": require("../assets/font/Karla-MediumItalic.ttf"),
		"Karla-SemiBoldItalic": require("../assets/font/Karla-SemiBoldItalic.ttf"),
	});
	useEffect;
	useEffect(() => {
		if (error) throw error;

		if (fontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded, error]);

	if (!fontsLoaded) {
		return null;
	}

	if (!fontsLoaded && !error) {
		return null;
	}

	return (
		// <Stack>
		// 	<Stack.Screen name="index" />
		// </Stack>
		<Slot />
	);
};

export default RootLayout;

const styles = StyleSheet.create({});
