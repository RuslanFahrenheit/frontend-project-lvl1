#!/usr/bin/env node

import buildGame from '..';
import progression from '../games/progression';

const rules = 'What number is missing in the progression?';
buildGame(progression, rules);
