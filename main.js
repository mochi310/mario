let vcan = document.createElement("canvas");
let vcon = vcan.getContext("2d");

let can = document.getElementById("can");
let con = can.getContext("2d");

vcan.width  = SCREEN_SIZE_W;
vcan.height = SCREEN_SIZE_H;

can.width  = SCREEN_SIZE_W*3;
can.height = SCREEN_SIZE_H*3;

con.mozimageSmoothingEnabled    = false;
con.msimageSmoothingEnabled     = false;
con.webkitimageSmoothingEnabled = false;
con.imageSmoothingEnabled       = false;


//フレームレート維持
let frameCount = 0;
let statTime;

let chImg = new Image();
chImg.src = "sprite.png";
//chImg.onload = draw;

//キーボード
let keyb={};

//おじさんを作る
// let ojisan = new Ojisan(100,100);
// let ojisan2 = new Ojisan(100,10);

// //フィールドを作る
// let field = new Field();
// //前もって処理する数が分からないから配列
// let block = [];

//更新処理
function update()
{
	// field.update();
	// for(let i = block.length-1; i >= 0 ; i--){
	// 	block[i].update();
	// 	if(block[i].kill)block.splice(i, 1);
	// }
	// ojisan.update();
	// ojisan2.update();
}

//スプライトの描画
// function drawSprite(snum,x,y)
function drawSprite()
{
	// let sx = (snum&15)<<4;
	// //(snum%16) * 16
	// let sy = (snum>>4)<<4;
	// //(snum/16) * 16

	// vcon.drawImage(chImg,0,0,16,32, 0,0,16,32);
}

//描画処理
let a = 0;
function draw()
{
	//画面を水色でクリア
	vcon.fillStyle="#66AAFF";
	// vcon.fillRect(0,0,SCREEN_SIZE_W,SCREEN_SIZE_H);
	if(keyb.Right){
		a++;
		vcon.drawImage(chImg,0,0,16,32, a,a,16,32);
	}
	vcon.drawImage(chImg,0,0,16,32, 0,0,16,32);
	//マップを表示
	// field.draw();

	// for(let i = 0; i < block.length; i++){
	// 	block[i].draw();
	// }
	// //おじさんを表示
	// ojisan.draw();
	// ojisan2.draw();



	//デバッグ情報を表示
	vcon.font="24px 'Impact'";
	vcon.fillStyle="white";
	// vcon.fillText("FRAME:"+frameCount,10,128);


	//仮想画面から実画面へ拡大転送
	con.drawImage(vcan,0,0,SCREEN_SIZE_W,SCREEN_SIZE_H,
		0,0,SCREEN_SIZE_W*3,SCREEN_SIZE_H*3);
}


//setInterval(mainLoop,1000/60);

//ループ開始
window.onload = function()
{
	startTime = performance.now();
	mainLoop();
}

//メインループ
function mainLoop()
{
	let nowTime  = performance.now();
	let nowFrame = (nowTime-startTime) / GAME_FPS;

	if( nowFrame > frameCount )
	{
		let c=0;
		while( nowFrame > frameCount )
		{
			frameCount++;
			//更新処理
			update();
			if( ++c>=4 )break;
		}
		//描画処理
		draw();
	}
	requestAnimationFrame(mainLoop);
}



//キーボードが押された時に呼ばれる
document.onkeydown = function(e)
{
	if(e.keyCode == 37)keyb.Left  = true;
	if(e.keyCode == 39)keyb.Right = true;
	if(e.keyCode == 90)keyb.BBUTTON = true;
	if(e.keyCode == 88)keyb.ABUTTON = true;
	if (e.keyCode == 65) {
		block.push(new Block(368, 5, 5));
	}
	/*if(e.keyCode == 65 )field.scx--;
	if(e.keyCode == 83 )field.scx++;*/
}

//キーボードが離された時に呼ばれる
document.onkeyup = function(e)
{
	if(e.keyCode == 37)keyb.Left  = false;
	if(e.keyCode == 39)keyb.Right = false;
	if(e.keyCode == 90)keyb.BBUTTON = false;
	if(e.keyCode == 88)keyb.ABUTTON = false;
}
