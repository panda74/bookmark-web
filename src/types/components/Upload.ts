export interface Bookmark {
	title: string
	url?: string
	addDate?: string
	lastModified?: string
	children?: Bookmark[]
	personalToolbarFolder?: string
}
