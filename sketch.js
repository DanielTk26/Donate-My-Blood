var back, back_pic;



function preload() {

back_pic = loadImage("images/back.jpg");


}



function setup () {
 createCanvas(displayWidth,1500);

 back = createSprite(displayWidth/2-10,25);
 back.addImage(back_pic);
 back.scale = 0.8;

/* donate = createButton('Donate Your Blood');
 need = createButton('Need Blood Donors');

 donate.position(500,500);
 need.position(700,500);

 donate.size(170,75);
 need.size(170,75);
*/

}


function draw () {
 background("white");

 




createEdgeSprites();
drawSprites();

// Headers

textSize(75);
fill("white");
text("Donate My Blood",380,80);


textSize(60);
fill("lightBlue");
text("Save A Life",500,240);


// About
// 667
textSize(55);
fill("Black");
text("About:",80,527);

textSize(25);
fill("Black");
text("A mother's tear cannot bring back her sons life...but your blood can !!!",80,587);
text("This platform brings donors and people who require blood donation together.",80,627);
text("It allows a donor to post the type of blood he/she is willing to donate. ",80,667);
text("A person who is need of blood donation can see the donors post based on the blood type",80,704);
text("(He Should Not Post)and can contact the donor through his G-mail or phone number respectively.  ",80,744);
text("After the donation takes place, it even allows the donor to remove his post",80,787);
text("as the donor is not medically allowed to donate for the next three months. ",80,827);


// How to use


textSize(55);
fill("Black");
text("How To Use:",80,967);


textSize(25);
fill("Black");
text("This is the Home Page of the platform, where two buttons are present.",80,1027);
text("The button on the left is for donating yor blood...and the one on",80,1067);
text("the right is to find a donor. The donating button leads you to the website ",80,1107);
text("where you have to post your name, blood type, etc... for the",80,1147);
text("people who require your blood type. The finding a donor button leads",80,1187);
text("you to the same website where you can search for a donor according to your",80,1227);
text("blood type. The Person who is searching for a donor should not post anything.",80,1267);



textSize(28);
fill("Black");
text("If there are any issues please contact me via G-mail. DanielTk999@gmail.com",30,1467);


}







