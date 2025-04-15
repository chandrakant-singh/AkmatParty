import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firestore-service.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  providers: [FirebaseService],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  public users: User[] = [];

  constructor(private firebaseService: FirebaseService) {
    this.firebaseService.fetchUsers().then(users => {
      this.users = users;
    });
  }
}
