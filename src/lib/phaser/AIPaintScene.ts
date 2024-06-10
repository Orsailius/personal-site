import 'phaser'
import { BlendModes, Scene } from 'phaser';
import { TextButton } from './TextButton';
import MovingPlatform from './MovingPlatform';

export const gameSceneKey = 'GameScene';

const images:ImageData[] = [
    {
        id:0,
        image:"/images/aipaint/woman-6991826_640.png",
        colouredImages:[
            "/images/aipaint/Woman0.png",
            "/images/aipaint/Woman1.png",
            "/images/aipaint/Woman2.png",
            "/images/aipaint/Woman3.png",
            "/images/aipaint/Woman4.png",
            "/images/aipaint/Woman5.png",
        ]
    },
    {
        id:1,
        image:"/images/aipaint/sunflower-2507845_640.png",
        colouredImages:[
            "/images/aipaint/Sunflower0.png",
            "/images/aipaint/Sunflower1.png",
            "/images/aipaint/Sunflower2.png",
            "/images/aipaint/Sunflower3.png",
            "/images/aipaint/Sunflower4.png",
            "/images/aipaint/Sunflower5.png",
        ]
    },
    {
        id:2,
        image:"/images/aipaint/griffin-4018762_640.jpg",
        colouredImages:[
            "/images/aipaint/Griffin0.png",
            "/images/aipaint/Griffin1.png",
            "/images/aipaint/Griffin2.png",
            "/images/aipaint/Griffin3.png",
            "/images/aipaint/Griffin4.png",
            "/images/aipaint/Griffin5.png",
        ]
    },
    {
        id:3,
        image:"/images/aipaint/vortex-5273023_640.jpg",
        colouredImages:[
            "/images/aipaint/Vortex0.png",
            "/images/aipaint/Vortex1.png",
            "/images/aipaint/Vortex2.png",
            "/images/aipaint/Vortex3.png",
            "/images/aipaint/Vortex4.png",
            "/images/aipaint/Vortex5.png",
        ]
    },
    {
        id:4,
        image:"/images/aipaint/female-eye-7517981_640.png",
        colouredImages:[
            "/images/aipaint/Eye0.png",
            "/images/aipaint/Eye1.png",
            "/images/aipaint/Eye2.png",
            "/images/aipaint/Eye3.png",
            "/images/aipaint/Eye4.png",
            "/images/aipaint/Eye5.png",
        ]
    },
    {
        id:5,
        image:"/images/aipaint/art-nouveau-5310890_640.png",
        colouredImages:[
            "/images/aipaint/Peacocks0.png",
            "/images/aipaint/Peacocks1.png",
            "/images/aipaint/Peacocks2.png",
            "/images/aipaint/Peacocks3.png",
            "/images/aipaint/Peacocks4.png",
            "/images/aipaint/Peacocks5.png",
        ]
    },
];

interface ImageData
{
    id:number,
    image:string,
    colouredImages:string[]
}

interface Layer
{
    renderTexture:Phaser.GameObjects.RenderTexture;
    mask:any;
    colouredImage:Phaser.GameObjects.Image;
}


class GameScene extends Scene
{
    brushId:number = 5;
    imageId:number = 0;
    layers:Layer[] = [];
    lineDrawing:Phaser.GameObjects.Image;
    needsUpdate:boolean = false;

    preload() 
    {
        this.load.image('brush', '/images/aipaint/brush1.png');
        let image = images[this.imageId];
        this.load.image(this.imageId + 'lineart',image.image);
        console.log("loading " + this.imageId + 'lineart')
        for(var i =0; i < 6;i++)
        {
            this.load.image(this.imageId + 'coloured' + i, image.colouredImages[i]);
        }        
    }

    loadLineArt()
    {
        const key = this.imageId + 'lineart';
        this.load.image(key,images[this.imageId].image);
        this.load.once(Phaser.Loader.Events.COMPLETE, () => 
        {
            // texture loaded so use instead of the placeholder
            this.lineDrawing.setTexture(key);
        })
        this.load.start()
    }

    loadColouredArt()
    {
        for(var i =0; i < 6;i++)
        {          
            const This = this;
            const key = This.imageId + 'coloured' + i;
            This.load.image(key, images[This.imageId].colouredImages[i]);
            This.load.once(Phaser.Loader.Events.COMPLETE, () => 
            {
                if(This.layers[i] == null )
                {
                    return;
                }    
                else if(This.layers[i].colouredImage == null)
                {
                    let pic = This.layers[i].colouredImage= this.add.image(400, 400, this.imageId + 'coloured' + i);
                    pic.displayWidth = 800;
                    pic.displayHeight = 800;
                    pic.setMask(This.layers[i].mask);
                    pic.depth=i;
                }       
                This.layers[i].colouredImage.setTexture(key);
            });
            This.load.start();
        }    
    }

    createImages()
    {
        for(var i =0; i <6;i++)
        {
            let rt = this.add.renderTexture(400, 400, 800, 800);
            rt.setBlendMode(BlendModes.MULTIPLY);           
            let mask = rt.createBitmapMask();
            let pic = this.add.image(400, 400, this.imageId + 'coloured' + i);
            pic.displayWidth = 800;
            pic.displayHeight = 800;
            pic.setMask(mask);
            pic.depth=i;
            this.layers.push(
                {
                    renderTexture:rt,
                    mask:mask,
                    colouredImage:pic
                }
            );
        }

        this.lineDrawing = this.add.image(400, 400, this.imageId +'lineart');
        this.lineDrawing.depth = -1;
        this.lineDrawing.displayWidth = 800;
        this.lineDrawing.displayHeight = 800;
    }

    create() 
    {
        this.createImages();

        this.input.on('pointermove', pointer =>
        {
            if (pointer.isDown)
            {               
                for(var i=0;i < 6;i++)
                {
                    if(i != this.brushId)
                    {
                        //this.renderTextures[this.brushId].erase('brush', pointer.x - 32, pointer.y - 32,0);                    
                    }
                    else
                    {
                        this.layers[this.brushId].renderTexture.draw('brush', pointer.x - 32, pointer.y - 32);
                    }
                }
            }

        }, this);
    }      

    setBrush(brushId:number)
    {
        this.brushId = brushId;
        for(var i=0;i < 6;i++)
        {
            if(i != brushId)
            {
                this.layers[i].renderTexture.active = false;
            }
        }
        console.log("Brush Id is now: " + this.brushId);
    }

    setImage(imageId:number)
    {
        this.imageId = imageId;
        this.loadLineArt();
        this.loadColouredArt();
    }

    clear()
    {
        for(var i=0;i < 6;i++)
        {
            let layer = this.layers[i];
            layer.renderTexture.destroy();
            layer.mask.destroy();
            let rt = this.add.renderTexture(400, 400, 800, 800);
            rt.setBlendMode(BlendModes.MULTIPLY);           
            let mask = rt.createBitmapMask();
            layer.colouredImage.setMask(mask);
            layer.mask = mask;
            layer.renderTexture = rt;
        }
    }

    update()
    {
       
    }
}   


export function gameScene(): Phaser.Types.Scenes.SettingsConfig | Phaser.Types.Scenes.CreateSceneFromObjectConfig 
{
    return new GameScene();
}