// Setup
var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [ 
      "Let It Rock", 
      "You Give Love a Bad Name" 
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [ 
      "1999", 
      "Little Red Corvette" 
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": [ ]
  },
  "5439": {
    "album": "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  if (value == "") {
    delete collection[id][prop];
  }
  if (prop == "tracks") {
    if (!collection[id].hasOwnProperty("tracks")) {
      collection[id].tracks = [];
    }
    collection[id].tracks.push(value);
  } else {
    collection[id][prop] = value;
  }
return collection;
}

// Alter values below to test your code
console.log(updateRecords(5439, "artist", "ABBA"));
updateRecords(5439, "tracks", "Take a Chance on Me");
updateRecords(2548, "artist", "");
updateRecords(1245, "tracks", "Addicted to Love");
updateRecords(2468, "tracks", "Free");
updateRecords(2548, "tracks", "");
updateRecords(1245, "album", "Riptide");
