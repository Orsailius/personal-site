import 'phaser';
import { gameScene } from './GiftGrabScene';

export const GameConfig: Phaser.Types.Core.GameConfig = 
{
    type: Phaser.AUTO,
    width: 800,
    height: 900,
    parent:"phaser",
    scene: [gameScene()] as Phaser.Types.Scenes.SettingsConfig[],    
    physics: {
      default: 'arcade',
    },
    render: { pixelArt: false, antialias: true },
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      // `fullscreenTarget` must be defined for phones to not have
      // a small margin during fullscreen.
      fullscreenTarget: 'app',
      expandParent: false,
    },
    mipmapFilter: 'LINEAR_MIPMAP_LINEAR',
};

export class Game extends Phaser.Game {
    constructor(config: Phaser.Types.Core.GameConfig) {
      super(config);
    }
  }
  
