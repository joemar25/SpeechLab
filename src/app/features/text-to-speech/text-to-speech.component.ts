import { Component, OnInit, OnDestroy, Renderer2  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-to-speech',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './text-to-speech.component.html',
  styleUrls: ['./text-to-speech.component.css']
})
export class TextToSpeechComponent implements OnInit, OnDestroy {

  constructor(private renderer: Renderer2) {}

  recording: boolean = false;
  playing: boolean = false;
  audio?: HTMLAudioElement;
  textInput: string = 'Hello';  // Default text
  language: string = 'en';
  showDropdown: boolean = false;
  selectedLanguageName: string = 'English';
  private mediaRecorder?: MediaRecorder;
  private audioChunks: Blob[] = [];
  private audioContext?: AudioContext;
  private analyser?: AnalyserNode;
  private animationFrameId?: number;
  private visualizerCanvas?: HTMLCanvasElement;
  private canvasCtx?: CanvasRenderingContext2D;

  // Snackbar properties
  snackbarMessage: string = '';
  showSnackbar: boolean = false;
  private snackbarTimeout: any;

  ngOnInit(): void {
    this.audioContext = new AudioContext();
    this.analyser = this.audioContext.createAnalyser();
    this.analyser.fftSize = 2048;

    this.visualizerCanvas = document.getElementById('visualizer') as HTMLCanvasElement;
    this.canvasCtx = this.visualizerCanvas.getContext('2d')!;
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.audioContext) {
      this.audioContext.close();
    }
    if (this.snackbarTimeout) {
      clearTimeout(this.snackbarTimeout);
    }
  }

 
  toggleDropdown(): void {
    if (this.showDropdown) {
      // Closing the dropdown
      const dropdown = document.querySelector('.dropdown-menu');
      this.renderer.addClass(dropdown, 'dropdown-exit');
      this.renderer.addClass(dropdown, 'dropdown-exit-active');
      setTimeout(() => {
        this.showDropdown = false;
      }, 300);
    } else {
      // Opening the dropdown
      this.showDropdown = true;
      setTimeout(() => {
        const dropdown = document.querySelector('.dropdown-menu');
        this.renderer.addClass(dropdown, 'dropdown-enter');
        this.renderer.addClass(dropdown, 'dropdown-enter-active');
        setTimeout(() => {
          this.renderer.removeClass(dropdown, 'dropdown-enter');
          this.renderer.removeClass(dropdown, 'dropdown-enter-active');
        }, 300);
      }, 0);
    }
  }

  selectLanguage(lang: string, langName: string): void {
    this.language = lang;
    this.selectedLanguageName = langName;
    this.showDropdown = false;
    this.showMessage(`Language changed to ${langName}`);
  }

  textToSpeech(): void {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(this.textInput);
      speech.lang = this.language;
      speech.rate = 1;
      speech.pitch = 1;
      speech.volume = 1;

      speech.onstart = () => {
        console.log('Speech started');
        this.playing = true;
        this.visualizeTTS();
        this.showMessage('Converting text to speech...');
      };

      speech.onend = () => {
        console.log('Speech ended');
        this.playing = false;
        if (this.animationFrameId) {
          cancelAnimationFrame(this.animationFrameId);
        }
        this.showMessage('Text to speech conversion completed');
      };

      window.speechSynthesis.speak(speech);
    } else {
      console.log('Text-to-speech not supported in this browser.');
      this.showMessage('Text-to-speech not supported in this browser.');
    }
  }

  private visualizeTTS(): void {
    if (!this.analyser || !this.canvasCtx || !this.visualizerCanvas) return;

    const bufferLength = this.analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      this.animationFrameId = requestAnimationFrame(draw);
      this.analyser!.getByteTimeDomainData(dataArray);

      this.canvasCtx!.fillStyle = 'rgb(240, 240, 240)';
      this.canvasCtx!.fillRect(0, 0, this.visualizerCanvas!.width, this.visualizerCanvas!.height);

      this.canvasCtx!.lineWidth = 2;
      this.canvasCtx!.strokeStyle = '#F5A425';

      this.canvasCtx!.beginPath();

      const sliceWidth = this.visualizerCanvas!.width * 1.0 / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = v * this.visualizerCanvas!.height / 2;

        if (i === 0) {
          this.canvasCtx!.moveTo(x, y);
        } else {
          this.canvasCtx!.lineTo(x, y);
        }

        x += sliceWidth;
      }

      this.canvasCtx!.lineTo(this.visualizerCanvas!.width, this.visualizerCanvas!.height / 2);
      this.canvasCtx!.stroke();
    };

    draw();
  }

  startRecording(): void {
    if (this.recording) {
      this.stopRecording();
    } else {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
          this.mediaRecorder = new MediaRecorder(stream);
          this.audioChunks = [];

          this.mediaRecorder.addEventListener('dataavailable', (event) => {
            this.audioChunks.push(event.data);
          });

          this.mediaRecorder.addEventListener('stop', () => {
            const audioBlob = new Blob(this.audioChunks, { type: 'audio/wav' });
            this.audio = new Audio(URL.createObjectURL(audioBlob));
            this.setupAudioContext();
          });

          this.mediaRecorder.start();
          this.recording = true;
          this.showMessage('Recording started');
        })
        .catch(err => {
          console.error('Error accessing media devices.', err);
          this.showMessage('Error accessing media devices');
        });
    }
  }

  stopRecording(): void {
    if (this.mediaRecorder && this.recording) {
      this.mediaRecorder.stop();
      this.recording = false;
      this.mediaRecorder.stream.getTracks().forEach(track => track.stop());
      this.showMessage('Recording stopped');
    }
  }

  playAudio(): void {
    if (!this.audio) {
      console.log('No audio to play');
      this.showMessage('No audio to play');
      return;
    }
    
    if (this.playing) {
      this.audio.pause();
      this.playing = false;
      this.showMessage('Audio paused');
    } else {
      this.audio.play();
      this.playing = true;
      this.visualize();
      this.showMessage('Audio playing');
    }
  }

  download(): void {
    if (!this.audio) {
      console.log('No audio to download');
      this.showMessage('No audio to download');
      return;
    }

    const a = document.createElement('a');
    a.href = this.audio.src;
    a.download = 'recorded_audio.wav';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    this.showMessage('Downloading audio...');
  }

  private setupAudioContext(): void {
    if (!this.audio || !this.audioContext || !this.analyser) return;

    const source = this.audioContext.createMediaElementSource(this.audio);
    source.connect(this.analyser);
    this.analyser.connect(this.audioContext.destination);
  }

  private visualize(): void {
    if (!this.analyser || !this.canvasCtx || !this.visualizerCanvas) return;

    const bufferLength = this.analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      this.animationFrameId = requestAnimationFrame(draw);
      this.analyser!.getByteTimeDomainData(dataArray);

      this.canvasCtx!.fillStyle = 'rgb(240, 240, 240)';
      this.canvasCtx!.fillRect(0, 0, this.visualizerCanvas!.width, this.visualizerCanvas!.height);

      this.canvasCtx!.lineWidth = 2;
      this.canvasCtx!.strokeStyle = '#F5A425';

      this.canvasCtx!.beginPath();

      const sliceWidth = this.visualizerCanvas!.width * 1.0 / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = v * this.visualizerCanvas!.height / 2;

        if (i === 0) {
          this.canvasCtx!.moveTo(x, y);
        } else {
          this.canvasCtx!.lineTo(x, y);
        }

        x += sliceWidth;
      }

      this.canvasCtx!.lineTo(this.visualizerCanvas!.width, this.visualizerCanvas!.height / 2);
      this.canvasCtx!.stroke();
    };

    draw();
  }

  // Updated Snackbar method
  showMessage(message: string): void {
    this.snackbarMessage = message;
    this.showSnackbar = true;
    
    // Clear any existing timeout
    if (this.snackbarTimeout) {
      clearTimeout(this.snackbarTimeout);
    }
    
    // Set a new timeout
    this.snackbarTimeout = setTimeout(() => {
      this.hideSnackbar();
    }, 3000); // Hide after 3 seconds
  }

  private hideSnackbar(): void {
    this.showSnackbar = false;
  }
}