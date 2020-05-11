gdjs.game_95overCode = {};
gdjs.game_95overCode.GDgameoverObjects1= [];
gdjs.game_95overCode.GDgameoverObjects2= [];
gdjs.game_95overCode.GDrestartObjects1= [];
gdjs.game_95overCode.GDrestartObjects2= [];
gdjs.game_95overCode.GDbackgroundgameoverObjects1= [];
gdjs.game_95overCode.GDbackgroundgameoverObjects2= [];

gdjs.game_95overCode.conditionTrue_0 = {val:false};
gdjs.game_95overCode.condition0IsTrue_0 = {val:false};
gdjs.game_95overCode.condition1IsTrue_0 = {val:false};
gdjs.game_95overCode.condition2IsTrue_0 = {val:false};
gdjs.game_95overCode.conditionTrue_1 = {val:false};
gdjs.game_95overCode.condition0IsTrue_1 = {val:false};
gdjs.game_95overCode.condition1IsTrue_1 = {val:false};
gdjs.game_95overCode.condition2IsTrue_1 = {val:false};


gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs.game_95overCode.GDrestartObjects1});gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs.game_95overCode.GDrestartObjects1});gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs.game_95overCode.GDrestartObjects1});gdjs.game_95overCode.eventsList0x5b7028 = function(runtimeScene) {

{



}


{


gdjs.game_95overCode.condition0IsTrue_0.val = false;
{
gdjs.game_95overCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.game_95overCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}}

}


{



}


{

gdjs.game_95overCode.GDrestartObjects1.createFrom(runtimeScene.getObjects("restart"));

gdjs.game_95overCode.condition0IsTrue_0.val = false;
gdjs.game_95overCode.condition1IsTrue_0.val = false;
{
gdjs.game_95overCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.game_95overCode.condition0IsTrue_0.val ) {
{
gdjs.game_95overCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDrestartObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.game_95overCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "asteroids", false);
}}

}


{



}


{

gdjs.game_95overCode.GDrestartObjects1.createFrom(runtimeScene.getObjects("restart"));

gdjs.game_95overCode.condition0IsTrue_0.val = false;
gdjs.game_95overCode.condition1IsTrue_0.val = false;
{
gdjs.game_95overCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDrestartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.game_95overCode.condition0IsTrue_0.val ) {
{
{gdjs.game_95overCode.conditionTrue_1 = gdjs.game_95overCode.condition1IsTrue_0;
gdjs.game_95overCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7526060);
}
}}
if (gdjs.game_95overCode.condition1IsTrue_0.val) {
/* Reuse gdjs.game_95overCode.GDrestartObjects1 */
{for(var i = 0, len = gdjs.game_95overCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.game_95overCode.GDrestartObjects1[i].setColor("0;255;128");
}
}}

}


{

gdjs.game_95overCode.GDrestartObjects1.createFrom(runtimeScene.getObjects("restart"));

gdjs.game_95overCode.condition0IsTrue_0.val = false;
gdjs.game_95overCode.condition1IsTrue_0.val = false;
{
gdjs.game_95overCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDrestartObjects1Objects, runtimeScene, true, true);
}if ( gdjs.game_95overCode.condition0IsTrue_0.val ) {
{
{gdjs.game_95overCode.conditionTrue_1 = gdjs.game_95overCode.condition1IsTrue_0;
gdjs.game_95overCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7526740);
}
}}
if (gdjs.game_95overCode.condition1IsTrue_0.val) {
/* Reuse gdjs.game_95overCode.GDrestartObjects1 */
{for(var i = 0, len = gdjs.game_95overCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.game_95overCode.GDrestartObjects1[i].setColor("255;255;255");
}
}}

}


}; //End of gdjs.game_95overCode.eventsList0x5b7028


gdjs.game_95overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_95overCode.GDgameoverObjects1.length = 0;
gdjs.game_95overCode.GDgameoverObjects2.length = 0;
gdjs.game_95overCode.GDrestartObjects1.length = 0;
gdjs.game_95overCode.GDrestartObjects2.length = 0;
gdjs.game_95overCode.GDbackgroundgameoverObjects1.length = 0;
gdjs.game_95overCode.GDbackgroundgameoverObjects2.length = 0;

gdjs.game_95overCode.eventsList0x5b7028(runtimeScene);
return;

}

gdjs['game_95overCode'] = gdjs.game_95overCode;
