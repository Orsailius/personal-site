
export default class MadeCardData
{
    contentList:Content[] = [];
    workingContent:Content;
    styleGroups:Map<string,StyleGroup> = new Map();
    workingStyleGroup:StyleGroup;
    lastWasContent:boolean = true;

    applyStyleGroups()
    {
        //console.log("Applying Style Groups");
        for(const group of this.styleGroups)
        {
            //console.log("Applying Group [" + group[0] + "]");
            if(group[0] == '!all!')
            {
                //console.log("Applying all group");
                for(const content of this.contentList)
                {
                    if(group[1].classes != null)
                    {
                        content.classes += " " + group[1].classes;
                    }
                    else
                    {
                        content.classes = group[1].classes;
                    }
                    if(group[1].style != null)
                    {
                        if(content.style == null)
                        {
                            content.style = group[1].style;
                        }
                        else
                        {
                            content.style += group[1].style;
                        }
                    }
                    //console.log(content.classes);
                    //console.log(content.style);
                }
            }  
            else
            {         
                for(const content of this.contentList)
                {
                    if(content.classes == null)
                    {
                        continue;
                    }
                    //console.log(content.classes);
                    let arr = content.classes.split(' ');
                    let hasClass = arr.indexOf(group[0]) >= 0;                
                    if(hasClass)
                    {
                        //console.log("Found " + group[0]);
                        if(group[1].classes != null)
                        {
                            content.classes = content.classes?.replace(
                                group[0], 
                                group[1].classes);
                        }
                        if(group[1].style != null)
                        {
                            if(content.style == null)
                            {
                                content.style = group[1].style;
                            }
                            else
                            {
                                content.style += group[1].style;
                            }
                        }
                        //console.log(content.classes);
                        //console.log(content.style);
                    }   
                }
            }
        }
    }

    pushWorking()
    {
        if(this.workingContent != null)
        {
            this.contentList.push(this.workingContent);
            console.log(this.contentList);
        }
        this.lastWasContent = true;
    }

    addStyleGroup(id:string)
    {
        this.workingStyleGroup = 
        {
            id:id
        };
        this.styleGroups.set(id, this.workingStyleGroup);
        this.lastWasContent = false;
    }

    assignStyle(style:string)
    {
        if(this.lastWasContent)
        {
            this.workingContent.style = style;
        }
        else
        {
            this.workingStyleGroup.style = style;
        }
    }

    assignClasses(classes:string)
    {
        if(this.lastWasContent)
        {
            this.workingContent.classes = classes;
        }
        else
        {
            this.workingStyleGroup.classes = classes;
        }
    }
}

export enum ContentType
{
    Text,
    Button,
    Image,
    Link,
    Html,
    Group,
    All
}

interface Styleable
{
    classes?:string;
    style?:string;
}

interface Content extends Styleable
{
    payload:any;
    type:ContentType;   
}

interface StyleGroup extends Styleable
{
    id:string
}
