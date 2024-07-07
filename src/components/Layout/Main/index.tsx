import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Layout } from 'antd'
import FileUpload from '@/components/FileUpload'

interface MainProps {
	collapsed: boolean
	onClick: () => void
}
const { Header, Content, Footer } = Layout
const Main: React.FC<MainProps> = ({ collapsed, onClick }) => {
	return (
		<Layout>
			<Header className='bg-slate-50'>
				<Button
					type='text'
					icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
					onClick={onClick}
					className='text-base w-16 h-16'
				/>
			</Header>
			<Content className='bg-slate-50 mt-4 rounded-lg py-4 pl-12 pr-4 mx-2'>
				<FileUpload />
			</Content>
			<Footer className='text-center p-2'>
				书签导航 ©{new Date().getFullYear()} Created by{' '}
				<a href='https://github.com/panda74' target='_blank'>
					Panda74
				</a>
			</Footer>
		</Layout>
	)
}

export default Main
