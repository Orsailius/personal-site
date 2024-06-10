import 'phaser'
import { Scene } from 'phaser';
import { TextButton } from './TextButton';
import MovingPlatform from './MovingPlatform';

export const gameSceneKey = 'GameScene';

class GameScene extends Scene
{
    platforms:any;   
    player:Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
    isClicking:boolean = false;
    swipeDirection:any;
    //
    gifts:Phaser.Types.Physics.Arcade.SpriteWithDynamicBody[] = [];
    coals:Phaser.Types.Physics.Arcade.SpriteWithDynamicBody[] = [];
    candy:any;
    //
    score:number = 0;
    lives:number = 10;
    scoreText:Phaser.GameObjects.Text;
    livesText:Phaser.GameObjects.Text;
    giftChance = 0.9;
    ticksPerSpawn = 4;
    currentTick = 0;
    totalSpawns = 0;
    //
    spawnTimer:Phaser.Time.TimerEvent;
    doneGame:boolean = false;
    gameOver:any;
    gameOverText:any;
    restartButton:TextButton;

    preload() 
    {
        this.load.image('santa', '/images/giftgrab/Santa.png');
        this.load.image('ground', '/images/giftgrab/platform.png');
        this.load.image('platform', '/images/giftgrab/platform2.png');
        this.load.image('gift-red', '/images/giftgrab/RedGift.png');
        this.load.image('gift-orange', '/images/giftgrab/OrangeGift.png');
        this.load.image('gift-yellow', '/images/giftgrab/YellowGift.png');
        this.load.image('gift-green', '/images/giftgrab/GreenGift.png');
        this.load.image('gift-blue', '/images/giftgrab/BlueGift.png');
        this.load.image('gift-purple', '/images/giftgrab/PurpleGift.png');
        this.load.image('coal', '/images/giftgrab/Coal.png');
        this.load.image('backdrop', '/images/giftgrab/Backdrop.jpg')
    }

