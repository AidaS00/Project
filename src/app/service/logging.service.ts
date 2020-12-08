import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  // tslint:disable-next-line:typedef
  log(message: string) {
    console.log('Logging.service log message: ', message);
  }
}
