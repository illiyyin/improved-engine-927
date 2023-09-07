// export const color = {
// 	orange: '#F66C62',
// 	white: '#FBFBFD',
// 	yellow: '#FFD565',
// }

export const color = {
	orange: {
		hex: '#F66C62',
		code: '246, 108, 98',
	},
	yellow: {
		hex: '#FFD565',
		code: '255, 213, 101',
	},
	white: {
		hex: '#FBFBFD',
		code: '251, 251, 253',
	},
}

export type Color = keyof typeof color
