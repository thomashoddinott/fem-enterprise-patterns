import { Component, OnInit } from '@angular/core';
import { ClientRequest } from 'http';

interface BaseEntity {
  id: string | null
}

interface Action {
  type: string;
  payload?: any
}

interface Client extends BaseEntity {
  firstName: string;
  lastName: string;
  company: string
}

interface Project extends BaseEntity {
  title: string;
  description: string;
  completed: boolean;
}

interface ProjectsState {
  projects: Project[],
  currentProject: Project
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

interface ClientsState {
  clients: Client[];
  currentClient: Client
}

const newClient: Client = {
  id: null,
  firstName: '',
  lastName: '',
  company: ''
}

const initialClientState: ClientsState = {
  clients,
  currentClient: newClient
}

class ClientsStore {
  state: ClientsState

  constructor(state: ClientsState) {
    this.state = state
  }

  getState() {
    return this.state
  }

  select(key: string) {
    return this.state[key]
  }
}

const CLIENT_LOAD = '[Client] Load';
const CLIENT_CREATE = '[Client] Create';
const CLIENT_UPDATE = '[Client] Update';
const CLIENT_DELETE = '[Client] Delete';
const CLIENT_SELECT = '[Client] Select';
const CLIENT_CLEAR = '[Client] Clear';

const loadClients = (state, clients) => {
  console.log('LOAD CLIENTS!', clients)
  return state
}

const selectClient = (state, client) => {
  console.log('SELECT CLIENT!', client)
  return state
}

const clientsReducer = (state: ClientsState = initialClientState, action: Action) => {
  switch (action.type) {
    case CLIENT_LOAD:
      return loadClients(state, action.payload)
    case CLIENT_SELECT:
      return selectClient(state, action.payload)
    default:
      return state
  }
}

const clientsStore = new ClientsStore(initialClientState)
const currentClients = clientsStore.select('clients')
const currentClient = clientsStore.select('currentClient')

const superProject: Project = {
  id: '1',
  title: 'Super Project',
  description: 'This is awesome!',
  completed: false
}

const hellProject: Project = {
  id: '2',
  title: 'Hell Project on Earth',
  description: 'Just make it stop',
  completed: true
}

const newProject: Project = {
  id: null,
  title: '',
  description: '',
  completed: false
}

const projects: Project[] = [
  superProject,
  hellProject
]

const initialProjectsState: ProjectsState = {
  projects,
  currentProject: newProject
}

class ProjectsStore {
  state: ProjectsState

  constructor(state: ProjectsState) {
    this.state = state
  }

  getState(): ProjectsState {
    return this.state
  }

  select(key: string) {
    return this.state[key]
  }
}

const projectStore = new ProjectsStore(initialProjectsState)
const currentProjects = projectStore.select('projects')

interface AppState {
  clientsState: ClientsState,
  projectsState: ProjectsState
}

const appState: AppState = {
  clientsState: initialClientState,
  projectsState: initialProjectsState
}

const tango = currentProjects;

@Component({
  selector: 'fem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  echo = tango;
}
