import { useState } from 'react'

import { Layout } from 'antd'

import SiderBar from './SiderBar'
import Main from './Main'

const LayoutPage: React.FC = () => {
	const [collapsed, setCollapsed] = useState(false)

	return (
		<Layout className='h-screen'>
			<SiderBar collapsed={collapsed}></SiderBar>
			<Main collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}></Main>
		</Layout>
	)
}

export default LayoutPage
