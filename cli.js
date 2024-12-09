#!/usr/bin/env node
import { profile } from './config/profile.js';
import { formatProfile } from './utils/display.js';

console.log(formatProfile(profile));