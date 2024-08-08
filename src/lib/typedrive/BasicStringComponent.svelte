<script lang="ts">
    import EditableType from "./EditableType";

    export let obj:any;    
    export let field:string;
    export let value:any;
    export let editableType:EditableType = EditableType.NotEditable;    
</script>

<div>   
    {#if editableType == EditableType.NotEditable}
        <div>
            {value}
        </div>
    {/if}
</div>

<style>
</style>
