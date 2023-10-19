

export interface MenuItem {
    title: string;
    subItems?: MenuItem[];
}

export const userMenuItems: MenuItem[] = [
    {
        title: 'Profile',
        subItems: [
            { title: 'Edit Profile' },
            { title: 'View Profile' },
        ],
    },
    {
        title: 'Bookings',
        subItems: [
            { title: 'Make a Booking' },
            { title: 'Track Booking Status' },
            { title: 'Cancel Booking' },
        ],
    },
    {
        title: 'Notifications (Optional)',
        subItems: [
            { title: 'Booking Confirmations' },
            { title: 'Reminders' },
            { title: 'Updates' },
        ],
    },
    {
        title: 'Dashboard',
        subItems: [
            { title: 'Booking History' },
        ],
    },
    {
        title: 'Feedback',
        subItems: [
            { title: 'Submit Comments' },
            { title: 'Submit Suggestions' },
        ],
    },
];


export const adminMenuItems: MenuItem[] = [
    { title: 'Dashboard' },
    { title: 'Manage Users' },
    {
        title: 'Manage Services',
        subItems: [
            { title: 'Add Service' },
            { title: 'Edit Service' },
            { title: 'Remove Service' },
        ],
    },
    {
        title: 'Booking Management',
        subItems: [
            { title: 'View Bookings' },
            { title: 'Manage Bookings' },
        ],
    },
    { title: 'Content Management' },
    { title: 'Profile Management' },
];


export const superAdminMenuItems: MenuItem[] = [
    { title: 'Dashboard' },
    {
        title: 'Manage Admins',
        subItems: [
            { title: 'Add Admin' },
            { title: 'Edit Admin' },
            { title: 'Remove Admin' },
        ],
    },
    {
        title: 'Manage Roles',
        subItems: [
            { title: 'Add Role' },
            { title: 'Edit Role' },
            { title: 'Remove Role' },
        ],
    },
    { title: 'Manage Users' },

    { title: 'Profile Management' },
];
