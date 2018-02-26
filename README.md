# WeatherView

## This is a simple weather viewing app.

Data source - [openweathermap.com](http://openweathermap.com)
### Tech used
- Webpack
- React
- ES6
- NodeJS
- Express
- Docker

### Prerequisites
- NodeJS v8.9 or higher
- Docker with Docker Compose

### Instructions

- clone the repo
- `cd weatherview`

**With Docker:**
- run `docker-compose up`
- open `localhost:8000` in your browser

**With NodeJS**
- `cd server && npm install`
    - `npm run start` to run server
- `cd client && npm install`
    - `run npm run dev` to run development build
    - `run npm run build` to run production build
    - open `localhost:8000` in your browser