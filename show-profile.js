#!/usr/bin/env node
import chalk from 'chalk';
import { readFileSync } from 'fs';

try {
  const profile = JSON.parse(readFileSync('profile.json', 'utf8'));
  
  console.log(chalk.bold.cyan(`\n${profile.name}`));
  console.log(chalk.yellow(`${profile.title}`));
  console.log(chalk.white('\nSkills:'));
  profile.skills.split(',').forEach(skill => {
    console.log(chalk.gray(`• ${skill.trim()}`));
  });
  console.log(chalk.white(`\nExperience: ${profile.experience} years`));
  console.log(chalk.white('\nConnect:'));
  console.log(chalk.blue(`GitHub: ${profile.github}`));
  console.log(chalk.blue(`LinkedIn: ${profile.linkedin}`));
  console.log(chalk.blue(`Email: ${profile.email}\n`));
} catch (error) {
  console.log(chalk.red('\n❌ Profile not found. Please run "node cli.js" first to set up your profile.\n'));
}