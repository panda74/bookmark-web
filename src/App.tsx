import { ConfigProvider } from 'antd'

import LayoutPage from '@/components/Layout'

const App: React.FC = () => {
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#fabb5c',
					colorLink: '#f59e0b',
					fontFamily: 'BlinkMacSystemFont',
				},
				components: {
					Menu: {
						itemHeight: 50,
					},
				},
			}}
		>
			<LayoutPage></LayoutPage>
		</ConfigProvider>
	)
}

export default App
