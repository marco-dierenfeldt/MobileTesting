/* 
 * Diese Datei enthält eine gemockte Version der Persistenzschicht für die
 * ShoppingList WebApp.
 */

//Persistenzobjekt, das alle Persistenzfunktionen enthält.
var slPersistence = {};

//Attribut, das die Namen der verfügbaren Listen in einem Array hält
slPersistence.list_keys = ['Wocheneinkauf', 'Filme', 'Grillen', 'Kindergeburtstag'];

/*
 * Funktion um das Array der Einkaufslistennamen zu bekommen
 */
slPersistence.getShoppingListKeys = function(){
    return this.list_keys;
};

