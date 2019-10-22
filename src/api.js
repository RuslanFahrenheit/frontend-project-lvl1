import {
  cons,
  car,
  cdr,
  toString,
} from '@hexlet/pairs';

export const makeGame = (task, answer, description) => cons(cons(task, answer), description);

export const getTask = (game) => car(car(game));

export const getCorrectAnswer = (game) => cdr(car(game));

export const gameToString = (game) => toString(game);
