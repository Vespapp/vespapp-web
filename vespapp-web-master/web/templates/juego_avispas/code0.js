gdjs.finalCode = {};


gdjs.finalCode.GDmarcadorObjects1= [];
gdjs.finalCode.GDCeroPuntosObjects1= [];
gdjs.finalCode.GDSuspensoObjects1= [];

gdjs.finalCode.conditionTrue_0 = {val:false};
gdjs.finalCode.condition0IsTrue_0 = {val:false};
gdjs.finalCode.condition1IsTrue_0 = {val:false};
gdjs.finalCode.condition2IsTrue_0 = {val:false};
gdjs.finalCode.conditionTrue_1 = {val:false};
gdjs.finalCode.condition0IsTrue_1 = {val:false};
gdjs.finalCode.condition1IsTrue_1 = {val:false};
gdjs.finalCode.condition2IsTrue_1 = {val:false};

gdjs.finalCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.finalCode.GDmarcadorObjects1.length = 0;
gdjs.finalCode.GDCeroPuntosObjects1.length = 0;
gdjs.finalCode.GDSuspensoObjects1.length = 0;


{

gdjs.finalCode.GDCeroPuntosObjects1.createFrom(runtimeScene.getObjects("CeroPuntos"));
gdjs.finalCode.GDSuspensoObjects1.createFrom(runtimeScene.getObjects("Suspenso"));

gdjs.finalCode.condition0IsTrue_0.val = false;
{
{gdjs.finalCode.conditionTrue_1 = gdjs.finalCode.condition0IsTrue_0;
gdjs.finalCode.conditionTrue_1.val = context.triggerOnce(75053940);
}
}if (gdjs.finalCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.finalCode.GDCeroPuntosObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDCeroPuntosObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.finalCode.GDSuspensoObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDSuspensoObjects1[i].hide();
}
}}

}


{

gdjs.finalCode.GDmarcadorObjects1.createFrom(runtimeScene.getObjects("marcador"));

{for(var i = 0, len = gdjs.finalCode.GDmarcadorObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDmarcadorObjects1[i].setString("¡Has logrado " +gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) +" aciertos de XXX");
}
}
}


{

gdjs.finalCode.GDSuspensoObjects1.createFrom(runtimeScene.getObjects("Suspenso"));

gdjs.finalCode.condition0IsTrue_0.val = false;
{
gdjs.finalCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
}if (gdjs.finalCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.finalCode.GDSuspensoObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDSuspensoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.finalCode.GDSuspensoObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDSuspensoObjects1[i].setString("NIVEL: Sabes distinguir un bicho de una jirafa... ¿o tal vez no?");
}
}}

}


{

gdjs.finalCode.GDSuspensoObjects1.createFrom(runtimeScene.getObjects("Suspenso"));

gdjs.finalCode.condition0IsTrue_0.val = false;
gdjs.finalCode.condition1IsTrue_0.val = false;
{
gdjs.finalCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) <= 2;
}if ( gdjs.finalCode.condition0IsTrue_0.val ) {
{
gdjs.finalCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 1;
}}
if (gdjs.finalCode.condition1IsTrue_0.val) {
{for(var i = 0, len = gdjs.finalCode.GDSuspensoObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDSuspensoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.finalCode.GDSuspensoObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDSuspensoObjects1[i].setString("NIVEL: Fatal, sigue practicando");
}
}}

}

return;
}
gdjs['finalCode']= gdjs.finalCode;
