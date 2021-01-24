class Formatter {
  //add static methods here

  //takes a string, capitalizes the first letter
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  //takes in a string, removes all non-alphaneumeric characters except - ' and " "
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }


  //takes in a string and capitalizes all words in a sentence except the a an but of and for at by from
  //always capitalizes the first word
  static titleize(string) {
    let exceptWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    return string.split(" ").map((word, index) => {
      if (index === 0 || exceptWords.indexOf(word) == -1) {
        return this.capitalize(word)
      } else {
        return word
      }
    }).join(" ")
  }

}