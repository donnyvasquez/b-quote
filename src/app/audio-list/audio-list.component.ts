import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core'; // Cambiado "viewChild" a "ViewChild"
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BrowserType, DeviceDetectionService } from '../services/device-detection.service';

@Component({
  selector: 'app-audio-list',
  templateUrl: './audio-list.component.html',
  styleUrls: ['./audio-list.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class AudioListComponent implements OnInit {
  browserClass!: string; // Se inicializa la variable browserClass
  constructor(private deviceDetectionService: DeviceDetectionService) {}

  @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef<HTMLAudioElement>;
  subcategoryImage = 'path_to_image';
  subcategoryTitle = 'Biblioteca';
  subcategoryDescription = 'Lorem ipsum dolor sit amet consectetur adipiscing elit.';

  audioList = [
    {
      title: 'Exploring New Sounds',
      image: 'https://placehold.co/400x400/000000/FFF',
      url: 'https://data.freetouse.com/music/tracks/1f8a8d06-101d-1d64-0ba8-457c0ce39d3e/file/mp3',
      category: 'Relajación',
      status: false
    },
    {
      title: 'Motivation Tune',
      image: 'https://placehold.co/400x400/orange/white',
      url: 'https://data.freetouse.com/music/tracks/7831b012-a1a1-695f-836d-a11beef0d2f1/file/mp3',
      category: 'Motivación'
    },
    {
      title: 'Ambient Waves',
      image: 'https://placehold.co/400x400/blue/white',
      url: 'https://data.freetouse.com/music/tracks/33bd457b-799f-0156-c227-6fca7d8b2014/file/mp3',
      category: 'Ambiental'
    },
    {
      title: 'Soothing Vibes',
      image: 'https://placehold.co/400x400/green/white',
      url: 'https://data.freetouse.com/music/tracks/61f5d290-064f-7ee1-9ef5-8ba68f2a6600/file/mp3',
      category: 'Relajación'
    },
    {
      title: 'Deep Focus',
      image: 'https://placehold.co/400x400/purple/white',
      url: 'https://data.freetouse.com/music/tracks/39e7afc7-b515-e275-63bc-bc5a43a5664c/file/mp3',
      category: 'Concentración'
    },
    {
      title: 'Nature Escape',
      image: 'https://placehold.co/400x400/yellow/white',
      url: 'https://data.freetouse.com/music/tracks/3349c075-4b3c-4611-a164-59d5aa8635a3/file/mp3',
      category: 'Naturaleza'
    },
    {
      title: 'Morning Energy',
      image: 'https://placehold.co/400x400/red/white',
      url: 'https://data.freetouse.com/music/tracks/8416b21e-5b3a-39bf-6307-22c77e8dee3e/file/mp3',
      category: 'Energía'
    },
    {
      title: 'Focus and Flow',
      image: 'https://placehold.co/400x400/teal/white',
      url: 'https://data.freetouse.com/music/tracks/c5169269-9c67-9dbe-22c5-226790361349/file/mp3',
      category: 'Productividad'
    },
    {
      title: 'Creative Inspiration',
      image: 'https://placehold.co/400x400/pink/white',
      url: 'https://data.freetouse.com/music/tracks/70f17d35-f2e2-df74-c14d-9dc9d0e87635/file/mp3',
      category: 'Creatividad'
    },
    {
      title: 'Calming Sea',
      image: 'https://placehold.co/400x400/gray/white',
      url: 'https://data.freetouse.com/music/tracks/29c8b259-16dc-a8a2-cb88-08acdd75aa66/file/mp3',
      category: 'Relajación'
    },
    {
      title: 'Mindful Moments',
      image: 'https://placehold.co/400x400/black/white',
      url: 'https://data.freetouse.com/music/tracks/7d93af96-eb03-14c7-f7bc-75e32e7017ba/file/mp3',
      category: 'Meditación'
    }
  ];

  currentAudio = { title: '', image: '', url: '', category: '', isPlaying: false };
  audioPlaying!: boolean;
  ngOnInit(): void {
    const browser = this.deviceDetectionService.getBrowserType();

    // Asigna una clase dependiendo del navegador detectado
    switch (browser) {
      case BrowserType.Chrome:
        this.browserClass = 'audio-chrome';
        break;
      case BrowserType.Firefox:
        this.browserClass = 'audio-firefox';
        break;
      case BrowserType.Safari:
        this.browserClass = 'audio-safari';
        break;
      case BrowserType.Edge:
        this.browserClass = 'audio-edge';
        break;
      case BrowserType.Opera:
        this.browserClass = 'audio-opera';
        break;
      default:
        this.browserClass = 'audio-default';
        break;
    }
  }
  playAudio(audio: any) {
    if (this.currentAudio.url !== audio.url) {
      // Cambia a un nuevo audio
      this.currentAudio = { ...audio, isPlaying: true }; // Asigna el nuevo audio y ponlo como "reproduciendo"
      if (this.audioPlayer && this.audioPlayer.nativeElement) {
        this.audioPlayer.nativeElement.play(); // Reproducir el nuevo audio
      }
    } else {
      // Si ya está seleccionado, alterna entre pausa y reproducción
      if (this.audioPlayer && this.audioPlayer.nativeElement) {
        if (this.audioPlayer.nativeElement.paused) {
          this.audioPlayer.nativeElement.play();
          this.currentAudio.isPlaying = true; // Actualiza el estado a "reproduciendo"
        } else {
          this.audioPlayer.nativeElement.pause();
          this.currentAudio.isPlaying = false; // Actualiza el estado a "pausado"
        }
      }
    }
  }
  handleKeydown(event: KeyboardEvent, audio: any) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Evitar que la página se desplace cuando se presiona espacio
      this.playAudio(audio);
    }
  }
}
