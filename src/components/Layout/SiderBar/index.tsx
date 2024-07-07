import {
	BookFilled,
	BulbFilled,
	TrophyFilled,
	StarFilled,
	CloudFilled,
	CrownFilled,
	RocketFilled,
	FileTextFilled,
	SmileFilled,
	SunFilled,
	RobotFilled,
	HomeFilled,
	LikeFilled,
	ProductFilled,
	GiftFilled,
	FireFilled,
	CalendarFilled,
} from '@ant-design/icons'
import { Layout, Menu, Avatar, Space } from 'antd'
import Github from '@/assets/github.svg?react'
import type { NavItems } from '@/types/components/Layout'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

interface SiderBarProps {
	collapsed: boolean
}
interface MenuItem {
	key: string
	icon: React.ReactNode
	label: string
	children?: MenuItem[]
}
const { Sider } = Layout
const SiderBar: React.FC<SiderBarProps> = ({ collapsed }) => {
	const items = useSelector((state: RootState) => state.nav.items)
	const commonIcon = <HomeFilled />
	const defaultIcon = <BookFilled />
	const icons = [
		<BulbFilled />,
		<TrophyFilled />,
		<StarFilled />,
		<CloudFilled />,
		<RocketFilled />,
		<CrownFilled />,
		<FileTextFilled />,
		<SmileFilled />,
		<SunFilled />,
		<RobotFilled />,
		<LikeFilled />,
		<ProductFilled />,
		<GiftFilled />,
		<FireFilled />,
		<CalendarFilled />,
	]
	const transformItems = (
		items: NavItems,
		icons: React.ReactNode[],
		parentKey = '',
		isTopLevel = true,
	) => {
		const usedIcons = new Set()
		const getUniqueIcon = () => {
			const availableIcons = icons.filter(icon => !usedIcons.has(icon))
			if (availableIcons.length === 0) return defaultIcon
			const selectedIcon = availableIcons[Math.floor(Math.random() * availableIcons.length)]
			usedIcons.add(selectedIcon)
			return selectedIcon
		}

		return items.map((item, index) => {
			const key = parentKey ? `${parentKey}-${index}` : `${index}`
			const icon = isTopLevel ? (index === 0 ? commonIcon : getUniqueIcon()) : null
			const transformedItem: MenuItem = {
				key: key,
				label: item.name,
				icon: icon,
			}

			if (item.children) {
				transformedItem.children = transformItems(item.children, icons, key, false)
			}

			return transformedItem
		})
	}
	const menuItems = useMemo(() => transformItems(items, icons), [items])

	return (
		<Sider trigger={null} collapsible collapsed={collapsed}>
			<div className='h-full flex flex-col'>
				<div className='h-16  px-6 overflow-hidden py-4 whitespace-nowrap text-xl flex'>
					<img src='/logo.png' className='inline-block w-8 h-8 ' />
					<span
						className={`ml-2  text-gray-50 leading-8 font-semibold ${collapsed ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
					>
						书签导航
					</span>
				</div>
				<Menu
					className='overflow-auto flex-1 py-2'
					theme='dark'
					mode='inline'
					defaultSelectedKeys={['0']}
					items={menuItems}
				/>
				<Space size={16} className='h-9 px-4 py-2'>
					<a href='https://github.com/panda74/bookmark-web' target='_blank'>
						<Avatar shape='square' icon={<Github />} />
					</a>
				</Space>
			</div>
		</Sider>
	)
}

export default SiderBar
