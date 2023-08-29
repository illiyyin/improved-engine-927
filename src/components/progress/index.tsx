import { StyleSheet, Text, View } from 'react-native'

export default function Progress() {
	return (
		<View style={styles.container}>
			<Text>Your Progress</Text>
			<View style={styles.cardList}>
				<Text>Card</Text>
				<Text>Card 2</Text>
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
	cardList: {
		flex: 1,
		flexDirection: 'row',
	},
})
