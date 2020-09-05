import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item/item.service';
import { SnackbarService } from 'src/app/services/notifications/snackbar.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {
  // Items got of http request
  items: any;
  constructor(private _itemService: ItemService, private snackbarService: SnackbarService) { }

  ngOnInit() {
    this.getItems();
  }

  // Call service to get items to show on view
  getItems(): void {
    this._itemService.getMockItems().then(data => {
      if (data) {
        this.items = data;
      }
    }).catch(err => {
      this.snackbarService.showSnackBar('Cerrar', 'Ha ocurrido un error. ⚠️');
    });

  }
  
  /**
  *  Method totest the emitter functionality
  *  @param {Array} data - Data of card clicked
  */
  clickEmitter(data: []): void {
    alert(`Activating Emitter -> ${data['title']}`);
  }

}
