import { Component } from '@angular/core';
import { SupabaseService } from '../../../../supabase.service';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-create',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CourseCreateComponent {
  courseTitle: string = '';
  skillLevel: 'beginner' | 'intermediate' | 'advanced' = 'beginner';
  description: string = '';
  thumbnail: File | null = null;

  lessons: {
    lessonTitle: string;
    lessonDescription: string;
    lessonObjectives: string;
    file: File | null;
  }[] = [];

  constructor(private supabaseService: SupabaseService) {}

  close(): void {
    console.log('Modal closed');
  }

  onThumbnailSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.thumbnail = input.files[0];
    }
  }

  onLessonFileSelected(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.lessons[index].file = input.files[0];
    }
  }

  addLesson(): void {
    this.lessons.push({
      lessonTitle: '',
      lessonDescription: '',
      lessonObjectives: '',
      file: null,
    });
  }

  saveDraft(): void {
    console.log('Course saved as draft.');
  }

  async publishCourse(): Promise<void> {
    if (!this.courseTitle || !this.description || !this.skillLevel) {
      alert('Please fill out all course details.');
      return;
    }

    try {
      let thumbnailPath = '';
      if (this.thumbnail) {
        thumbnailPath = await this.supabaseService.uploadFile(
          this.thumbnail,
          `thumbnails/${this.courseTitle.replace(/\s+/g, '-').toLowerCase()}`,
          'thumbnail'
        );
      }

      const lessonData = this.lessons.map((lesson) => ({
        lesson_title: lesson.lessonTitle,
        description: lesson.lessonDescription,
        objectives: lesson.lessonObjectives,
        attachments: '',
      }));

      for (let i = 0; i < this.lessons.length; i++) {
        const lesson = this.lessons[i];
        if (lesson.file) {
          const attachmentPath = await this.supabaseService.uploadFile(
            lesson.file,
            `lesson_attachments/${this.courseTitle
              .replace(/\s+/g, '-')
              .toLowerCase()}/lesson_${i + 1}`,
            'lesson_attachments'
          );
          lessonData[i].attachments = attachmentPath;
        }
      }

      const { error } = await this.supabaseService.createCourseAndLessons(
        {
          course_title: this.courseTitle,
          skill_level: this.skillLevel,
          description: this.description,
          thumbnail: thumbnailPath,
          duration: 0,
          language: 'English',
          required_survey: false,
        },
        lessonData
      );

      if (error) throw error;

      alert('Course and lessons published successfully!');
      this.close();
    } catch (error) {
      console.error('Error creating course and lessons:', error);
      alert('Failed to publish course and lessons.');
    }
  }
}
