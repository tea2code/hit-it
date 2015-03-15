var MainMenuLayer = cc.Layer.extend({
	
	ctor: function(){
		this._super();
	},
	
	init: function(){
		this._super();

		// Position.
		var winSize = cc.director.getWinSize();
		var pos = cc.p(winSize.width / 2, winSize.height / 2);
		var itemPadding = winSize.height / 10;
		
		// Background.
		var spriteBg = new cc.Sprite(Res.MainMenuBackground);
		spriteBg.setPosition(pos);
		this.addChild(spriteBg);

		// Menu items.
		var playItem = new cc.MenuItemFont(Str.Play, "onPlay", this);
		var quitItem = new cc.MenuItemFont(Str.Quit, "onQuit", this);
		
		// Create menu.
		var menu = new cc.Menu(
		        playItem,
		        quitItem
        );
		menu.alignItemsVerticallyWithPadding(itemPadding);
		menu.setPosition(pos);
		this.addChild(menu);
	},

	onPlay: function(){
		cc.log("MainMenu: onPlay");
	},
	
	onQuit: function(){
		cc.log("MainMenu: onQuit");
	},
});

var MainMenuScene = cc.Scene.extend({
	
	onEnter: function () {
		this._super();
		var layer = new MainMenuLayer();
		layer.init();
		this.addChild(layer);
	}
});
