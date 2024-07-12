import type { Bookmark } from '@/types/components/Upload'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface NavState {
	items: Bookmark[]
}

const initialState: NavState = {
	items: [],
}

const navSlice = createSlice({
	name: 'nav',
	initialState,
	reducers: {
		setItems(state, action: PayloadAction<Bookmark[]>) {
			state.items = action.payload
		},
	},
})

export const { setItems } = navSlice.actions
export default navSlice.reducer
