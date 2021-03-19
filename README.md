# Polympics Vue Website

This is a single page app using Vue.js that acts as a frontend to the Polympics API.

## Setup

This project requires Node.js (and NPM). You can install other dependencies with
```
npm install
```

To run in development (and hot-reload):
```
npm run serve
```

To compile for production:
```
npm run build
```
The output will be in `dist/`, which can be served statically.

You can lint and fix files with
```
npm run lint
```

## Configuration

You should put configuration in files named `.env.production.local` and/or `.env.development.local`, depending on how you are running it (you can also just use `.env.local`). The following settings are available:

| Name                | Dev default             | Prod default                |
|:-------------------:|:-----------------------:|:---------------------------:|
| `BASE_URL`          | `http://127.0.0.1:8081` | Required                    |
| `API_URL`           | `http://127.0.0.1:8000` | `https://api.polytopia.fun` |
| `DISCORD_CLIENT_ID` | `612766643080396830`    | Required                    |

These should all be prefixed with `VUE_APP_`. Example file:

```env
VUE_APP_BASE_URL=https://polytopia.fun
VUE_APP_DISCORD_CLIENT_ID=484067640302764042
```
