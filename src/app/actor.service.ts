import { Injectable } from '@angular/core';

import { Actor } from './actors/actor';
import { AVENGERS_ACTORS } from './actors/mock-actors';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor() { }

  getActors(): Actor[] {
    return AVENGERS_ACTORS;
  }

  getActor(id: number): Actor {
    return AVENGERS_ACTORS.find(actor => actor.id === id);
  }
}
