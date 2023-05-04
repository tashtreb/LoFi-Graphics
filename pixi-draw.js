/* global PIXI, SMALL_CANVAS_SIZE, LARGE_CANVAS_SIZE, BG_COLOR_HEXCODE, resizeWithCSS  resizeWithCSSPixelated */

function pixiRender(parentID, resizeCallback) {
  let parent = document.getElementById(parentID);
  let s = SMALL_CANVAS_SIZE
  let app = new PIXI.Application({
    width: s,
    height: s,
  });

  PIXI.settings.RESOLUTION = window.devicePixelRatio;
  PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST
  parent.appendChild(app.view);
  
  let obj = new PIXI.Graphics();

  //match fill to background color aka "transparent"
  //obj.beginFill(BG_COLOR_HEXCODE);
  //obj.drawRect(0, 0, s, s);
  
  
  // line color assignment after 1, comma
  //this is backmost circle with purple border
  obj.lineStyle(1, 0xdd1dd2);
  // s refers to width and height

  obj.beginFill(0x65cace);
  obj.drawCircle(s/8, s, s/6);
  obj.endFill();

    // line color assignment after 1, comma
  //this is backmost circle with purple border
  obj.lineStyle(1, 0xdd1dd2);
  // s refers to width and height

  obj.beginFill(0x20eea3);
  obj.drawCircle(s/8, s, s/15);
  obj.endFill();


  //drawing out the diamond-shaped path by width and height position
  //const path = [0,s/2, s/2, 0, s, s/2, s/2, s];
  //obj.drawPolygon(path);

  //i'm playing around here!
  //white outline original shape polygon
 // obj.lineStyle(1, 0xffffff);
  //const path2 = [0,s/5, s/5, 0, s, s/8, s/8, s];
  //obj.drawPolygon(path2);
  //obj.beginFill(0x65cace);
  //obj.drawPolygon(path2);
  //obj.endFill();

  // line color assignment after 1, comma
  
  //copy and paste it again after to reassign line color
  //this is assigning line color as purple
  obj.lineStyle(1, 0xdd1dd2);
  // s refers to width and height

//this fill hexcode is the blue
//so this is purple and blue circle
  obj.beginFill(0xee2064);
  obj.drawCircle(s/5, s/5, s/4);
  obj.endFill();

    //this is assigning line color as purple
    obj.lineStyle(1, 0x20eea3);
    // s refers to width and height
  
  //this fill hexcode is the blue
  //so this is purple and blue circle
    obj.beginFill(0xffffff);
    obj.drawCircle(s/5, s/5, s/13);
    obj.endFill();
  

  //this is orange and red circle
  obj.lineStyle(1, 0xd43050);
  // s refers to width and height
  obj.beginFill(0xe18736);
  //last parameter is DIAMETER
  obj.drawCircle(s, s, s/6);
  obj.endFill();

    //SECOND original circle
    //white line
    //green fill
    obj.lineStyle(1, 0xffffff);
    // s refers to width and height
    obj.beginFill(0x68ce63);
    //last parameter is DIAMETER
    obj.drawCircle(s/1.5, s/1.5, s/6);
    obj.endFill();

     //SECOND inscribed
    //white line
    //green fill
    obj.lineStyle(1, 0xffffff);
    // s refers to width and height
    obj.beginFill(0xee20cf);
    //last parameter is DIAMETER
    obj.drawCircle(s/1.5, s/1.5, s/20);
    obj.endFill();
  
  
  //THIRD original circle
    //white line
    //green fill
    obj.lineStyle(1, 0xffffff);
    // s refers to width and height
    obj.beginFill(0xeed620);
    //last parameter is DIAMETER
    obj.drawCircle(s, s/4, s/6);
    obj.endFill();
    

      //FOURTH original circle
    //white line
    //yellow fill
    obj.lineStyle(1, 0xffffff);
    // s refers to width and height
    obj.beginFill(0xeed620);
    //last parameter is DIAMETER
    obj.drawCircle(s, s, s/20);
    obj.endFill();

         //inscribed yellow circle
    //white line
    //yellow fill
    obj.lineStyle(1, 0xffffff);
    // s refers to width and height
    obj.beginFill(0xeed620);
    //last parameter is DIAMETER
    obj.drawCircle(s, s, s/25);
    obj.endFill();

     //THIRD original circle
    //white line
    //yellow fill
    obj.lineStyle(1, 0x20eea3);
    // s refers to width and height
    obj.beginFill(0xeed620);
    //last parameter is DIAMETER
    obj.drawCircle(s, s/4, s/6);
    obj.endFill();

         //THIRD original circle
    //white line
    //yellow fill
    obj.lineStyle(1, 0x20eea3);
    // s refers to width and height
    obj.beginFill(0xeed620);
    //last parameter is DIAMETER
    obj.drawCircle(s, s/4, s/5);
    obj.endFill();
    
            //THIRD original circle
    //white line
    //yellow fill
    obj.lineStyle(1, 0xffffff);
    // s refers to width and height
    obj.beginFill(0xeed620);
    //last parameter is DIAMETER
    obj.drawCircle(s, s/4, s/13);
    obj.endFill();
    
    
  


   

  //let's try reducing the number of x y positions to create a small dot
  
  // Add it to the stage to render
  app.stage.addChild(obj);
  
  if (resizeCallback) {
    
    resizeCallback(app.view);
  }
}

// pixiRender("pixi-1");
// pixiRender("pixi-2", resizeWithCSS);
pixiRender("pixi-3", resizeWithCSSPixelated);
