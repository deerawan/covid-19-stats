# Corona Stats

![Corona logo](https://raw.githubusercontent.com/deerawan/covid-19-stats/master/src/assets/corona-logo-128.png 'Corona logo')

Chrome extension to display Covid-19 stats.

⬇️ [Install from Chrome web store](https://chrome.google.com/webstore/detail/pjfcgnbgefoebpppegbmjigihbjmoijj/publish-accepted?authuser=0&hl=en)

## Screenshots

![extension screenshot](https://raw.githubusercontent.com/deerawan/covid-19-stats/master/images/screenshot.png)

## Features

- Live data based on [worldometers](https://www.worldometers.info/)
- Statistics number of confirmed, recovered, and deaths and more
- Search by country
- Dark mode

## Development

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `npm run build -- --watch` to reload extension automatically to Chrome.

### Enable Chrome extension development

To see this app running as Chrome extension, follow these steps below:

1. Open Chrome
2. Navigate to `chrome://extensions` in address bar
3. Enable developer mode toggle switch
4. Click **Load unpacked button** and select `dist/covid19-stats`
5. Now you should be able to see the extension in Chrome

### Running unit tests

Run `npm t` to execute the unit tests

### Running end-to-end tests

Run `npm run e2e` to execute the end-to-end
