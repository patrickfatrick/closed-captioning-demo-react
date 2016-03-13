import {List, Map} from 'immutable'
import fetch from 'isomorphic-fetch'

// Uses fetch to GET the caption data
// Mutates the data into a new array that adds the `active` property to each
// Returns a callback with the new array as an argument
export function getCaptions (cb) {
  return fetch('./data/data.json')
  .then((response) => response.json())
  .then((response) => {
    const captions = List(response.captions.map((caption, i) => {
      if (i === 0) return Map({...caption, active: true})
      return Map({...caption, active: false})
    }))
    cb(captions)
  })
}
