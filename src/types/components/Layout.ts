interface NavItem {
	name: string
	children?: NavItem[]
}

export type NavItems = NavItem[]
