# Delivery Tracker Frontend

A React interface for presenting government promises and delivery information. It provides a homepage, promise listings, individual promise views, and a fact-check page, with charts, maps, timelines, search, and filters.

Built with React 18, Create React App, React Router, Material UI, Redux Toolkit, and ECharts.

## Local development

```sh
git clone https://github.com/Zoiku/deliverytracker.gov.gh.git
cd deliverytracker.gov.gh
npm install
npm start
```

Node.js and npm are required. The development server normally opens at `http://localhost:3000`.

## Data and scope

This repository contains the frontend and bundled content under `src/lists/` and map assets under `src/assets/map/`. It does not include a backend service. `src/services/AxiosInstance.js` is currently empty; do not assume an environment variable or API setup exists there.

The repository name does not establish whether the code matches a currently deployed public service. Review displayed content and data sources before publishing.

## Commands and deployment

- `npm test`: Create React App test runner.
- `npm run build`: production assets in `build/`.

Static hosting needs an `index.html` fallback for browser routes, including `/promises`, `/promise`, and `/fact-check`. Review the Dockerfile and its referenced files before selecting container deployment.

## Code guide

- `src/App.js`: route definitions.
- `src/pages/`, `src/layouts/`: screens and page layouts.
- `src/lists/`: promises, events, navigation, and filters.
- `src/charts/`: chart components and options.
- `src/components/`: search, timelines, maps-related UI, and shared controls.
- `src/redux/`: application state.

Check promise navigation, filters, charts, image galleries, and direct loading of nested routes after changes.
