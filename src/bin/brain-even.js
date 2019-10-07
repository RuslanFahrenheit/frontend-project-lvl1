#!/usr/bin/env node

import buildGame from '..';
import even from '../games/even';

const rules = 'Answer "yes" if number even otherwise answer "no".';
buildGame(even, rules);
