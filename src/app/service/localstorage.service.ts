import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  // Function to set item in local storage
  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Function to get item from local storage
  getItem(key: string) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  // Function to remove item from local storage
  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  // Function to clear all items from local storage
  clear() {
    localStorage.clear();
  }
}