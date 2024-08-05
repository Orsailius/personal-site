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

/*
DataPipe {

  Exp
    = Stuff*
    
  Stuff
   = Pipe
    | Format

  Pipe
    = ident "->" Code PipeOutput --selfpipe
    | ident "->" "{" Code* "}" PipeOutput --mappingpipe
   
  PipeOutput
  = "->" ident
  
  Code
  = string+
  
  Format
  	= "format" ident "{" FormatSpec+ "}"

  FormatSpec
  = FormatLine+
  
  FormatLine
  = string
  | Capture
  
  Capture
  = "<" ident ">"  

  ident  (an identifier)
    = letter alnum*
    
  string
  	= letter+
    | "."

  number  (a number)
    = digit* "." digit+  -- fract
    | digit+             -- whole
}
*/

/*
CardCreator {

  Exp
    = Stuff*
    
  Stuff
   = Content Class? Style?
   | Content Style? Class?

  Class
    = "[" (~"]" any )* "]"
    
    Style
    = "{" (~"}" any )* "}"
    
   Content
   = "\"" string "\"" --text
   | "image" "(" (~")" any )* ")" --image
   | "link"  "(" (~")" any )* ")"  "\"" string "\"" --link
   | "button"  "(" (~")" any )* ")"  "\"" string "\"" --button
   | "html" "("(~")" any )* ")" --html
   | "group" ident --group
   | "all" --all

  Capture
  = "<" ident ">"  

  ident  (an identifier)
    = letter alnum*
    
  string
  	= (~"\"" any )+

  number  (a number)
    = digit* "." digit+  -- fract
    | digit+             -- whole
}
*/