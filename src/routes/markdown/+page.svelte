<script lang="js">
	import markdownit from 'markdown-it'
	// @ts-ignore
	import { full as emoji } from 'markdown-it-emoji'
	// @ts-ignore
	import markdownAttrs from 'markdown-it-attrs'
	// @ts-ignore
	import markdownFootnote from 'markdown-it-footnote'
	import hljs from 'highlight.js'
	import { onMount } from 'svelte';	
	import { browser } from '$app/environment';

	const md = markdownit({
		html: true,
  		highlight: function (str, lang) 
		{
			if (lang && hljs.getLanguage(lang)) {
			try {
				return hljs.highlight(str, { language: lang }).value;
			} catch (__) {}
			}

			return ''; // use external default escaping
		},
		linkify: true,
		typographer: true
		}).use(emoji).use(markdownAttrs).use(markdownFootnote)		

	let defaultMarkdown = `
__Advertisement :)__

- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image
  resize in browser.
- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly
  i18n with plurals support and easy syntax.

You will like those projects!

---
# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

## Horizontal Rules

___

---

***

## Use DaisyUI and Tailwind styles

This is Semibold {.font-semibold}

A Little Different {.p-4 .m-4 .text-white .font-mono .btn .btn-primary}


## Typographic replacements

Enable typographer option to see result
(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with 
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as 

Start numbering with offset:

57. foo
1. bar


## Code

Inline \`code\`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

\`\`\`
Sample text here...
\`\`\`

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


## Plugins

The killer feature o is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).


### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :cry: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.


### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.
`

	let markdown = browser ? (window.localStorage.getItem("markdown") ?? defaultMarkdown) : defaultMarkdown

	$: result = md.render(markdown);

	$:  if (browser && window.localStorage.getItem("markdown"))
		{
			console.log("Saving")
			window.localStorage.setItem("markdown", markdown)
		}
		else
		{
			console.log("Not in browser")
		}

	let showMarkdown = true;

	function saveMarkdownFile ()
	{
		const link = document.createElement("a");
		const file = new Blob([markdown], { type: 'text/plain' });
		link.href = URL.createObjectURL(file);
		link.download = "markdown.md";
		link.click();
		URL.revokeObjectURL(link.href);
	};

	function saveHTMLFile ()
	{
		const link = document.createElement("a");
		const file = new Blob([result], { type: 'text/plain' });
		link.href = URL.createObjectURL(file);
		link.download = "result.html";
		link.click();
		URL.revokeObjectURL(link.href);
	};

</script>

<svelte:head>
	<title>Markdown Editor</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div  class="bg-base-100">
	<h1 class="text-4xl p-8 font-semibold">Test out your Markdown!</h1>
	<button class="btn ml-8" on:click={saveMarkdownFile}>
		<div>&#128190</div>
		Save Markdown
	</button>
	<button class="btn ml-8" on:click={saveHTMLFile}>
		<div>&#128190</div>
		Save HTML
	</button>
	<div class="fixed left-0 inset-y-1/2">
        <label class="swap">
			<input type="checkbox"  bind:checked={showMarkdown}/>		
			<div class="swap-on fill-current text-4xl" >&#8656;</div>
			<div class="swap-off fill-current text-4xl" >&#8658;</div>
		</label>
    </div>
	{#if showMarkdown}
		<div class="hidden md:block">
			<div class="grid grid-cols-8 w-full">
				<textarea bind:value={markdown} class="textarea col-span-4 m-8 p-8 w-full" />
				<div class="prose lg:prose-xl col-span-4 m-8 p-8 w-full">
					{@html result}
				</div>	
			</div>
		</div>
		<div class="md:hidden text-column">			
			<textarea bind:value={markdown} class="textarea m-8 p-8 col-span-2 h-screen"/>
		</div>		
	{:else}	
		<div class="text-column">
			<div class="prose lg:prose-xl col-span-4 m-8 p-8 w-full">
				{@html result}
			</div>	
		</div>
	{/if}
</div>