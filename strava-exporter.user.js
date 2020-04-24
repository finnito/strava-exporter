// ==UserScript==
// @name         Strava Activity Extractor
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Extract your Strava activities as CSV/TSV data.
// @author       Finn LeSueur
// @match        https://www.strava.com/athlete/training
// @updateURL    https://gitlab.com/Finnito/strava-exporter/-/raw/master/strava-exporter.user.js
// @downloadURL  https://gitlab.com/Finnito/strava-exporter/-/raw/master/strava-exporter.user.js
// @grant        none
// ==/UserScript==


window.stravaExtractor = function() {
    return;
}

var self = window.stravaExtractor;

self.initExtractor = function() {
    var button = " <button onclick='window.stravaExtractor.extractActivities()'>Exract</button>";
    document.querySelector("h1").innerHTML = document.querySelector("h1").innerHTML + button;
}

self.extractActivities = function() {
    var filter = prompt("Filter by activity names starting with: ", "");
    var tbody = document.querySelector("table#search-results tbody");
    var i,
        tr,
        date,
        ymd,
        time,
        type,
        mmddyyyy,
        dateArray;
    console.log(tbody.children.length);
    var activities = "";
    Array.from(tbody.children).reverse().forEach(function(item) {
        if (item.cells[2].innerText.startsWith(filter)) {
            mmddyyyy = item.cells[1].innerText.split(", ")[1];
            dateArray = mmddyyyy.split("/");
            date = new Date();
            ymd = dateArray[2] + "-" + dateArray[0] + "-" + dateArray[1];
            type = item.querySelector("select#type").value;
            if (item.cells[3].innerText.split(":").length == 3) {
                time = item.cells[3].innerText;
            } else {
                time = "0:" + item.cells[3].innerText;
            }
            activities += [
                ymd,
                type,
                item.cells[2].innerText,
                time,
                item.cells[4].innerText.split(" ")[0],
                item.cells[5].innerText.split(" ")[0],
                item.cells[6].innerText,
                item.cells[2].children[0].href
            ].join("\t")
            activities += "\n";
        }
    });
    alert(activities);
}

window.addEventListener("load", window.stravaExtractor.initExtractor);

