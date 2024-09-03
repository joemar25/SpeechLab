import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, Session, AuthChangeEvent, User } from '@supabase/supabase-js';
import { environment } from '../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';  // Import the uuid library


interface Course {
  course_id: string;
  course_title: string;
  skill_level: string;
  description: string;
  thumbnail: string;
  duration: number;
  language: string;
  required_survey: boolean;
}

interface Lesson {
  lesson_id: string;
  course_id: string;
  lesson_title: string;
  description: string;
  objectives: string;
  attachments: string;
}


@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;
  private sessionSubject = new BehaviorSubject<Session | null>(null);
  private userSubject = new BehaviorSubject<User | null>(null);

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
    this.initializeSession();
  }

  private async initializeSession() {
    try {
      const { data: { session } } = await this.supabase.auth.getSession();
      this.updateSessionAndUser(session);

      this.supabase.auth.onAuthStateChange((_event: AuthChangeEvent, session: Session | null) => {
        this.updateSessionAndUser(session);
      });
    } catch (error) {
      console.error('Error initializing session:', error);
    }
  }

  private updateSessionAndUser(session: Session | null) {
    this.sessionSubject.next(session);
    this.userSubject.next(session?.user ?? null);
  }

  getSession(): Observable<Session | null> {
    return this.sessionSubject.asObservable();
  }

  getUser(): Observable<User | null> {
    return this.userSubject.asObservable();
  }

  async signIn(email: string, password: string): Promise<{ data: { user: User | null; session: Session | null } | null; error: Error | null }> {
    try {
      const { data, error } = await this.supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      
      if (data.session) {
        this.updateSessionAndUser(data.session);
      }
      return { data, error: null };
    } catch (error) {
      console.error('Error during sign in:', error);
      return { data: null, error: error instanceof Error ? error : new Error('Unknown error during sign in') };
    }
  }

  async signOut(): Promise<{ error: Error | null }> {
    try {
      const { error } = await this.supabase.auth.signOut();
      if (error) throw error;
      
      this.updateSessionAndUser(null);
      return { error: null };
    } catch (error) {
      console.error('Error during sign out:', error);
      return { error: error instanceof Error ? error : new Error('Unknown error during sign out') };
    }
  }

  async getProfile(email: string): Promise<{ data: { role: string } | null; error: Error | null }> {
    try {
      const { data, error } = await this.supabase
        .from('profiles')
        .select('role')
        .eq('email', email)
        .single();
    
      if (error) throw error;
    
      if (!data) {
        console.warn('No profile found for email:', email);
        return { data: null, error: new Error('Profile not found') };
      }
    
      return { data, error: null };
    } catch (error) {
      console.error('Error fetching profile:', error);
      return { data: null, error: error instanceof Error ? error : new Error('Unknown error fetching profile') };
    }
  }

  async getData(): Promise<{ data: any[] | null; error: Error | null }> {
    try {
      const { data, error } = await this.supabase
        .from('profiles') 
        .select('*');

      if (error) throw error;

      return { data, error: null };
    } catch (error) {
      console.error('Error fetching data:', error);
      return { data: null, error: error instanceof Error ? error : new Error('Unknown error fetching data') };
    }
  }

  isAuthenticated(): boolean {
    return this.sessionSubject.value !== null;
  }

  async refreshSession(): Promise<{ session: Session | null; error: Error | null }> {
    try {
      const { data, error } = await this.supabase.auth.refreshSession();
      if (error) throw error;
      
      if (data.session) {
        this.updateSessionAndUser(data.session);
      }
      return { session: data.session, error: null };
    } catch (error) {
      console.error('Error refreshing session:', error);
      return { session: null, error: error instanceof Error ? error : new Error('Unknown error refreshing session') };
    }
  }




  // for header

  async getProfileHeader(email: string): Promise<{ data: { first_name: string; last_name: string; role: string } | null; error: Error | null }> {
    try {
      const { data, error } = await this.supabase
        .from('profiles')
        .select('first_name, last_name, role')  
        .eq('email', email)
        .single();
  
      if (error) throw error;
  
      if (!data) {
        console.warn('No profile found for email:', email);
        return { data: null, error: new Error('Profile not found') };
      }
  
      return { data, error: null };
    } catch (error) {
      console.error('Error fetching profile:', error);
      return { data: null, error: error instanceof Error ? error : new Error('Unknown error fetching profile') };
    }
  }

  


  // create course 

  async createCourseAndLessons(
    course: {
      course_id: string;
      course_title: string;
      skill_level: 'easy' | 'medium' | 'hard';  // Enum values must match your schema
      description: string;
      thumbnail: string;
      duration: number;
      language: string;
      required_survey: boolean;
    },
    lessons: Array<{
      lesson_id: string;
      course_id: string;
      lesson_title: string;
      description: string;
      objectives: string;
      attachments: string;
    }>
  ): Promise<{ data: { course: any; lessons: any[] } | null; error: Error | null }> {
    try {
      // Insert course into 'courses' table
      const { data: courseData, error: courseError } = await this.supabase
        .from('courses')
        .insert([
          {
            course_id: course.course_id,  // UUID generated with uuidv4
            course_title: course.course_title,
            skill_level: course.skill_level,
            description: course.description,
            thumbnail: course.thumbnail,
            duration: course.duration,
            language: course.language,
            required_survey: course.required_survey,
          }
        ])
        .select(); // Ensure the data returned is in proper format

      if (courseError) throw courseError;

      // Insert lessons into 'lessons' table
      const lessonInserts = lessons.map((lesson) => ({
        ...lesson,
        course_id: courseData[0].course_id, // Use the ID from the newly created course
      }));

      const { data: lessonsData, error: lessonsError } = await this.supabase
        .from('lessons')
        .insert(lessonInserts)
        .select();

      if (lessonsError) throw lessonsError;

      return { data: { course: courseData[0], lessons: lessonsData }, error: null };
    } catch (error) {
      console.error('Error creating course and lessons:', error);
      return { data: null, error: error instanceof Error ? error : new Error('Unknown error creating course and lessons') };
    }
  }

  // Uploading of file to correct storage buckets
  async uploadFile(file: File, path: string, bucket: 'thumbnail' | 'lesson_attachments'): Promise<string> {
    try {
      const { data, error } = await this.supabase.storage
        .from(bucket) // Use the appropriate bucket name
        .upload(path, file);

      if (error) {
        throw error;
      }

      if (data && data.path) {
        return data.path; // Return the file path if it exists
      } else {
        throw new Error('File upload failed. No data returned.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error; // Rethrow the error after logging it
    }
  }
}