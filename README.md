# Closed Caption Demo

## Install

```bash
$ git clone git@gitlab.com:patrickfatrick/closed-captioning-demo.git
$ npm install
$ npm run dev
```

Navigate to localhost:8080.

## What is it?

This is a tiny demo for closed captioning a video based on data fetched from the server. It's all built in Vue with Vuex to manage the state tree (as small as it is).

My main concerns were to make it realistic and functional.

To that end, I had the closed caption data fetched from a mock server, serving what I think real closed caption data might look like. Just text and timestamps. Fetching this content only happens when the user opts into it, by clicking the button to turn closed captioning on. Turning it off will not delete these assets, in case they turn it on again before navigating away.

Meanwhile the functionality is more or less what one would look fore in a closed captioning feature, I think. The text is all there at all times, clicking on a chunk of text will take you to that point in the video. Meanwhile the user can choose to have the closed captions auto-scroll down as the video plays, or remain static.

Turning off closed captioning removes the event listeners on the captions and the video player.

## Architecture

It's a simple "app" but since this would probably be part of something much larger, I wrote it as components that could easily be expanded in functionality down the line. 

State is handled in a typical Flux-like implementation with a store, mutations that manipulate the store, and actions that call the mutations. No change to state can be done outside of mutations.

The call to the server data is handled in a separate service function, and handled with the `fetch` API (polyfilled for browsers that don't already support it).

There are just two components, one for the video player and one for the closed captioning and buttons that control it.

## Thanks for checking this out!

Let me know if you have any questions!