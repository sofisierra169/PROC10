var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["564bd290-4ca5-4181-98a5-fac2436e9884","ad2e11f0-0382-4b64-a946-9472e8915346","87a227d9-7422-406a-92cb-30827cbec7b8","375aeb8e-c993-4d1a-aa36-9f1e1e2f4d5e","2117e191-6680-4f69-9388-df6f6375dc6d","5e3a4d62-c506-42d8-9507-6f0469dbd6ba","7f17d700-71b8-4adf-81af-3ddec827e466","ef68825e-21a5-434d-b8c0-deefe5f1780c","e30e93e2-90f2-4f40-8914-02fad7be65ad","809f3757-7c1b-4383-be12-bc536d0c98bb","e0509893-5b26-4d34-8d1f-e61461a317e7","bae76e02-c6a5-4fe8-a276-60f5c6de125e"],"propsByKey":{"564bd290-4ca5-4181-98a5-fac2436e9884":{"name":"citu","sourceUrl":"assets/api/v1/animation-library/gamelab/OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF/category_backgrounds/city.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF/category_backgrounds/city.png"},"ad2e11f0-0382-4b64-a946-9472e8915346":{"name":"1","sourceUrl":"assets/api/v1/animation-library/gamelab/JGw3x8mqIDdntLjBneM5sF1rRaODdxDs/category_faces/kidportrait_09.png","frameSize":{"x":298,"y":366},"frameCount":1,"looping":true,"frameDelay":2,"version":"JGw3x8mqIDdntLjBneM5sF1rRaODdxDs","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":298,"y":366},"rootRelativePath":"assets/api/v1/animation-library/gamelab/JGw3x8mqIDdntLjBneM5sF1rRaODdxDs/category_faces/kidportrait_09.png"},"87a227d9-7422-406a-92cb-30827cbec7b8":{"name":"3","sourceUrl":"assets/api/v1/animation-library/gamelab/83IwT63GSAF79D0NhimfA8MegkbD6wh_/category_faces/kidportrait_10.png","frameSize":{"x":316,"y":380},"frameCount":1,"looping":true,"frameDelay":2,"version":"83IwT63GSAF79D0NhimfA8MegkbD6wh_","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":316,"y":380},"rootRelativePath":"assets/api/v1/animation-library/gamelab/83IwT63GSAF79D0NhimfA8MegkbD6wh_/category_faces/kidportrait_10.png"},"375aeb8e-c993-4d1a-aa36-9f1e1e2f4d5e":{"name":"5","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"2117e191-6680-4f69-9388-df6f6375dc6d":{"name":"4","sourceUrl":"assets/api/v1/animation-library/gamelab/M4CCvh412fBclUbgbsuJsfzJkLERwN6g/category_faces/kidportrait_03.png","frameSize":{"x":264,"y":375},"frameCount":1,"looping":true,"frameDelay":2,"version":"M4CCvh412fBclUbgbsuJsfzJkLERwN6g","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":375},"rootRelativePath":"assets/api/v1/animation-library/gamelab/M4CCvh412fBclUbgbsuJsfzJkLERwN6g/category_faces/kidportrait_03.png"},"5e3a4d62-c506-42d8-9507-6f0469dbd6ba":{"name":"6","sourceUrl":"assets/api/v1/animation-library/gamelab/gRkbtTgvCsmePRu91w1GuwVEnFFFNCR2/category_faces/kidportrait_11.png","frameSize":{"x":264,"y":362},"frameCount":1,"looping":true,"frameDelay":2,"version":"gRkbtTgvCsmePRu91w1GuwVEnFFFNCR2","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":362},"rootRelativePath":"assets/api/v1/animation-library/gamelab/gRkbtTgvCsmePRu91w1GuwVEnFFFNCR2/category_faces/kidportrait_11.png"},"7f17d700-71b8-4adf-81af-3ddec827e466":{"name":"7","sourceUrl":"assets/api/v1/animation-library/gamelab/ZLXVM_cc9g507KhPGhfemoX3EwF164Ju/category_faces/kidportrait_12.png","frameSize":{"x":264,"y":363},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZLXVM_cc9g507KhPGhfemoX3EwF164Ju","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":363},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZLXVM_cc9g507KhPGhfemoX3EwF164Ju/category_faces/kidportrait_12.png"},"ef68825e-21a5-434d-b8c0-deefe5f1780c":{"name":"kidportrait_08_1","sourceUrl":"assets/api/v1/animation-library/gamelab/6ilCPXzP1HUKGzaSpg6oHUcE.Nv8KRqD/category_faces/kidportrait_08.png","frameSize":{"x":352,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"6ilCPXzP1HUKGzaSpg6oHUcE.Nv8KRqD","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":352,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/6ilCPXzP1HUKGzaSpg6oHUcE.Nv8KRqD/category_faces/kidportrait_08.png"},"e30e93e2-90f2-4f40-8914-02fad7be65ad":{"name":"8","sourceUrl":"assets/api/v1/animation-library/gamelab/xb8zpsiPZ5SI98yOhX1InKeDnBSCd57./category_faces/kidportrait_04.png","frameSize":{"x":267,"y":357},"frameCount":1,"looping":true,"frameDelay":2,"version":"xb8zpsiPZ5SI98yOhX1InKeDnBSCd57.","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":267,"y":357},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xb8zpsiPZ5SI98yOhX1InKeDnBSCd57./category_faces/kidportrait_04.png"},"809f3757-7c1b-4383-be12-bc536d0c98bb":{"name":"2","sourceUrl":"assets/api/v1/animation-library/gamelab/puN9TbQEHqDwpZBcS0MitP6v7xlK7PhV/category_faces/kidportrait_02.png","frameSize":{"x":264,"y":362},"frameCount":1,"looping":true,"frameDelay":2,"version":"puN9TbQEHqDwpZBcS0MitP6v7xlK7PhV","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":362},"rootRelativePath":"assets/api/v1/animation-library/gamelab/puN9TbQEHqDwpZBcS0MitP6v7xlK7PhV/category_faces/kidportrait_02.png"},"e0509893-5b26-4d34-8d1f-e61461a317e7":{"name":"virus","sourceUrl":"assets/api/v1/animation-library/gamelab/dtwdmhu18R0XcS9DpMKYtymNRtdl4ChR/category_germs/gameplaywacky_03.png","frameSize":{"x":390,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"dtwdmhu18R0XcS9DpMKYtymNRtdl4ChR","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dtwdmhu18R0XcS9DpMKYtymNRtdl4ChR/category_germs/gameplaywacky_03.png"},"bae76e02-c6a5-4fe8-a276-60f5c6de125e":{"name":"robot4","sourceUrl":"assets/api/v1/animation-library/gamelab/m_QwsHi9Ca23mKDRNmKyStW4_Jav0Xs6/category_robots/robot_25.png","frameSize":{"x":332,"y":396},"frameCount":1,"looping":true,"frameDelay":2,"version":"m_QwsHi9Ca23mKDRNmKyStW4_Jav0Xs6","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":396},"rootRelativePath":"assets/api/v1/animation-library/gamelab/m_QwsHi9Ca23mKDRNmKyStW4_Jav0Xs6/category_robots/robot_25.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var gameState = "serve"

