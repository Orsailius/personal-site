type int = number;

export default class OctaveDivision
{
    name:string;
    size:number;
    getFreq:(index:int)=>number;
    invFreq:(freq:number)=>int;
    //
    static values:OctaveDivision[] = [];

    public constructor(init:Partial<OctaveDivision>) 
    {
        Object.assign(this, init);
        OctaveDivision.values.push(this);
    }
    
    static Exp8 = new OctaveDivision({
        name: "8 ET",
        size: 8,
        getFreq:(index:int)=>
        {
            let offset = index + 40;
            return parseFloat(Math.pow(Math.pow(2,1/8), offset).toFixed(4));
        }       
    });
    static Linear8 = new OctaveDivision({
        name: "8 Lin",
        size:8,
        getFreq:(index:int)=>
        {
            let under = Math.pow(2,Math.floor(index/ 8) + 5);
            let over = Math.pow(2,Math.floor(index/ 8) + 6);
            return under + ((over-under)/8) * (index %  8);
        }
    });
    static Divisional8 = new OctaveDivision({
        name: "8 Div",
        size:8,
        getFreq:(index:int)=>
        {           
            if(index % 8 == 0)
            {
                return Math.pow(2,index/8 + 5);
            }
            let under = Math.pow(2,Math.floor(index/ 8) + 5);
            let over = Math.pow(2,Math.floor(index/ 8) + 6);
            let space = (over - under);
            if(index % 8 == 1)
            {
                return under + space * 0.2;
            }    
            if(index % 8 == 2)
            {
                return under + space /3;
            }    
            if(index % 8 == 3)
            {
                return under + space * 0.4;
            } 
            if(index % 8 == 4)
            {
                return under + space * 0.5;
            }                     
            if(index % 8 == 5)
            {
                return under + space * 0.6;
            }    
            if(index % 8 == 6)
            {
                return under + 2 * space / 3;
            }    
            return under + space * 0.8;
        },
        invFreq:(freq:number)=>
        {
            const lower = Math.floor(Math.log2(freq));
            const octave = Math.pow(2,lower);
            const offset = lower - 5;
            const percent = (freq - octave)/octave;
            if(percent < 0.1)
            {
                return 8 * offset + 0;
            }
            else if(percent < 0.265)
            {
                return 8 * offset + 1;
            }
            else if(percent < 0.36)
            {
                return 8 * offset + 2;
            }
            else if(percent < 0.45)
            {
                return 8 * offset + 3;
            }
            else if(percent < 0.55)
            {
                return 8 * offset + 4;
            }
            else if(percent < 0.63)
            {
                return 8 * offset + 5;
            }
            else if(percent < 0.73)
            {
                return 8 * offset + 6;
            }
            return 8 * offset + 7;
            
        }
    });
    static DivisionalExp8 = new OctaveDivision({
        name: "8 Exp Div",
        size:8,
        getFreq:(index:int)=>
        {           
            let offset = (Math.floor(index/ 8) + 5)*30;
            if(index % 8 == 0)
            {
                return Math.pow(2,index/8 + 5);
            }
            if(index % 8 == 1)
            {
                return parseFloat(Math.pow(Math.pow(2,1/30), 6 + offset).toFixed(4));
            }
            if(index % 8 == 2)
            {
                return parseFloat(Math.pow(Math.pow(2,1/30), 10 + offset).toFixed(4));
            }
            if(index % 8 == 3)
            {
                return parseFloat(Math.pow(Math.pow(2,1/30), 12 + offset).toFixed(4));
            }
            if(index % 8 == 4)
            {
                return parseFloat(Math.pow(Math.pow(2,1/30), 15 + offset).toFixed(4));
            }
            if(index % 8 == 5)
            {
                return parseFloat(Math.pow(Math.pow(2,1/30), 18 + offset).toFixed(4));
            }
            if(index % 8 == 6)
            {
                return parseFloat(Math.pow(Math.pow(2,1/30), 20 + offset).toFixed(4));
            }
            return parseFloat(Math.pow(Math.pow(2,1/30), 24 + offset).toFixed(4));           
        },
        invFreq:(freq:number)=>
        {
            const lower = Math.floor(Math.log2(freq));
            const frac = Math.log2(freq) - lower;
            console.log(frac);
            if(frac < 0.07)
            {
                return 8 * (lower-5);
            }
            if(frac < 0.2)
            {
                return 8 * (lower-5) + 1;
            }
            if(frac < 0.28)
            {
                return 8 * (lower-5) +2;
            }
            if(frac < 0.39)
            {
                return 8 * (lower-5) +3;
            }
            if(frac < 0.46)
            {
                return 8 * (lower-5) +4;
            }
            if(frac < 0.55)
            {
                return 8 * (lower-5) +5
            }
            if(frac < 0.66)
            {
                return 8 * (lower-5) +6;
            }
            return 8 * (lower-5) +7;
        }
    });
    static DivisionalExp8Copilot = new OctaveDivision({
        name: "8 Exp Div Copilot",
        size:8,
        getFreq:(index:int)=>
        {           
            let offset = (Math.floor(index/ 8) + 5);
            if(index % 8 == 0)
            {
                return Math.pow(2,index/8 + 5);
            }
            if(index % 8 == 1)
            {
                return Math.pow(2,offset) * Math.pow(2,1/5);
            }
            if(index % 8 == 2)
            {
                return Math.pow(2,offset) * Math.pow(2,1/3);
            }
            if(index % 8 == 3)
            {
                return Math.pow(2,offset) * Math.pow(2,2/5);
            }
            if(index % 8 == 4)
            {
                return Math.pow(2,offset) * Math.pow(2,1/2);
            }
            if(index % 8 == 5)
            {
                return Math.pow(2,offset) * Math.pow(2,3/5);
            }
            if(index % 8 == 6)
            {
                return Math.pow(2,offset) * Math.pow(2,2/3);
            }
            return Math.pow(2,offset) * Math.pow(2,4/5);           
        },
    });
    static Pleasant8 = new OctaveDivision({
        name: "8 Pls",
        size:8,
        getFreq:(index:int)=>
        {
            if(index % 8 == 0)
            {
                return Math.pow(2,index/8 + 5);
            }
            let under = Math.pow(2,Math.floor(index/ 8) + 5);
            let over = Math.pow(2,Math.floor(index/ 8) + 6);
            let space = (over - under);
            if(index % 8 == 1)
            {
                return under + space * 0.03125;
            }    
            if(index % 8 == 2)
            {
                return under + 7 * space / 27;
            }    
            if(index % 8 == 3)
            {
                return under + space * 0.31831;
            } 
            if(index % 8 == 4)
            {
                return under + space * 0.5;
            }                     
            if(index % 8 == 5)
            {
                return under + space / Math.sqrt(Math.E);
            }    
            if(index % 8 == 6)
            {
                return under + space * 0.71875;
            }    
            return under + space * 0.8125;
        }
    });
    static Log8 = new OctaveDivision({
        name: "8 AET",
        size: 8,
        getFreq:(index:int)=>
        {           
            if(index % 8 == 0)
            {
                return Math.pow(2,index/8 + 5);
            }
            let under = Math.pow(2,Math.floor(index/ 8) + 5);
            let over = Math.pow(2,Math.floor(index/ 8) + 6);
            let space = (over - under);

            return under + space * Math.log2((index%8)/8+1);
        }
    });
    static Exp12 = new OctaveDivision({
        name: "12 ET",
        size: 12,
        getFreq:(index:int)=>
        {
            let offset = index + 5*12;
            return parseFloat(Math.pow(Math.pow(2,1/12), offset).toFixed(4));
        },
        invFreq:(freq:number)=>
        {
           return Math.round(12 * Math.log2(freq));
        }
    });
    static Exp12Piano = new OctaveDivision({
        name: "12 ET Piano",
        size: 12,
        getFreq:(index:int)=>
        {
            let under = Math.pow(2,Math.floor(index/ 12) + 5);
            let over = Math.pow(2,Math.floor(index/ 12) + 6);
            let space = (over - under);
            if(index % 12 == 0)
            {
                return under + space * 0.02199;
            }          
            if(index % 12 == 1)
            {
                return under + space * 0.08273;
            }    
            if(index % 12 == 2)
            {
                return under + space * 0.14711;
            }   
            if(index % 12 == 3)
            {
                return under + space * 0.21535;
            }   
            if(index % 12 == 4)
            {
                return under + space * 0.28762;
            }    
            if(index % 12 == 5)
            {
                return under + space * 0.36418;
            } 
            if(index % 12 == 6)
            {
                return under + space * 0.44527;
            } 
            if(index % 12 == 7)
            {
                return under + space * 0.53125;
            }                     
            if(index % 12 == 8)
            {
                return under + space * 0.62227;
            }     
            if(index % 12 == 9)
            {
                return under + space * 0.71875;
            }    
            if(index % 12 == 10)
            {
                return under + space * 0.82094;
            }  
            return under + space * 0.92922;
        }
    });
    static Divisional14 = new OctaveDivision({
        name: "14 Div",
        size:14,
        getFreq:(index:int)=>
        {           
            if(index % 14 == 0)
            {
                return Math.pow(2,index/14 + 5);
            }
            let under = Math.pow(2,Math.floor(index/ 14) + 5);
            let over = Math.pow(2,Math.floor(index/ 14) + 6);
            let space = (over - under);
            if(index % 14 == 1)
            {
                return under + space / 7;
            }    
            if(index % 14 == 2)
            {
                return under + space / 5;
            }   
            if(index % 14 == 3)
            {
                return under + 2 * space / 7;
            }   
            if(index % 14 == 4)
            {
                return under + space /3;
            }    
            if(index % 14 == 5)
            {
                return under + space * 0.4;
            } 
            if(index % 14 == 6)
            {
                return under + 3 * space / 7;
            } 
            if(index % 14 == 7)
            {
                return under + space * 0.5;
            }                     
            if(index % 14 == 8)
            {
                return under + 4 * space / 7;
            }     
            if(index % 14 == 9)
            {
                return under + space * 0.6;
            }    
            if(index % 14 == 10)
            {
                return under + 2 * space / 3;
            }    
            if(index % 14 == 11)
            {
                return under + 5 * space / 7;
            }   
            if(index % 14 == 12)
            {
                return under + space * 0.8;
            }    
            return under +  6 * space / 7;
        }
    });
    static Exp30 = new OctaveDivision({
        name: "30 ET",
        size: 30,
        getFreq:(index:int)=>
        {
            let offset = index + 5*30;
            return parseFloat(Math.pow(Math.pow(2,1/30), offset).toFixed(4));
        }
    });
}    



