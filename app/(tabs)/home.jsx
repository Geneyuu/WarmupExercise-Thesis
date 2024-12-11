import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";

const Home = () => {
	return (
		<SafeAreaView style={{ backgroundColor: "#161622", flex: 1 }}>
			<StatusBar barStyle="light-content" backgroundColor="#161622" />
			<View style={styles.content}>
				<Text style={styles.text}>Home</Text>
			</View>
		</SafeAreaView>
	);
};

const styles = {
	content: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#161622",
	},
	text: {
		color: "white",
		fontSize: 20,
	},
};

export default Home;
