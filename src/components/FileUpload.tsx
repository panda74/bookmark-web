import { InboxOutlined } from '@ant-design/icons'
import type { UploadProps } from 'antd'
import { Spin, Upload } from 'antd'
import { useState } from 'react'

const { Dragger } = Upload

const FileUpload: React.FC = () => {
	const [disabled, setDisabled] = useState(false)
	const handleFile = () => setDisabled(true)
	const props: UploadProps = {
		name: 'bookmark',
		accept: '.html',
		maxCount: 1,
		fileList: [],
		disabled,
		onChange(info) {
			console.log(info, '文件改变了')
			handleFile()
		},
		beforeUpload() {
			return false
		},
		onDrop(e) {
			console.log('Dropped files', e.dataTransfer.files)
			handleFile()
		},
	}

	return (
		<Dragger {...props}>
			<p className='ant-upload-drag-icon'>
				{disabled ? <Spin size='large'></Spin> : <InboxOutlined />}
			</p>
			<p className='ant-upload-text'>点击或者拖拽上传你的书签文件吧!</p>
			<p className='ant-upload-hint'>注意：请使用浏览器默认导出的.html后缀的文件</p>
		</Dragger>
	)
}

export default FileUpload
