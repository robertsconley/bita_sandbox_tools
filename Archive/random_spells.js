function pick_arcane_spell(level) {
	if (level == 1) return spells_arcane_1();
	if (level == 2) return spells_arcane_2();
	if (level == 3) return spells_arcane_3();
	if (level == 4) return spells_arcane_4();
	if (level == 5) return spells_arcane_5();
	if (level == 6) return spells_arcane_6();
	if (level == 7) return spells_arcane_7();
	if (level == 8) return spells_arcane_8();
	if (level == 9) return spells_arcane_9();
	return "n/a";
}
function pick_divine_spell(level) {
	if (level == 1) return spells_divine_1();
	if (level == 2) return spells_divine_2();
	if (level == 3) return spells_divine_3();
	if (level == 4) return spells_divine_4();
	if (level == 5) return spells_divine_5();
	if (level == 6) return spells_divine_6();
	if (level == 7) return spells_divine_7();
	return "n/a"
}


function spells_divine_1() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Command",1,4);
	rt.Add("Create Scroll",5,5);
	rt.Add("Cure Light Wounds",6,9);
	rt.Add("Detect Evil",10,12);
	rt.Add("Detect Magic",13,14);
	rt.Add("Light",15,16);
	rt.Add("Protection from Evil",17,18);
	rt.Add("Purify Food and Drink",19,20);
	return rt.Generate(Roll);
}

function spells_divine_2() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Bless",1,2);
	rt.Add("Entangle",3,6);
	rt.Add("Find Traps",7,8);
	rt.Add("Hold Person",9,12);
	rt.Add("Silence, 15,foot Radius",13,16);
	rt.Add("Snake Charm",17,18);
	rt.Add("Speak with Animals",19,20);
	return rt.Generate(Roll);
}

function spells_divine_3() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Consecrate",1,1);
	rt.Add("Continual Light",2,4);
	rt.Add("Cure Disease",5,8);
	rt.Add("Enchant Charm",9,9);
	rt.Add("Locate Object",10,12);
	rt.Add("Prayer",13,14);
	rt.Add("Remove Curse",15,18);
	rt.Add("Speak with Dead",19,20);
	return rt.Generate(Roll);
}

function spells_divine_4() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Create Water",1,2);
	rt.Add("Cure Serious Wounds",3,8);
	rt.Add("Neutralize Poison",9,13);
	rt.Add("Protect from Evil, 10' Radius",14,16);
	rt.Add("Speak with Plants",17,18);
	rt.Add("Sticks to Snakes",19,20);
	return rt.Generate(Roll);
}

function spells_divine_5() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Commune",1,1);
	rt.Add("Consecrate Item",2,2);
	rt.Add("Create Food",3,3);
	rt.Add("Disenchant Item",4,4);
	rt.Add("Dispel Evil",5,7);
	rt.Add("Finger of Death",8,11);
	rt.Add("Insect Plague",12,12);
	rt.Add("Lesser Restoration",13,14);
	rt.Add("Quest",15,15);
	rt.Add("Raise Dead",16,20);
	return rt.Generate(Roll);
}

function spells_divine_6() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Animate Object",1,3);
	rt.Add("Blade Barrier",4,7);
	rt.Add("Conjuration of Animals",8,10);
	rt.Add("Exorcise",11,12);
	rt.Add("Find the Path",13,14);
	rt.Add("Speak with Monsters",15,16);
	rt.Add("Word of Recall",17,20);
	return rt.Generate(Roll);
}

function spells_divine_7() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Aerial Servant",1,1);
	rt.Add("Astral Spell",2,2);
	rt.Add("Control Weather",3,3);
	rt.Add("Earthquake",4,4);
	rt.Add("Energy Drain",5,6);
	rt.Add("Final Death",7,8);
	rt.Add("Holy Word",9,10);
	rt.Add("Part Water",11,11);
	rt.Add("Restoration",12,14);
	rt.Add("Resurrection",15,17);
	rt.Add("Symbol",18,19);
	rt.Add("Wind Walk",20,20);
	return rt.Generate(Roll);
}

function spells_arcane_1() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Charm Person",1,3);
	rt.Add("Detect Magic",4,4);
	rt.Add("Hold Portal",5,5);
	rt.Add("Magic Missile",6,10);
	rt.Add("Protection from Evil",11,12);
	rt.Add("Shield",13,14);
	rt.Add("Sleep",15,19);
	rt.Add(spells_arcane_1b(),20,20);
	return rt.Generate(Roll);
}

