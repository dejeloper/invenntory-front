import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Toast {
  private message = signal<string | null>(null);
  private isVisible = signal(false);

  get currentMessage() {
    return this.message;
  }

  get visible() {
    return this.isVisible;
  }

  show(msg: string, duration = 3000) {
    this.message.set(msg);
    this.isVisible.set(true);
    
    setTimeout(() => {
      this.isVisible.set(false);
      this.message.set(null);
    }, duration);
  }

  hide() {
    this.isVisible.set(false);
    this.message.set(null);
  }
}