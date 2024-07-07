import SiderBar from './SiderBar'
import { Layout } from 'antd'
import { useState } from 'react'
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
