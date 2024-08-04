import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Category {
  name: string;
  icon: string;
  active: boolean;
}

interface Level {
  id: number;
  title: string;
  description: string;
  image: string;
  locked: boolean;
}


@Component({
  selector: 'app-assesment-category',
  standalone: true,
  imports: [],
  templateUrl: './assesment-category.component.html',
  styleUrl: './assesment-category.component.css'
})
export class AssesmentCategoryComponent {
  categories: Category[] = [
    { name: 'Listening', icon: 'path-to-listening-icon.png', active: true },
    { name: 'Speaking', icon: 'path-to-speaking-icon.png', active: false },
    { name: 'Writing', icon: 'path-to-writing-icon.png', active: false },
    { name: 'Reading', icon: 'path-to-reading-icon.png', active: false },
  ];

  levels: Level[] = [
    {
      id: 1,
      title: 'Hear Me Out! Easy English Quiz',
      description: 'Sharpen your ears and answer 10 basic English questions to test your skills. Good luck!',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8197e7c4aab896c2ed23319eb9c264254c022078cbe2bbc22330880ca916ebbe?apiKey=2e31fa6b2d0c458aaebf11d5898097ea&&apiKey=2e31fa6b2d0c458aaebf11d5898097ea',
      locked: false
    },
    {
      id: 2,
      title: 'Hear Me Out! Intermediate English Quiz',
      description: 'Challenge yourself with 10 intermediate English questions. Are you ready?',
      image: 'path-to-level2-image.png',
      locked: true
    },
    {
      id: 3,
      title: 'Hear Me Out! Advanced English Quiz',
      description: 'Test your advanced English skills with 10 challenging questions. Can you ace it?',
      image: 'path-to-level3-image.png',
      locked: true
    },
  ];

  setActiveCategory(categoryName: string) {
    this.categories.forEach(cat => cat.active = cat.name === categoryName);
  }

  startLevel(levelId: number) {
    const currentLevel = this.levels.find(level => level.id === levelId);
    if (currentLevel && !currentLevel.locked) {
      // Add your logic to start the quiz for the selected level
      console.log(`Starting level ${levelId}`);

      // Unlock the next level if it exists
      const nextLevel = this.levels.find(level => level.id === levelId + 1);
      if (nextLevel) {
        nextLevel.locked = false;
      }
    }
  }
}