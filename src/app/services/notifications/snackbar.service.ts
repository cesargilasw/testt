import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  /**
   * Shows snack bar message
   * @param link  link of snackbar
   * @param msg  Message to show
   * @param time  Duration of snackbar in miliseconds
   */
  showSnackBar(link: string = '', msg: string, className: string = '', time: number = 4000) {
    this.snackBar.open(msg, link, {
      duration: time,
      panelClass: className,
    });
  }
}
