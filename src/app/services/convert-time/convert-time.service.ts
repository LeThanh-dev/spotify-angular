import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertTimeService {

  constructor() { }

  convertTime({ time }: { time: number }) {
    const minutes = Math.floor(time / 60)
    let seconds = time - minutes * 60;
    const secondsConvert = seconds > 9 ? seconds : `${seconds}0`
    return `${minutes}:${secondsConvert}`
  }

}
