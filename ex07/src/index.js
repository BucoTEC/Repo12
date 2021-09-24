var collection = {
  2548: {
    album: "Slipper When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give  Love a Bad Name"],
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    album: "ABBA Gold",
  },
};
// Keep a copy of the collection for tests
var oldCollection = JSON.parse(JSON.stringify(collection));
function updateRecords(object, id, prop, value) {
  // Only change code below this line
  if (prop !== "tracks" && value !== "" && id) {
    object.id.prop = value;
  }
  if (props === "tracks" && object.id.tracks === "") {
    var res = [];
    res.push(value);
    object.id.tracks = res;
  }
  if (props === "tracks" && value !== "") {
    object.id.track.push(value);
  }
  if (value === "") {
    delete object.id.prop;
  }
  return object;
  // Only change code above this line
}
console.log(updateRecords(collection, 5439, "artist", "ABBA"));
module.exports = updateRecords;
