#!/usr/bin/env node

import commander from 'commander'
import * as twitter from './services/twitter.service'
import { tweetToJSON } from './helpers/tweet.helper'
import constants from './core'

const query = 'parker'
const count = 5

console.log("Hello, world!");

twitter.search(query, count, constants.bearerToken)
  .then(response => {
    response.forEach(tweet => console.log(tweetToJSON(tweet)));
  })
  .catch(error => console.log(error))
