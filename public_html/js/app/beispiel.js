/* 
 * Diese Datei enthält den Beispielquellcode, der mit den Tests in der 
 * Datei tests.js getestet wird.
 */

var example = new Object();

example.outputLinebreaks = function(anzahl){
  //künstliche Obere Grenze
  if(anzahl > 25) anzahl = 25;
  for(var i = 0; i<anzahl; i++)  {
      $("body").append("<br/>");
  }
};
