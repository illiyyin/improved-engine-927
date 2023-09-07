import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color as colorScheme } from '../../constant'

type Card = {
	title: string
	description: string
	color?: string
}

const listPicture = [
	'https://plus.unsplash.com/premium_photo-1667667720425-6972aff75f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
	'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
	'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
]

const ScheduleSection: React.FC<Card> = (props) => {
	const { description, title, color } = props
	return (
		<View style={styles.section}>
			<Text style={styles.hourSection}>Text jam</Text>
			<View
				style={[
					styles.card,
					{ backgroundColor: color ? color : colorScheme.orange.hex },
				]}
			>
				<Text>Title</Text>
				<Text>Description</Text>
				<View style={styles.bottomCard}>
					<View
						style={{
							flexDirection: 'row',
							maxWidth: 50,
							overflow: 'visible',
						}}
					>
						{listPicture.map((item, index) => (
							<Image
								style={{
									borderRadius: 999,
									left: -8 * index,
									zIndex: 1 * index,
								}}
								source={{
									uri: item,
									width: 36,
									height: 36,
								}}
							/>
						))}
					</View>
					<Text>Hours text</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	section: {
		flex: 1,
		flexDirection: 'row',
		height: 100,
	},
	hourSection: {
		flex: 1,
	},
	card: {
		flex: 4,
		padding: 8,
		borderRadius: 8,
		height: 100,
		justifyContent: 'space-between',
	},
	bottomCard: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
		// borderColor: 'red',
		// borderWidth: 2,
	},
})

export default ScheduleSection
