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

  // Example function to get data from a table
  async getData() {
    let { data, error } = await this.supabase
      .from('profiles') // Replace with your table name
      .select('*');

    if (error) {
      console.error('Error fetching data: ', error);
      return null;
    }

    return data;
  }
}
