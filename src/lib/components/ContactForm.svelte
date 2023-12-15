<script lang="ts">
    export let emailAddress:string;

    let subject:string = "";
    let body:string = "";

    $: okToSubmit = subject != "" && body != "";
    
</script>

<div class="bg-base-100 w-full p-8 rounded-lg">
    <h1 class="text-3xl font-bold text-left text-base-content"> Contact Me!</h1>
    <form method="POST"
        action= {"mailto:"+emailAddress}
        enctype="multipart/form-data">
        <div class="form-control mt-2">
            <label class="label">
                <span class="label-text">Subject</span>
            </label>
            <input type="text" name="subject" placeholder="Subject of the email" bind:value={subject}
                class={"input input-sm input-bordered w-full max-w-xs " + 
                    (subject == "" ? "input-primary" : "input-success") } />
        </div>
        <div class="form-control mt-2">
            <label class="label">
                <span class="label-text">Message</span>
            </label>
            <textarea class={"textarea textarea-bordered textarea-primary h-24 w-full " + 
                (body == "" ? "textarea-primary" : "textarea-success")}
                name="body" placeholder="Type your message here" bind:value={body}></textarea>
            <label class="label">
                <span class="label-text-alt"></span>
            </label>
        </div>
        <button class={"btn btn-success " + (okToSubmit ? "" : "btn-disabled")} type="submit"> Contact </button>
    </form>
</div>


<script context="module" lang="ts">
    export const info = {
       name:"Contact Form",
       description:"Form for contacting via email",
       inputInfo:[
            {
                name:"emailAddress",
                varType:"String",
                description:"Valid email address",
                path:""
            },
        ],
       testInput:{
            emailAddress:"cemteryFighter@gmail.com"
       },
   }
</script>


<style>
	.outer-box {
	    padding: 0.125rem;
	}
</style>
