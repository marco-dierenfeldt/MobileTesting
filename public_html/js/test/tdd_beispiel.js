/* 
 * Diese Datei enthält die Tests für das TDD-Beispiel aus Kapitel 2.2 
 */

/*
 * Der Test prüft die Funktionalität der Funktion getShoppingLists des Persistenzobjekts.
 * Es überprüft auch, dass das zurückgegebene Array mindestens einen Listennamen enthält.
 */
test("Persistenzschicht enthält mindestens eine Einkaufsliste", function(){
    //Definition der Variablen
    var shoppinglists = slPersistence.getShoppingListKeys();
    var numberOfLists = shoppinglists.length;
        
    //testen der Annahmen
    notEqual(shoppinglists, undefined, "Shoppinglists sind nicht undefined");
    ok(numberOfLists > 0, "Die Liste der Namen muss mindestens ein Element enthalten.");
});