var score=0

var fondo = createSprite(200, 200);
fondo.setAnimation("citu");

//priera fila de cajas 
var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
box1.setAnimation("1");
box1.scale =.1
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
box2.setAnimation("4");
box2.scale =.1
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
box3.setAnimation("2");
box3.scale =.1
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
box4.setAnimation("3");
box4.scale =.1
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
box5.setAnimation("5");
box5.scale =.1
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
box6.setAnimation("8");
box6.scale =.1
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
box7.setAnimation("6");
box7.scale =.1
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";
box8.setAnimation("7");
box8.scale =.1

//segunda fila de cajas
var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
box9.setAnimation("8");
box9.scale =.1
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
box10.setAnimation("5");
box10.scale =.1
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
box11.setAnimation("1");
box11.scale =.1
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
box12.setAnimation("7");
box12.scale =.1
var box13 = createSprite(225,125, 50, 50);
box13.shapeColor="blue";
box13.setAnimation("3");
box13.scale =.1
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
box14.setAnimation("6");
box14.scale =.1
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
box15.setAnimation("2");
box15.scale =.1
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";
box16.setAnimation("4");
box16.scale =.1
// crear paddle y ball - paleta y pelota
paddle=createSprite(200,390,100,20)
paddle.setAnimation("robot4");
paddle.scale =.2

ball=createSprite(200,200,20,20)
ball.setAnimation("virus");
ball.scale =.1


  
 
  
 







function draw() {
  background("white");
  drawSprites();
  if (gameState === "serve") {
    textSize("20")
    fill("yellow")
    stroke("black")
    text ("Presiona enter para comenzar", 60,190);
    if(keyDown("enter")){
      ball.velocityX = 5;
      ball.velocityY = 5;
      gameState = "play";
    }
  }
  
  if (gameState === "play") {
    //mostrar puntuación
    textSize(15);
    stroke("red");
    text("Puntuación :"+score,280,20);
    createEdgeSprites();
    ball.bounceOff(rightEdge);
    ball.bounceOff(leftEdge);
    ball.bounceOff(topEdge);
    ball.bounceOff(paddle);
    paddle.x=World.mouseX;
    if(ball.isTouching(box1))
    {
      score=score+1;
      box1.destroy();
    }
    if(ball.isTouching(box2))
    {
      score=score+1;
      box2.destroy();
    }
    if(ball.isTouching(box3))
    {
      score=score+1;
      box3.destroy();
    }
    if(ball.isTouching(box4))
    {
      score=score+1;
      box4.destroy();
    }
    if(ball.isTouching(box5))
    {
      score=score+1;
      box5.destroy();
    }
    
    
  if(ball.isTouching(box6))
  {
    score=score+1;
    box6.destroy();
  }
  
  if(ball.isTouching(box7))
  {
    score=score+1;
    box7.destroy();
  }
  
  if(ball.isTouching(box8))
  {
    score=score+1;
    box8.destroy();
  }
  
  if(ball.isTouching(box9))
  {
    score=score+1;
    box9.destroy();
  }
  
  if(ball.isTouching(box10))
  {
    score=score+1;
    box10.destroy();
  }
  if(ball.isTouching(box11))
  {
    score=score+1;
    box11.destroy();
  }
  if(ball.isTouching(box12))
  {
    score=score+1;
    box12.destroy();
  }
  if(ball.isTouching(box13))
  {
    score=score+1;
    box13.destroy();
  }
  if(ball.isTouching(box14))
  {
    score=score+1;
    box14.destroy();
  }
  if(ball.isTouching(box15))
  {
    score=score+1;
    box15.destroy();
  }
  if(ball.isTouching(box16))
  {
    score=score+1;
    box16.destroy();
  }
    if (score=== 16) {
      gameState= "end";
    }
    if (ball.isTouching(bottomEdge)) {
      gameState= "end";
    }
  }
  
  if (gameState=== "end") {
    textSize(30);
    text("Fin del juego",130,180);
    ball.x=200;
    ball.y= 200;
    ball.velocityX=1;
    ball.velocityY=3;
    createEdgeSprites();
    ball.bounceOff(edges)
  }
  
  
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
