doc = app.documents[0];
doc.viewPreferences.rulerOrigin = RulerOrigin.SPREAD_ORIGIN;
dMin = Math.min(doc.documentPreferences.pageWidth, doc.documentPreferences.pageHeight);
devid = 10;
obj = doc.ovals.add({geometricBounds:[0, 0, dMin/devid, dMin/devid], fillColor:"Cyan"});
dobj = [];
for(i = 0; i < 10; i++){
	d = obj.duplicate(undefined, [dMin*Math.random(),dMin*Math.random()]);
	dobj.push(d);
}
cobj = obj.excludeOverlapPath (dobj); //パスファインダー中マド
//addpath
 
 
robj = cobj.releaseCompoundPath();
for(j = 0, L =  robj.length; j < L ;j++){
	try{
		robj[j].move(undefined, [
			-robj[j].geometricBounds[1],
			doc.documentPreferences.pageHeight-robj[j].geometricBounds[2]
			]);
	}catch(e){robj[j].remove();}
}
robj1 = robj.shift();
erobj = robj1.excludeOverlapPath (robj);//パスファインダー中マド
//erobj = robj1.addPath (robj);//パスファインダー追加
