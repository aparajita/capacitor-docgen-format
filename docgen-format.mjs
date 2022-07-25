#!/usr/bin/env node
import fs from 'fs'

const kGreenCheck = '\x1b[32m✔\x1b[0m'

function tableHeaderFixer(match, dashes) {
  // Left align headers
  return `| :${dashes} `
}

function fixTables(content) {
  console.log(`${kGreenCheck} Fixing tables`)
  return content
    .replace(/\|\s(-+)\s(?=\|)/gu, tableHeaderFixer)
    .replace(/\|\s*\*\*`(\w+)`\*\*\s*\|/gu, '|$1|')
    .replace(/\|\s*<code>(.+?)<\/code>\s*\|/gu, '|$1|')
}

function fixReturnTypes(content) {
  console.log(`${kGreenCheck} Fixing return types`)
  return content.replace(/(\*\*Returns:\*\* )<code>(.+?)<\/code>/gu, '$1$2')
}

function main() {
  console.log('\x1b[1m\x1b[34mdocgen-format\x1b[0m')
  let content = fs.readFileSync('README.md', 'utf-8')
  content = fixTables(content)
  content = fixReturnTypes(content)
  fs.writeFileSync('README.md', content, 'utf-8')
}

main()
