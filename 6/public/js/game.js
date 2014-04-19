var game = new Phaser.Game(800, 600, 'Phaser.AUTO', 'phaser-example', { create: create });

function create() {
  var text = '',
    style;

  text = '- phaser - \n with a sprinkle of \n pixi dust';
  style = { font: '65px Helvetica', fill: '#ff0044', align: 'center' };

  var t = game.add.text(game.world.centerX - 300, 0, text, style);
}