    create() 
    {
        this.player = this.physics.add.sprite(100, 450, 'santa');
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
        this.player.body.setGravityY(600)
        this.player.displayWidth = 100;
        this.player.displayHeight = 100;
        //
        //this.add.rectangle(400,875,800,50,0x492811);
        //this.add.rectangle(400,850,800,25,0xFFFFFF);       
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400,875,'ground').setScale(2).refreshBody();       
        let mid = this.platforms.create(400,575,'platform').setScale(0.5).refreshBody();     
        let left = this.platforms.create(20,675,'platform').setScale(0.5).refreshBody();    
        let right = this.platforms.create(780,675,'platform').setScale(0.5).refreshBody();    
        //
        this.spawnTimer = this.time.addEvent({ delay: 400, callback: this.spawnObject, callbackScope: this, loop: true });
        //
        //
        this.physics.add.collider(this.player, this.platforms);
        //
        this.scoreText = this.add.text(10, 0, 'Score:', {
            fontSize: '60px',
            fontFamily: "Helvetica",
        });
        this.scoreText.depth = 100;
        this.livesText = this.add.text(600, 0, 'Lives:', {
            fontSize: '60px',
            fontFamily: "Helvetica",
        });
        this.livesText.depth = 100;
        this.refreshLives();
        //
        let backdrop = this.add.image(400,400,'backdrop');
        backdrop.depth = -1;
        backdrop.displayWidth = 800;
        backdrop.displayHeight = 1200;
        //
        this.gameOver = this.add.rectangle(400,400,800,1200,0x000000);
        this.gameOver.depth = 2;
        this.gameOver.setVisible(false);
        this.gameOverText = this.add.text(200, 400, 'Game Over', {
            fontSize: '72px',
            fontFamily: "Helvetica",
        });
        this.gameOverText.setVisible(false);
        this.gameOverText.depth = 2;
        this.restartButton = new TextButton(this, 200, 500, 'Restart!', { fill: '#0f0', fontSize:'62px'}, () => this.restart());
        this.restartButton.depth = 2;
        this.add.existing(this.restartButton);
        this.restartButton.setVisible(false);
    }

    restart()
    {
        this.score = 0;
        this.scoreText.setText("Score: " + this.score);
        this.lives = 10;
        this.refreshLives();
        this.giftChance = 0.9;
        this.totalSpawns = 0;
        this.ticksPerSpawn = 4;
        this.currentTick = 0;
        this.doneGame = false;
        //
        this.gameOver.setVisible(false);
        this.gameOverText.setVisible(false);
        this.restartButton.setVisible(false);
    }

    spawnObject()
    {        
        if(this.doneGame)
        {
            return;
        }
        this.currentTick++;
        if(this.currentTick >= this.ticksPerSpawn)
        {
            let r = Math.random();
            if(r < this.giftChance || this.totalSpawns < 3)
            {
                this.spawnGift();
            }
            else
            {
                this.spawnCoal();
            } 
            this.currentTick = 0;
            this.totalSpawns++;
            if(this.totalSpawns == 10)
            {
                this.ticksPerSpawn = 3;
            }
            else if(this.totalSpawns == 25)
            {
                this.ticksPerSpawn = 2;            
            }
            else if(this.totalSpawns == 75)
            {
                this.ticksPerSpawn = 1;            
            }
            else if(this.totalSpawns > 200)
            {
                this.giftChance = Math.exp(this.totalSpawns * -0.0048 + 0.748243) - 0.0327;
            }
        }      
    }

    spawnCoal()
    {
        let coal = this.physics.add.sprite(Phaser.Math.FloatBetween(10,790), 0, 'coal');
        coal.setBounce(0.2);
        coal.setCollideWorldBounds(true);
        coal.body.setGravityY(300)
        coal.displayWidth = 80;
        coal.displayHeight = 80;
        this.time.addEvent({ delay: 6000, callback: ()=>
        {
            if(coal != null)
            {
                this.coals.splice(this.coals.indexOf(coal),1);
                coal.destroy();
            }
        }, callbackScope: coal, loop: false });
        this.physics.add.collider(coal, this.platforms);
        this.physics.add.overlap(this.player, coal, this.collectCoal, undefined, this);

        this.coals.push(coal);
    }

    spawnGift()
    {
        let gift = this.physics.add.sprite(Phaser.Math.FloatBetween(10,790), 0, this.getRandomGift());
        gift.setBounce(0.2);
        gift.setCollideWorldBounds(true);
        gift.body.setGravityY(300)
        gift.displayWidth = 80;
        gift.displayHeight = 80;
        this.time.addEvent({ delay: 7000, callback: ()=>
        {
            if(gift != null)
            {
                this.gifts.splice(this.gifts.indexOf(gift),1);
                gift.destroy();
            }
        }, callbackScope: gift, loop: false });
        this.physics.add.collider(gift, this.platforms);
        this.physics.add.overlap(this.player, gift, this.collectGift, undefined, this);

        this.gifts.push(gift);
    }

    getRandomGift()
    {
        var r = Phaser.Math.FloatBetween(0,1);
        if(r < 1/6)
        {
            return 'gift-red'
        }
        else if(r < 2/6)
        {
            return 'gift-orange'
        }
        else if(r < 3/6)
        {
            return 'gift-yellow'
        }
        else if(r < 4/6)
        {
            return 'gift-green'
        }
        else if(r < 5/6)
        {
            return 'gift-blue'
        }
        else
        {
            return 'gift-purple'
        }
    }

    collectGift(player,gift)
    {
        this.gifts.splice(this.gifts.indexOf(gift),1);
        gift.destroy();
        this.giveScore(1);
    }

    collectCoal(player,coal)
    {
        this.coals.splice(this.gifts.indexOf(coal),1);
        coal.destroy();
        this.takeLives(1);
    }

    update()
    {
        if(this.doneGame)
        {
            return;
        }
        if(!this.input.activePointer.isDown && this.isClicking == true) 
        {
            this.player.setVelocityX(0);
            this.isClicking = false;
        } 
        else if(this.input.activePointer.isDown) 
        {
            this.isClicking = true;            
            let pointPosX = this.input.activePointer.position.x;
            if(this.player.x < pointPosX) 
            {
                this.player.setVelocityX(160);
                this.player.flipX = false;
            } 
            else if(this.player.x > pointPosX) 
            {
                this.player.setVelocityX(-160);
                this.player.flipX = true;
            }
            if (this.player.body.touching.down)
            {
                let pointPosY = this.input.activePointer.position.y;
                if(this.player.y > pointPosY + 50)
                {
                    this.player.setVelocityY(-530);
                }
            }
        }       
    }

    giveScore(amount:number)
    {
        this.score += amount;
        this.scoreText.setText("Score: " + this.score);
    }

    takeLives(amount:number)
    {
        this.lives -= amount;
        this.refreshLives();
        if(this.lives == 0)
        {
            this.doneGame = true;
            this.gameOver.setVisible(true);
            this.gameOverText.setVisible(true);
            this.restartButton.setVisible(true);
        }
    }

    refreshLives()
    {
        this.livesText.setText("Lives: " + this.lives);
        this.livesText.x = 790 - this.livesText.width;
    }
}


export function gameScene(): Phaser.Types.Scenes.SettingsConfig | Phaser.Types.Scenes.CreateSceneFromObjectConfig 
{
    return new GameScene();
}