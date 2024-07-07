import SiderBar from './SiderBar'
import { Layout } from 'antd'
import type { NavItems } from '@/types/components/Layout'
import { useState } from 'react'
import Main from './Main'

const LayoutPage: React.FC = () => {
	const [collapsed, setCollapsed] = useState(false)
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

	return (
		<Layout className='h-screen'>
			<SiderBar collapsed={collapsed} items={items}></SiderBar>
			<Main collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}></Main>
		</Layout>
	)
}

export default LayoutPage
