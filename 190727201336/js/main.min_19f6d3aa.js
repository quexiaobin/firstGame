var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);i.prototype=e.prototype,t.prototype=new i},__awaiter=this&&this.__awaiter||function(t,e,i,o){return new(i||(i=Promise))(function(n,s){function r(t){try{h(o.next(t))}catch(e){s(e)}}function a(t){try{h(o["throw"](t))}catch(e){s(e)}}function h(t){t.done?n(t.value):new i(function(e){e(t.value)}).then(r,a)}h((o=o.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function i(t){return function(e){return o([t,e])}}function o(i){if(n)throw new TypeError("Generator is already executing.");for(;h;)try{if(n=1,s&&(r=s[2&i[0]?"return":i[0]?"throw":"next"])&&!(r=r.call(s,i[1])).done)return r;switch(s=0,r&&(i=[0,r.value]),i[0]){case 0:case 1:r=i;break;case 4:return h.label++,{value:i[1],done:!1};case 5:h.label++,s=i[1],i=[0];continue;case 7:i=h.ops.pop(),h.trys.pop();continue;default:if(r=h.trys,!(r=r.length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){h=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){h.label=i[1];break}if(6===i[0]&&h.label<r[1]){h.label=r[1],r=i;break}if(r&&h.label<r[2]){h.label=r[2],h.ops.push(i);break}r[2]&&h.ops.pop(),h.trys.pop();continue}i=e.call(t,h)}catch(o){i=[6,o],s=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var n,s,r,a,h={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a},UnitBase=function(t){function e(){var e=t.call(this)||this;return e.hp=0,e.maxHp=0,e.moveSpeed=0,e.atkSpeed=0,e.lastTime=0,e.intervalTime=0,e.score=0,e.imgBody=new eui.Image,e.type=0,e.damage=0,e.imgBody.horizontalCenter=0,e.imgBody.verticalCenter=0,e.addChild(e.imgBody),e.addEventListener(egret.Event.ADDED_TO_STAGE,e.onAddToStage,e),e}return __extends(e,t),e.prototype.onAddToStage=function(){this.width=this.imgBody.width,this.height=this.imgBody.height,egret.startTick(this.OnTimer,this)},e.prototype.init=function(){},e.prototype.OnTimer=function(t){if(0==this.lastTime)this.lastTime=t,this.intervalTime=0;else{var e=t-this.lastTime;this.lastTime=t,this.intervalTime+=e,this.intervalTime>=this.atkSpeed&&(this.intervalTime=0,this.fire())}return!1},e.prototype.resetHp=function(t){this.hp=t,this.maxHp=t},e.prototype.fire=function(){},e.prototype.getHpByRoleScore=function(){var t=GameStart.score;return t?t.scoreVal<200?3:t.scoreVal>=200&&t.scoreVal<600?6:10:10},e.prototype.subHp=function(t,e){void 0===e&&(e=!1),this.hp-=t,2==this.type&&GameStart.score.UpdateHp(this.hp),(this.hp<=0||e)&&(2==this.type?GameStart.ChallengeFail():this.parent&&this.destorySelf(!0))},e.prototype.addHp=function(t){this.hp+=t,this.hp=Math.min(this.hp,this.maxHp),GameStart.score&&GameStart.score.UpdateHp(this.hp)},e.prototype.destorySelf=function(t){void 0===t&&(t=!1),this.parent&&(SoundMgr.ins().playBomb(),egret.stopTick(this.OnTimer,this),GameStart.scene.removeEnemy(this.hashCode,this.type,t),GameStart.score.addScore(this.score))},e}(egret.DisplayObjectContainer);__reflect(UnitBase.prototype,"UnitBase");var DropBase=function(t){function e(){var e=t.call(this)||this;return e.moveSpeed=6,e.type=0,e.value=0,e.icon=new eui.Image,e.value=10,e.addChild(e.icon),e.addEventListener(egret.TouchEvent.ADDED_TO_STAGE,e.onAddToStage,e),e}return __extends(e,t),e.prototype.onAddToStage=function(){this.init(),egret.startTick(this.OnTimer,this)},e.prototype.OnTimer=function(){return this.y+=this.moveSpeed,this.y>=Const.screenHeight&&(this.y=0,this.destoryMySelf()),!0},e.prototype.init=function(){this.y=0;var t=Math.floor(Math.random()*Const.screenWidth);t+this.icon.width>=Const.screenWidth&&(t=Const.screenWidth-this.icon.width),this.x=t},e.prototype.destoryMySelf=function(){this.parent&&(egret.stopTick(this.OnTimer,this),GameStart.scene.removeDrop(this.hashCode))},e}(eui.Component);__reflect(DropBase.prototype,"DropBase");var MosterBase=function(t){function e(){var e=t.call(this)||this;return e.ring=new eui.Image,e.lbScore=new eui.Label,e.addChild(e.ring),e.addChild(e.lbScore),e.lbScore.textColor=15266820,e.lbScore.size=30,e.lbScore.textAlign=egret.HorizontalAlign.CENTER,e.addEventListener(egret.Event.ENTER_FRAME,e.onRotation,e),e}return __extends(e,t),e.prototype.onAddToStage=function(){t.prototype.onAddToStage.call(this),this.imgBody.anchorOffsetX=this.imgBody.width>>1,this.imgBody.anchorOffsetY=this.imgBody.height>>1,this.imgBody.x=this.ring.width>>1,this.imgBody.y=this.ring.height>>1,this.lbScore.anchorOffsetX=this.lbScore.width>>1,this.lbScore.anchorOffsetY=this.lbScore.height>>1,this.lbScore.x=this.imgBody.width>>1,this.lbScore.y=this.imgBody.height>>1},e.prototype.onRotation=function(t){this.imgBody.rotation+=3},e}(UnitBase);__reflect(MosterBase.prototype,"MosterBase");var BaseSound=function(){function t(){this.curSound="",this._loadingCache=[]}return t.prototype.getSound=function(t){var e=RES.getRes(t);return e?e:-1!=this._loadingCache.indexOf(t)?null:(this._loadingCache.push(t),void RES.getResAsync(t,this.onResourceLoadComplete,this))},t.prototype.onResourceLoadComplete=function(t,e){var i=this._loadingCache.indexOf(e);-1!=i&&(this._loadingCache.splice(i,1),this.loadedPlay(e))},t.prototype.loadedPlay=function(t){},t.prototype.play=function(){if(""!=this.curSound){var t=this.getSound(this.curSound);t&&this.playSound(t)}},t.prototype.playSound=function(t){this.soundChannel=t.play(0,1),this.soundChannel.volume=this.volume},t}();__reflect(BaseSound.prototype,"BaseSound");var DropBoom=function(t){function e(){var e=t.call(this)||this;return e.type=2,e.icon.source="buff_boom_png",e}return __extends(e,t),e}(DropBase);__reflect(DropBoom.prototype,"DropBoom");var Const=function(){function t(){}return t.screenWidth=720,t.screenHeight=1280,t}();__reflect(Const.prototype,"Const");var ChallengeFailView=function(t){function e(e){var i=t.call(this)||this;return i.scoreVal=0,i.skinName="ChallengeFailSkin",i.scoreVal=e,i.btnRestart.addEventListener(egret.TouchEvent.TOUCH_TAP,i.onTap,i),i.addEventListener(egret.Event.ADDED_TO_STAGE,i.onAddToStage,i),i}return __extends(e,t),e.prototype.onAddToStage=function(){this.score.text=this.scoreVal+""},e.prototype.onTap=function(){this.parent&&(this.parent.removeChild(this),GameStart.init())},e}(eui.Component);__reflect(ChallengeFailView.prototype,"ChallengeFailView");var GameMain=function(t){function e(){var i=t.call(this)||this;return i.skinName="GameMainSkin",i.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP,i.onTap,i),i.addEventListener(egret.Event.ADDED_TO_STAGE,i.onAddToStage,i),e.gameMain=i,i}return __extends(e,t),e.prototype.onAddToStage=function(){this.titleMv.play(0)},e.prototype.onTap=function(t){switch(t.currentTarget){case this.btnStart:GameStart.init()}},e}(eui.Component);__reflect(GameMain.prototype,"GameMain");var GameStart=function(){function t(){}return t.init=function(){this.CreateScene(),this.CreateScore()},t.CreateScene=function(){t.scene=new Scene,GameMain.gameMain.addChild(t.scene)},t.CreateScore=function(){t.score=new Score,GameMain.gameMain.addChild(t.score)},t.ChallengeSuccess=function(){},t.ChallengeFail=function(){GameMain.gameMain.addChild(new ChallengeFailView(t.score.getScore())),t.scene.clean(),GameMain.gameMain.removeChild(t.score),delete t.score},t}();__reflect(GameStart.prototype,"GameStart");var Role=function(t){function e(){var e=t.call(this)||this;return e.mc=new MovieObject,e.hp=100,e.maxHp=100,e.type=2,e.damage=1,e.imgBody.source="aircraft_png",e.x=Const.screenWidth>>1,e.y=(Const.screenHeight>>1)+500,e.atkSpeed=100,e.imgBody.touchEnabled=!0,e.addChild(e.mc),e}return __extends(e,t),e.prototype.onAddToStage=function(){t.prototype.onAddToStage.call(this),this.mc.scaleX=.5,this.mc.scaleY=.5,this.mc.x=this.width>>1,this.mc.y=this.height,this.mc.Play("penhuo_effect",-1),GameStart.scene.enterScene()},e.prototype.OnTimer=function(e){return t.prototype.OnTimer.call(this,e),!1},e.prototype.fire=function(){if(GameStart.score){if(GameStart.score.scoreVal<=200){var t=this.x+(this.width>>1)-12;this.createBullet(t)}else if(GameStart.score.scoreVal>200&&GameStart.score.scoreVal<=600){var t=this.x+(this.width>>1)-47;this.createBullet(t),t=this.x+(this.width>>1)+30,this.createBullet(t)}else if(GameStart.score.scoreVal>600){var t=this.x+(this.width>>1)-12;this.createBullet(t),t=this.x+(this.width>>1)-47,this.createBullet(t),t=this.x+(this.width>>1)+30,this.createBullet(t)}SoundMgr.ins().playShit()}},e.prototype.createBullet=function(t){var e=ObjectPool.pop(Bullet);e.init("aircraftBullet_png",t,this.y,8,2,this.damage),GameStart.scene.addBullet(e,1)},e}(UnitBase);__reflect(Role.prototype,"Role");var Scene=function(t){function e(){var e=t.call(this)||this;return e.enemyCount=0,e.speed=2,e.touchStatus=!1,e.distance=new egret.Point,e.mosterTime=0,e.lastTime=0,e.bossTime=0,e.bossCount=1,e.createBossCount=1,e.dropTime=0,e.dropFullHpTime=0,e.bigBoomTime=0,e.createBoomTime=0,e.isOver=!1,e.enemies={},e.myBullets={},e.enemyBullets={},e.drops={},e.skinName="SceneSkin",e.addEventListener(egret.Event.ADDED_TO_STAGE,e.onAddToStage,e),e}return __extends(e,t),e.prototype.onAddToStage=function(){this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this),egret.startTick(this.OnTimer,this),SoundMgr.ins().playBg(),this.createRole()},e.prototype.createRole=function(){this.role=new Role,GameStart.role=this.role,this.addChild(this.role)},e.prototype.OnTimer=function(t){if(this.sceneMove(),0==this.lastTime)this.lastTime=t,this.mosterTime=0,this.bossTime=0,this.dropTime=0,this.bigBoomTime=0,this.createBoomTime=this.getRandTime(8e3);else{var e=t-this.lastTime;this.mosterTime+=e,this.bossTime+=e,this.dropTime+=e,this.bigBoomTime+=e,this.dropFullHpTime+=e,this.lastTime=t}return this.mosterTime>=1e3&&(this.crateEnemy(),this.mosterTime=0),this.bossTime>=1e4&&(this.createBoss(),this.bossCount<=0&&(this.bossTime=0,this.bossCount=this.createBossCount)),this.dropTime>=5e3&&this.createDropHp(1)&&(this.dropTime=0),this.dropFullHpTime>=2e4&&this.createDropHp(2)&&(this.dropFullHpTime=0),this.bigBoomTime>=this.createBoomTime&&(this.createDropBoom(),this.createBoomTime=this.getRandTime(8e3),this.bigBoomTime=0),this.checkHist(),!1},e.prototype.setbossCount=function(t){this.createBossCount=t},e.prototype.getRandTime=function(t){return t+Math.floor(Math.random()*t)},e.prototype.enterScene=function(){this.role.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.mouseDown,this),this.role.addEventListener(egret.TouchEvent.TOUCH_END,this.mouseUp,this)},e.prototype.mouseDown=function(t){this.touchStatus=!0,this.distance.x=t.stageX-this.role.x,this.distance.y=t.stageY-this.role.y,this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseMove,this)},e.prototype.mouseMove=function(t){if(this.touchStatus){var e=t.stageX-this.distance.x;e=Math.max(0,e),e=Math.min(Const.screenWidth-this.role.width,e);var i=t.stageY-this.distance.y;i=Math.max(0,i),i=Math.min(Const.screenHeight-this.role.height,i),this.role.x=e,this.role.y=i}},e.prototype.mouseUp=function(t){this.touchStatus=!1,this.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseMove,this)},e.prototype.sceneMove=function(){this.img1.y+=this.speed,this.img2.y+=this.speed,this.img1.y>=Const.screenHeight&&(this.img1.y=-Const.screenHeight),this.img2.y>=Const.screenHeight&&(this.img2.y=-Const.screenHeight)},e.prototype.createDropBoom=function(){var t=ObjectPool.pop(DropBoom);t.init(),this.addChild(t),this.drops[t.hashCode]=t},e.prototype.createDropHp=function(t){if(Math.floor(100*Math.random())>=50){var e=void 0;return e=1==t?ObjectPool.pop(DropHp):ObjectPool.pop(DropFullHp),e.init(),this.addChild(e),this.drops[e.hashCode]=e,!0}return!1},e.prototype.crateEnemy=function(){if(!(this.enemyCount>=10)){var t=ObjectPool.pop(Moster);t.init(),this.addChild(t),this.enemyCount+=1,this.enemies[t.hashCode]=t}},e.prototype.createBoss=function(){if(!(this.bossCount<=0)){var t=ObjectPool.pop(Boss,this.bossCount);t.init(),this.addChild(t),this.enemies[t.hashCode]=t,this.bossCount--}},e.prototype.removeEnemy=function(t,e,i){void 0===e&&(e=0),void 0===i&&(i=!1),e||this.enemyCount--;var o=this.enemies[t];o&&(i&&this.playDieMovie(o),this.removeChild(this.enemies[t]),ObjectPool.push(this.enemies[t]),delete this.enemies[t])},e.prototype.playDieMovie=function(t){var e=new MovieObject;this.addChild(e),e.Play("boom"),e.x=t.x+(t.width>>1),e.y=t.y+(t.height>>1)},e.prototype.addBullet=function(t,e){this.addChild(t),1==e?this.myBullets[t.hashCode]=t:this.enemyBullets[t.hashCode]=t},e.prototype.removeBullet=function(t,e){1==t?this.myBullets[e]&&(this.removeChild(this.myBullets[e]),ObjectPool.push(this.myBullets[e]),delete this.myBullets[e]):this.enemyBullets[e]&&(this.removeChild(this.enemyBullets[e]),ObjectPool.push(this.enemyBullets[e]),delete this.enemyBullets[e])},e.prototype.removeDrop=function(t){this.drops[t]&&(this.removeChild(this.drops[t]),ObjectPool.push(this.drops[t]),delete this.drops[t])},e.prototype.checkHist=function(){if(1!=this.isOver){for(var t in this.myBullets){var e=this.myBullets[t];for(var i in this.enemies){var o=this.enemies[i];GameUtil.histTest(e,o)&&(o.subHp(e.damage),e.destoryMySelf(1))}}for(var t in this.enemyBullets){var n=this.enemyBullets[t];GameUtil.histTest(n,this.role)&&(this.role.subHp(n.damage),n.destoryMySelf(2))}for(var t in this.enemies){var s=this.enemies[t];GameUtil.histTest(s,this.role)&&(this.role.subHp(s.damage),s.destorySelf(!0))}for(var t in this.drops){var r=this.drops[t];GameUtil.histTest(r,this.role)&&(1==r.type?this.role.addHp(r.value):2==r.type?this.cleanEnemy():3==r.type&&this.role.addHp(100),r.destoryMySelf())}}},e.prototype.cleanEnemy=function(){for(var t in this.enemies){var e=this.enemies[t];e.subHp(0,!0)}for(var t in this.enemyBullets){var i=this.enemyBullets[t];i.destoryMySelf(2)}GameUtil.shakeIt(this,50,35,8)},e.prototype.clean=function(){this.isOver=!0,this.role.destorySelf(),this.enemyCount=0;for(var t in this.enemies){var e=this.enemies[t];e.destorySelf()}for(var t in this.enemyBullets){var i=this.enemyBullets[t];i.destoryMySelf(2)}for(var t in this.myBullets){var i=this.myBullets[t];i.destoryMySelf(1)}this.parent&&(egret.stopTick(this.OnTimer,this),this.parent.removeChild(this)),this.enemies={},this.enemyBullets={},this.myBullets={}},e}(eui.Component);__reflect(Scene.prototype,"Scene");var Score=function(t){function e(){var e=t.call(this)||this;return e.scoreVal=0,e.skinName="ScoreSkin",e.addEventListener(egret.Event.ADDED_TO_STAGE,e.onAddToStage,e),e}return __extends(e,t),e.prototype.onAddToStage=function(){this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this),this.UpdateHp(GameStart.role.hp)},e.prototype.addScore=function(t){this.scoreVal+=t,this.scoreVal<200&&GameStart.scene.setbossCount(1),this.scoreVal>=600&&this.scoreVal<2e3?GameStart.scene.setbossCount(2):this.scoreVal>=3e3&&GameStart.scene.setbossCount(3),this.score.text=this.scoreVal+""},e.prototype.getScore=function(){return this.scoreVal},e.prototype.resetData=function(){this.score.text="0"},e.prototype.reSetSorce=function(){this.scoreVal=0},e.prototype.UpdateHp=function(t){this.hp.text="HP "+t},e}(eui.Component);__reflect(Score.prototype,"Score");var Bullet=function(t){function e(){var e=t.call(this)||this;return e.img=new eui.Image,e.speed=0,e.dir=0,e.damage=0,e.addChild(e.img),e.addEventListener(egret.Event.ADDED_TO_STAGE,e.onAddToStage,e),e}return __extends(e,t),e.prototype.onAddToStage=function(){egret.startTick(this.OnTimer,this)},e.prototype.init=function(t,e,i,o,n,s){void 0===o&&(o=8),void 0===n&&(n=1),void 0===s&&(s=1),this.x=e,this.y=i,this.speed=o,this.dir=n,this.img.source=t,this.damage=s},e.prototype.OnTimer=function(){return 1==this.dir?(this.y+=this.speed,this.y>=Const.screenHeight&&this.destoryMySelf(2)):2==this.dir&&(this.y-=this.speed,this.y<=0&&this.destoryMySelf(1)),!0},e.prototype.destoryMySelf=function(t){this.parent&&(egret.stopTick(this.OnTimer,this),GameStart.scene.removeBullet(t,this.hashCode))},e}(eui.Component);__reflect(Bullet.prototype,"Bullet");var AssetAdapter=function(){function t(){}return t.prototype.getAsset=function(t,e,i){function o(o){e.call(i,o,t)}if(RES.hasRes(t)){var n=RES.getRes(t);n?o(n):RES.getResAsync(t,o,this)}else RES.getResByUrl(t,o,this,RES.ResourceItem.TYPE_IMAGE)},t}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var DropFullHp=function(t){function e(){var e=t.call(this)||this;return e.type=3,e.icon.source="full_hp_png",e}return __extends(e,t),e}(DropBase);__reflect(DropFullHp.prototype,"DropFullHp");var DropHp=function(t){function e(){var e=t.call(this)||this;return e.type=1,e.icon.source="buff_blood_png",e}return __extends(e,t),e}(DropBase);__reflect(DropHp.prototype,"DropHp");var Boss=function(t){function e(){var e=t.call(this)||this;return e.moveDir=0,e.chilun=new eui.Image,e.lastBossDir=0,e.imgBody.source="boss_2_png",e.ring.source="boss_3_png",e.moveSpeed=4,e.atkSpeed=500,e.score=100,e.damage=5,e.type=1,e}return __extends(e,t),e.prototype.onRotation=function(t){this.imgBody.rotation+=5},e.prototype.onAddToStage=function(){t.prototype.onAddToStage.call(this),this.init()},e.prototype.init=function(){this.initHp(),this.y=0;var t=Math.floor(Math.random()*Const.screenWidth);t+this.imgBody.width>=Const.screenWidth&&(t=Const.screenWidth-this.imgBody.width),this.x=t,this.moveDir=Math.floor(2*Math.random()),this.moveDir==this.lastBossDir&&(this.moveDir=0==this.moveDir?1:0),this.lastBossDir=this.moveDir},e.prototype.initHp=function(){var t=this.getHpByRoleScore();t=5*(t+Math.floor(Math.random()*t)),this.resetHp(t),this.lbScore.text=""+t,this.score=t},e.prototype.OnTimer=function(e){return this.y+=this.moveSpeed,this.y>=Const.screenHeight&&this.parent&&GameStart.scene.removeEnemy(this.hashCode,this.type),0==this.moveDir&&this.x+this.imgBody.width<=Const.screenWidth?(this.x+=this.moveSpeed,this.x+this.imgBody.width>=Const.screenWidth&&(this.moveDir=1)):1==this.moveDir&&(this.x-=this.moveSpeed,this.x<=0&&(this.moveDir=0)),t.prototype.OnTimer.call(this,e),!1},e.prototype.fire=function(){var t=this.x+(this.width>>1)-15,e=ObjectPool.pop(Bullet);e.init("bossBullet_png",t,this.y+this.height,8,1,this.damage),GameStart.scene.addBullet(e,2)},e.prototype.subHp=function(e,i){void 0===i&&(i=!1),t.prototype.subHp.call(this,e,i),this.lbScore.text=this.hp+""},e}(MosterBase);__reflect(Boss.prototype,"Boss");var Moster=function(t){function e(){var e=t.call(this)||this;return e.moveSpeed=5,e.damage=5,e.atkSpeed=1e3,e}return __extends(e,t),e.prototype.onAddToStage=function(){this.imgBody.source="aircraft_small_png",this.ring.source="ring_1_png",t.prototype.onAddToStage.call(this),this.init()},e.prototype.init=function(){this.initHp(),this.y=0;var t=Math.floor(Math.random()*Const.screenWidth);t+this.imgBody.width>=Const.screenWidth&&(t=Const.screenWidth-this.imgBody.width),this.x=t},e.prototype.OnTimer=function(e){if(this.y+=this.moveSpeed,this.y>=Const.screenHeight){this.initHp(),this.y=0;var i=Math.floor(Math.random()*Const.screenWidth);i+this.imgBody.width>=Const.screenWidth&&(i=Const.screenWidth-this.imgBody.width),this.x=i}return t.prototype.OnTimer.call(this,e),!1},e.prototype.initHp=function(){var t=this.getHpByRoleScore();t+=Math.floor(Math.random()*t),this.resetHp(t),this.lbScore.text=""+t,this.score=t},e.prototype.fire=function(){var t=this.x+(this.width>>1)-15,e=ObjectPool.pop(Bullet);e.init("enemyBullet_png",t,this.y+this.height,8,1,this.damage),GameStart.scene.addBullet(e,2)},e.prototype.subHp=function(e,i){void 0===i&&(i=!1),t.prototype.subHp.call(this,e,i),this.lbScore.text=this.hp+""},e}(MosterBase);__reflect(Moster.prototype,"Moster");var Main=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(t){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var e=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",e),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return[4,this.loadResource()];case 1:return i.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return t=i.sent(),[4,platform.login()];case 3:return i.sent(),[4,platform.getUserInfo()];case 4:return e=i.sent(),console.log(e),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return i.trys.push([0,4,,5]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return i.sent(),[4,this.loadTheme()];case 2:return i.sent(),[4,RES.loadGroup("preload",0,t)];case 3:return i.sent(),this.stage.removeChild(t),[3,5];case 4:return e=i.sent(),console.error(e),[3,5];case 5:return[2]}})})},e.prototype.loadTheme=function(){var t=this;return new Promise(function(e,i){var o=new eui.Theme("resource/default.thm.json",t.stage);o.addEventListener(eui.UIEvent.COMPLETE,function(){e()},t)})},e.prototype.createGameScene=function(){this.stage.addChild(new GameMain)},e}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t.prototype.share=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t.prototype.init=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var MovieObject=function(t){function e(){var e=t.call(this)||this;return e.mcFactory=new egret.MovieClipDataFactory,e.playCount=0,e.mvTexture=null,e.mvJson=null,e.addEventListener(egret.Event.COMPLETE,e.playComp,e),e}return __extends(e,t),e.prototype.getImageFile=function(){return this.frameName+"_png"},e.prototype.getJsonFile=function(){return this.frameName+"_json"},e.prototype.GetPreloadImg=function(){return"entity_load_movie_png"},e.prototype.GetPreloadJson=function(){return"entity_load_movie_json"},e.prototype.Play=function(t,e){if(void 0===e&&(e=1),t){if(this.frameName=t,this.playCount=e,this.frameName==this.curFrameName)return void this._Play();this.CleanCache(),this.mvTexture=RES.getRes(this.getImageFile()),this.mvJson=RES.getRes(this.getJsonFile()),null!=this.mvTexture&&null!=this.mvJson?this.OnCreateBody(this.mvJson,this.mvTexture):(this.mvTexture=RES.getRes(this.GetPreloadImg()),this.mvJson=RES.getRes(this.GetPreloadJson()),this.OnCreateBody(this.mvJson,this.mvTexture),RES.getResAsync(this.getImageFile(),this.FinishLoadedTexture,this))}},e.prototype.FinishLoadedTexture=function(t,e){var i=this;this.getImageFile()==e&&RES.getResAsync(this.getJsonFile(),function(e,o){i.getJsonFile()==o&&(i.frameName=i.curFrameName,i.OnCreateBody(e,t))},this)},e.prototype.OnCreateBody=function(t,e){this.mvJson=t,this.mvTexture=e,this.mvTexture&&this.mvJson&&(this.visible=!0,this.mcFactory.mcDataSet=this.mvJson,this.mcFactory.texture=this.mvTexture,this._Play())},e.prototype._Play=function(){this.movieClipData=this.mcFactory.generateMovieClipData(this.frameName),this.movieClipData&&this.play(this.playCount)},e.prototype.CleanCache=function(){this.curFrameName=null,this.visible=!1,this.stop(),this.mcFactory.mcDataSet=null,this.mcFactory.texture=null,this.mcFactory.clearCache()},e.prototype.playComp=function(){this.parent&&this.parent.removeChild(this)},e.prototype.DoDispose=function(){this.CleanCache()},e}(egret.MovieClip);__reflect(MovieObject.prototype,"MovieObject");var ThemeAdapter=function(){function t(){}return t.prototype.getTheme=function(t,e,i,o){function n(t){e.call(o,t)}function s(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,s,null),i.call(o))}var r=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){e.call(o,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(t,i){window.JSONParseClass.setData(t),egret.callLater(function(){e.call(o,generateEUI2)},r)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(t.indexOf(".exml")>-1){var a=t.split("/");a.pop();var h=a.join("/")+"_EUI.json";generateJSON.paths[t]?egret.callLater(function(){e.call(o,generateJSON.paths[t])},this):RES.getResByUrl(h,function(i){window.JSONParseClass.setData(i),egret.callLater(function(){e.call(o,generateJSON.paths[t])},r)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){e.call(o,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,s,null),RES.getResByUrl(t,n,this,RES.ResourceItem.TYPE_TEXT)},t}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var SoundBg=function(t){function e(){var e=t.call(this)||this;return e.curSound="background_mp3",e.volume=.5,e}return __extends(e,t),e.prototype.playSound=function(t){this.soundChannel=t.play(),this.soundChannel.volume=this.volume},e.prototype.loadedPlay=function(t){this.playSound(RES.getRes(t))},e}(BaseSound);__reflect(SoundBg.prototype,"SoundBg");var SoundBomb=function(t){function e(){var e=t.call(this)||this;return e.curSound="bigplane_bomb_mp3",e.volume=.5,e}return __extends(e,t),e.prototype.loadedPlay=function(t){this.playSound(RES.getRes(t))},e}(BaseSound);__reflect(SoundBomb.prototype,"SoundBomb");var SoundBullet=function(t){function e(){var e=t.call(this)||this;return e.curSound="bullet_mp3",e.volume=.5,e}return __extends(e,t),e.prototype.loadedPlay=function(t){this.playSound(RES.getRes(t))},e}(BaseSound);__reflect(SoundBullet.prototype,"SoundBullet");var SoundMgr=function(){function t(){this.bg=new SoundBg,this.shit=new SoundBullet,this.bomb=new SoundBomb}return t.ins=function(){return this.instance||(this.instance=new t),this.instance},t.prototype.playBg=function(){this.bg.play()},t.prototype.playShit=function(){this.shit.play()},t.prototype.playBomb=function(){this.bomb.play()},t}();__reflect(SoundMgr.prototype,"SoundMgr");var GameUtil=function(){function t(){}return t.histTest=function(t,e){var i=t.getBounds(),o=i.width,n=i.height,s=e.getBounds(),r=s.width,a=s.height;return e.x+r<t.x||t.x+o<e.x||e.y+a<t.y||t.y+n<e.y?!1:!0},t.getUniqueId=function(){return t.uniqueId++},t.shakeIt=function(e,i,o,n,s){if(void 0===n&&(n=1),void 0===s&&(s=null),null==s&&(s=t.EMPTY_FUNC),e&&e.$stage&&n>=1&&s()){var r=t.shakingList[e.hashCode];if(!r){t.shakingList[e.hashCode]=!0;var a=[{anchorOffsetX:0,anchorOffsetY:-i},{anchorOffsetX:-i,anchorOffsetY:0},{anchorOffsetX:i,anchorOffsetY:0},{anchorOffsetX:0,anchorOffsetY:i},{anchorOffsetX:0,anchorOffsetY:0}],h=o/5;egret.Tween.get(e).to(a[0],h).to(a[1],h).to(a[2],h).to(a[3],h).to(a[4],h).call(function(){delete t.shakingList[e.hashCode],t.shakeIt(e,i,o,--n)},this)}}},t.uniqueId=0,t.EMPTY_FUNC=function(){return!0},t.shakingList={},t}();__reflect(GameUtil.prototype,"GameUtil");var ObjectPool=function(){function t(){}return t.pop=function(e){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];var n=egret.getQualifiedClassName(e);t.content[n]||(t.content[n]=[]);var s=t.content[n];if(s.length){var r=s.pop();return r}var a=i.length,r=void 0;return 0==a?r=new e:1==a?r=new e(i[0]):2==a?r=new e(i[0],i[1]):3==a?r=new e(i[0],i[1],i[2]):4==a?r=new e(i[0],i[1],i[2],i[3]):5==a&&(r=new e(i[0],i[1],i[2],i[3],i[4])),r.ObjectPoolKey=n,r},t.push=function(e){if(null==e)return!1;var i=e.ObjectPoolKey;return!t.content[i]||t.content[i].indexOf(e)>-1?!1:(t.content[i].push(e),!0)},t.content={},t}();__reflect(ObjectPool.prototype,"ObjectPool");