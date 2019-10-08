#!/usr/bin/env node

import buildGame from '..';
import prime from '../games/prime';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
buildGame(prime, rules);
