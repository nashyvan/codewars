function gooseFilter(birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
  
  for (var i = 0; i < birds.length; i++) {
    for (var j = 0; j < geese.length; j++) {
      if (birds[i] == geese[j]) {
        birds.splice(i, 1)
        i = i - 1
      }
    }
  }
  
  return birds
}