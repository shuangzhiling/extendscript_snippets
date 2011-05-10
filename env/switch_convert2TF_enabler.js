//実行するごとに
//「文字ツールでフレームをテキストフレームに変換」の有効／無効を切り替える。

$.localize = true;

var conv2tf_inactive = {en: "Type Tool Converts Frames to Text Frames", ja: "文字ツールでフレームをテキストフレームに変換できます"};
var conv2tf_active = {en: "Type Tool Doesn't Convert Frames to Text Frames", ja: "文字ツールでフレームをテキストフレームに変換しません"};

if(app.textEditingPreferences.singleClickConvertsFramesToTextFrames == true){
	app.textEditingPreferences.singleClickConvertsFramesToTextFrames = false;
	alert( "invalid\r"+conv2tf_active); 
}
else{	
	app.textEditingPreferences.singleClickConvertsFramesToTextFrames = true;
	alert( "valid\r"+ conv2tf_inactive); 
}