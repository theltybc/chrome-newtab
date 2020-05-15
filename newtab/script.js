chrome.storage.sync.get(null, function (result) {
	console.log('Store has', result);
});

let value = { y: [10] };

chrome.storage.sync.set({ key: value }, function () {
	console.log('Value is set to', value);
});

chrome.storage.sync.get(['key'], function (result) {
	console.log('Value currently is', result.key);
});
