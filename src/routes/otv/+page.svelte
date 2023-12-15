<script lang="ts">
	import { browser } from '$app/environment';	

	let style = 0
	let link = "https://www.youtube.com/embed/gnEIeVWLtbU"

	var styles = ["greyscale","sepia","crt","convolve"]

	$: videoEmbedLink = formatVideoLink(link)

	function formatVideoLink(unknownLink:string) : string
	{
		if(unknownLink.indexOf("embed") >= 0)
		{
			return unknownLink
		}
		//https://stackoverflow.com/questions/21607808/convert-a-youtube-video-url-to-embed-code
		const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
		const match = unknownLink.match(regExp);
		if (match == null)
		{		
			return "https://www.youtube.com/embed/gnEIeVWLtbU";
		}
		let normalLink = (match && match[2].length === 11) ? match[2] as string : "";
		normalLink = "https://www.youtube.com/embed/" + normalLink;
		console.log("Formatted to embed: " + normalLink);
		return normalLink;
	}

</script>

<svelte:head>
	<title>Old Timey Video</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="bg-base-100">
	<h1 class="text-4xl pt-8 font-semibold ">Watch video like back in the day!</h1>
	<div class="grid m-4 ml-8 mr-8 grid-rows-3 grid-cols-1 md:grid-cols-3 md:grid-rows-1">
		<label class="form-control p-2 col-span-1">
			<div class="label">
				<span class="label-text">Era</span>
			</div>
			<select class="select select-bordered select-primary select-larg" bind:value={style}>
				<option value={0}>Black and White</option>
				<option value={1}>Sepia</option>
				<option value={2}>CRT</option>
				<option value={3}>Low Rez</option>
			</select>			
		</label>
		<label class="form-control p-2 col-span-2">
			<div class="label">
			  <span class="label-text">Youtube Video URL</span>
			</div>
			<input type="text" placeholder="Video link" bind:value={link} class="input input-bordered" />
		  </label>
	</div>	
	<div class={"m-8 mr-16 video-container " + (style == 2 ? "crt" : "")}>		
		<iframe class={"responsive-iframe " + styles[style]} src={videoEmbedLink} title="Ice Ice MATRIX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>		
	</div>		
</div>

<style>
	.video-container {
  position: relative;
  overflow: hidden;
  width: 95%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}

/* Then style the iframe to fit in the container div with full height and width */
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

.greyscale
{
	filter: grayscale(1);
}

.sepia
{
	filter: sepia(1);
}

@keyframes textShadow {
  0% {
    text-shadow: 0.4389924193300864px 0 1px rgba(0,30,255,0.5), -0.4389924193300864px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  5% {
    text-shadow: 2.7928974010788217px 0 1px rgba(0,30,255,0.5), -2.7928974010788217px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  10% {
    text-shadow: 0.02956275843481219px 0 1px rgba(0,30,255,0.5), -0.02956275843481219px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  15% {
    text-shadow: 0.40218538552878136px 0 1px rgba(0,30,255,0.5), -0.40218538552878136px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  20% {
    text-shadow: 3.4794037899852017px 0 1px rgba(0,30,255,0.5), -3.4794037899852017px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  25% {
    text-shadow: 1.6125630401149584px 0 1px rgba(0,30,255,0.5), -1.6125630401149584px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  30% {
    text-shadow: 0.7015590085143956px 0 1px rgba(0,30,255,0.5), -0.7015590085143956px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  35% {
    text-shadow: 3.896914047650351px 0 1px rgba(0,30,255,0.5), -3.896914047650351px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  40% {
    text-shadow: 3.870905614848819px 0 1px rgba(0,30,255,0.5), -3.870905614848819px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  45% {
    text-shadow: 2.231056963361899px 0 1px rgba(0,30,255,0.5), -2.231056963361899px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  50% {
    text-shadow: 0.08084290417898504px 0 1px rgba(0,30,255,0.5), -0.08084290417898504px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  55% {
    text-shadow: 2.3758461067427543px 0 1px rgba(0,30,255,0.5), -2.3758461067427543px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  60% {
    text-shadow: 2.202193051050636px 0 1px rgba(0,30,255,0.5), -2.202193051050636px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  65% {
    text-shadow: 2.8638780614874975px 0 1px rgba(0,30,255,0.5), -2.8638780614874975px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  70% {
    text-shadow: 0.48874025155497314px 0 1px rgba(0,30,255,0.5), -0.48874025155497314px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  75% {
    text-shadow: 1.8948491305757957px 0 1px rgba(0,30,255,0.5), -1.8948491305757957px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  80% {
    text-shadow: 0.0833037308038857px 0 1px rgba(0,30,255,0.5), -0.0833037308038857px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  85% {
    text-shadow: 0.09769827255241735px 0 1px rgba(0,30,255,0.5), -0.09769827255241735px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  90% {
    text-shadow: 3.443339761481782px 0 1px rgba(0,30,255,0.5), -3.443339761481782px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  95% {
    text-shadow: 2.1841838852799786px 0 1px rgba(0,30,255,0.5), -2.1841838852799786px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  100% {
    text-shadow: 2.6208764473832513px 0 1px rgba(0,30,255,0.5), -2.6208764473832513px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
}
.crt::after {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(18, 16, 16, 0.1);
  opacity: 0;
  z-index: 2;
  pointer-events: none;
}
.crt::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  z-index: 2;
  background-size: 100% 2px, 3px 100%;
  pointer-events: none;
}
.crt {
  animation: textShadow 1.6s infinite;
  filter: url(#crt) saturate(150%);
}

.convolve {
  filter: url(#convolve) ;
}


</style>

<svg>
	<filter id="crt">
		<!---->
			<feTurbulence id="turbulence" type="turbulence" baseFrequency="0.00001 0.00002" numOctaves="1" 
			result="NOISE"></feTurbulence>
			 <feDisplacementMap id="displace" in="SourceGraphic" in2="NOISE" scale="2">
			 </feDisplacementMap>
			<animate xlink:href="#turbulence" attributeName="baseFrequency" dur="60s" keyTimes="0;0.5;1"
		  values="0.01 0.02;0.02 0.04;0.01 0.02" repeatCount="indefinite"></animate>
		  <feMorphology in="displace" operator="erode" radius="0.25"></feMorphology>
	</filter>
</svg>

<svg>
	<filter id="convolve">
	  <feConvolveMatrix id="emboss" kernelMatrix
	  ="-2 -1 0 
		-1 1 1 
		0 1 2" />
		<feMorphology in="emboss" operator="dilate" radius="1">
		</feMorphology> 		
  </filter>
</svg>