gdjs.inicioCode = {};


gdjs.inicioCode.GDmarcadorObjects1= [];
gdjs.inicioCode.GDenciclopediaObjects1= [];
gdjs.inicioCode.GDinicioObjects1= [];

gdjs.inicioCode.conditionTrue_0 = {val:false};
gdjs.inicioCode.condition0IsTrue_0 = {val:false};
gdjs.inicioCode.condition1IsTrue_0 = {val:false};
gdjs.inicioCode.condition2IsTrue_0 = {val:false};

gdjs.inicioCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.inicioCode.GDmarcadorObjects1.length = 0;
gdjs.inicioCode.GDenciclopediaObjects1.length = 0;
gdjs.inicioCode.GDinicioObjects1.length = 0;


{

gdjs.inicioCode.GDinicioObjects1.createFrom(runtimeScene.getObjects("inicio"));

gdjs.inicioCode.condition0IsTrue_0.val = false;
gdjs.inicioCode.condition1IsTrue_0.val = false;
{
gdjs.inicioCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("inicio", gdjs.inicioCode.GDinicioObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if ( gdjs.inicioCode.condition0IsTrue_0.val ) {
{
gdjs.inicioCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.inicioCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "ESCENA1");
}}

}


{

gdjs.inicioCode.GDenciclopediaObjects1.createFrom(runtimeScene.getObjects("enciclopedia"));

gdjs.inicioCode.condition0IsTrue_0.val = false;
gdjs.inicioCode.condition1IsTrue_0.val = false;
{
gdjs.inicioCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("enciclopedia", gdjs.inicioCode.GDenciclopediaObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if ( gdjs.inicioCode.condition0IsTrue_0.val ) {
{
gdjs.inicioCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.inicioCode.condition1IsTrue_0.val) {
}

}

return;
}
gdjs['inicioCode']= gdjs.inicioCode;
