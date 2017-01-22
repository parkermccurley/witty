#!/usr/bin/env node

import cli from 'commander'
import { exportCSV } from './tasks/export';

const query = "hello"
const count = 5

exportCSV(query, count)
