import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color as colorScheme } from '../../constant'

type Card = {
	title: string
	description: string
	color?: string
}

const ProgressCard: React.FC<Card> = (props) => {
	const { description, title, color } = props
	return (
		<View
			style={[
				styles.container,
				{ backgroundColor: color ? color : colorScheme.orange },
			]}
		>
			<Text>Chart</Text>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.description}>{description}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: 120,
		justifyContent: 'flex-start',
		padding: 8,
		rowGap: 4,
		borderRadius: 8,
	},
	cardList: {
		flex: 1,
		flexDirection: 'row',
	},
	title: {
		fontSize: 20,
		fontWeight: '600',
		color: 'white',
	},
	description: {
		color: 'white',
	},
})

export default ProgressCard
