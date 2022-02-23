import { Component, OnInit } from '@angular/core';
import { ClientRequest } from 'http';

interface BaseEntity {
  id: string | null
}

interface Client extends BaseEntity {
  firstName: string;
  lastName: string;
  company: string
}

const peter: Client = {
  id: '1',
  firstName: 'Peter',
  lastName: 'Porker',
  company: 'Acme, Inc'
}

const john: Client = {
  id: '2',
  firstName: 'John',
  lastName: 'Doe',
  company: 'N/A'
}

const clients: Client[] = [
  peter,
  john
]

const tango = clients;

@Component({
  selector: 'fem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  echo = tango;
}
