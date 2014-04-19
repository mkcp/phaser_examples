var game = new Phaser.Game(800, 600, 'Phaser.AUTO', 'phaser-example', {
  preload: preload, create: create
});

var text,
counter = 0;

function preload() {
  game.load.image('einstein', 'img/ra_einstein.png');
}

function create() {
  text = game.add.text(250, 16, '', {fill: '#ffffff'});

  var image = game.add.sprite(game.world.centerX, game.world.centerY, 'einstein');
  image.anchor.set(0.5);

  image.inputEnabled = true;


  image.events.onInputDown.add(listener, this);
}

function listener() {
  counter++;
  text.text = 'You clicked ' + counter + ' times!';
}