function spells_arcane_1b() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Create Scroll",1,1);
	rt.Add("Enchant Magic Staff",2,2);
	rt.Add("Light",3,8);
	rt.Add("Read Languages",9,14);
	rt.Add("Read Magic",15,20);
	return rt.Generate(Roll);
}

function spells_arcane_2() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Darkness, 15' Radius",1,1);
	rt.Add("Detect Evil",2,3);
	rt.Add("Detect Invisibility",4,4);
	rt.Add("Detect Thoughts",5,6);
	rt.Add("Invisibility",7,7);
	rt.Add("Knock",8,8);
	rt.Add("Levitate",9,9);
	rt.Add("Locate Object",10,10);
	rt.Add("Mirror Image",11,12);
	rt.Add("Phantasmal Force",13,13);
	rt.Add("Strength",14,14);
	rt.Add("Web",15,18);
	rt.Add("Wizard Lock",19,19);
	rt.Add(spells_arcane_2b(),20,20);
	return rt.Generate(Roll);
}

function spells_arcane_2b() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Continual Light",1,6);
	rt.Add("Enchant Potion",7,10);
	rt.Add("Magic Mouth",11,14);
	rt.Add("Pyrotechnics",15,20);
	return rt.Generate(Roll);
}

function spells_arcane_3() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Dispel Magic",1,2);
	rt.Add("Fireball",3,6);
	rt.Add("Fly",7,7);
	rt.Add("Haste",8,9);
	rt.Add("Hold Person",10,10);
	rt.Add("Invisibility, 10' Radius",11,11);
	rt.Add("Lightning Bolt",12,14);
	rt.Add("Monster Summoning I",15,15);
	rt.Add("Protect from Evil, 10' Radius",16,16);
	rt.Add("Protect from Missiles",17,17);
	rt.Add("Suggestion",18,19);
	rt.Add(spells_arcane_3b(),20,20);
	return rt.Generate(Roll);
}

function spells_arcane_3b() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Clairaudience",1,3);
	rt.Add("Clairvoyance",4,6);
	rt.Add("Darkvision",7,9);
	rt.Add("Explosive Runes",10,11);
	rt.Add("Rope Trick",12,13);
	rt.Add("Scryguard",14,15);
	rt.Add("Slow",16,18);
	rt.Add("Water Breathing",19,20);
	return rt.Generate(Roll);
}

function spells_arcane_4() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Charm Monster",1,1);
	rt.Add("Confusion",2,2);
	rt.Add("Dimension Door",3,5);
	rt.Add("Ice Storm",6,8);
	rt.Add("Limited Teleport",9,9);
	rt.Add("Polymorph Other",10,11);
	rt.Add("Polymorph Self",12,12);
	rt.Add("Remove Curse",13,13);
	rt.Add("Wall of Fire",14,16);
	rt.Add("Wall of Ice",17,19);
	rt.Add(spells_arcane_4b(),20,20);
	return rt.Generate(Roll);
}

function spells_arcane_4b() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Fear",1,3);
	rt.Add("Hallucinatory Terrain",4,6);
	rt.Add("Enchant Charm",7,7);
	rt.Add("Extension I",8,9);
	rt.Add("Massmorph",10,12);
	rt.Add("Monster Summoning II",13,15);
	rt.Add("Plant Growth",15,17);
	rt.Add("Wizard Eye",18,20);
	return rt.Generate(Roll);
}

function spells_arcane_5() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Cloudkill",1,2);
	rt.Add("Command, Greater",3,3);
	rt.Add("Conj. of Air Elemental",4,4);
	rt.Add("Conj. of Earth Elemental",5,5);
	rt.Add("Conj. of Fire Elemental",6,6);
	rt.Add("Feeblemind",7,7);
	rt.Add("Flesh to Stone",8,9);
	rt.Add("Hold Monster",10,11);
	rt.Add("Passwall",12,12);
	rt.Add("Telekinesis",13,13);
	rt.Add("Teleport",14,16);
	rt.Add("Wall of Iron",17,18);
	rt.Add("Wall of Stone",19,19);
	rt.Add(spells_arcane_5b(),20,20)
	return rt.Generate(Roll);
}

function spells_arcane_5b() {
	var rt = new RandomTable();
	var Roll = _1D20();
	rt.Add("Animal Growth",1,1);
	rt.Add("Animate Dead",2,5);
	rt.Add("Conj. of Water Elemental",6,6);
	rt.Add("Contact Other Plane",7,10);
	rt.Add("Enchant Wands",11,11);
	rt.Add("Extension II",12,12);
	rt.Add("Magic Jar",13,14);
	rt.Add("Monster Summoning III",15,17);
	rt.Add("Transmute Rock to Mud",18,20);
	return rt.Generate(Roll);
}

