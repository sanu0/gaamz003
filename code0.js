gdjs.menuCode = {};
gdjs.menuCode.GDbuttonObjects1= [];
gdjs.menuCode.GDbuttonObjects2= [];
gdjs.menuCode.GDtitleObjects1= [];
gdjs.menuCode.GDtitleObjects2= [];
gdjs.menuCode.GDbackgroundmenuObjects1= [];
gdjs.menuCode.GDbackgroundmenuObjects2= [];

gdjs.menuCode.conditionTrue_0 = {val:false};
gdjs.menuCode.condition0IsTrue_0 = {val:false};
gdjs.menuCode.condition1IsTrue_0 = {val:false};
gdjs.menuCode.condition2IsTrue_0 = {val:false};
gdjs.menuCode.conditionTrue_1 = {val:false};
gdjs.menuCode.condition0IsTrue_1 = {val:false};
gdjs.menuCode.condition1IsTrue_1 = {val:false};
gdjs.menuCode.condition2IsTrue_1 = {val:false};


gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.menuCode.GDbuttonObjects1});gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.menuCode.GDbuttonObjects1});gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.menuCode.GDbuttonObjects1});gdjs.menuCode.eventsList0x75a48c = function(runtimeScene) {

{

gdjs.menuCode.GDbuttonObjects1.createFrom(runtimeScene.getObjects("button"));

gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDbuttonObjects1Objects, runtimeScene, true, false);
}if (gdjs.menuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "asteroids", false);
}}

}


}; //End of gdjs.menuCode.eventsList0x75a48c
gdjs.menuCode.eventsList0x5b7028 = function(runtimeScene) {

{



}


{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.menuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}}

}


{



}


{

gdjs.menuCode.GDbuttonObjects1.createFrom(runtimeScene.getObjects("button"));

gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDbuttonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
{gdjs.menuCode.conditionTrue_1 = gdjs.menuCode.condition1IsTrue_0;
gdjs.menuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8329308);
}
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.menuCode.GDbuttonObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDbuttonObjects1[i].setColor("0;255;128");
}
}}

}


{

gdjs.menuCode.GDbuttonObjects1.createFrom(runtimeScene.getObjects("button"));

gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDbuttonObjects1Objects, runtimeScene, true, true);
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
{gdjs.menuCode.conditionTrue_1 = gdjs.menuCode.condition1IsTrue_0;
gdjs.menuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7709124);
}
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.menuCode.GDbuttonObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDbuttonObjects1[i].setColor("255;255;255");
}
}}

}


{



}


{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.menuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.menuCode.eventsList0x75a48c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.menuCode.eventsList0x5b7028


gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDbuttonObjects1.length = 0;
gdjs.menuCode.GDbuttonObjects2.length = 0;
gdjs.menuCode.GDtitleObjects1.length = 0;
gdjs.menuCode.GDtitleObjects2.length = 0;
gdjs.menuCode.GDbackgroundmenuObjects1.length = 0;
gdjs.menuCode.GDbackgroundmenuObjects2.length = 0;

gdjs.menuCode.eventsList0x5b7028(runtimeScene);
return;

}

gdjs['menuCode'] = gdjs.menuCode;
