<script lang="ts">
    export let current:number;
    export let max:number;
    export let colour:string;

    $: percent = current / max;
</script>

<div class={"progress select-none " + (percent < 0.5 ? "less": "")} style={"--i:" + (100*percent) + ";--clr:" + colour + ";"}>
    <span class="progress-text">
        <h3>{current}</h3>
        <h4>/{max}</h4>
    </span>  
  </div>

<style> 

    @media (min-width: 768px) 
    {    
        .progress
        {
            width: 100px;
            height: 100px;
        }

        .progress-text h3
        {         
            font-size: 2em;
        }

        .progress-text h4
        {
            font-size: 0.75em;     
        }

    }

    @media (max-width: 768px) 
    {
        .progress
        {
            width: 65px;
            height: 65px;
        }

        .progress-text h3
        {
            font-size: 1.25em;
        }

        .progress-text h4
        {
            font-size: 0.6em;   
        }
    } 

    .progress
    {
        position: relative;
        border-radius: 50%;
        color: white;
        background: #444 linear-gradient(to right, transparent 50%, var(--clr) 0);
    }

    .progress-text h3
    {
        position: absolute;
        top:40%;
        left:50%;
        transform: translate(-50%,-50%);      
        z-index: 1;
        font-weight: 500;
    }

    .progress-text h4
    {      
        position: absolute;
        top:65%;
        left:50%;
        transform: translate(-50%,-50%);      
        z-index: 1;
        font-weight: 500;
    }

    .progress::before
    {
       content:'';
       display: block;
       height: 100%;
       margin-left: 50%;
       transform-origin: left;
       border-radius: 0 100% 100% 0/50%;
    }

    .progress::before
    {
       background: var(--clr);
       transform: rotate(calc((var(--i) - 50) * 0.01turn));
    }

    .progress.less::before
    {
       background: #444;
       transform: rotate(calc((var(--i) - 0) * 0.01turn));
    }

    .progress::after
    {
       content:'';
       position: absolute;
       inset:10px;
       border-radius: 50%;
       background: #222;
    }

</style>