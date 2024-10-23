const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.DragnDrop,
		C3.Plugins.Arr,
		C3.Plugins.Audio,
		C3.Plugins.Browser,
		C3.Plugins.Touch,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Exps.ImagePointX,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.Sprite.Exps.ImagePointY,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.System.Cnds.While,
		C3.Plugins.Arr.Cnds.CompareSize,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Arr.Cnds.Contains,
		C3.Plugins.Arr.Acts.Push,
		C3.Plugins.Arr.Acts.Shuffle,
		C3.Behaviors.DragnDrop.Cnds.OnDragStart,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Behaviors.DragnDrop.Cnds.OnDrop,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Behaviors.DragnDrop.Acts.SetEnabled,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Exps.AnimationFrame,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.System.Cnds.LayerVisible,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Arr.Acts.SetSize
	];
};
self.C3_JsPropNameTable = [
	{oyunBg: 0},
	{posX: 0},
	{posY: 0},
	{DragDrop: 0},
	{esyalar: 0},
	{Sprite: 0},
	{ansy: 0},
	{type: 0},
	{doluMu: 0},
	{cevapAlani: 0},
	{esyaArray: 0},
	{result: 0},
	{Audio: 0},
	{Browser: 0},
	{dikdortgen: 0},
	{kare: 0},
	{daire: 0},
	{ucgen: 0},
	{tebrklrbeyaz: 0},
	{oyntammldnbeyaz: 0},
	{replayBtn: 0},
	{Touch: 0},
	{randomSayi: 0},
	{EsyaSayi: 0}
];

self.InstanceType = {
	oyunBg: class extends self.ISpriteInstance {},
	esyalar: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	ansy: class extends self.ISpriteInstance {},
	cevapAlani: class extends self.ISpriteInstance {},
	esyaArray: class extends self.IArrayInstance {},
	result: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	dikdortgen: class extends self.IArrayInstance {},
	kare: class extends self.IArrayInstance {},
	daire: class extends self.IArrayInstance {},
	ucgen: class extends self.IArrayInstance {},
	tebrklrbeyaz: class extends self.ISpriteInstance {},
	oyntammldnbeyaz: class extends self.ISpriteInstance {},
	replayBtn: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {}
}