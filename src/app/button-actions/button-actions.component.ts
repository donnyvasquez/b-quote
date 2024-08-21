import { Component, OnInit, HostListener } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonBackdrop, IonFooter } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-actions',
  templateUrl: './button-actions.component.html',
  styleUrls: ['./button-actions.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, CommonModule, IonBackdrop, IonFooter],
})
export class ButtonActionsComponent implements OnInit {
  public showButtons = false;
  public hideAfterTransition = true;

  constructor() { }

  ngOnInit() {
    console.log('Se inicia el componente buttons');

  }

  public toggleButtons() {
    if (this.showButtons) {
      setTimeout(() => {
        this.hideAfterTransition = true;
      }, 250);
    } else {
        this.hideAfterTransition = false;
    }
    this.showButtons = !this.showButtons;
  }

  public onTransitionEnd() {
    if (!this.showButtons) {
      this.hideAfterTransition = true;
    }
  }
  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const buttonGroup = document.querySelector('.button-group') as HTMLElement;
    const toggleButton = document.querySelector('.btn-toogle') as HTMLElement;

    if (buttonGroup && !buttonGroup.contains(target) && !toggleButton.contains(target)) {
      this.showButtons = false;
      this.hideAfterTransition = true;
    }
  }
  @HostListener('document:keydown', ['$event'])
  public onDocumentKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.showButtons = false;
      this.hideAfterTransition = true;
    }
  }
}

