import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { NavItems } from '@/types/components/Layout'

export interface NavState {
	items: NavItems
}

const initialState: NavState = {
	items: [],
}

const navSlice = createSlice({
	name: 'nav',
	initialState,
	reducers: {
		setItems(state, action: PayloadAction<NavItems>) {
			state.items = action.payload
		},
	},
})

export const { setItems } = navSlice.actions
export default navSlice.reducer
