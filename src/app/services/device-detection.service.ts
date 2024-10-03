import { Injectable } from '@angular/core';

export enum DeviceType {
  Android = 'Android',
  iOS = 'iOS',
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
}
