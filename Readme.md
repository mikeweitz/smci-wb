# NextJS w Styletron

A Quick prototype of rendered search results in a NextJS App

For the sake of modeling, JSON data was cloned from `https://www.warnerbros.com/search?qt=batman` into the local build under `pages/api/data.json`. Which means image assets are referenced to the Warner hosted content at `drupal-root/public/`

The NextJS paradigm for API routes is to write Node script under `/pages/api`. Next then makes those routes available at `/api` in your app

My local instance is running:  
NPM 6.11.3  
Node 8.9.1

## Run the prototype

Clone the repo, CD into the project root, install dependencies with npm, then run the project local server:

```bash
npm install
npm run dev
```

## What's under the hood:

- NextJS,
- React,
- Styletron for styled components
- A CSS reset under the Static folder
- lazy loading result images
- toggle display of filters / nav on mobile
- NextJS supports SSR by default, so the prototype uses `isomorphic-unfetch` for retrieving JSON from the api route
