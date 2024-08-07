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

  mainMenu: MenuItem[] = [
    { label: 'Dashboard', icon: 'ic:sharp-dashboard', route: '/student/dashboard' },
    { label: 'Class Lab', icon: 'ri:graduation-cap-fill', route: '/student/class-lab' },
    { label: 'Meet', svgIcon: 'meet-icon', route: '/student/meet' },
    { label: 'Tasks', icon: 'mdi:format-list-bulleted' },
    { label: 'Speech Lab', svgIcon: 'speech-lab-icon'},
    { label: 'Dictionary', icon: 'ic:sharp-dashboard' },
    { label: 'Text to Speech', svgIcon: 'text-to-speech-icon' },
    { label: 'Speech Analyzer', svgIcon: 'text-to-speech-icon' },
    { label: 'T Speech Lab', svgIcon: 'speech-lab-icon',route: '/teacher/speechlab' },
  ];

  othersMenu: MenuItem[] = [
    { label: 'Report a Problem', icon: 'mdi:report-problem' },
    { label: 'Sign Out', icon: 'icon-park-outline:logout', route: '/login' },
  ];

  constructor(private router: Router) {}

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
        return 'M10.2351 14.5562C12.9965 14.5562 15.2351 12.3176 15.2351 9.55615C15.2351 6.79473 12.9965 4.55615 10.2351 4.55615C7.47368 4.55615 5.23511 6.79473 5.23511 9.55615C5.23511 12.3176 7.47368 14.5562 10.2351 14.5562Z M10.2351 17.0562C6.89761 17.0562 0.235107 18.7312 0.235107 22.0562V24.5562H20.2351V22.0562C20.2351 18.7312 13.5726 17.0562 10.2351 17.0562ZM19.9351 5.00615L17.8351 7.11865C18.8851 8.59365 18.8851 10.5062 17.8351 11.9812L19.9351 14.0937C22.4601 11.5687 22.4601 7.75615 19.9351 5.00615ZM24.0726 0.806152L22.0351 2.84365C25.4976 6.61865 25.4976 12.2937 22.0351 16.2687L24.0726 18.3062C28.9476 13.4437 28.9601 5.86865 24.0726 0.806152Z';
      default:
        return '';
    }
  }
}
