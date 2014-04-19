var game = new Phaser.Game(800, 600, 'Phaser.AUTO', 'phaser-example', {
  preload: preload, create: create
});

function preload() {
  game.load.image('einstein', 'img/ra_einstein.png');
}

function create() {
  var image = game.add.sprite(0, 0, 'einstein');
  game.physics.enable(image, Phaser.Physics.ARCADE);

  image.body.velocity.x = 150;
}
