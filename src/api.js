import {
  cons,
  car,
  cdr,
  toString,
} from '@hexlet/pairs';

export const makeGame = (task, answer) => cons(task, answer);

export const getTask = (game) => car(game);

export const getCorrectAnswer = (game) => cdr(game);

export const gameToString = (game) => toString(game);
