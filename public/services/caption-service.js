export function getCaptions (cb) {
  return window.fetch('./data/data.json')
  .then((response) => response.json())
  .then((response) => {
    const captions = response.captions.map((caption, i) => {
      if (i === 0) return {...caption, active: true}
      return {...caption, active: false}
    })
    cb(captions)
  })
}
