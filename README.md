# Closed Caption Demo

## Install

```bash
$ git clone git@gitlab.com:patrickfatrick/closed-captioning-demo-react.git
$ npm install
$ npm run dev
```

Navigate to localhost:8080.

## What is it?

This is a tiny demo for closed captioning a video based on data fetched from the server. It's all built with React and Redux to manage the state tree (as small as it is).

My main concerns were to make it realistic and functional.

To that end, I had the closed caption data fetched from a mock server, serving what I think real closed caption data might look like. Just text and timestamps. Fetching this content only happens when the user opts into it, by clicking the button to turn closed captioning on. Turning it off will not delete these assets, in case they turn it on again before navigating away.

Meanwhile the functionality is more or less what one would look fore in a closed captioning feature, I think. The text is all there at all times, clicking on a chunk of text will take you to that point in the video. Meanwhile the user can choose to have the closed captions auto-scroll down as the video plays, or remain static.

Turning off closed captioning removes the event listeners on the captions and the video player.

## Architecture

It's a simple "app" but since this would probably be part of something much larger, I wrote it as components that could easily be expanded in functionality down the line. 

State is handled in a typical Redux fashion with actions, action creators, and reducers. The state tree is fully immutable (this demo also includes immutable.js in addition).

The call to the server data is handled in a separate service function, and handled with the `fetch` API (polyfilled for browsers that don't already support it).

There are just a few components, here, but unlike the Vue version I wound up splitting the Caption component into a few separate parts because React is more verbose by nature.

## Thanks for checking this out!

Let me know if you have any questions!