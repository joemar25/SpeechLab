// src/app/supabase.service.ts
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  // Method to sign in user
  async signIn(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signInWithPassword({ email, password });
    return { data, error };
  }

  // Method to get user profile by email
  async getProfile(email: string) {
    const { data, error } = await this.supabase
      .from('profiles')
      .select('role')
      .eq('email', email)
      .single(); // Assumes that email is unique in the 'profiles' table
  
    if (error) {
      console.error('Error fetching profile:', error);
      return { data: null, error };
    }
  
    if (!data) {
      console.warn('No profile found for email:', email);
    }
  
    console.log('Fetched profile data:', data);
  
    return { data, error };
  }
  

  async getData() {
    let { data, error } = await this.supabase
      .from('profiles') 
      .select('*');

    if (error) {
      console.error('Error fetching data: ', error);
      return null;
    }

    return data;
  }
}
