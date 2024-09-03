import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // This method should return the user's role. For now, let's return a hardcoded value.
  getUserRole(): string {
    // Replace this with real logic, such as fetching from local storage, a token, or an API
    return 'admin';  // Example role, you can adjust based on your application logic
  }

  // This method could be used to determine if the user is authenticated
  isAuthenticated(): boolean {
    // Implement your authentication logic here
    return true;  // For now, returning true as a placeholder
  }
}
