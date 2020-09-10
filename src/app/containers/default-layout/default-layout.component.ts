import { Component, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.css']

})
export class DefaultLayoutComponent implements OnDestroy {
  public navItems:any=[{
    name: 'Dashboard',
    url: '/superadmin/dashboard',
    icon: 'icon-speedometer',

  },];
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  login_emp: any;
  constructor(@Inject(DOCUMENT) _document?: any,
    @Inject(SESSION_STORAGE) private storage?
      : StorageService,
      private router?: Router,) {
    this.login_emp = this.getFromLocal('login_emp')
    console.log(this.login_emp)
    if(this.login_emp == undefined){
      this.router.navigate(['/']);
    }
    if (this.login_emp.Sector.some(x => (x == "AddEmployee" && this.login_emp.Sector.every(y => y != "ListofEmployees")))) {
      this.navItems.push( {
        name: 'Role management',
        url: '/master',
        icon: 'icon-support',
        children: [
          {
            name: 'Add Employees',
            url: '/superadmin/master/addemployees',
            icon: 'icon-user'
          },
        ]
      },)
    }
    if (this.login_emp.Sector.some(x => (x == "ListofEmployees" && this.login_emp.Sector.every(y => y != "AddEmployee")) )) {
      this.navItems.push( {
        name: 'Role management',
        url: '/master',
        icon: 'icon-support',
        children: [
          {
            name: 'List Employees',
            url: '/superadmin/master/listemployees',
            icon: 'icon-list'
          },
          {
            name: 'Suspended List',
            url: '/superadmin/master/revokemployees',
            icon: 'icon-list'
          },
        ]
      },)
    }
    if (this.login_emp.Sector.some(x => (x == "ListofEmployees" && this.login_emp.Sector.some(y => y == "AddEmployee")) )) {
      this.navItems.push( {
        name: 'Role management',
        url: '/master',
        icon: 'icon-support',
        children: [
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
            name: 'Suspended List',
            url: '/superadmin/master/revokemployees',
            icon: 'icon-list'
          },
        ]
      },)
    }
    if (this.login_emp.Sector.some(x => (x == "MechanicOnbordation"  && this.login_emp.Sector.every(y => y != "parkingOnboradation")))) {
      this.navItems.push({
        name: 'Vendor Onboarding',
        url: '/buttons',
        icon: 'icon-user',
        children: [
          {
            name: 'Create Mechanic',
            url: '/superadmin/master/create_mechanic',
            icon: 'icon-plus'
          },
        ],
      })
    }
    if (this.login_emp.Sector.some(x => (x == "parkingOnboradation"  && this.login_emp.Sector.every(y => y != "MechanicOnbordation" )))) {
      this.navItems.push({
        name: 'Vendor Onboarding',
        url: '/buttons',
        icon: 'icon-user',
        children: [
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
              {
                name: 'Coupon code',
                url: '/superadmin/master/parking_couponcode',
                icon: 'nav-icon icon-cursor'
              },
            ],
          },
        ],
      })
    }

    if (this.login_emp.Sector.some(x => (x == "parkingOnboradation"  && this.login_emp.Sector.some(y => y == "MechanicOnbordation" )))) {
      this.navItems.push({
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
              {
                name: 'Coupon code',
                url: '/superadmin/master/parking_couponcode',
                icon: 'nav-icon icon-cursor'
              },
            ],
          },
        ],
      })
    }

    if (this.login_emp.Sector.some(x => (x == "MechanicList"  && this.login_emp.Sector.every(y => y != "ParkingList" ) ) )) {
      this.navItems.push( {
        name: 'Vendor List',
        url: '/buttons',
        icon: 'icon-user',
        children: [
          {
            name: 'List Mechanic Details',
            url: '/superadmin/master/list_mechanic',
            icon: 'icon-list'
          }, 
        ],
      },)
    }
    if (this.login_emp.Sector.some(x => (x == "ParkingList"  && this.login_emp.Sector.every(y => y != "MechanicList" ) ) )) {
      this.navItems.push( {
        name: 'Vendor List',
        url: '/buttons',
        icon: 'icon-user',
        children: [
          {
            name: 'Vendor Parking List',
            url: '/superadmin/master/list_parking',
            icon: 'icon-list'
          },
        ],
      },)
    }
    if (this.login_emp.Sector.some(x => (x == "ParkingList"  && this.login_emp.Sector.some(y => y == "MechanicList" ) ) )) {
      this.navItems.push( {
        name: 'Vendor List',
        url: '/buttons',
        icon: 'icon-user',
        children: [
          {
            name: 'List Mechanic Details',
            url: '/superadmin/master/list_mechanic',
            icon: 'icon-list'
          }, 
          {
            name: 'Vendor Parking List',
            url: '/superadmin/master/list_parking',
            icon: 'icon-list'
          },
        ],
      },)
    }
    if (this.login_emp.Sector.some(x => x == "AppFeatures" )) {
      this.navItems.push( {
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
            ],
          },
        ]
      },)
    }
    if (this.login_emp.Sector.some(x => x == "Operations" )) {
      this.navItems.push( {
        name: 'Operations',
        url: '/superadmin/master/cre_team',
        icon: 'fa fa-user'
      },)
    }

    
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }


  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
}
