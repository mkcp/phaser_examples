var game = new Phaser.Game(800, 600, 'Phaser.CANVAS', 'phaser-example', {
  preload: preload, create: create
});

function preload() {
  game.load.image('einstein', 'img/ra_einstein.png');
}

function create() {
  game.add.sprite(0, 0, 'einstein');
}
