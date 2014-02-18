/* 
 * Diese Datei enthält die Tests für das Beispielprojekt für Kapitel 1 des 
 * Buches "jQuery Mobile und Unit Testing. Getestet wird
 * die Funktionalität der Funktion outputLinebreaks(anzahl).
 * Die getestete Funktion gibt die übergebene Anzahl Linebreaks im 
 * Seinten body aus.
 */

/*
 * Dieser Test testet den Gut-Fall, es sollen 5 linebreaks ausgegeben werden.
 * Um sicher zu gehen, dass nur die hinzugefügten Linebreaks gezählt werden,
 * wird vor ausführen der Funktion die aktuelle Anzahl Linebreaks ermittelt
 * und vom danachstattfindenden Count abgezogen.
 */
test("Test <br> generierung.", function(){
    var initialNumberOfLinebreaks = $("br").length;
    example.outputLinebreaks(5);
    var numberOfLinebreaks = $("br").length - initialNumberOfLinebreaks;
    var expectedNumberOfLinebreaks = 5;
    
    ok(numberOfLinebreaks === 5, "es wurde die richtige Anzahl <br> generiert");
    equal(numberOfLinebreaks, expectedNumberOfLinebreaks, "es wurde die richtige Anzahl <br> generiert");
    strictEqual(numberOfLinebreaks, expectedNumberOfLinebreaks, "es wurde die richtige Anzahl <br> generiert");
});

/*
 * In Diesem Test wird das verhalten bei negativer übergebener Anzahl getestet, 
 * es darf weder eine Exception geworfen, noch ein Linebreak hinzugefügt werden.
 */
test("Test negativer Wert", function (){
    var initialNumberOfLinebreaks = $("br").length;
    example.outputLinebreaks(-5);
    var numberOfLinebreaks = $("br").length - initialNumberOfLinebreaks;
    var expectedNumberOfLinebreaks = 0;
    
    equal(numberOfLinebreaks, expectedNumberOfLinebreaks, "es wurden keine <br> generiert");
});

/*
 * In diesem Test wird überprüft, ob die Obergrenze von 25 eingefügten Linebreaks 
 * auch eingehalten wird, wenn eine diesen Grenzwert übersteigende Anzahl 
 * übergeben wird.
 */
test("Test obere Grenze 25", function (){
    var initialNumberOfLinebreaks = $("br").length;
    example.outputLinebreaks(200);
    var numberOfLinebreaks = $("br").length - initialNumberOfLinebreaks;
    var expectedNumberOfLinebreaks = 25;
    
    equal(numberOfLinebreaks, expectedNumberOfLinebreaks, "es wurden keine <br> generiert");
});

/*
 * Dieser Test überprüft, dass bei Übergabe von undefined kein Linebreak 
 * eingefügt wird.
 */
test("Test undefined als Parameter", function (){
    var initialNumberOfLinebreaks = $("br").length;
    example.outputLinebreaks(undefined);
    var numberOfLinebreaks = $("br").length - initialNumberOfLinebreaks;
    var expectedNumberOfLinebreaks = 0;
    
    equal(numberOfLinebreaks, expectedNumberOfLinebreaks, "es wurden keine <br> generiert");
});


