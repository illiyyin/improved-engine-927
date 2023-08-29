import { StyleSheet, Text, View } from 'react-native'

export default function Nav() {
	return (
		<View style={styles.container}>
			<Text>Icon 1</Text>
			<Text>Icon 2</Text>
			<Text>Icon 3</Text>
			<Text>Icon 4</Text>
			<Text>Icon 5</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection:'row'
	},
})
