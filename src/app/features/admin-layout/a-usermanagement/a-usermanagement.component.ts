import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface User {
  id: string;
  name: string;
  dateCreated: Date;
  email: string;
  role: string;
  status: 'Active' | 'Inactive' | 'For approval';
}

@Component({
  selector: 'app-a-usermanagement',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './a-usermanagement.component.html',
  styleUrl: './a-usermanagement.component.css'
})
export class AUsermanagementComponent implements OnInit {
  private usersSubject = new BehaviorSubject<User[]>([
    { id: '2020-2323', name: 'Sean Palacay', dateCreated: new Date('2024-08-23'), email: 'seanpalacay@example.com', role: 'Student', status: 'For approval' },
    { id: '2021-1001', name: 'Emma Johnson', dateCreated: new Date('2024-09-15'), email: 'emmaj@example.com', role: 'Teacher', status: 'Active' },
    { id: '2021-1002', name: 'Liam Wilson', dateCreated: new Date('2024-09-16'), email: 'liamw@example.com', role: 'Student', status: 'Active' },
    { id: '2021-1003', name: 'Olivia Davis', dateCreated: new Date('2024-09-17'), email: 'oliviad@example.com', role: 'Admin', status: 'Active' },
    { id: '2021-1004', name: 'Noah Martinez', dateCreated: new Date('2024-09-18'), email: 'noahm@example.com', role: 'Student', status: 'Inactive' },
    { id: '2021-1005', name: 'Ava Anderson', dateCreated: new Date('2024-09-19'), email: 'avaa@example.com', role: 'Student', status: 'For approval' },
    { id: '2021-1006', name: 'Ethan Taylor', dateCreated: new Date('2024-09-20'), email: 'ethant@example.com', role: 'Teacher', status: 'Active' },
    { id: '2021-1007', name: 'Sophia Thomas', dateCreated: new Date('2024-09-21'), email: 'sophiat@example.com', role: 'Student', status: 'Active' },
    { id: '2021-1008', name: 'Mason Harris', dateCreated: new Date('2024-09-22'), email: 'masonh@example.com', role: 'Student', status: 'Inactive' },
    { id: '2021-1009', name: 'Isabella Clark', dateCreated: new Date('2024-09-23'), email: 'isabellac@example.com', role: 'Admin', status: 'Active' },
    { id: '2021-1010', name: 'William Rodriguez', dateCreated: new Date('2024-09-24'), email: 'williamr@example.com', role: 'Student', status: 'For approval' }
  ]);
   
  users$ = this.usersSubject.asObservable();

  searchTerm = '';
  searchTerms$ = new BehaviorSubject<string>('');
  filteredUsers$: Observable<User[]> | undefined;

  isAddModalOpen = false;
  isEditModalOpen = false;
  newUser: Partial<User> = {};
  editingUser: User | null = null;

  ngOnInit() {
    this.filteredUsers$ = combineLatest([
      this.searchTerms$.pipe(startWith('')),
      this.users$
    ]).pipe(
      map(([searchTerm, users]) =>
        users.filter(user =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
  }

  openAddModal() {
    this.isAddModalOpen = true;
    this.newUser = {
      dateCreated: new Date(),
      status: 'For approval'
    };
  }

  closeAddModal() {
    this.isAddModalOpen = false;
    this.newUser = {};
  }

  openEditModal(user: User) {
    this.isEditModalOpen = true;
    this.editingUser = { ...user };
  }

  closeEditModal() {
    this.isEditModalOpen = false;
    this.editingUser = null;
  }

  addNewUser() {
    if (this.newUser.name && this.newUser.email && this.newUser.role) {
      const user: User = {
        id: `2021-${Math.floor(1000 + Math.random() * 9000)}`,
        name: this.newUser.name,
        dateCreated: this.newUser.dateCreated || new Date(),
        email: this.newUser.email,
        role: this.newUser.role,
        status: this.newUser.status || 'For approval'
      };
      const currentUsers = this.usersSubject.getValue();
      this.usersSubject.next([...currentUsers, user]);
      console.log('Added new user', user);
      this.closeAddModal();
    } else {
      console.error('Please fill all required fields');
    }
  }

  updateUser() {
    if (this.editingUser) {
      const currentUsers = this.usersSubject.getValue();
      const updatedUsers = currentUsers.map(u => 
        u.id === this.editingUser!.id ? this.editingUser! : u
      );
      this.usersSubject.next(updatedUsers);
      console.log('Updated user', this.editingUser);
      this.closeEditModal();
    }
  }

  deleteUser(user: User) {
    const currentUsers = this.usersSubject.getValue();
    const updatedUsers = currentUsers.filter(u => u.id !== user.id);
    this.usersSubject.next(updatedUsers);
    console.log('Deleted user', user);
  }

  approveUser(user: User) {
    const currentUsers = this.usersSubject.getValue();
    const updatedUsers = currentUsers.map(u => 
      u.id === user.id ? { ...u, status: 'Active' as const } : u
    );
    this.usersSubject.next(updatedUsers);
    console.log('Approved user', user);
  }

  rejectUser(user: User) {
    const currentUsers = this.usersSubject.getValue();
    const updatedUsers = currentUsers.map(u => 
      u.id === user.id ? { ...u, status: 'Inactive' as const } : u
    );
    this.usersSubject.next(updatedUsers);
    console.log('Rejected user', user);
  }
}