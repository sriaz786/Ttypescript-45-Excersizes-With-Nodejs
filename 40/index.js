// define the make album functiom//
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling three functions and creating three reverse with different values//
var album1 = make_album("Hhumza", "Album title : 1");
var album2 = make_album("Usman", "Album title : 2");
// calling a make_album function with third parameter//
var album3 = make_album("Al3", "Album title : 3", 10);
// printing values of our object creating my function//
console.log(album1);
console.log(album2);
console.log(album3);
