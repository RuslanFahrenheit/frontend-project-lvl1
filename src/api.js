import {
  cons,
  car,
  cdr,
  toString,
} from '@hexlet/pairs';

export const makeGame = (task, answer, rules) => cons(cons(task, answer), rules);

export const getTask = (game) => car(car(game));

export const getCorrectAnswer = (game) => cdr(car(game));

export const getRules = (game) => cdr(game);

export const gameToString = (game) => toString(game);
