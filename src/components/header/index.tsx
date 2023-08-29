import { Image, StyleSheet, Text, View } from 'react-native'

export default function Header() {
	return (
		<View style={styles.container}>
      <Text>Hello, Ville</Text>
      <View>
      <Text>Profile Picture</Text>
        {/* <Image/> */}
        
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
    flexDirection:'row'
	},
})
