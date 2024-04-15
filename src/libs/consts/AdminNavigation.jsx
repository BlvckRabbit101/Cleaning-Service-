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
		path: '/AdminOrders',
		icon: <HiOutlineShoppingCart />
	},
    {
		key: 'AdminCleaners',
		label: 'Cleaners',
		path: '/AdminCleaners',
		icon: <HiOutlineCube />
	},
	{
		key: 'AdminCustomers',
		label: 'Customers',
		path: '/AdminCustomers',
		icon: <HiOutlineUsers />
	},
	{
		key: 'AdminJobs',
		label: 'Jobs',
		path: '/AdminJobs',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'AdminMessages',
		label: 'Messages',
		path: '/AdminMessages',
		icon: <HiOutlineAnnotation />
	}
]

export const ADMIN_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'AdminSettings',
		label: 'Settings',
		path: '/AdminSettings',
		icon: <HiOutlineCog />
	},
	{
		key: 'AdminSupport',
		label: 'Help & Support',
		path: '/AdminSupport',
		icon: <HiOutlineQuestionMarkCircle />
	}
]