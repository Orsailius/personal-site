<script lang="ts">
	// Inspired by https://svelte.dev/repl/810b0f1e16ac4bbd8af8ba25d5e0deff?version=3.4.2.
	import {flip} from 'svelte/animate';
	
	let stats = ["Memory","Problem Solving", "Wits",
	 "Perception","Wayfinding","Intuition",
	 "Strength","Agility","Health",
	 "Leadership","Empathy","Calm","Communication"];

	let baskets = [
    {
      "name": "Melee",
      "items": []
    },
    {
      "name": "Ranged",
      "items": []
    },
    {
      "name": "Spellcaster",
      "items": []
    },
    {
      "name": "Priest",
      "items": []
    },
    {
      "name": "Charisma",
      "items": []
    },
    {
      "name": "Rogue",
      "items": []
    },
	{
      "name": "Uncategorized",
      "items": ['Acrobat','Aeromancer','Alchemist',
      'Apothecary','Arcanist','Archeologist',
      'Archer','Armorer','Assassin','Barbarian','Bard','Battlemage','Beastlord','Berserker',,'Bladesinger','Blighter','Bloodmage','Brawler',
	  'Brewmeister','Brigand','Cavalier','Cavalryman','Cestus','Champion','Channeler','Charioteer','Chevalier','Chirurgeon','Chronomancer','Cleric','Conjurer','Corsair','Crossbowman','Crusader','Cursebearer','Deathknight','Defender','Demolitionist','Demoniac','Dervish','Diabolist','Diplomat','Dirgesinger','Diviner','Djinncaller','Doomsayer','Dragonrider','Dragoon','Dreadnaught','Dreamwalker','Druid','Duelist','Earthspeaker','Elementalist','Empath','Enchanter','Engineer','Evoker','Executioner','Exile','Exorcist','Explorer','Falconer','Fearmonger','Fencer','Fighter','Firedancer','Fleshwarper','Forrester','Frostmage','Fusilier','Gadgeteer','Geomancer','Gladiator','Grappler','Gravecaller','Guardian','Guerilla','Gunslinger','Gypsy','Harbinger','Harrier','Haruspex','Healer','Heirophant','Herald','Herbalist','Hermit','Hero','Hexmage','Highwayman','Hivemaster','Hoodwink','Hospitalier','Houndmaster','Hunter','Hydromancer','Hymnist','Hypnotist','Illusionist','Incanter','Infiltrator','Inquisitor','Invoker','Jester','Jinx','Juggernaut','Justicar','Kensai','Knight','Lancer','Lasher','Legionnaire','Lich','Lightbringer','Machinist','Mageknight','Magician','Magus','Malefactor','Malus','Maniac','Marauder','Mariner','Marshal','Masque','Mastermind','Medium','Mentalist','Mercenary','Merchant','Mindbender','Miner','Minstrel','Monk','Mountaineer','Musketeer','Mysterion','Mystic','Necromancer','Nethermancer','Ninja','Noble','Nomad','Occultist','Oracle','Outcast','Outlaw','Outrider','Paladin','Paragon','Pathfinder','Piper','Pirate','Plaguemancer','Planeswalker','Poisoner','Priest','Prophet','Psionicist','Psychic','Pugilist','Pyromancer','Qabalist','Raider','Raindancer','Rake','Ranger','Ratcatcher','Reaver','Riddler','Rifleman','Ritualist','Rogue','Ronin','Royal','Runic','Saboteur','Sage','Saint','Samurai','Sandman','Sapper','Savage','Savant','Scavenger','Scholar','Scout','Scrier','Seasinger','Sensei','Sentinel','Shadowmancer','Shaman','Shapeshifter','Sheriff','Shieldbearer','Sibyl','Siegemaster','Siren','Skald','Skirmisher','Skycaptain','Slavemaster','Slayer','Slimelord','Sneak','Sniper','Soldier','Soothsayer','Sorcerer','Soulblade','Spearman','Spellbinder','Spellbreaker','Spellknife','Spiritualist','Spy','Stalker','Stormlord','Strategist','Strider','Summoner','Swashbuckler','Swordsman','Tactician','Taskmaster','Telepath','Templar','Thaumaturgist','Theurge','Thief','Thrall','Tinkerer','Tormentor','Totemist','Transmogrifist','Transmuter','Trapsmith','Trickster','Ur-Priest','Valkyrie','Vanguard','Viking','Vindicator','Vizier','Voidcaller','Wanderer','Warden','Warlock','Warlord','Warpriest','Warrior','Weaponmaster','Wilder','Windcaller','Witch','Witchdoctor','Wizard','Wonderworker','Wormtongue','Wyrd','Wyrmcaller','Zealot','']
    }
  ];
	
	let hoveringOverBasket:String|null;
	
	function dragStart(event:any, basketIndex:number, itemIndex:number) 
    {
            // The data we want to make available when the element is dropped
        // is the index of the item being dragged and
        // the index of the basket from which it is leaving.
        const data = {basketIndex, itemIndex};
        event.dataTransfer.setData('text/plain', JSON.stringify(data));
	}
	
	function drop(event:any, basketIndex:number) 
	{
		event.preventDefault();
    	const json = event.dataTransfer.getData("text/plain");
		const data = JSON.parse(json);
		
		// Remove the item from one basket.
		// Splice returns an array of the deleted elements, just one in this case.
		const [item] = baskets[data.basketIndex].items.splice(data.itemIndex, 1);
		
    // Add the item to the drop target basket.
		baskets[basketIndex].items.push(item);
		baskets = baskets;
		
		hoveringOverBasket = null;
	}
</script>

<p>Drag Specs to class Bucket</p>

<div class="grid grid-cols-7 m-8">
	{#each baskets as basket, basketIndex (basket)}
	<div animate:flip class="col-span-1 m-1">
		<b>{basket.name}</b>
		<ul
			class:hovering={hoveringOverBasket === basket.name}
			on:dragenter={() => hoveringOverBasket = basket.name}
			on:dragleave={() => hoveringOverBasket = null}
			on:drop={event => drop(event, basketIndex)}
			ondragover="return false"
		>
			{#each basket.items as item, itemIndex (item)}
				<div class="item" animate:flip>
					<li draggable={true}
					on:dragstart={event => dragStart(event, basketIndex, itemIndex)}
						>
						{item}
					</li>
				</div>
			{/each}
		</ul>
	</div>
	{/each}
</div>

<style>
	.hovering {
		border-color: orange;
	}
	.item {
		display: inline; /* required for flip to work */
	}
	li {
		background-color: lightgray;
		cursor: pointer;
		display: inline-block;
		margin-right: 10px;
		padding: 10px;
	}
	li:hover {
		background: orange;
		color: white;
	}
  ul {
		border: solid lightgray 1px;
		align-items: center;
		display: block; /* required for drag & drop to work when .item display is inline */
		height: 60px; /* needed when empty */
		padding: 10px;
	}
</style>