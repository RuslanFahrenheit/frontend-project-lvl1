#!/usr/bin/env node

import buildGame from '..';
import gcd from '../games/gcd';

const rules = 'Find the greatest common divisor of given numbers.';
buildGame(gcd, rules);
