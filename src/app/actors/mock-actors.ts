import { Actor } from './actor';
import { AVENGERS_MOVIE } from './mock-movies';

export const IRON_MAN: Actor = {
  id: 1,
  name: 'Robert Downey Jr.',
  movies: [AVENGERS_MOVIE]
};

const CAPTAIN_AMERICA: Actor = {
  id: 2,
  name: 'Chris Evans',
  movies: [AVENGERS_MOVIE]
};

const SPIDER_MAN: Actor = {
  id: 3,
  name: 'Tom Holland',
  movies: [AVENGERS_MOVIE]
};

export const AVENGERS_ACTORS: Actor[] = [
  IRON_MAN,
  CAPTAIN_AMERICA,
  SPIDER_MAN
];