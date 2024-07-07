import { InboxOutlined } from '@ant-design/icons'
import type { UploadProps } from 'antd'
import { Spin, Upload } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setItems } from '@/redux/navSlice'
import type { NavItems } from '@/types/components/Layout'

const { Dragger } = Upload

const FileUpload: React.FC = () => {
	const [disabled, setDisabled] = useState(false)
	const dispatch = useDispatch()
	const items: NavItems = [
		{ name: '常用' },
		{ name: '测试' },
		{
			name: '舒服',
			children: [
				{
					name: '默认',
				},
				{
					name: '水电费',
					children: [{ name: '默认' }, { name: '是谁的' }],
				},
				{
					name: '大师傅似的',
				},
			],
		},
		{ name: '士大夫' },
		{ name: '和风' },
		{ name: '斯蒂芬' },
		{
			name: '官方的好',
			children: [
				{
					name: '默认',
				},
				{
					name: '水电费',
					children: [
						{ name: '默认' },
						{
							name: '考核',
							children: [
								{ name: '默认' },
								{
									name: '多少分',
									children: [
										{
											name: '默认',
										},
										{
											name: '阿斯蒂芬',
										},
									],
								},
							],
						},
						{ name: '规范的' },
					],
				},
				{
					name: '大师傅似的',
					children: [{ name: '默认' }, { name: '是谁的' }],
				},
			],
		},
		{ name: '才能' },
		{ name: '接口' },
		{
			name: '过后见可',
			children: [
				{
					name: '默认',
				},
				{
					name: '水电费',
				},
				{
					name: '大师傅似的',
					children: [
						{ name: '默认' },
						{
							name: '考核',
							children: [
								{ name: '默认' },
								{
									name: '多少分',
									children: [
										{
											name: '默认',
										},
										{
											name: '阿斯蒂芬',
										},
									],
								},
							],
						},
						{ name: '规范的' },
					],
				},
			],
		},
		{ name: '法国和' },
		{ name: '阿达' },
		{
			name: '阿瑟东',
			children: [
				{
					name: '默认',
				},
				{
					name: '水电费',
					children: [{ name: '默认' }, { name: '是谁的' }],
				},
				{
					name: '大师傅似的',
				},
			],
		},
		{ name: '出现' },
		{ name: '想象中' },
		{
			name: '则重新',
			children: [
				{
					name: '默认',
				},
				{
					name: '水电费',
				},
				{
					name: '大师傅似的',
				},
			],
		},
		{ name: '转成' },
	]
	const handleFile = () => {
		setDisabled(true)
		dispatch(setItems(items))
	}
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
