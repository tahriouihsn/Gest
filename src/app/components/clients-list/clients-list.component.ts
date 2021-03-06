import { Client } from './../../models/client';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {
  clients:Client[]= [];
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getAllClients();
  }
  getAllClients(){
    this.clientService.getClients()
    .subscribe((res:Client[])=>{
      this.clients=res;
    });
  }

}
