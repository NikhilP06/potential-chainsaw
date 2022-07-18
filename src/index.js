const Stage = require('stage-js/platform/web');

// Create new app
Stage(function(stage) {

  // Set view box
  stage.viewbox(1000, 1000);

  // Create an image and append it to stage
  const box = Stage.image("box").appendTo(stage);
  const square = Stage.image("box").appendTo(stage);
  // Align box to center
  box.pin('align', 0.5);
  square.pin('align', 0.7);
  // On mouse click...
  box.on('click', function(point) {
    // ...tween scale values of this node
    this.tween().ease('bounce').pin({
      scaleX : Math.random() + 0.5,
      scaleY : Math.random() + 0.5,
      alignX: Math.random(),
      alignY: Math.random()
    });
  });
  square.on('click', function(point) {
    // ...tween scale values of this node
    this.tween().ease('bounce').pin({
      scaleX : Math.random() + 0.5,
      scaleY : Math.random() + 0.5,
      alignX: Math.random(),
      alignY: Math.random()
    })
  })

});


// Adding a texture
Stage({
  image : 'example.png',
  textures : {
    box : { x : 0, y : 129, width : 65, height : 65 }
  }
});
