// Returns the array categories of Apps on the App Store given their Bundle IDs
// Uses the app-store-scraper library by facundoolano (https://github.com/facundoolano/app-store-scraper)
const fs = require('fs');
var store = require('app-store-scraper');
var catList = [];
var errorCount = 0;
var promises = [];

 // Function to fetch the app category from the returned object
function getCategory(details) {
	var obj = [];
	obj.push(details.id);
	obj.push(details.genres);
	catList.push(obj);
}

// Counts the number of Bundles for which nothing was returned in a batch
// Run the script again for these bundles in smaller batch sizes
// If smaller batches don't work, the app is not available on the App Store anymore
function handleError(error) {
	errorCount++;
}

var bundleList = [284815117,400949811] // Put the list of App Bundle IDs here. Not more than ~100 bundles in a batch


bundleList.forEach(function(bundleID) {
	var idObj = {};
	idObj['id'] = bundleID;
	promises.push(store.app(idObj).then(getCategory).catch(handleError));
});

Promise.all(promises).then(function () {
	fs.writeFile("/home/amit/output.txt", JSON.stringify(catList), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
    console.log(errorCount);
});
}).catch(console.error);
