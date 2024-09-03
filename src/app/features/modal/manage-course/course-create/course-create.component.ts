import { Component } from '@angular/core';
import { SupabaseService } from '../../../../supabase.service';
import { v4 as uuidv4 } from 'uuid'; // Ensure you have uuid installed
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-create',
  standalone: true,
  imports: [FormsModule, CommonModule], // Import FormsModule here
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add CUSTOM_ELEMENTS_SCHEMA here
})
export class CourseCreateComponent {
  courseTitle: string = '';
  skillLevel: 'easy' | 'medium' | 'hard' = 'easy';
  description: string = '';
  thumbnail: File | null = null;

  lessons: {
    lessonTitle: string;
    lessonDescription: string;
    lessonObjectives: string;
    file: File | null;
  }[] = []; // Correctly initializing lessons array

  constructor(private supabaseService: SupabaseService) {}

  close(): void {
    // Add your logic to close the modal
  }

  // Handles thumbnail file input
  onThumbnailSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.thumbnail = input.files[0];
    }
  }

  // Handles lesson file input
  onLessonFileSelected(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.lessons[index].file = input.files[0];
    }
  }

  // Adds a new lesson to the lessons array
  addLesson(): void {
    this.lessons.push({
      lessonTitle: '',
      lessonDescription: '',
      lessonObjectives: '',
      file: null
    });
  }

  // Saves the course as a draft (Optional logic)
  saveDraft(): void {
    console.log('Course saved as draft.');
    // Add your logic to save the course as a draft here
  }

  // Publishes the course and uploads files to Supabase
  async publishCourse(): Promise<void> {
    if (!this.courseTitle || !this.description || !this.skillLevel) {
      alert('Please fill out all course details.');
      return;
    }

    try {
      // Upload thumbnail if available
      let thumbnailPath = '';
      if (this.thumbnail) {
        thumbnailPath = await this.supabaseService.uploadFile(
          this.thumbnail, 
          `thumbnails/${uuidv4()}`,
          'thumbnail'
        );
      }

      // Prepare lessons data
      const lessonData = this.lessons.map((lesson) => ({
        lesson_id: uuidv4(), // Unique ID for each lesson
        course_id: '', // This will be filled after the course is created
        lesson_title: lesson.lessonTitle,
        description: lesson.lessonDescription,
        objectives: lesson.lessonObjectives,
        attachments: '' // Will be updated after uploading files
      }));

      // Upload lesson attachments
      for (let i = 0; i < this.lessons.length; i++) {
        const lesson = this.lessons[i];
        if (lesson.file) {
          const attachmentPath = await this.supabaseService.uploadFile(
            lesson.file, 
            `lesson_attachments/${uuidv4()}`, 
            'lesson_attachments'
          );
          lessonData[i].attachments = attachmentPath;
        }
      }

      // Create course and lessons in Supabase
      const courseId = uuidv4();
      const { data, error } = await this.supabaseService.createCourseAndLessons(
        {
          course_id: courseId,
          course_title: this.courseTitle,
          skill_level: this.skillLevel,
          description: this.description,
          thumbnail: thumbnailPath,
          duration: 0, // Replace with actual duration if needed
          language: 'English', // Replace with actual language if needed
          required_survey: false // Replace with actual value if needed
        },
        lessonData.map(lesson => ({ ...lesson, course_id: courseId }))
      );

      if (error) throw error;

      alert('Course and lessons published successfully!');
    } catch (error) {
      console.error('Error creating course and lessons:', error);
      alert('Failed to publish course and lessons.');
    }
  }
}
