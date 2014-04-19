var game = new Phaser.Game(800, 600, 'Phaser.AUTO', 'phaser-example', {
  preload: preload, create: create
});

function preload() {
  game.load.atlasJSONHash('bot', 'sprites/running_bot.png', 'sprites/running_bot.json');
}

function create() {
  var bot = game.add.sprite(200, 200, 'bot');
  bot.animations.add('run');

  // Play animation, 15 fps, looping is true
  bot.animations.play('run', 15, true);
}
