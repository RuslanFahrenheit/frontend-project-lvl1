#!/usr/bin/env node

import buildGame from '..';
import calc from '../games/calc';

const rules = 'What is the result of the expression?';
buildGame(calc, rules);
