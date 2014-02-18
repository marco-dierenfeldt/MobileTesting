/* 
 *Enthält Tests um die Grundlagen für QUnit zu erklären.
 */

//leerer Test ohne Dummy-Assert, mit expect(0)
test("leerer Test ohne Dummy",function(){
    expect(0);
});

//leerer Test mit einer Annahme(Assertion) um den Test erfolgreich zu beenden.
test("leerer Test mit Dummy",function(){
    ok(true,"Dummy-Assertion");
});

//leerer Test mit einer Annahme(Assertion) um den Test erfolgreich zu beenden.
test("leerer Test mit Dummy",function(){
    ok(false,"Dummy-Assertion");
});
