import { BullionOperations, Consumers, CustomizeDashboard, Dashboard, FAQ, ManageBankAccounts, OtherOperations, YourNetwork, Transactions } from "../assets"

export const sidebar = [
    {
        name: 'Dashboard',
        icon: Dashboard,
        path: '/dashboard'
    },
    {
        name: 'Bullion Operations',
        icon: BullionOperations,
        path: '/bullion-operations'
    },
    {
        name: 'Transactions',
        icon: Transactions,
        path: '/transactions'
    },
    {
        name: 'Your Network',
        icon: YourNetwork,
        path: '/your-network'
    },
    {
        name: 'Consumers',
        icon: Consumers,
        path: '/consumers'
    },
    {
        name: 'Other Operations',
        icon: OtherOperations,
        path: '/other-operations'
    },
    {
        name: 'Manage Bank Accounts',
        icon: ManageBankAccounts,
        path: '/manage-bank-accounts'
    },
    {
        name: 'FAQ',
        icon: FAQ,
        path: '/faq'
    },
    {
        name: 'Customize Dashboard',
        icon: CustomizeDashboard,
        path: '/customize-dashboard'
    }
]