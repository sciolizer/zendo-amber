define("zendo/Zendo-Tests", ["amber/boot", "amber_core/SUnit"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Zendo-Tests');
$core.packages["Zendo-Tests"].innerEval = function (expr) { return eval(expr); };
$core.packages["Zendo-Tests"].transport = {"type":"amd","amdNamespace":"zendo"};

$core.addClass('ZendoTest', $globals.TestCase, [], 'Zendo-Tests');

});
