## 🏃‍♂️Strava Activity Exporter

These two scripts will allow you to export your Strava activities as Tab Separated Values (TSV) for easy pasting into your spreadsheet of choice (Google Sheets/Microsoft Excel/whatever).

Each line comes in this format and does not include a header row:

```
date    activityType    activityName    duration    distance    elevationGain   relativeEffort  activityURL
```

![](https://gitlab.com/Finnito/strava-exporter/-/raw/master/spreadsheet-example.jpeg)

## 🖥 Desktop

1. Install [Tampermonkey](http://tampermonkey.net) or [Greasemonkey](https://www.greasespot.net/) for your browser of choice
2. Install the [strava-exporter.user.js](https://gitlab.com/Finnito/strava-exporter/-/raw/master/strava-exporter.user.js) userscript
3. Open https://www.strava.com/athlete/training
4. Use the __Export__ button at the top of the page
5. Paste the data into your spreadsheet of choice!

![](https://gitlab.com/Finnito/strava-exporter/-/raw/master/desktop-explanation.jpeg)

## 📱 Mobile (iOS)

1. Install the [Strava Exporter Shortcut](https://www.icloud.com/shortcuts/496f09bdad2f418c90c21d90c8848d74)
2. Fix the filter input by adding the Magic Variable into the shortcut JS like requested
3. Open https://www.strava.com/athlete/training
4. Use the Share Sheet to activate the __Export Strava Activities__ Shortcut
5. Select only the activities you want to export
6. Paste the data into your spreadsheet of choice!

![](https://gitlab.com/Finnito/strava-exporter/-/raw/master/shortcut-explanation.jpeg)