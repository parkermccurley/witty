#!/usr/bin/env node

import * as twitter from './services/twitter.service'
import { tweetToJSON } from './helpers/tweet.helper'
import constants from './core'

const query = 'parker'
const count = 5

twitter.search(query, count, constants.bearerToken)
  .then(response => {
    response.forEach(tweet => console.log(tweetToJSON(tweet)));
  })
  .catch(error => console.log(error))
