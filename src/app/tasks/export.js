import { search } from '../services/twitter.service.js'
import constants from '../core'
import { tweetToJSON } from '../helpers/tweet.helper'
import jsonToCSV from 'json2csv'
import { writeFile } from 'fs'

const csvFields = ['content', 'date', 'user', 'followers']

export function exportCSV(query, count) {
  search(query, count, constants.bearerToken)
    .then(response => {
      let jsonTweets = []
      response.forEach(tweet => {
        jsonTweets.push(tweetToJSON(tweet))
      })
      let csvData = jsonToCSV({data: jsonTweets, fields: csvFields})
      writeFile('tweets.csv', csvData, error => {
        if (error) throw error
        console.log('File `file.csv` saved.')
      })
    })
    .catch(error => console.log(error))
}
