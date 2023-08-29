import { Image, StyleSheet, Text, View } from 'react-native'

export default function Header() {
	return (
		<View style={styles.container}>
			<Text style={styles.greetText}>Hello, Ville!</Text>
			<View>
				<Image
					source={{
						uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
						height: 36,
						width: 36,
					}}
					style={styles.profileImage}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'space-between',
    flexDirection: 'row',
	},
	greetText: {
		color: '#29274C',
		fontSize: 28,
		fontWeight: '700',
	},
	profileImage: {
		borderColor: '#E7E6F0',
		borderWidth: 2,
		borderRadius: 9999,
	},
})
