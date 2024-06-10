<script lang="ts">

class AntiZeroVar<E extends Number>
{
    natural: E | 0 = 0;
    zero: E | 0 = 0;
    antizero: E | 0 = 0;

    constructor(natural:E| 0 =0, zero:E| 0 =0, antizero:E| 0 =0)
    {
        this.natural = natural;
        this.zero = zero;
        this.antizero = antizero;
    }

    mult(b:AntiZeroVar<E>) : AntiZeroVar<E>
    {
        var azv: AntiZeroVar<E> = new AntiZeroVar();
        azv.natural = (this.natural * b.natural + this.zero * b.antizero + this.antizero * b.zero)% 3 as unknown as E;
        azv.zero = (this.natural * b.zero + this.zero * b.natural + this.zero * b.zero)% 3 as unknown as E;
        azv.antizero = (this.natural * b.antizero + this.antizero * b.antizero + this.antizero * b.natural)% 3 as unknown as E;
        return azv;
    }

    add(b:AntiZeroVar<E>) : AntiZeroVar<E>
    {
        var azv: AntiZeroVar<E> = new AntiZeroVar();
        azv.natural = (this.natural + b.natural)% 3 as unknown as E;
        azv.zero = (b.zero + this.zero)% 3 as unknown as E;
        azv.antizero = (b.antizero + this.antizero)% 3 as unknown as E;
        return azv;
    }
}

type F3Group = 1 | 2;

console.log(new AntiZeroVar(1,0,2).mult(new AntiZeroVar(2,1,1)).add(new AntiZeroVar(1,0,1)));

</script>

<svelte:head>
	<title>Antizero</title>
	<meta name="description" content="Antizero" />
</svelte:head>

<div class="bg-base-100">
	
</div>

<style>
	


</style>
