import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface MenuItem {
  label: string;
  icon?: string;
  route?: string;
  svgIcon?: string;
}

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  sideBar: boolean = false;  // This controls whether the sidebar is minimized or not

  studentMenu: MenuItem[] = [
    { label: 'Dashboard', icon: 'ic:sharp-dashboard', route: '/student/dashboard' },
    { label: 'Class Lab', icon: 'ri:graduation-cap-fill', route: '/student/class-lab' },
    { label: 'Meet', svgIcon: 'meet-icon', route: '/meet/video-conference' },
    { label: 'Tasks', icon: 'mdi:format-list-bulleted', route: '/student/task'},
    { label: 'Speech Lab', svgIcon: 'speech-lab-icon'},
    { label: 'Dictionary', icon: 'ic:sharp-dashboard',route: '/dictionary/d-search' },
    { label: 'Text to Speech', svgIcon: 'text-to-speech-icon' },
    { label: 'Speech Analyzer', svgIcon: 'text-to-speech-icon', route : '/speech-analyzer/record-speech' },
  ];
  
  teacherMenu: MenuItem[] = [
    { label: 'Manage Class', icon: 'mdi:account-group', route: '/teacher/manage-class' },
    { label: 'Manage Courses', icon: 'mdi:book-open-variant', route: '/teacher/manage-courses' },
    { label: 'Meet', svgIcon: 'meet-icon', route: '/meet/video-conference' },
    { label: 'Speech Lab', svgIcon: 'speech-lab-icon', route: '/teacher/speechlab' },
    { label: 'Dictionary', icon: 'mdi:dictionary', route: '/dictionary/d-search' },
    { label: 'Text to Speech', svgIcon: 'text-to-speech-icon', route: '/teacher/text-to-speech' },
    { label: 'Speech Access', icon: 'mdi:microphone', route: '/teacher/speech-access' },
  ];
  
  AdminMenu: MenuItem[] = [
    { label: 'Manage Users', icon: 'mdi:account-cog', route: '/admin/manage-users' },
    { label: 'count', icon: 'mdi:account-cog', route: '/admin/count' },
    { label: 'speechlab', icon: 'mdi:account-cog', route: '/admin/speechlab' },
  ];


  // General menu items that should be visible to all roles
  generalMenu: MenuItem[] = [
    { label: 'Report a Problem', icon: 'mdi:report-problem' },
    { label: 'Sign Out', icon: 'icon-park-outline:logout', route: '/login' },
  ];

  currentMenu: MenuItem[] = [];
