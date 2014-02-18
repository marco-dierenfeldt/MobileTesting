/*
 * Test-datei zur demonstration der in QUnit möglichen Asserts
 */

test("Testing most Asserts", function() {
    //initialisierung des Tests
    var zeichenkette = "222";
    var zahl = 222;
    var simple_object = {name: "Marco", age: 38};
    var copy_object = {name: "Marco", age: 38};
    var bad_copy_object = {name: "Hans", age: 28};

    //Pruefen der Annahmen Asserts
    ok(zahl === 222, "Der Wert der Variablen Zahl ist 222.");
    equal(zeichenkette, zahl, "Der Wert der Variablen zeichenkette ist gleich dem Wert zahl");
    deepEqual(simple_object, copy_object, "Die beiden Objekte und ihre inneren Strukturen sind gleich");
    strictEqual(zahl, 222, "Wert und Typ der beiden Objekte ist gleich");
    notEqual(zahl, "232", "Die Werte der Objekte sind nicht gleich.");
    notDeepEqual(simple_object, bad_copy_object, "Die Objekte sind nicht vollkommen gleich");
    notStrictEqual(zahl, zeichenkette, "Die Variablen zahl und zeichen haben unterschiedlichen Typ");
});