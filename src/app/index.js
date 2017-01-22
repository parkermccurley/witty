#!/usr/bin/env node

import cli from 'commander'
import { exportCSV } from './tasks/export'

cli
  .version('1.0.0')
  .description('An application for searching twitter')
  .option('-q, --query <query>', 'Search twitter with this query')
  .option('-c, --count <count>', 'Limit results to this amount', parseInt)
  .parse(process.argv)

if (!cli.query) {
  console.log("Sorry, you must input a search query using the '--query' flag.")
  process.exit()
} else if (cli.query && !cli.count) {
  exportCSV(cli.query, 10)
} else if (cli.query && cli.count) {
  exportCSV(cli.query, cli.count)
}
