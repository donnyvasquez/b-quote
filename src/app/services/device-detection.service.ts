import { Injectable } from '@angular/core';

export enum DeviceType {
  Android = 'Android',
  iOS = 'iOS',
  Other = 'Other'
}

export enum BrowserType {
  Chrome = 'Chrome',
  Firefox = 'Firefox',
  Safari = 'Safari',
  Edge = 'Edge',
  Opera = 'Opera',
  Other = 'Other'
}

@Injectable({
  providedIn: 'root'
})
export class DeviceDetectionService {
  private userAgent: string;

  constructor() {
    this.userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  }

  isMobile(): boolean {
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return mobileRegex.test(this.userAgent);
  }

  getDeviceType(): DeviceType {
    if (/android/i.test(this.userAgent)) {
      return DeviceType.Android;
    }
    if (/iPad|iPhone|iPod/.test(this.userAgent) && !(window as any).MSStream) {
      return DeviceType.iOS;
    }
    return DeviceType.Other;
  }

  getBrowserType(): BrowserType {
    if (this.userAgent.includes('Chrome') && !this.userAgent.includes('Edge') && !this.userAgent.includes('Opera')) {
      return BrowserType.Chrome;
    }
    if (this.userAgent.includes('Firefox')) {
      return BrowserType.Firefox;
    }
    if (this.userAgent.includes('Safari') && !this.userAgent.includes('Chrome')) {
      return BrowserType.Safari;
    }
    if (this.userAgent.includes('Edge')) {
      return BrowserType.Edge;
    }
    if (this.userAgent.includes('Opera') || this.userAgent.includes('OPR')) {
      return BrowserType.Opera;
    }
    return BrowserType.Other;
  }
}

