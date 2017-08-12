var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];


// first function print with space
//function upTown(arrayString){
//  var lyric = arrayString.join(' ');
//    console.log(lyric);
//    return;
//}
//console.lo(upTown(lyrics));


// second function reverse print
//lyrics.reverse();
//function reverseUpTown(arrayString){
//  var lyric = arrayString.join(' ');
//    console.log(lyric);
////    console.log(reverseLyrics)
//    return;
//}
//console.log(reverseUpTown(lyrics));


// third function print every other word
function skipLyrics(lyrics) {
  var skipped = [];
  for (var i = 0; i <= lyrics.length; i++) {
      if (i % 2) {
      } else {
          skipped.push(lyrics[i]);
        }
  } return skipped.join(" ");
}
console.log(skipLyrics(lyrics));