import Phaser from 'phaser'

//https://blog.ourcade.co/posts/2020/phaser-3-matter-physics-moving-platforms/#:~:text=The%20key%20here%20is%20that,down%20or%20left%20and%20right.
export default class MovingPlatform extends Phaser.Physics.Matter.Image
{
    startY:number;
    startX:number;

	/**
	 * 
	 * @param {Phaser.Scene} scene 
	 * @param {number} x 
	 * @param {number} y 
	 * @param {string} texture 
	 * @param {Phaser.Types.Physics.Matter.MatterBodyConfig} options 
	 */
	constructor(scene, x, y, texture, options)
	{
		super(scene.matter.world, x, y, texture, 0, options);

        this.startY = y;
        this.setFriction(1, 0, Infinity);

	    this.startX = x;

		scene.add.existing(this);
	}

    moveVertically()
    {
        this.scene.tweens.addCounter({
            from: 0,
            to: -300,
            duration: 1500,
            ease: Phaser.Math.Easing.Sine.InOut,
            repeat: -1,
            yoyo: true,
            onUpdate: (tween, target) => {
                const y = this.startY + target.value
                const dy = y - this.y
                this.y = y
                this.setVelocityY(dy)
            }
        });
    }

    moveHorizontally()
    {
        this.scene.tweens.addCounter({
            from: 0,
            to: -300,
            duration: 1500,
            ease: Phaser.Math.Easing.Sine.InOut,
            repeat: -1,
            yoyo: true,
            onUpdate: (tween, target) => {
                const x = this.startX + target.value
                const dx = x - this.x
                this.x = x
                this.setVelocityX(dx)
            }
        });
    }
}