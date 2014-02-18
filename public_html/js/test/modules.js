/*
 * Diese Tests zeigen die Verwendung von Modules in QUnit
 */
module("UI-Tests");
test("Einfügen von Listitem", function() {
    ok(true, "dummy assert");
    ok(true, "dummy assert");
    ok(true, "dummy assert");
});
test("Entfernen von Listitem", function() {
    ok(true, "dummy assert");
});
test("Neuladen Liste", function() {
    ok(true, "dummy assert");
});
test("Korrekte Positionierung der Listitems", function() {
    ok(true, "dummy assert");
    ok(true, "dummy assert");
});
module("Backend");
test("Liste erzeugen", function() {
    ok(true, "dummy assert");
    ok(true, "dummy assert");
});
test("Liste speichern", function() {
    ok(true, "dummy assert");
    ok(true, "dummy assert");
    ok(true, "dummy assert");
});
test("Liste löschen", function() {
    ok(true, "dummy assert");
});
module("Domain");
test("Todolist testen", function() {
    ok(true, "dummy assert");
});
test("Listitem Testen", function() {
    ok(true, "dummy assert");
});
module("Integration", {
    setup: function() {
        // setup für alle folgenden tests
        $("#output").append("Bevor Test ausgeführt wird... <br/>")
    },
    teardown: function() {
        // aufräumen nach jedem test
        $("#output").append("Nachdem Test ausgeführt wurde... <br/>")
    }
});
test("Test 01", function() {
    $("#output").append("Test 01... <br/>");
    ok(true, "dummy assert");
});
test("Test 02", function() {
    $("#output").append("Test 02... <br/>");
    ok(true, "dummy assert");
});
test("Test 03", function() {
    $("#output").append("Test 03... <br/>");
    ok(true, "dummy assert");
});
test("Test 04", function() {
    $("#output").append("Test 04... <br/>");
    ok(true, "dummy assert");
});
test("Test 05", function() {
    $("#output").append("Test 05... <br/>");
    ok(true, "dummy assert");
});
