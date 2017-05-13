gdjs.ESCENA2Code = {};
gdjs.ESCENA2Code.GDcorrectoObjects1_1final = [];

gdjs.ESCENA2Code.GDincorrectoObjects1_1final = [];



gdjs.ESCENA2Code.GDmarcadorObjects1= [];
gdjs.ESCENA2Code.GDmarcadorObjects2= [];
gdjs.ESCENA2Code.GDfotoObjects1= [];
gdjs.ESCENA2Code.GDfotoObjects2= [];
gdjs.ESCENA2Code.GDopcioncorrectaObjects1= [];
gdjs.ESCENA2Code.GDopcioncorrectaObjects2= [];
gdjs.ESCENA2Code.GDopcion2Objects1= [];
gdjs.ESCENA2Code.GDopcion2Objects2= [];
gdjs.ESCENA2Code.GDopcion3Objects1= [];
gdjs.ESCENA2Code.GDopcion3Objects2= [];
gdjs.ESCENA2Code.GDcorrectoObjects1= [];
gdjs.ESCENA2Code.GDcorrectoObjects2= [];
gdjs.ESCENA2Code.GDsiguienteObjects1= [];
gdjs.ESCENA2Code.GDsiguienteObjects2= [];
gdjs.ESCENA2Code.GDexplicacionObjects1= [];
gdjs.ESCENA2Code.GDexplicacionObjects2= [];
gdjs.ESCENA2Code.GDflechaObjects1= [];
gdjs.ESCENA2Code.GDflechaObjects2= [];
gdjs.ESCENA2Code.GDincorrectoObjects1= [];
gdjs.ESCENA2Code.GDincorrectoObjects2= [];

gdjs.ESCENA2Code.conditionTrue_0 = {val:false};
gdjs.ESCENA2Code.condition0IsTrue_0 = {val:false};
gdjs.ESCENA2Code.condition1IsTrue_0 = {val:false};
gdjs.ESCENA2Code.condition2IsTrue_0 = {val:false};
gdjs.ESCENA2Code.conditionTrue_1 = {val:false};
gdjs.ESCENA2Code.condition0IsTrue_1 = {val:false};
gdjs.ESCENA2Code.condition1IsTrue_1 = {val:false};
gdjs.ESCENA2Code.condition2IsTrue_1 = {val:false};

gdjs.ESCENA2Code.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.ESCENA2Code.GDmarcadorObjects1.length = 0;
gdjs.ESCENA2Code.GDmarcadorObjects2.length = 0;
gdjs.ESCENA2Code.GDfotoObjects1.length = 0;
gdjs.ESCENA2Code.GDfotoObjects2.length = 0;
gdjs.ESCENA2Code.GDopcioncorrectaObjects1.length = 0;
gdjs.ESCENA2Code.GDopcioncorrectaObjects2.length = 0;
gdjs.ESCENA2Code.GDopcion2Objects1.length = 0;
gdjs.ESCENA2Code.GDopcion2Objects2.length = 0;
gdjs.ESCENA2Code.GDopcion3Objects1.length = 0;
gdjs.ESCENA2Code.GDopcion3Objects2.length = 0;
gdjs.ESCENA2Code.GDcorrectoObjects1.length = 0;
gdjs.ESCENA2Code.GDcorrectoObjects2.length = 0;
gdjs.ESCENA2Code.GDsiguienteObjects1.length = 0;
gdjs.ESCENA2Code.GDsiguienteObjects2.length = 0;
gdjs.ESCENA2Code.GDexplicacionObjects1.length = 0;
gdjs.ESCENA2Code.GDexplicacionObjects2.length = 0;
gdjs.ESCENA2Code.GDflechaObjects1.length = 0;
gdjs.ESCENA2Code.GDflechaObjects2.length = 0;
gdjs.ESCENA2Code.GDincorrectoObjects1.length = 0;
gdjs.ESCENA2Code.GDincorrectoObjects2.length = 0;