function spells_arcane_6() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Death Spell",1,4);
	rt.Add("Disintegrate",2,8);
	rt.Add("Invisible Stalker",8,10);
	rt.Add("Monster Summoning IV",11,11);
	rt.Add("Project Image",12,12);
	rt.Add("Reincarnation",13,13);
	rt.Add("Repulsion",14,15);
	rt.Add("Shield of Magic",16,18);
	rt.Add(spells_arcane_6b(),19,20)
	return rt.Generate(Roll);
}

function spells_arcane_6b() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Control Weather",1,1);
	rt.Add("Create Teleport Circle",2,5);
	rt.Add("Disenchant Item",6,7);
	rt.Add("Enchant Item",8,11);
	rt.Add("Geas",12,12);
	rt.Add("Legend Lore",13,14);
	rt.Add("Lower Water",15,15);
	rt.Add("Move Earth",16,16);
	rt.Add("Part Water",17,17);
	rt.Add("Stone to Flesh",18,20);
return rt.Generate(Roll);
}

function spells_arcane_7() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Charm Plants",1,1);
	rt.Add("Conjuration of Demons",2,2);
	rt.Add("Delayed Blast Fireball",3,4);
	rt.Add("Extension III",5,5);
	rt.Add("Limited Wish",6,9);
	rt.Add("Mass Invisibility",10,11);
	rt.Add("Monster Summoning V",12,12);
	rt.Add("Phase Door",13,14);
	rt.Add("Power Word, Stun",15,17);
	rt.Add("Reverse Gravity",18,19);
	rt.Add("Simulacrum",20,20);
return rt.Generate(Roll);
}

function spells_arcane_8() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Clone",1,1);
	rt.Add("Mass Charm",2,6);
	rt.Add("Monster Summoning VI",7,10);
	rt.Add("Permanency",11,11);
	rt.Add("Polymorph Object",12,14);
	rt.Add("Power Word, Blind",15,19);
	rt.Add("Symbol",20,20);
	return rt.Generate(Roll);
}

function spells_arcane_9() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Astral Spell",1,1);
	rt.Add("Gate",2,2);
	rt.Add("Maze",3,3);
	rt.Add("Meteor Swarm",4,5);
	rt.Add("Monster Summoning VII",6,6);
	rt.Add("Power Word, Kill",7,8);
	rt.Add("Prismatic Sphere",9,11);
	rt.Add("Shape Change",12,14);
	rt.Add("Time Stop",15,17);
	rt.Add("Wish",18,20);
	return rt.Generate(Roll);
}

function common_armor() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Soft Leather Armor",1,4);
	rt.Add("Ring Armor",5,10);
	rt.Add(uncommon_armor(),11,20);
	return rt.Generate(Roll);
}

function uncommon_armor() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Mail Armor",1,15);
	rt.Add("Plate Armor",16,20);
	return rt.Generate(Roll);
}

function common_shields() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Buckler",1,5);
	rt.Add("Medium Shield",6,20);
	return rt.Generate(Roll);
}

function melee_swords() {
	var Roll = _1D6();
	var rt = new RandomTable();
	rt.Add("Shortsword",1,2);
	rt.Add("Broadsword",3,5);
	rt.Add("Greatsword",6,6);
	return rt.Generate(Roll);
}

function common_melee_weapons() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Battle Axe",1,3);
	rt.Add("Throwing Axe",4,4);
	rt.Add("Large Dagger",5,7);
	rt.Add("Small Dagger",8,8);
	rt.Add("Small Mace",9,9);
	rt.Add("Mace",10,11);
	rt.Add("Broadsword",12,16);
	rt.Add("Shortsword",17,19);
	rt.Add("Greatsword",20,20);
	return rt.Generate(Roll);
}

function common_missiles() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Arrows",1,13);
	rt.Add("Bolts",14,20);
	return rt.Generate(Roll);
}

function common_missile_weapons() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add(common_thrown_weapons(),1,3);
	rt.Add("Short Bow",4,6);
	rt.Add("Regular Bow",7,10);
	rt.Add("Long Bow",11,13);
	rt.Add("Light Crossbow",14,16);
	rt.Add("Heavy Crossbow",17,18);
	rt.Add("Knight Killer Crossbow ",19,20);
	return rt.Generate(Roll);
}

function common_thrown_weapons() {
	var Roll = _1D6();
	var rt = new RandomTable();
	rt.Add("Small Dagger",1,3);
	rt.Add("Throwing Axe",4,5);
	rt.Add("One Handed Spear",6,6);
	return rt.Generate(Roll);
}