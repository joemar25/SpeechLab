import { Component, CUSTOM_ELEMENTS_SCHEMA, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarServiceService } from '../../../core/services/SidebarService/sidebar-service.service';

interface MenuItem {
  label: string;
  icon?: string;
  route: string;  // Make route required
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
      svgIcon: 'speech-analyzer-icon',
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
      route: '/text-to-speech/text-record',
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
      route: '/admin/dashboard',
    },
    {
      label: 'User Management',
      icon: 'mdi:account-group',
      route: '/admin/manage-users',
    },
    {
      label: 'Class Management',
      icon: 'mdi:book-open-variant',
      route: '/admin/manage-class',
    },
    {
      label: 'Content Management',
      svgIcon: 'speech-lab-icon',
      route: '/admin/manage-contents',
    },
    {
      label: 'Speech Lab Management',
      icon: 'mdi:dictionary',
      route: '/admin/manage-speechlab',
    },
  ];

  generalMenu: MenuItem[] = [
    { label: 'Report a Problem', icon: 'mdi:report-problem', route: '/student/dashboard' },
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
    localStorage.removeItem('userRole');
    this.router.navigate(['/login']);
  }

  getSvgPath(svgIcon: string): string | null {
    switch (svgIcon) {
      case 'meet-icon':
        return 'M25.001 0.429688C25.664 0.429688 26.2999 0.69308 26.7687 1.16192C27.2376 1.63076 27.501 2.26665 27.501 2.92969V15.4297C27.501 16.8172 26.3885 17.9297 25.001 17.9297H30.001V20.4297H0.000976562V17.9297H5.00098C4.33794 17.9297 3.70205 17.6663 3.23321 17.1975C2.76437 16.7286 2.50098 16.0927 2.50098 15.4297V2.92969C2.50098 1.54219 3.61348 0.429688 5.00098 0.429688H25.001ZM25.001 2.92969H5.00098V15.4297H25.001V2.92969ZM15.001 10.4297C17.7635 10.4297 20.001 11.5547 20.001 12.9297V14.1797H10.001V12.9297C10.001 11.5547 12.2385 10.4297 15.001 10.4297ZM15.001 4.17969C15.664 4.17969 16.2999 4.44308 16.7687 4.91192C17.2376 5.38076 17.501 6.01665 17.501 6.67969C17.501 7.34273 17.2376 7.97861 16.7687 8.44745C16.2999 8.9163 15.664 9.17969 15.001 9.17969C13.6135 9.17969 12.501 8.06719 12.501 6.67969C12.501 5.29219 13.626 4.17969 15.001 4.17969Z';
      case 'speech-lab-icon':
        return 'M25.251 0.554688H2.75098C1.37598 0.554688 0.250977 1.67969 0.250977 3.05469V13.0547H2.75098V3.05469H25.251V23.0547C26.626 23.0547 27.751 21.9297 27.751 20.5547V3.05469C27.751 1.67969 26.626 0.554688 25.251 0.554688Z M10.251 14.3047C13.0124 14.3047 15.251 12.0661 15.251 9.30469C15.251 6.54326 13.0124 4.30469 10.251 4.30469C7.48955 4.30469 5.25098 6.54326 5.25098 9.30469C5.25098 12.0661 7.48955 14.3047 10.251 14.3047Z M18.2385 17.5047C16.1385 16.4297 13.4135 15.5547 10.251 15.5547C7.08848 15.5547 4.36348 16.4297 2.26348 17.5047C1.01348 18.1422 0.250977 19.4297 0.250977 20.8297V24.3047H20.251V20.8297C20.251 19.4297 19.4885 18.1422 18.2385 17.5047Z';
      case 'text-to-speech-icon':
        return 'M18.24 14.040h-17.4c-0.48 0-0.84-0.36-0.84-0.84s0.36-0.84 0.84-0.84h14.92l-1.92-1.44c-0.36-0.28-0.44-0.8-0.16-1.2 0.28-0.36 0.8-0.44 1.2-0.16l3.92 2.96c0.28 0.2 0.4 0.6 0.28 0.96-0.16 0.32-0.48 0.56-0.84 0.56zM4.76 22.6c-0.16 0-0.36-0.040-0.52-0.16l-3.92-2.96c-0.28-0.2-0.4-0.6-0.28-0.96s0.44-0.56 0.8-0.56h17.4c0.48 0 0.84 0.36 0.84 0.84s-0.36 0.84-0.84 0.84h-14.88l1.92 1.44c0.36 0.28 0.44 0.8 0.16 1.2-0.2 0.24-0.44 0.32-0.68 0.32z';
      case 'speech-analyzer-icon':
        return null; // We're handling this icon directly in the HTML
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

  isActive(route: string): boolean {
    return this.router.isActive(route, {
      paths: 'exact',
      queryParams: 'exact',
      fragment: 'ignored',
      matrixParams: 'ignored'
    });
  }
}