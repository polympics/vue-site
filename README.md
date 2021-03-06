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
| `CMS_URL`           | See below.              | See below.                  |
| `DISCORD_CLIENT_ID` | `612766643080396830`    | Required                    |

The default `CMS_URL` is `https://raw.githubusercontent.com/polympics/wiki/build` (note no `index.json`).

These should all be prefixed with `VUE_APP_`. Example file:

```env
VUE_APP_BASE_URL=https://polytopia.fun
VUE_APP_DISCORD_CLIENT_ID=484067640302764042
```

Note that the Discord application associated with the `DISCORD_CLIENT` ID should have the following OAuth2 redirects added:

- `{BASE_URL}/login/callback`
- `{BASE_URL}/discord_sync/callback`

Where `{BASE_URL}` is the `VUE_APP_BASE_URL` setting.
