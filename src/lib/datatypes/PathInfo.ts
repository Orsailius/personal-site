export class PathInfo
{
    name:string
    builder:(curviness:number, pathScale:number)=>string

    constructor(name:string, builder:(curviness:number, pathScale:number)=>string) 
    {
        this.name = name;
        this.builder = builder;
    }       
    
}

const paths = [
    new PathInfo("Straight", (c,p)=>"M-1900,0 L1900,0"),
    new PathInfo("Hill", (c,p)=>
    {
        let scalePoint = 100 * p;
        let nearScale = scalePoint * 0.95;
        return "M-1900,0 L-" + scalePoint + ",0 C-" + nearScale + "," + -c*50 + " " + nearScale + "," + -c*50 + " " + scalePoint + ",0 L" + scalePoint + ",0 1900,0"
    }),
    new PathInfo("Wave", (c,p)=>
    {
        let scalePoint = 100 * p;
        let halfScale = scalePoint/2;
        return "M-1900,0 L-" + scalePoint + ",0 Q-" + halfScale + "," + -c*50 + 
                            " 0,0 Q" + halfScale + "," + c*50 + " " + scalePoint + ",0 L" + scalePoint + ",0 1900,0"
    })
]

export default paths;