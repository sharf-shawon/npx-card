'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.green.bold('           Sharfuddin Shawon'),
  passion: chalk.grey('           Programmer, Web Developer, IoT Enthusiast'),

  labelWork: chalk.white.bold('    Work:'),
  work: chalk.white('Student Network Specialist at MissouriState.edu'),

  labelGitHub: chalk.white.bold('  GitHub:'),
  github: chalk.gray('https://github.com/') + chalk.blue('sharf-shawon'),

  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('sharf-shawon'),

  labelPortfolio: chalk.white.bold('     Web:'),
  portfolio: chalk.grey('https://') + chalk.blue('shawon.xyz'),

  labelTwitter: chalk.white.bold(' Twitter:'),
  twitter: chalk.gray('https://twitter.com/') + chalk.blue('sharf_shawon'),

  labelCard: chalk.white.bold('    Card:'),
  npx: chalk.red('npx') + ' ' + chalk.white('sharf.shawon')
}

// Actual strings we're going to output
const newline = `\n`
const heading = `${data.name}`
const passion = `${data.passion}`
const work = `${data.labelWork}  ${data.work}`
const github = `${data.labelGitHub}  ${data.github}`
const linkedin = `${data.labelLinkedIn}  ${data.linkedin}`
const portfolio = `${data.labelPortfolio}  ${data.portfolio}`
const twitter = `${data.labelTwitter}  ${data.twitter}`
const card = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline +
               passion + newline + 
               newline +
               work + newline +
               github + newline +
               linkedin + newline +
               portfolio + newline +
               twitter + newline +
               newline + card

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
