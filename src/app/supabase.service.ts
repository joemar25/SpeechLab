import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, Session, AuthChangeEvent, User } from '@supabase/supabase-js';
import { environment } from '../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;
  private sessionSubject: BehaviorSubject<Session | null> = new BehaviorSubject<Session | null>(null);
  private userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
    this.initializeSession();
  }

  private async initializeSession() {
    // Get the initial session
    const { data: { session } } = await this.supabase.auth.getSession();
    this.sessionSubject.next(session);
    this.userSubject.next(session?.user ?? null);

    // Set up listener for auth state changes
    this.supabase.auth.onAuthStateChange((_event: AuthChangeEvent, session: Session | null) => {
      this.sessionSubject.next(session);
      this.userSubject.next(session?.user ?? null);
    });
  }

  getSession(): Observable<Session | null> {
    return this.sessionSubject.asObservable();
  }

  getUser(): Observable<User | null> {
    return this.userSubject.asObservable();
  }

  async signIn(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signInWithPassword({ email, password });
    if (data.session) {
      this.sessionSubject.next(data.session);
      this.userSubject.next(data.user);
    }
    return { data, error };
  }

  async signOut() {
    const { error } = await this.supabase.auth.signOut();
    if (!error) {
      this.sessionSubject.next(null);
      this.userSubject.next(null);
    }
    return { error };
  }

  async getProfile(email: string) {
    const { data, error } = await this.supabase
      .from('profiles')
      .select('role')
      .eq('email', email)
      .single();
  
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

  isAuthenticated(): boolean {
    return this.sessionSubject.value !== null;
  }

  async refreshSession() {
    const { data, error } = await this.supabase.auth.refreshSession();
    if (data.session) {
      this.sessionSubject.next(data.session);
      this.userSubject.next(data.session.user);
    }
    return { session: data.session, error };
  }
}