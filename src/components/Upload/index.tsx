import type { UploadProps } from 'antd'
import type { Bookmark } from '@/types/components/Upload'

import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { setItems } from '@/redux/navSlice'
import { message, Spin, Upload } from 'antd'
import { InboxOutlined } from '@ant-design/icons'

const { Dragger } = Upload
const FileUpload: React.FC = () => {
	const [disabled, setDisabled] = useState(false)
	const dispatch = useDispatch()

	const readFileAsText = (file: File): Promise<string> => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader()
			reader.onload = e => {
				const htmlContent = e.target?.result
				if (htmlContent) {
					resolve(htmlContent as string)
				} else {
					reject(new Error('FileReader result is null or undefined.'))
				}
			}

			reader.onerror = () => {
				reject(new Error('Error reading file.'))
			}

			reader.readAsText(file)
		})
	}
	const parseDL = (dlElement: HTMLDListElement, isToolbar = 'true'): Bookmark[] => {
		const bookmarks: Bookmark[] = []
		let currentBookmark: Bookmark | null = null

		Array.from(dlElement.children).forEach(element => {
			if (element.tagName === 'DT') {
				const aNode = Array.from(element.children).find(child => child.tagName === 'A') as
					| HTMLAnchorElement
					| undefined
				const h3Node = Array.from(element.children).find(child => child.tagName === 'H3') as
					| HTMLHeadingElement
					| undefined
				const dlNode = Array.from(element.children).find(child => child.tagName === 'DL') as
					| HTMLDListElement
					| undefined
				if (aNode) {
					currentBookmark = {
						title: aNode.textContent || '',
						url: aNode.getAttribute('href') || '',
						addDate: aNode.getAttribute('add_date') || undefined,
					}
					bookmarks.push(currentBookmark)
				}

				if (h3Node) {
					currentBookmark = {
						title: h3Node.textContent || '',
						addDate: h3Node.getAttribute('add_date') || undefined,
						lastModified: h3Node.getAttribute('last_modified') || undefined,
						personalToolbarFolder: h3Node.getAttribute('personal_toolbar_folder') || isToolbar,
						children: [],
					}
					currentBookmark.children = parseDL(dlNode as HTMLDListElement, 'false')
					bookmarks.push(currentBookmark)
				}
			}
		})

		return bookmarks
	}
	const parseBookmarks = (htmlContent: string): Bookmark[] => {
		const parser = new DOMParser()
		const doc = parser.parseFromString(htmlContent, 'text/html')
		const bookmarks: Bookmark[] = []

		const dlElement = doc.querySelector('DL')
		if (dlElement) {
			bookmarks.push(...parseDL(dlElement as HTMLDListElement))
		}

		return bookmarks
	}
	const handleFile = async (file: File) => {
		setDisabled(true)
		try {
			if (file && file.type === 'text/html') {
				const htmlStr = await readFileAsText(file)
				const bookmark = parseBookmarks(htmlStr)
				console.log(bookmark)
				dispatch(setItems(bookmark))
			} else {
				message.error('文件格式要求html哦')
			}
		} finally {
			setDisabled(false)
		}
	}
	const props: UploadProps = {
		name: 'bookmark',
		accept: '.html',
		maxCount: 1,
		fileList: [],
		disabled,
		beforeUpload(file) {
			handleFile(file)
			return false
		},
		onDrop(e) {
			console.log('Dropped files', e.dataTransfer.files)
			if (e.dataTransfer.files[0].type !== 'text/html') {
				return message.error('文件格式要求html哦')
			}
		},
	}

	return (
		<div className='h-full w-full flex items-center justify-center'>
			<Spin spinning={disabled} size='large'>
				<Dragger {...props}>
					<p className='ant-upload-drag-icon'>
						<InboxOutlined />
					</p>

					{!disabled && <p className='ant-upload-text'>点击或者拖拽上传你的书签文件吧!</p>}
					<p className='ant-upload-hint'>
						{disabled ? '正在为您生成书签导航' : '注意：请使用浏览器默认导出的.html后缀的文件'}
					</p>
				</Dragger>
			</Spin>
		</div>
	)
}

export default FileUpload