{

gdjs.ESCENA2Code.GDflechaObjects1.createFrom(runtimeScene.getObjects("flecha"));

gdjs.ESCENA2Code.condition0IsTrue_0.val = false;
{
{gdjs.ESCENA2Code.conditionTrue_1 = gdjs.ESCENA2Code.condition0IsTrue_0;
gdjs.ESCENA2Code.conditionTrue_1.val = context.triggerOnce(75054732);
}
}if (gdjs.ESCENA2Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.ESCENA2Code.GDflechaObjects1.length ;i < len;++i) {
    gdjs.ESCENA2Code.GDflechaObjects1[i].hide();
}
}}

}


{


gdjs.ESCENA2Code.condition0IsTrue_0.val = false;
{
gdjs.ESCENA2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "scoretimer");
}if (gdjs.ESCENA2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scoretimer");
}
{ //Subevents

{

gdjs.ESCENA2Code.GDopcioncorrectaObjects2.createFrom(runtimeScene.getObjects("opcioncorrecta"));

gdjs.ESCENA2Code.condition0IsTrue_0.val = false;
gdjs.ESCENA2Code.condition1IsTrue_0.val = false;
{
gdjs.ESCENA2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ESCENA2Code.condition0IsTrue_0.val ) {
{
gdjs.ESCENA2Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("opcioncorrecta", gdjs.ESCENA2Code.GDopcioncorrectaObjects2).getEventsObjectsMap(), runtimeScene, true, false);
}}
if (gdjs.ESCENA2Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


{

gdjs.ESCENA2Code.GDmarcadorObjects2.createFrom(runtimeScene.getObjects("marcador"));

{for(var i = 0, len = gdjs.ESCENA2Code.GDmarcadorObjects2.length ;i < len;++i) {
    gdjs.ESCENA2Code.GDmarcadorObjects2[i].setString("Puntuación " +gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}
}

} //End of subevents
}

}


{

gdjs.ESCENA2Code.GDopcion2Objects1.createFrom(runtimeScene.getObjects("opcion2"));
gdjs.ESCENA2Code.GDopcion3Objects1.createFrom(runtimeScene.getObjects("opcion3"));
gdjs.ESCENA2Code.GDopcioncorrectaObjects1.createFrom(runtimeScene.getObjects("opcioncorrecta"));
gdjs.ESCENA2Code.GDcorrectoObjects1.length = 0;

gdjs.ESCENA2Code.condition0IsTrue_0.val = false;
gdjs.ESCENA2Code.condition1IsTrue_0.val = false;
{
gdjs.ESCENA2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("opcioncorrecta", gdjs.ESCENA2Code.GDopcioncorrectaObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if ( gdjs.ESCENA2Code.condition0IsTrue_0.val ) {
{
gdjs.ESCENA2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.ESCENA2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("correcto", gdjs.ESCENA2Code.GDcorrectoObjects1).getEventsObjectsMap(), 20, 9, "CAPA TEXTO");
}{for(var i = 0, len = gdjs.ESCENA2Code.GDopcion2Objects1.length ;i < len;++i) {
    gdjs.ESCENA2Code.GDopcion2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.ESCENA2Code.GDopcioncorrectaObjects1.length ;i < len;++i) {
    gdjs.ESCENA2Code.GDopcioncorrectaObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.ESCENA2Code.GDopcion3Objects1.length ;i < len;++i) {
    gdjs.ESCENA2Code.GDopcion3Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.ESCENA2Code.GDopcion2Objects1.createFrom(runtimeScene.getObjects("opcion2"));
gdjs.ESCENA2Code.GDopcion3Objects1.createFrom(runtimeScene.getObjects("opcion3"));
gdjs.ESCENA2Code.GDopcioncorrectaObjects1.createFrom(runtimeScene.getObjects("opcioncorrecta"));
gdjs.ESCENA2Code.GDincorrectoObjects1.length = 0;

gdjs.ESCENA2Code.condition0IsTrue_0.val = false;
gdjs.ESCENA2Code.condition1IsTrue_0.val = false;
{
gdjs.ESCENA2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("opcion2", gdjs.ESCENA2Code.GDopcion2Objects1).getEventsObjectsMap(), runtimeScene, true, false);
}if ( gdjs.ESCENA2Code.condition0IsTrue_0.val ) {
{
gdjs.ESCENA2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.ESCENA2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("incorrecto", gdjs.ESCENA2Code.GDincorrectoObjects1).getEventsObjectsMap(), 20, 9, "CAPA TEXTO");
}{for(var i = 0, len = gdjs.ESCENA2Code.GDopcioncorrectaObjects1.length ;i < len;++i) {
    gdjs.ESCENA2Code.GDopcioncorrectaObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.ESCENA2Code.GDopcion2Objects1.length ;i < len;++i) {
    gdjs.ESCENA2Code.GDopcion2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.ESCENA2Code.GDopcion3Objects1.length ;i < len;++i) {
    gdjs.ESCENA2Code.GDopcion3Objects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents

{

gdjs.ESCENA2Code.GDflechaObjects2.createFrom(runtimeScene.getObjects("flecha"));
gdjs.ESCENA2Code.GDexplicacionObjects2.length = 0;

{for(var i = 0, len = gdjs.ESCENA2Code.GDflechaObjects2.length ;i < len;++i) {
    gdjs.ESCENA2Code.GDflechaObjects2[i].hide(false);
}
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("explicacion", gdjs.ESCENA2Code.GDexplicacionObjects2).getEventsObjectsMap(), 430, 220, "CAPA TEXTO");
}
}

} //End of subevents
}

}


{

gdjs.ESCENA2Code.GDopcion2Objects1.createFrom(runtimeScene.getObjects("opcion2"));
gdjs.ESCENA2Code.GDopcion3Objects1.createFrom(runtimeScene.getObjects("opcion3"));
gdjs.ESCENA2Code.GDopcioncorrectaObjects1.createFrom(runtimeScene.getObjects("opcioncorrecta"));
gdjs.ESCENA2Code.GDincorrectoObjects1.length = 0;

gdjs.ESCENA2Code.condition0IsTrue_0.val = false;
gdjs.ESCENA2Code.condition1IsTrue_0.val = false;
{
gdjs.ESCENA2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("opcion3", gdjs.ESCENA2Code.GDopcion3Objects1).getEventsObjectsMap(), runtimeScene, true, false);
}if ( gdjs.ESCENA2Code.condition0IsTrue_0.val ) {
{
gdjs.ESCENA2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.ESCENA2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("incorrecto", gdjs.ESCENA2Code.GDincorrectoObjects1).getEventsObjectsMap(), 20, 9, "CAPA TEXTO");
}{for(var i = 0, len = gdjs.ESCENA2Code.GDopcion2Objects1.length ;i < len;++i) {
    gdjs.ESCENA2Code.GDopcion2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.ESCENA2Code.GDopcioncorrectaObjects1.length ;i < len;++i) {
    gdjs.ESCENA2Code.GDopcioncorrectaObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.ESCENA2Code.GDopcion3Objects1.length ;i < len;++i) {
    gdjs.ESCENA2Code.GDopcion3Objects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents

{

gdjs.ESCENA2Code.GDflechaObjects2.createFrom(runtimeScene.getObjects("flecha"));
gdjs.ESCENA2Code.GDexplicacionObjects2.length = 0;

{for(var i = 0, len = gdjs.ESCENA2Code.GDflechaObjects2.length ;i < len;++i) {
    gdjs.ESCENA2Code.GDflechaObjects2[i].hide(false);
}
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("explicacion", gdjs.ESCENA2Code.GDexplicacionObjects2).getEventsObjectsMap(), 430, 220, "CAPA TEXTO");
}
}

} //End of subevents
}

}


{

gdjs.ESCENA2Code.GDcorrectoObjects1.length = 0;
gdjs.ESCENA2Code.GDincorrectoObjects1.length = 0;
gdjs.ESCENA2Code.GDsiguienteObjects1.length = 0;

gdjs.ESCENA2Code.condition0IsTrue_0.val = false;
{
{gdjs.ESCENA2Code.conditionTrue_1 = gdjs.ESCENA2Code.condition0IsTrue_0;
gdjs.ESCENA2Code.GDcorrectoObjects1_1final.length = 0;gdjs.ESCENA2Code.GDincorrectoObjects1_1final.length = 0;gdjs.ESCENA2Code.condition0IsTrue_1.val = false;
gdjs.ESCENA2Code.condition1IsTrue_1.val = false;
{
gdjs.ESCENA2Code.GDcorrectoObjects2.createFrom(runtimeScene.getObjects("correcto"));
for(var i = 0, k = 0, l = gdjs.ESCENA2Code.GDcorrectoObjects2.length;i<l;++i) {
    if ( gdjs.ESCENA2Code.GDcorrectoObjects2[i].isVisible() ) {
        gdjs.ESCENA2Code.condition0IsTrue_1.val = true;
        gdjs.ESCENA2Code.GDcorrectoObjects2[k] = gdjs.ESCENA2Code.GDcorrectoObjects2[i];
        ++k;
    }
}
gdjs.ESCENA2Code.GDcorrectoObjects2.length = k;if( gdjs.ESCENA2Code.condition0IsTrue_1.val ) {
    gdjs.ESCENA2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.ESCENA2Code.GDcorrectoObjects2.length;j<jLen;++j) {
        if ( gdjs.ESCENA2Code.GDcorrectoObjects1_1final.indexOf(gdjs.ESCENA2Code.GDcorrectoObjects2[j]) === -1 )
            gdjs.ESCENA2Code.GDcorrectoObjects1_1final.push(gdjs.ESCENA2Code.GDcorrectoObjects2[j]);
    }
}
}
{
gdjs.ESCENA2Code.GDincorrectoObjects2.createFrom(runtimeScene.getObjects("incorrecto"));
for(var i = 0, k = 0, l = gdjs.ESCENA2Code.GDincorrectoObjects2.length;i<l;++i) {
    if ( gdjs.ESCENA2Code.GDincorrectoObjects2[i].isVisible() ) {
        gdjs.ESCENA2Code.condition1IsTrue_1.val = true;
        gdjs.ESCENA2Code.GDincorrectoObjects2[k] = gdjs.ESCENA2Code.GDincorrectoObjects2[i];
        ++k;
    }
}
gdjs.ESCENA2Code.GDincorrectoObjects2.length = k;if( gdjs.ESCENA2Code.condition1IsTrue_1.val ) {
    gdjs.ESCENA2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.ESCENA2Code.GDincorrectoObjects2.length;j<jLen;++j) {
        if ( gdjs.ESCENA2Code.GDincorrectoObjects1_1final.indexOf(gdjs.ESCENA2Code.GDincorrectoObjects2[j]) === -1 )
            gdjs.ESCENA2Code.GDincorrectoObjects1_1final.push(gdjs.ESCENA2Code.GDincorrectoObjects2[j]);
    }
}
}
{
gdjs.ESCENA2Code.GDcorrectoObjects1.createFrom(gdjs.ESCENA2Code.GDcorrectoObjects1_1final);
gdjs.ESCENA2Code.GDincorrectoObjects1.createFrom(gdjs.ESCENA2Code.GDincorrectoObjects1_1final);
}
}
}if (gdjs.ESCENA2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("siguiente", gdjs.ESCENA2Code.GDsiguienteObjects1).getEventsObjectsMap(), 450, 470, "CAPA TEXTO");
}}

}


{

gdjs.ESCENA2Code.GDsiguienteObjects1.createFrom(runtimeScene.getObjects("siguiente"));

gdjs.ESCENA2Code.condition0IsTrue_0.val = false;
gdjs.ESCENA2Code.condition1IsTrue_0.val = false;
{
gdjs.ESCENA2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("siguiente", gdjs.ESCENA2Code.GDsiguienteObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if ( gdjs.ESCENA2Code.condition0IsTrue_0.val ) {
{
gdjs.ESCENA2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.ESCENA2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "final");
}}

}

return;
}
gdjs['ESCENA2Code']= gdjs.ESCENA2Code;
