function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Create three dictionaries representing different albums
var album1 = make_album("Atif Aslam", "Tere Sang Yara");
var album2 = make_album("Ed Sheeran", "÷", 16);
var album3 = make_album("Kaifi Khalii", "Kahani Suno 2.0");
// Print each dictionary to show that they store the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
