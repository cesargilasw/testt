import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClientService } from '../../services/client/client.service';
import { Client } from '../../classes/Client';
import { SnackbarService } from 'src/app/services/notifications/snackbar.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})

export class AdminPanelComponent implements OnInit {
    // Componentes de Angular Material - mat-table
  // Data of clients to show on view
  displayedColumns: string[] = ['id', 'name', 'lastName', 'city', 'state'];
  // Clients data to use as datasource on table
  clientsData = new MatTableDataSource();
  constructor(private _clientService: ClientService, private snackbarService: SnackbarService) { }

  ngOnInit() {
    this.getClients();
  }

  // Call service to get all clients with mock data
  getClients(): void {
    this.clientsData = new MatTableDataSource([]);
    let arr: any[] = [];
    this._clientService.getAllClients().then(data => {
      if (data['result']) {
        // Map
        arr = data['result'].map(client => new Client(client));
        this.clientsData = new MatTableDataSource(arr);
      }
    }).catch(err => {
      this.snackbarService.showSnackBar('Cerrar', 'Ha ocurrido un error. ⚠️');
    });

  }

}

