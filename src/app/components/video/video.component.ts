import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent {
  videoUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const youtubeId = 'yCIti018Srw';
    const startTime = 0;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${youtubeId}?start=${startTime}&autoplay=0`
    );
  }
}
