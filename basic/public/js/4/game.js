var game = new Phaser.Game(800, 600, 'Phaser.AUTO', 'phaser-example', {
  preload: preload, create: create, update: update, render: render
});

function preload() {
  game.load.image('einstein', 'img/ra_einstein.png');
}

var sprite; 

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);

  sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'einstein');
  sprite.anchor.set(0.5);

  game.physics.enable(sprite);
}

function update() {
  if (game.physics.arcade.distanceToPointer(sprite, game.input.activePointer) > 8) {
    game.physics.arcade.moveToPointer(sprite, 300);
  } else {
    sprite.body.velocity.set(0);
  }
}

function render() {
  game.debug.inputInfo(32, 32);
}

