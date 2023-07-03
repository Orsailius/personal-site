import Database from "./Database";
import type IHasId from "./IHasID";
import type Tag from "./Tag";

export default class Tracked implements IHasId
{
    id: string="";    
    tagIds:Set<string> = new Set<string>();
    timeCreated:number = -1;
    timeWorked:Array<number> = new Array<number>();//alternates start time, stop time
    timeFinished:number = -1;

    addTag(tag:Tag)
    {
        this.tagIds.add(tag.id);
        Database.saveData();
        console.log("Added tag " + tag);
    }

    deserializeFix()
    {
        var pojotags = this.tagIds;
        console.log(pojotags);
        this.tagIds = new Set<string>();
        if("forEach" in pojotags)
        {
            pojotags.forEach(id=>
            {           
                this.tagIds.add(id);
            });
        }
    }

    wasWorkingDuringTime(startTime:number, endTime:number)
    {       
        if(this.timeWorked.length == 0)
        {
            return false;
        }
       // console.log(startTime + " to " + endTime);
        for(var i =0; i< this.timeWorked.length;i+=2)
        {
            //console.log("Checking interval: " + this.timeWorked[i] + " to " + this.timeWorked[i+1]);
            if(startTime <= this.timeWorked[i+1] && this.timeWorked[i] <= endTime)
            {
                return true;
            }
        }
        return false;
    }

    timeWorkedDuring(startTime:number, endTime:number)
    {       
        if(this.timeWorked.length == 0)
        {
            return 0;
        }
        var sum:number = 0;
       // console.log(startTime + " to " + endTime);
        for(var i =0; i< this.timeWorked.length;i+=2)
        {
            //console.log("Checking interval: " + this.timeWorked[i] + " to " + this.timeWorked[i+1]);
            if(startTime <= this.timeWorked[i+1] && this.timeWorked[i] <= endTime)
            {
                var min = this.timeWorked[i] < startTime ? startTime : this.timeWorked[i];
                var max = this.timeWorked[i+1] > endTime ? endTime : this.timeWorked[i+1];
                sum += (max - min);
            }
        }
        return sum;
    }


}