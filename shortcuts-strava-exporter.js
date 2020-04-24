// Replace the text inside these quotes
// with the magic variable containing
// the contents of the Ask For Input action.
var filter = "";

// Let's do it.
var tbody = document.querySelector("table#search-results tbody");
var i,
    tr,
    date,
    ymd,
    time,
    type,
    mmddyyyy,
    dateArray;
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

// Return the output
completion(activities);