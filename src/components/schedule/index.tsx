import { StyleSheet, Text, View } from 'react-native'

export default function Schedule() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text>Wednesday, March </Text>
				<Text>Icon Date</Text>
			</View>
			<View>
				<View>
					<Text>Card1</Text>
				</View>
				<View>
					<Text>Card2</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	header: {
		flex: 1,
		flexDirection:'row'
	}
})
