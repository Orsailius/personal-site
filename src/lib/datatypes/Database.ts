import { browser } from "$app/environment";
import TagCategory from "./$TagCategory";
import Project from "./Project";
import Tag from "./Tag";
import Task from "./Task";

export default class Database
{
    private static currentProject:Project|null|undefined;
    private static currentTask:Task|null|undefined;
    private static hasLoaded:boolean = false;

    static saveData()
    {
        if(!browser || !this.hasLoaded)
        {
            return;
        }
        if(Database.currentProject != null && Database.currentProject.id != undefined)
        {
            localStorage.setItem("currentProjectId", Database.currentProject.id);
        }
        if(Database.currentTask != null && Database.currentTask.id != undefined)
        {
            localStorage.setItem("currentTaskId", Database.currentTask.id);
        }
        console.log("Saving Data")
        //
        Tag.saveTags();
        Task.saveTasks();
        Project.saveProjects();
    }
    
    static loadData()
    {   
        if(!browser)
        {
            return;
        }      
        Tag.loadTags();
        Database.createMissingPermatags();
        //
        Task.loadTasks();
        Project.loadProjects();
        //
        const currentProjectId = localStorage.getItem("currentProjectId");
        console.log("Current project id: " + currentProjectId);
        Database.currentProject = currentProjectId == null ? null : Project.allProjects.get(currentProjectId);
        console.log(Database.currentProject?.name);
        //
        const currentTaskId = localStorage.getItem("currentTaskId");
        console.log("Current task id: " + currentTaskId);
        Database.currentTask = currentTaskId == null ? null : Task.allTasks.get(currentTaskId);
        console.log(Database.currentTask?.name);
        //
        this.hasLoaded = true;
    }

    static createMissingPermatags()   
    {        
        if(!Tag.hasTagNamed("Planning"))
        {
            TagCategory.ProcessStep.createTag("Planning").setStyle("badge-primary");
            TagCategory.ProcessStep.createTag("Implementing").setStyle("badge-warning");
            TagCategory.ProcessStep.createTag("Testing").setStyle("badge-accent");
            TagCategory.ProcessStep.createTag("Finished").setStyle("badge-success");
        }
        console.log(Tag.allTags.size + " Total tags");
    }

    static setCurrentProject(project:Project)
    {
        Database.currentProject = project;        
        Database.saveData();
        return project;
    }

    static getCurrentProject()
    {
        return this.currentProject;
    }

    static get project()
    {
        return this.currentProject!;
    }

    static setCurrentTask(task:Task)
    {
        Database.currentTask = task;
        Database.saveData();
        return task;
    }

    static clearCurrentTask()
    {
        this.currentTask = null;
    }

    static getCurrentTask()
    {
        return this.currentTask;
    }

    static get task()
    {
        return this.currentTask!;
    }

    static deleteData()
    {
        /*Task.allTasks.clear();
        Project.allProjects.clear();
        this.saveData();*/
    }
}