othersMenu: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.setMenuByRole();
  }

  setMenuByRole() {
    const userRole = localStorage.getItem('userRole') as 'student' | 'teacher' | 'admin';
    console.log('User Role:', userRole); // Add this line for debugging
    switch(userRole) {
      case 'student':
        this.currentMenu = [...this.studentMenu];
        break;
      case 'teacher':
        this.currentMenu = [...this.teacherMenu];
        break;
      case 'admin':
        this.currentMenu = [...this.AdminMenu];
        break;
      default:
        console.error('Invalid role');
        this.router.navigate(['/login']);
    }
    this.othersMenu = [...this.generalMenu];
  }
  
  
  
  toggleSidebar() {
    this.sideBar = !this.sideBar;  // Toggle sidebar state
  }

  signOut() {
    // Implement sign out logic here
    this.router.navigate(['/login']);
  }

  getSvgPath(svgIcon: string): string {
    switch (svgIcon) {
      case 'meet-icon':
        return 'M25.3818 5.68115C26.0449 5.68115 26.6808 5.94454 27.1496 6.41339C27.6184 6.88223 27.8818 7.51811 27.8818 8.18115V20.6812C27.8818 22.0687 26.7693 23.1812 25.3818 23.1812H30.3818V25.6812H0.381836V23.1812H5.38184C4.71879 23.1812 4.08291 22.9178 3.61407 22.4489C3.14523 21.9801 2.88184 21.3442 2.88184 20.6812V8.18115C2.88184 6.79365 3.99434 5.68115 5.38184 5.68115H25.3818ZM25.3818 8.18115H5.38184V20.6812H25.3818V8.18115ZM15.3818 15.6812C18.1443 15.6812 20.3818 16.8062 20.3818 18.1812V19.4312H10.3818V18.1812C10.3818 16.8062 12.6193 15.6812 15.3818 15.6812ZM15.3818 9.43115C16.0449 9.43115 16.6808 9.69454 17.1496 10.1634C17.6184 10.6322 17.8818 11.2681 17.8818 11.9312C17.8818 12.5942 17.6184 13.2301 17.1496 13.6989C16.6808 14.1678 16.0449 14.4312 15.3818 14.4312C13.9943 14.4312 12.8818 13.3187 12.8818 11.9312C12.8818 10.5437 14.0068 9.43115 15.3818 9.43115Z';
      case 'speech-lab-icon':
        return 'M10.6318 14.5562C13.3933 14.5562 15.6318 12.3176 15.6318 9.55615C15.6318 6.79473 13.3933 4.55615 10.6318 4.55615C7.87041 4.55615 5.63184 6.79473 5.63184 9.55615C5.63184 12.3176 7.87041 14.5562 10.6318 14.5562Z M18.6193 17.7562C16.5193 16.6812 13.7943 15.8062 10.6318 15.8062C7.46934 15.8062 4.74434 16.6812 2.64434 17.7562C1.39434 18.3937 0.631836 19.6812 0.631836 21.0812V24.5562H20.6318V21.0812C20.6318 19.6812 19.8693 18.3937 18.6193 17.7562Z';
      case 'text-to-speech-icon':
        return 'M10.2351 14.5562C12.9965 14.5562 15.2351 12.3176 15.2351 9.55615C15.2351 6.79473 12.9965 4.55615 10.2351 4.55615C7.47368 4.55615 5.23511 6.79473 5.23511 9.55615C5.23511 12.3176 7.47368 14.5562 10.2351 14.5562Z M10.2351 17.0562C6.89761 17.0562 0.235107 18.7312 0.235107 22.0562V24.5562H20.2351V22.0562C20.2351 18.7312 13.5726 17.0562 10.2351 17.0562Z M18.2707 8.00694L19.6922 6.78163C20.4451 6.1514 20.6542 5.05602 20.1683 4.11812C19.6824 3.18021 18.589 2.88923 17.8361 3.51946L16.4348 4.71251C16.3153 4.8171 16.1561 4.87712 15.9896 4.87712C15.8256 4.87712 15.6663 4.81844 15.5479 4.71477C15.1828 4.41394 14.641 4.45287 14.307 4.8107L13.481 5.70707C13.0203 6.19771 13.077 7.01182 13.6014 7.44708L13.6893 7.52013C13.8775 7.67585 14.0678 7.8066 14.2586 7.92108L15.0468 8.42366C15.5224 8.71034 16.1524 8.62845 16.5525 8.21801L17.3367 7.39606C17.4563 7.27212 17.6137 7.20553 17.7771 7.20553C17.9238 7.20553 18.065 7.25986 18.1778 7.36096L18.2214 7.39882C18.6657 7.80957 19.4423 7.74167 19.8777 7.25462C20.3127 6.76797 20.2335 5.97855 19.7892 5.56781L19.7344 5.51798L18.2707 8.00694Z M21.403 7.05821L21.3288 7.02099C20.8967 6.79903 20.3371 6.94878 20.0646 7.35465L19.2276 8.6538C19.1084 8.83653 18.9178 8.95442 18.7058 8.98161C18.4928 9.00879 18.2836 8.94293 18.1316 8.80185L17.8572 8.54847C17.4746 8.18086 16.8646 8.15252 16.4472 8.48633L15.9983 8.85429C15.7197 9.07388 15.6768 9.49689 15.9032 9.80218C16.3241 10.3678 16.9172 10.7461 17.5684 10.8779C17.798 10.9255 18.0335 10.9493 18.2655 10.9493C18.724 10.9493 19.1776 10.853 19.5943 10.6581C20.0307 10.4512 20.4198 10.1506 20.7293 9.77509C21.1077 9.29643 21.2163 8.66758 20.9793 8.1315L20.403 7.05821Z';
      default:
        return '';
    }
  }
}
