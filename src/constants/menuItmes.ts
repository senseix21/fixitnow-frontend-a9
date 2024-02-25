

export interface MenuItem {
    title: string;
    link: string;
    subItems?: MenuItem[];
}

export const userMenuItems: MenuItem[] = [
    {
        title: 'Profile',
        link: '/profile'

    },
    {
        title: 'Edit Profile',
        link: '/editProfile'


    },
    {
        title: 'Bookings',
        link: '/bookings'


    },

    {
        title: 'Service History',
        link: '/serviceHistory'


    },
    {
        title: 'Feedback',
        link: '/feedback'
    },
];


export const adminMenuItems: MenuItem[] = [
    { title: 'Dashboard', link: '/dashboard' },
    { title: 'Manage Users', link: '/manageUsers' },

    { title: 'Add Service', link: '/addService' },
    { title: 'Edit Service', link: '/editService' },
    { title: 'Remove Service', link: '/removeService' },


    { title: 'View Bookings', link: '/viewBookings' },
    { title: 'Manage Bookings', link: '/manageBookings' },

    { title: 'Content Management', link: '/contentManagement' },
    { title: 'Profile ', link: '/profile' },
    { title: 'Edit Profile', link: '/editProfile' },
];

export const superAdminMenuItems: MenuItem[] = [
    { title: 'Dashboard', link: '/dashboard' },

    { title: 'Add Admin', link: '/addAdmin' },
    { title: 'Edit Admin', link: '/editAdmin' },
    { title: 'Remove Admin', link: '/removeAdmin' },


    { title: 'Add Role', link: '/addRole' },
    { title: 'Edit Role', link: '/editRole' },
    { title: 'Remove Role', link: '/removeRole' },


    { title: 'Manage Users', link: '/manageUsers' },
    { title: 'Profile ', link: '/profile' },
    { title: 'Edit Profile', link: '/editProfile' },
];