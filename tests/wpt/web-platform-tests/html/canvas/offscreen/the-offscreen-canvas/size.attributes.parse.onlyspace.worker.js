// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:size.attributes.parse.onlyspace
// Description:Parsing of non-negative integers
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Parsing of non-negative integers");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

offscreenCanvas.width = '  ';
offscreenCanvas.height = '  ';
_assertSame(offscreenCanvas.width, 0, "offscreenCanvas.width", "0");
_assertSame(offscreenCanvas.height, 0, "offscreenCanvas.height", "0");
t.done();

});
done();
