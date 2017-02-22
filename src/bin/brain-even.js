#!/usr/bin/env node

import make from '../';
import { getUserName } from '../lib/user';
import EvenGame from '../games/EvenGame';

console.log('Welcome to Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".\n');

const userName = getUserName();
console.log(`Hello ${userName}!`);

const game = make(EvenGame);
game(userName);