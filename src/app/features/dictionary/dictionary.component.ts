import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface WordDefinition {
  word: string;
  meanings: {
    english: string;
    japanese: string;
    spanish: string;
  };
}

@Component({
  selector: 'app-dictionary',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dictionary.component.html',
  styleUrl: './dictionary.component.css'
})
export class DictionaryComponent {
  searchTerm: string = '';
  searchResult: WordDefinition | null = null;

  // Mock dictionary data
  private dictionary: WordDefinition[] = [
{
  word: 'hello',
  meanings: {
    english: 'Used as a greeting or to begin a conversation.',
    japanese: 'こんにちは (Konnichiwa) - A greeting used during the day.',
    spanish: 'Hola - Used to greet someone or answer the phone.'
  }
},
    {
      word: 'goodbye',
      meanings: {
        english: 'Used when parting or at the end of a conversation.',
        japanese: 'さようなら (Sayōnara) - A farewell greeting.',
        spanish: 'Adiós - Used to say farewell to someone.'
      }
    },
    // Add more words as needed
  ];

  onSearch() {
    const result = this.dictionary.find(entry => 
      entry.word.toLowerCase() === this.searchTerm.toLowerCase()
    );
    this.searchResult = result || null;
  }

  playAudio(language: 'english' | 'japanese' | 'spanish') {
    if (!this.searchResult) return;

    let textToSpeak = this.searchResult.word;
    let lang = 'en-US';

    switch (language) {
      case 'english':
        textToSpeak = this.searchResult.word;
        lang = 'en-US';
        break;
      case 'spanish':
        textToSpeak = this.searchResult.word;
        lang = 'es-ES';
        break;
      case 'japanese':
        // For Japanese, we'll just show an alert as the Web Speech API doesn't support it
        alert(`Japanese pronunciation: ${this.searchResult.meanings.japanese.split('-')[0].trim()}`);
        return;
    }

    const speech = new SpeechSynthesisUtterance(textToSpeak);
    speech.lang = lang;
    window.speechSynthesis.speak(speech);
  }
}