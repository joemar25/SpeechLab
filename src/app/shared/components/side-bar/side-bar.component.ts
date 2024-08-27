import { Component, CUSTOM_ELEMENTS_SCHEMA, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarServiceService } from '../../../core/services/SidebarService/sidebar-service.service';

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
export class SideBarComponent implements OnInit {
  @Output() collapsedChange = new EventEmitter<boolean>();
  isCollapsed: boolean = false;

  studentMenu: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'ic:sharp-dashboard',
      route: '/student/dashboard',
    },
    {
      label: 'Class Lab',
      icon: 'ri:graduation-cap-fill',
      route: '/student/class-lab',
    },
    { label: 'Meet', svgIcon: 'meet-icon', route: '/meet/video-conference' },
    {
      label: 'Tasks',
      icon: 'mdi:format-list-bulleted',
      route: '/student/task',
    },
    {
      label: 'Speech Lab',
      svgIcon: 'speech-lab-icon',
      route: '/student/speechlab',
    },
    {
      label: 'Dictionary',
      icon: 'ic:sharp-dashboard',
      route: '/dictionary/d-search',
    },
    {
      label: 'Text to Speech',
      svgIcon: 'text-to-speech-icon',
      route: '/text-to-speech/text-record',
    },
    {
      label: 'Speech Analyzer',
      svgIcon: 'text-to-speech-icon',
      route: '/speech-analyzer/record-speech',
    },
  ];

  teacherMenu: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'ic:sharp-dashboard',
      route: '/teacher/new-dashboard',
    },
    {
      label: 'Manage Class',
      icon: 'mdi:account-group',
      route: '/teacher/manage-class',
    },
    {
      label: 'Manage Courses',
      icon: 'mdi:book-open-variant',
      route: '/teacher/manage-courses',
    },
    { label: 'Meet', svgIcon: 'meet-icon', route: '/meet/video-conference' },
    {
      label: 'Speech Lab',
      svgIcon: 'speech-lab-icon',
      route: '/teacher/speechlab',
    },
    {
      label: 'Dictionary',
      icon: 'mdi:dictionary',
      route: '/dictionary/d-search',
    },
    {
      label: 'Text to Speech',
      svgIcon: 'text-to-speech-icon',
      route: '/teacher/text-to-speech',
    },
    {
      label: 'Speech Access',
      icon: 'mdi:microphone',
      route: '/teacher/speech-access',
    },
  ];

  AdminMenu: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'ic:sharp-dashboard',
      route: '/teacher/new-dashboard',
    },
    {
      label: 'User Management',
      icon: 'mdi:account-group',
      route: '/teacher/manage-class',
    },
    {
      label: 'Class Management',
      icon: 'mdi:book-open-variant',
      route: '/teacher/manage-courses',
    },
    {
      label: 'Content Management',
      svgIcon: 'speech-lab-icon',
      route: '/teacher/speechlab',
    },
    {
      label: 'Speech Lab Management',
      icon: 'mdi:dictionary',
      route: '/dictionary/d-search',
    },
  ];

  generalMenu: MenuItem[] = [
    { label: 'Report a Problem', icon: 'mdi:report-problem' },
    { label: 'Sign Out', icon: 'icon-park-outline:logout', route: '/login' },
  ];

  currentMenu: MenuItem[] = [];
  othersMenu: MenuItem[] = [];

  constructor(private router: Router, private sidebarService: SidebarServiceService) {}

  ngOnInit() {
    this.setMenuByRole();
    this.sidebarService.isCollapsed$.subscribe(
      isCollapsed => {
        this.isCollapsed = isCollapsed;
        this.collapsedChange.emit(this.isCollapsed);
      }
    );
  }

  setMenuByRole() {
    const userRole = localStorage.getItem('userRole') as 'student' | 'teacher' | 'admin';
    console.log('User Role:', userRole);
    switch (userRole) {
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
    this.sidebarService.toggleSidebar();
  }

  signOut() {
    // Implement your sign out logic here
    localStorage.removeItem('userRole');
    this.router.navigate(['/login']);
  }

  getSvgPath(svgIcon: string): string {
    switch (svgIcon) {
      case 'meet-icon':
        return 'M25.001 0.429688C25.664 0.429688 26.2999 0.69308 26.7687 1.16192C27.2376 1.63076 27.501 2.26665 27.501 2.92969V15.4297C27.501 16.8172 26.3885 17.9297 25.001 17.9297H30.001V20.4297H0.000976562V17.9297H5.00098C4.33794 17.9297 3.70205 17.6663 3.23321 17.1975C2.76437 16.7286 2.50098 16.0927 2.50098 15.4297V2.92969C2.50098 1.54219 3.61348 0.429688 5.00098 0.429688H25.001ZM25.001 2.92969H5.00098V15.4297H25.001V2.92969ZM15.001 10.4297C17.7635 10.4297 20.001 11.5547 20.001 12.9297V14.1797H10.001V12.9297C10.001 11.5547 12.2385 10.4297 15.001 10.4297ZM15.001 4.17969C15.664 4.17969 16.2999 4.44308 16.7687 4.91192C17.2376 5.38076 17.501 6.01665 17.501 6.67969C17.501 7.34273 17.2376 7.97861 16.7687 8.44745C16.2999 8.9163 15.664 9.17969 15.001 9.17969C13.6135 9.17969 12.501 8.06719 12.501 6.67969C12.501 5.29219 13.626 4.17969 15.001 4.17969Z';
      case 'speech-lab-icon':
        return 'M10.6318 14.5562C13.3933 14.5562 15.6318 12.3176 15.6318 9.55615C15.6318 6.79473 13.3933 4.55615 10.6318 4.55615C7.87041 4.55615 5.63184 6.79473 5.63184 9.55615C5.63184 12.3176 7.87041 14.5562 10.6318 14.5562Z M18.6193 17.7562C16.5193 16.6812 13.7943 15.8062 10.6318 15.8062C7.46934 15.8062 4.74434 16.6812 2.64434 17.7562C1.39434 18.3937 0.631836 19.6812 0.631836 21.0812V24.5562H20.6318V21.0812C20.6318 19.6812 19.8693 18.3937 18.6193 17.7562Z';
      case 'text-to-speech-icon':
        return 'M10.2351 14.5562C12.9965 14.5562 15.2351 12.3176 15.2351 9.55615C15.2351 6.79473 12.9965 4.55615 10.2351 4.55615C7.47368 4.55615 5.23511 6.79473 5.23511 9.55615C5.23511 12.3176 7.47368 14.5562 10.2351 14.5562Z M10.2351 17.0562C6.89761 17.0562 0.235107 18.7312 0.235107 22.0562V24.5562H20.2351V22.0562C20.2351 18.7312 13.5726 17.0562 10.2351 17.0562Z M18.2707 8.00694L19.6922 6.78163C20.4451 6.1514 20.6542 5.05602 20.1683 4.11812C19.6824 3.18021 18.589 2.88923 17.8361 3.51946L16.4348 4.71251C16.3153 4.8171 16.1561 4.87712 15.9896 4.87712C15.8256 4.87712 15.6663 4.81844 15.5479 4.71477C15.1828 4.41394 14.641 4.45287 14.307 4.8107L13.481 5.70707C13.0203 6.19771 13.077 7.01182 13.6014 7.44708L13.6893 7.52013C13.8775 7.67585 14.0678 7.8066 14.2586 7.92108L15.0468 8.42366C15.5224 8.71034 16.1524 8.62845 16.5525 8.21801L17.3367 7.39606C17.4563 7.27212 17.6137 7.20553 17.7771 7.20553C17.9238 7.20553 18.065 7.25986 18.1778 7.36096L18.2214 7.39882C18.6657 7.80957 19.4423 7.74167 19.8777 7.25462C20.3127 6.76797 20.2335 5.97855 19.7892 5.56781L19.7344 5.51798L18.2707 8.00694Z M21.403 7.05821L21.3288 7.02099C20.8967 6.79903 20.3371 6.94878 20.0646 7.35465L19.2276 8.6538C19.1084 8.83653 18.9178 8.95442 18.7058 8.98161C18.4928 9.00879 18.2836 8.94293 18.1316 8.80185L17.8572 8.54847C17.4746 8.18086 16.8646 8.15252 16.4472 8.48633L15.9983 8.85429C15.7197 9.07388 15.6768 9.49689 15.9032 9.80218C16.3241 10.3678 16.9172 10.7461 17.5684 10.8779C17.798 10.9255 18.0335 10.9493 18.2655 10.9493C18.724 10.9493 19.1776 10.853 19.5943 10.6581C20.0307 10.4512 20.4198 10.1506 20.7293 9.77509C21.1077 9.29643 21.2163 8.66758 20.9793 8.1315L20.403 7.05821Z';
      default:
        return '';
    }
  }
  

  getMenuItemClasses(): string {
    return `flex items-center py-3 px-4 rounded-lg cursor-pointer transition-colors duration-200 glassmorph group ${this.isCollapsed ? 'justify-center' : ''}`;
  }
  getTextClasses(): string {
    return this.isCollapsed ? 'hidden sidebar-hover-text' : 'block sidebar-text';
  }
}