import { Injectable } from '@angular/core';
import {
  createClient,
  SupabaseClient,
  Session,
  AuthChangeEvent,
  User,
} from '@supabase/supabase-js';
import { environment } from '../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

interface Course {
  course_title: string;
  skill_level: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  thumbnail: string;
  duration: number;
  language: string;
  required_survey: boolean;
}

interface Lesson {
  lesson_title: string;
  description: string;
  objectives: string;
  attachments: string;
}

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;
  private sessionSubject = new BehaviorSubject<Session | null>(null);
  private userSubject = new BehaviorSubject<User | null>(null);

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
    this.initializeSession();
  }

  private async initializeSession() {
    const {
      data: { session },
    } = await this.supabase.auth.getSession();
    this.updateSessionAndUser(session);
    this.supabase.auth.onAuthStateChange(
      (_event: AuthChangeEvent, session: Session | null) => {
        this.updateSessionAndUser(session);
      }
    );
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

  async signIn(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error('Error during sign in:', error);
      return { data: null, error };
    }
    if (data.session) {
      this.updateSessionAndUser(data.session);
    }
    return { data, error: null };
  }

  async signOut() {
    const { error } = await this.supabase.auth.signOut();
    if (error) {
      console.error('Error during sign out:', error);
      return { error };
    }
    this.updateSessionAndUser(null);
    return { error: null };
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
    return { data, error: null };
  }

  async getData() {
    const { data, error } = await this.supabase.from('profiles').select('*');
    if (error) {
      console.error('Error fetching data:', error);
      return { data: null, error };
    }
    return { data, error: null };
  }

  isAuthenticated(): boolean {
    return this.sessionSubject.value !== null;
  }

  async refreshSession() {
    const { data, error } = await this.supabase.auth.refreshSession();
    if (error) {
      console.error('Error refreshing session:', error);
      return { session: null, error };
    }
    if (data.session) {
      this.updateSessionAndUser(data.session);
    }
    return { session: data.session, error: null };
  }

  async getProfileHeader(email: string) {
    const { data, error } = await this.supabase
      .from('profiles')
      .select('first_name, last_name, role')
      .eq('email', email)
      .single();
    if (error) {
      console.error('Error fetching profile:', error);
      return { data: null, error };
    }
    return { data, error: null };
  }

  async createCourseAndLessons(course: Course, lessons: Lesson[]) {
    try {
      console.log('Creating course with data:', course); // Debugging log

      const { data: courseData, error: courseError } = await this.supabase
        .from('courses')
        .insert([course])
        .select();

      if (courseError) {
        console.error('Error creating course:', courseError);
        return { data: null, error: courseError };
      }

      console.log('Course created successfully:', courseData); // Debugging log

      const courseId = courseData[0].course_id;
      const lessonInserts = lessons.map((lesson) => ({
        ...lesson,
        course_id: courseId,
      }));

      console.log('Creating lessons with data:', lessonInserts); // Debugging log

      const { data: lessonsData, error: lessonsError } = await this.supabase
        .from('lessons')
        .insert(lessonInserts)
        .select();

      if (lessonsError) {
        console.error('Error creating lessons:', lessonsError);
        return { data: null, error: lessonsError };
      }

      console.log('Lessons created successfully:', lessonsData); // Debugging log

      return {
        data: { course: courseData[0], lessons: lessonsData },
        error: null,
      };
    } catch (error) {
      console.error('Unexpected error creating course and lessons:', error);
      return {
        data: null,
        error:
          error instanceof Error
            ? error
            : new Error('Unknown error creating course and lessons'),
      };
    }
  }

  async uploadFile(
    file: File,
    path: string,
    bucket: 'thumbnail' | 'lesson_attachments'
  ): Promise<string> {
    const { data, error } = await this.supabase.storage
      .from(bucket)
      .upload(path, file);
    if (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
    if (!data?.path) {
      throw new Error('File upload failed. No data returned.');
    }
    return data.path;
  }
}
