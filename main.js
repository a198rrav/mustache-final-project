noseX = 0
noseY = 0

function preload(){
    mustache =loadImage('https://i.postimg.cc/1RnLJv47/mustache.png')
   }
   function setup(){
       canvas =createCanvas(300,300);
       canvas.center()
       video =createCapture(VIDEO);
       video.size(300,300);
       video.hide();
       poseNet =ml5.poseNet(video, modeloaded);
       poseNet.on('pose',gotPoses);
   }
   function modeloaded(){
       console.log('PoseNet is Initailized');
   }
   
   
   function take_snapshot(){
       save('myFilterImage.png');
   }
   
   function gotPoses(results){
       if(results.length >0){
         noseX=results[0].pose.nose.x -15;
         noseY=results[0].pose.nose.y -15;
           console.log(results);
           console.log("nose x ="+ results[0].pose.nose.x);
           console.log("nose y ="+ results[0].pose.nose.y);
       }
   }
   
   function draw(){
       image(video,0,0,300,300);
       image(mustache,noseX , noseY ,  35,35);
       }
   




