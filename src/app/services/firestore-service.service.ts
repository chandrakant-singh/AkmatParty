import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, Firestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { environment } from '../../environments/environments';
import { User } from '../components/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private firestore: Firestore;

  constructor() {
    const app = initializeApp(environment.firebaseConfig);
    this.firestore = getFirestore(app);
    const storage = getStorage(app); // Optional if you use Storage
  }

  async addUser(user: User): Promise<void> {
    const userRef = collection(this.firestore, 'join');
    await addDoc(userRef, user);
    console.log('User added!');
  }

  async fetchUsers(): Promise<any[]> {
    const userRef = collection(this.firestore, 'join');
    const snapshot = await getDocs(userRef);
    return snapshot.docs.map(doc => doc.data());
  }
}
