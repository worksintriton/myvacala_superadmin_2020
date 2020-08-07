interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/superadmin/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Role management',
    url: '/master',
    icon: 'icon-support',
    children: [
      // {
      //   name: 'Add Role',
      //   url: '/superadmin/master/addrole',
      //   icon: 'icon-plus'
      // },
      {
        name: 'Add Employees',
        url: '/superadmin/master/addemployees',
        icon: 'icon-user'
      },
      {
        name: 'List Employees',
        url: '/superadmin/master/listemployees',
        icon: 'icon-list'
      },
      {
        name: 'Suspended Employees',
        url: '/superadmin/master/revokemployees',
        icon: 'icon-list'
      },
    ]
  },
  {
    name: 'Customers',
    url: '/buttons',
    icon: 'icon-user',
    children: [
      {
        name: 'Customer List',
        url: '/superadmin/master/customer',
        icon: 'icon-list'
      },


    ]
  },
  {
    name: 'Bookings',
    url: '/dashboard',
    icon: 'icon-notebook',
    children: [
      {
        name: 'Mechanic Bookings',
        url: '/superadmin/master/view_bookings',
        icon: 'icon-list'
      },
      {
        name: 'Parking Bookings',
        url: '/superadmin/master/booking_parking',
        icon: 'icon-list',
      },

    ]
  },
  {
    name: 'Vendor Onboarding',
    url: '/buttons',
    icon: 'icon-user',
    children: [
      {
        name: 'Create Mechanic',
        url: '/superadmin/master/create_mechanic',
        icon: 'icon-plus'
      },
      {
        name: 'QRCodeGeneration',
        url: '/superadmin/master/create_driver',
        icon: 'icon-plus'          
      },
      {
        name: 'Vendor Parking',
        url: '/buttons',
        icon: 'icon-plus',
        children: [
          {
            name: 'Create Parking',
            url: '/superadmin/master/parking',
            icon: 'icon-plus'
          },
          {
            name: 'QR Code Generation',
            url: '/superadmin/master/QRCodeGeneration',
            icon: 'icon-plus'
          },
        ],
      },
    ],
  },
  {
    name: 'Vendor List',
    url: '/buttons',
    icon: 'icon-user',
    children: [
      {
        name: 'List Mechanic Details',
        url: '/superadmin/master/list_mechanic',
        icon: 'icon-list'
      },

      //     {
      //       name: 'List Drivers Details',
      //       url: '/superadmin/master/list_driver',
      //       icon: 'icon-list'

      // },      
      {
        name: 'Vendor Parking List',
        url: '/superadmin/master/list_parking',
        icon: 'icon-list'
      },
    ],
  },

  {
    name: 'Statatics',
    url: '/superadmin/master/charts',
    icon: 'fa fa-line-chart'
  },

  {
    name: 'App features ',
    url: '/superadmin/master/payments',
    icon: 'fa fa-grav',

    children: [
      {
        name: 'Vehicle Management',
        url: '/superadmin/master/create_master_service',
        icon: 'icon-plus',
        children: [
          {
            name: 'Fuel Type',
            url: '/superadmin/master/Fuel_Type',
            icon: 'nav-icon icon-cursor'
          },
          // {
          //   name: 'Vehicle Type',
          //   url: '/superadmin/master/vehicle_type',
          //   icon: 'nav-icon icon-cursor'
          // },
          {
            name: 'Vehicle Body Type',
            url: '/superadmin/master/VehicleModel',
            icon: 'nav-icon icon-cursor'
          },
          {
            name: 'Engine CC',
            url: '/superadmin/master/Enginecc',
            icon: 'nav-icon icon-cursor'
          },  
          {
            name: 'Vehicle Manufacturer',
            url: '/superadmin/master/Brand',
            icon: 'nav-icon icon-cursor'
          },
          {
            name: 'Create Vehicle Model',
            url: '/superadmin/master/VehicleName',
            icon: 'nav-icon icon-cursor'
          },
         
          {
            name: 'Vehicle List',
            url: '/superadmin/master/VehicleList',
            icon: 'nav-icon icon-cursor'
          },
          {
            name: 'Popular Vehicle',
            url: '/superadmin/master/PopularVehicle',
            icon: 'nav-icon icon-cursor'
          },
        ],
      },
      {
        name: 'Service Management',
        url: '/superadmin/master/create_master_service',
        icon: 'icon-plus',
        children: [
          {
            name: 'Master Service',
            url: '/superadmin/master/create_master_service',
            icon: 'nav-icon icon-cursor'
          },

          {
            name: 'Main Service',
            url: '/superadmin/master/create_main_service',
            icon: 'nav-icon icon-cursor'
          },
          {
            name: 'Subservices',
            url: '/superadmin/master/sub_service',
            icon: 'nav-icon icon-cursor'
          },
          {
            name: 'Popular Service',
            url: '/superadmin/master/PopularService',
            icon: 'nav-icon icon-cursor'
          },
          //    {
          //   name: 'Popular Sub Service',
          //   url: '/superadmin/master/PopularSubService',
          //   icon: 'nav-icon icon-cursor'
          // },
          {
            name: 'Popular SubService',
            url: '/superadmin/master/Popular_SubService',
            icon: 'nav-icon icon-cursor'
          },
          {
            name: 'Subscriptions',
            url: '/superadmin/master/Subscriptions',
            icon: 'nav-icon icon-cursor'
          },
         

          {
            name: 'Location',
            url: '/superadmin/master/Locations',
            icon: 'nav-icon icon-cursor'
          },
          {
            name: 'User List',
            url: '/superadmin/master/userlist',
            icon: 'nav-icon icon-cursor'
          },
          {
            name: 'User Location List',
            url: '/superadmin/master/userlocationlist',
            icon: 'nav-icon icon-cursor'
          },
          {
            name: 'Coupon code',
            url: '/superadmin/master/couponcode',
            icon: 'nav-icon icon-cursor'
          },
          {
            name: 'Notification',
            url: '/superadmin/master/notification',
            icon: 'nav-icon icon-cursor'
          },
          {
            name: 'Cart',
            url: '/superadmin/master/cart',
            icon: 'nav-icon icon-cursor'
          },
          {
            name: 'FAQ',
            url: '/superadmin/master/faq',
            icon: 'nav-icon icon-cursor'
          },
          // {
          //   name: 'Vehicle model & Variant',
          //   url: '/superadmin/master/create_service',
          //   icon: 'nav-icon icon-cursor'
          // },
        ],
      },
    ]
  },
  {
    name: 'Finance',
    url: '/superadmin/master/payments',
    icon: 'fa fa-money'
  },
  {
    name: 'Banner',
    url: '/buttons',
    icon: 'fa fa-support',
    children: [
      {
        name: 'Master Service Banner',
        url: '/superadmin/master/MasterServiceBanner',
        icon: 'nav-icon icon-cursor'
      },
      {
        name: 'Main Service Banner',
        url: '/superadmin/master/Main_SErvice_banner',
        icon: 'nav-icon icon-cursor'
      },
      {
        name: 'Splash Screen',
        url: '/superadmin/master/FlashScreen',
        icon: 'nav-icon icon-cursor'
      },
    ]
  },
  // {
  //   name: 'Finance',
  //   url: '/superadmin/master/payments',
  //   icon: 'fa fa-money'
  // },
  {
    name: 'Customer care',
    url: '/buttons',
    icon: 'fa fa-support',
    children: [
      {
        name: 'Team_1',
        url: '/superadmin/master/team1',
        icon: 'nav-icon icon-cursor'
      },
      {
        name: 'Call Details',
        url: '/superadmin/master/team2',
        icon: 'nav-icon icon-cursor'
      },
    ]
  },
  {
    name: 'Operations',
    url: '/superadmin/master/cre_team',
    icon: 'fa fa-user'
  },
  // {
  //   name: 'Driver Details',
  //   url: '/buttons',
  //   icon: 'icon-support',
  //   children: [
  //     {
  //       name: 'Create Drivers',
  //       url: '/superadmin/master/create_driver',
  //       icon: 'icon-plus'
  //     },
  //     {
  //       name: 'List Drivers Details',
  //       url: '/superadmin/master/list_driver',
  //       icon: 'nav-icon icon-cursor'
  //     },
  //     {
  //       name: 'Booking Details',
  //       url: '/superadmin/master/driverbookings',
  //       icon: 'icon-notebook'
  //     },
  //   ]
  // },
  // {
  //   name: 'Mechanic Details',
  //   url: '/buttons',
  //   icon: 'icon-user',
  //   children: [
  //     {
  //       name: 'Create Mechanics',
  //       url: '/superadmin/master/create_mechanic',
  //       icon: 'icon-plus'
  //     },
  //     {
  //       name: 'List Mechanic Details',
  //       url: '/superadmin/master/list_mechanic',
  //       icon: 'nav-icon icon-cursor'
  //     },
  //     {
  //       name: 'Mechanic Bookings',
  //       url: '/superadmin/master/mechanicbookings',
  //       icon: 'nav-icon icon-cursor'
  //     },
  //   ]
  // },
  // {
  //   name: 'Service',
  //   url: '/buttons',
  //   icon: 'icon-settings',
  //   children: [
  //     {
  //       name: 'Create master Services',
  //       url: '/superadmin/master/create_master_service',
  //       icon: 'icon-plus'
  //     },
  //     {
  //       name: 'Create Service',
  //       url: '/superadmin/master/create_service',
  //       icon: 'icon-notebook'
  //     },
  //     {
  //       name: 'Create Sub Services',
  //       url: '/superadmin/master/sub_service',
  //       icon: 'icon-pencil'
  //     },

  //   ]
  // },
  // {
  //   name: 'Master',
  //   url: '/buttons',
  //   icon: 'icon-puzzle',
  //   children: [
  //     {
  //       name: 'Vehicle Type',
  //       url: '/superadmin/master/vehicle_type',
  //       icon: 'icon-plus'
  //     },
  //   ]
  // },
  // {
  //   name: 'Bookings',
  //   url: '/dashboard',
  //   icon: 'icon-notebook',
  //   children: [
  //     {
  //       name: 'View Bookings',
  //       url: '/superadmin/master/view_bookings',
  //       icon: 'icon-plus'
  //     },
  //   ]
  // },
  // {
  //   name: 'Payments',
  //   url: '/superadmin/master/payments',
  //   icon: 'fa fa-money'
  // },
  // {
  //   name: 'Notifications',
  //   url: '/superadmin/master/notifications',
  //   icon: 'icon-bell'
  // },
  // {
  //   name: 'Downloads',
  //   url: '/superadmin/master/downloads',
  //   icon: 'fa fa-download'
  // },


];
