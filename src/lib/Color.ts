let Color = 
{
    white:"#FFFFFF",
    black:"#000000",
    yellow:"#FFFF00",
    green:"#00FF00",
    magenta:"#FF00FF",
    blue:"#0000FF",
    red:"#FF0000",
    orange:"#FFAA00",
    pink:"#FFDDDD",
    darkGreen:"#003300",
    darkBlue:"#222255"
}

export default Color;

export function getActiveToggleColor(value:boolean)
{
    if(value)
    {
        return "text-black-400";
    }
    else
    {
        return "text-gray-400";
    }
}