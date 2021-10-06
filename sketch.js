var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,10,10)
}

function draw() 
{
  background("blue");
  if (keyIsDown(UP_ARROW)) {
box.position.y--;
  }
  if (keyIsDown(DOWN_ARROW)) {
    box.position.y++;
      }
drawSprites();
}




