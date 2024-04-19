import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const ADMIN_SIDEBAR_LINKS = [
	{
		key: 'AdminDashboard',
		label: 'Dashboard',
		path: '/Admin',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'AdminOrders',
		label: 'Orders',
		path: '/Admin/AdminOrders',
		icon: <HiOutlineShoppingCart />
	},
    {
		key: 'AdminCleaners',
		label: 'Cleaners',
		path: '/Admin/AdminCleaners',
		icon: <HiOutlineCube />
	},
	{
		key: 'AdminClients',
		label: 'Clients',
		path: '/Admin/AdminClients',
		icon: <HiOutlineUsers />
	},
	{
		key: 'AdminJobs',
		label: 'Jobs',
		path: '/Admin/AdminJobs',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'AdminMessages',
		label: 'Messages',
		path: '/Admin/AdminMessages',
		icon: <HiOutlineAnnotation />
	}
]

export const ADMIN_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'AdminSettings',
		label: 'Settings',
		path: '/Admin/AdminSettings',
		icon: <HiOutlineCog />
	},
	{
		key: 'AdminSupport',
		label: 'Help & Support',
		path: '/Admin/AdminSupport',
		icon: <HiOutlineQuestionMarkCircle />
	}
]