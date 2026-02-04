var TValue = 0;
var CoinValue = 0;
var JewelValue = "";
var GemValue = "";

function SB_Test(){
	var SB = new StringBuilder();
	var result = "";
	/*SB.Append(_3D6());
	SB.Append("<br/>");
	SB.Append(numberWithCommas(10000));
	SB.Append("<br/>");
	var tTable = new RandomTable();
	tTable.Add("One",1,2);
	tTable.Add("Two",3,4);
	tTable.Add("Three",5,6);
	tTable.Add("Four",7,8);
	SB.Append(tTable.Generate(D(8)));
	SB.Append("<br/>");
	TempD = 5 / 2;
	SB.Append(TempD);
	SB.Append("<br/>");
	TempD = Math.floor(5 /2);
	SB.Append(TempD);
	SB.Append("<br/>");
	var pushTable = table_common_jewelry();
	SB.Append(pushTable.Generate(_1D10()));
	result = SB.ToString();*/
	//TValue = 0;
	//TValue = document.forms["myForm"]["TValue"].value;
	//result = coin_treasure(TValue);
	//SB.Append(common_jewels_gems());
	//SB.Append("<br/>");
	//SB.Append(uncommon_jewels_gems());
	//SB.Append("<br/>");
/*	SB.Append(gen_arcane_spells(D(6)));
	SB.Append("<br/>");
	SB.Append(gen_divine_spells(D(6)));
	SB.Append("<br/>");
	SB.Append("D1<br/>");
	SB.Append(spells_divine_1());
	SB.Append("<br/>");
	SB.Append("D2<br/>");
	SB.Append(spells_divine_2());
	SB.Append("<br/>");
	SB.Append("D3<br/>");
	SB.Append(spells_divine_3());
	SB.Append("<br/>");
	SB.Append("D4<br/>");
	SB.Append(spells_divine_4());
	SB.Append("<br/>");
	SB.Append("D5<br/>");
	SB.Append(spells_divine_5());
	SB.Append("<br/>");
	SB.Append("D6<br/>");
	SB.Append(spells_divine_6());
	SB.Append("<br/>");
	SB.Append("D7<br/>");
	SB.Append(spells_divine_7());
	SB.Append("<br/>");
	SB.Append("A1<br/>");
	SB.Append(spells_arcane_1());
	SB.Append("<br/>");
	SB.Append("A2<br/>");
	SB.Append(spells_arcane_2());
	SB.Append("<br/>");
	SB.Append("A3<br/>");
	SB.Append(spells_arcane_3());
	SB.Append("<br/>");
	SB.Append("A4<br/>");
	SB.Append(spells_arcane_4());
	SB.Append("<br/>");
	SB.Append("A5<br/>");
	SB.Append(spells_arcane_5());
	SB.Append("<br/>");
	SB.Append("A6<br/>");
	SB.Append(spells_arcane_6());
	SB.Append("<br/>");
	SB.Append("A7<br/>");
	SB.Append(spells_arcane_7());
	SB.Append("<br/>");
	SB.Append("A8<br/>");
	SB.Append(spells_arcane_8());
	SB.Append("<br/>");
	SB.Append("A9<br/>");
	SB.Append(spells_arcane_9());
	SB.Append("<br/>");*/
	SB.Append(common_weapons_armor());
	SB.Append("<br/>");
	SB.Append(uncommon_weapons_armor());
	SB.Append("<br/>");
	SB.Append(common_wands());
	SB.Append("<br/>");
	SB.Append(uncommon_wands());
	SB.Append("<br/>");
	SB.Append(common_rings());
	SB.Append("<br/>");
	SB.Append(common_other_magic_items());
	SB.Append("<br/>");
	SB.Append(uncommon_other_magic_items());
	SB.Append("<br/>");
	SB.Append(rare_other_magic_items());
	SB.Append("<br/>");
	result = SB.ToString();
	document.getElementById("contentTreasure").innerHTML = result;
	document.getElementById("contentcopyTreasure").value = result;
	return;
	
}

function Generate_Treasure(){
	var SB = new StringBuilder();
	var result = "";
	var TempS = "";
	TValue = 0;
	CoinValue = 0;
	JewelValue = "";
	GemValue = "";
//	SB_Test();
//	return;
	TValue = document.forms["myForm"]["TValue"].value;
	TValue = random_treasurevalue(TValue);
	TempS = uncommon_treasure();
	if (TempS != "") {
		SB.Append(TempS);
	}
	TempS = common_treasure();
	SB.AppendWithDelimiter(TempS, ", ");
	
	SB.AppendWithDelimiter(JewelValue, ", ");
	SB.AppendWithDelimiter(GemValue, ", ");

	CoinValue = parseFloat(CoinValue) + parseFloat(TValue);
	if (CoinValue > 0) {
		SB.AppendWithDelimiter(coin_treasure(CoinValue),", ");
	}
	
	result = SB.ToString();
	document.getElementById("contentTreasure").innerHTML = result;
	document.getElementById("contentcopyTreasure").value = result;
	return;
}

function uncommon_treasure(){
	var result = "";
	var SB = new StringBuilder();
	var tradeout = Math.floor(TValue / 1000);
	var i = 0;
	var divider = "";
	for (i = 0; i < tradeout; i++)
	{
		var Roll = _1D20();
		if (Roll > 10) {
			TValue = TValue - 1000;
			SB.AppendWithDelimiter(uncommon_tradeout(), divider);
			divider = ", ";
		}
	}			
	result = SB.ToString();
	return result;
}

function common_treasure(){
	var result = "";
	var SB = new StringBuilder();
	var tradeout = Math.floor(TValue / 100);
	var i = 0;
	var divider = "";
	for (I = 0; I < tradeout; I++)
	{
		var Roll = _1D20();
		if (Roll > 10) {
			TValue = TValue - 100;
			SB.AppendWithDelimiter(common_tradeout(), divider);
			divider = ", ";
		}
	}			
	result = SB.ToString();
	return result;
}

function uncommon_tradeout(){
	var result = "";
	var SB = new StringBuilder();
	var Roll = _1D20();
	var i = 0;
	if (Roll <= 2) {
		return uncommon_jewels_gems();
	}
	if (Roll <= 5) {
		for (i = 0; i < 10; i++)
		{
			SB.AppendWithDelimiter(common_magic_items(), ", ");
		}
		result = SB.ToString();
		return result;		
	}

	SB.Append(uncommon_magic_items());
	result = SB.ToString();
	return result;
}

function common_tradeout(){
	var result = "";
	var SB = new StringBuilder();
	var Roll = _1D20();
	if (Roll <= 2) {
		SB.Append(common_jewels_gems());
	} else {
		SB.Append(common_magic_items());
	}
	result = SB.ToString();
	return result;
}

function common_magic_items(){
	var result = "";
	var SB = new StringBuilder();
	var Roll = _1D20();
	if (Roll <= 8) {
		return common_potions();
	} 
	
	if (Roll <= 14) {
		return common_charm_scroll();
	} else {
		return common_weapons_armor();
	}
	return "";
}

function uncommon_magic_items(){
	var result = "";
	var SB = new StringBuilder();
	var Roll = _1D20();
	if (Roll <= 5) {
		return uncommon_potions();
	} 

	if (Roll <= 10) {
		return uncommon_charm_scroll();
	} 
	
	if (Roll <= 15) {
		return uncommon_weapons_armor();
	} else {
		return uncommon_misc_magic_items();
	}
	return "";
}

function common_potions() {
	var result = "";
	var rt = table_common_potions();
	result = rt.Pick();
	return result;
}

function uncommon_potions() {
	var result = "";
	var rt = table_common_potions();
	result = rt.Pick();
	result = result + ", ";
	result = result + rt.Pick();
	return result;
}

function common_charm_scroll(){
	var result = "";
	var Roll = _1D20();
	if (Roll <= 5) {
		return common_charms();
	} 
	return common_scolls();

}

function uncommon_charm_scroll(){
	var result = "";
	var Roll = _1D20();
	if (Roll <= 5) {
		return uncommon_charms();
	} 
	return uncommon_scolls();
}

function common_scolls() {
	var Roll = _1D20();
	if (Roll <= 10) {
		return common_arcane_scroll();
	} else {
		return common_divine_scroll();
	}
}

function uncommon_scolls() {
	var Roll = _1D20();
	if (Roll <= 10) {
		return uncommon_arcane_scroll();
	} else {
		return uncommon_divine_scroll();
	}
}

function common_charms() {
	var Roll = _1D20();
	if (Roll <= 10) {
		return common_arcane_charm();
	} else {
		return common_divine_charm();
	}
}

function uncommon_charms() {
	var Roll = _1D20();
	if (Roll <= 10) {
		return uncommon_arcane_charm();
	} else {
		return uncommon_divine_charm();
	}
}

function common_arcane_scroll() {
	return "Scroll of " + pick_arcane_spell(1);
}

function common_arcane_charm() {
	return "Charm of " + pick_arcane_spell(1);
}

function common_divine_scroll() {
	return "Scroll of " + pick_divine_spell(1);
}

function common_divine_charm() {
	return "Charm of " + pick_divine_spell(1);
}

function uncommon_arcane_scroll() {
	var Roll = _1D20();
	if (Roll <=4) {
		return "Scroll of " + pick_arcane_spell(D(2));
	}
	return "Scroll of " + pick_arcane_spell(D(3));
}

function uncommon_arcane_charm() {
	var Roll = _1D20();
	if (Roll <=4) {
		return "Charm of " + pick_arcane_spell(D(2));
	}
	return "Charm of " + pick_arcane_spell(D(3));
}

function uncommon_divine_scroll() {
	var Roll = _1D20();
	if (Roll <=4) {
		return "Scroll of " + pick_divine_spell(D(2));
	}
	return "Scroll of " + pick_divine_spell(D(3));
}

function uncommon_divine_charm() {
	var Roll = _1D20();
	if (Roll <=4) {
		return "Charm of " + pick_divine_spell(D(2));
	}
	return "Charm of " + pick_divine_spell(D(3));
}

function common_weapons_armor() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add(D(6) + " " + common_missiles() + " with +1 damage only",1,5);
	rt.Add("+1 " + common_shields(),6,11);
	rt.Add("+1 " + common_melee_weapons(),12,20);
	return rt.Generate(Roll);
}

function uncommon_weapons_armor() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add(cursed_armor(),1,1);
	rt.Add("+1 " + melee_swords() + " +2 vs Lycanthropes",2,3);
	rt.Add("+1 " + melee_swords() + " +2 vs Magic Users",5,7);
	rt.Add("+1 " + melee_swords() + " +3 vs Undead",8,9);
	rt.Add("+1 " + melee_swords() + " +3 vs Dragons",10,10);
	rt.Add("+1 " + melee_swords() + " w/ Light 15' radius",11,13);
	rt.Add("+2 " + melee_swords(),14,14);
	rt.Add("+1 " + common_armor(),15,19);
	rt.Add("-1 Cursed " + melee_swords(),20,20);
	return rt.Generate(Roll);
}

function cursed_armor() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Cursed -1 " + common_armor(),1,8);
	rt.Add("Cursed -2 " + common_armor(),9,10);
	rt.Add("Cursed -3 " + common_armor(),11,11);
	rt.Add("Cursed " + common_armor() + " that Attracts Missiles",12,14);
	rt.Add("Cursed " + common_armor() + " causes wearer to run away from combat.",15,17);
	rt.Add("Cursed " + common_armor() + " cause wearer to charge into combat.",18,20);
	return rt.Generate(Roll);
}

function uncommon_misc_magic_items() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add(common_wands(),1,2);
	rt.Add(uncommon_wands(),3,3);
	rt.Add(common_rings(),4,6);
	rt.Add(common_other_magic_items(),7,15);
	rt.Add(uncommon_other_magic_items(),16,20);
	return rt.Generate(Roll);
}
function common_wands() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Wand of <i>" + spells_arcane_1() + "</i> (2 charges)",1,10);
	rt.Add("Wand of <i>" + spells_arcane_1() + "</i> (5 charges)",11,16);
	rt.Add("Wand of <i>" + spells_arcane_3() + "</i> (2 charges)",17,20);

	return rt.Generate(Roll);
}

function uncommon_wands() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Wand of <i>" + spells_arcane_3() + "</i> (2 charges)",1,6);
	rt.Add("Wand of <i>" + spells_arcane_1() + "</i> (10 charges)",7,15);
	rt.Add("Wand of <i>" + spells_arcane_2() + "</i> (5 charges)",16,20);
	return rt.Generate(Roll);
}

function common_rings() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Ring of Fire Resistance",1,4);
	rt.Add("Ring of Mammal Control",5,5);
	rt.Add("Ring of Poison Resistance",6,8);
	rt.Add("Ring of Protection +1",9,14);
	rt.Add("Ring of Invisibility",15,20);
	return rt.Generate(Roll);
}

function common_other_magic_items() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Arrow of Direction",1,1);
	rt.Add("Boots of Elvenkind",2,3);
	rt.Add("Bracers of Defense AC 6[13]",4,4);
	rt.Add("Cloak of Elvenkind",5,6);
	rt.Add("Cloak of Protection +1",7,8);
	rt.Add("Dust of Appearance",9,9);
	rt.Add("Figurine of the Onyx Dog",10,10);
	rt.Add("Gauntlets of Dexterity",11,11);
	rt.Add("Gauntlets of Ogre Power",12,13);
	rt.Add("Gauntlets of Swimming and Climbing",14,14);
	rt.Add("Helm of Reading Magic and Languages",15,15);
	rt.Add("Necklace of Fire with 3 baubles",16,16);
	rt.Add("Rope of Climbing",17,18);
	rt.Add("Rope of Entanglement",19,19);
	rt.Add("Spade of Excavation",20,20);
	return rt.Generate(Roll);
}

function uncommon_other_magic_items() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Crystal Ball",1,4);
	rt.Add("Dust of Disappearance",5,12);
	rt.Add("Medallion of Detect Thoughts, 30 ft",13,18);
	rt.Add(rare_other_magic_items(),19,20);
	return rt.Generate(Roll);
}

function rare_other_magic_items() {
	var Roll = _1D20();
	var rt = new RandomTable();
	rt.Add("Bag of Holding",1,15);
	rt.Add("Bag of Devouring",16,20);
	return rt.Generate(Roll);
}



function gen_arcane_spells(quantity) {
	var rt = new RandomTable();
	var SB = new StringBuilder();
	rt.Push(spells_arcane_1());
	rt.Push(spells_arcane_2());
	rt.Push(spells_arcane_3());
	
	for (i = 0; i < quantity; i++) {
		SB.AppendWithDelimiter(rt.Pick(),", ");
	}	
	return SB.ToString();
}

function gen_divine_spells(quantity) {
	var rt = new RandomTable();
	var SB = new StringBuilder();
	rt.Push(spells_divine_1());
	rt.Push(spells_divine_2());

	for (i = 0; i < quantity; i++) {
		SB.AppendWithDelimiter(rt.Pick(),", ");
	}	
	return SB.ToString();
}


function coin_treasure(coin_value) {
	var SB = new StringBuilder();
	var maxcrowns = (Math.floor(coin_value / 640));
	var maxmarks = (Math.floor(coin_value / 480));
	var maxgp = (Math.floor(coin_value / 40));
	var ncrowns = 0;
	var nmarks = 0;
	var ngp = 0;
	var Roll = _1D20();
	
	if(maxcrowns > 0) ncrowns = D(maxcrowns) - 1;
	if(maxmarks > 0) nmarks = D(maxcrowns) - 1;
	if(maxgp > 0) ngp = D(maxcrowns) - 1;
	
	var ncrown_d = (parseFloat(coin_value) - (parseFloat(ncrowns) * 320))
	var nmark_d = (parseFloat(coin_value) - (parseFloat(nmarks) * 240))
	var ngp_d = (parseFloat(coin_value) - (parseFloat(ngp) * 20))

	if (Roll <= 14) {
		if (ncrowns > 0) {
			SB.Append(numberWithCommas(ncrowns));
			if (ncrowns == 1) {
				SB.Append(" crown");			
			} else {
				SB.Append(" crowns");
			}
		}
		if (ncrown_d > 0) {
			SB.AppendWithDelimiter(random_coinvaluetext(ncrown_d), ", ");
			SB.Append("d");
		}
		result = SB.ToString();
		return result;
	}
	
	if (Roll <= 18) {
		if (nmarks > 0) {
			SB.Append(numberWithCommas(nmarks));
			if (nmarks == 1) {
				SB.Append(" mark");			
			} else {
				SB.Append(" marks");			
			}
		}
		if (nmark_d > 0) {
			SB.AppendWithDelimiter(random_coinvaluetext(nmark_d), ", ");
			SB.Append("d");
		}
		result = SB.ToString();
		return result;
	}

	if (ngp > 0) {
		SB.Append(numberWithCommas(ngp));
		SB.Append(" gp");			
	}
	if (ngp_d > 0) {
		SB.AppendWithDelimiter(random_coinvaluetext(ngp_d), ", ");
		SB.Append("d");
	}
	result = SB.ToString();
	return result;
}

function random_coinvaluetext(coin_value){
	var result = "";
	var base_money_value = Math.floor(coin_value / 2);
	return numberWithCommas(parseFloat(base_money_value) + parseFloat(D(base_money_value) * 2));
}

function random_coinvalue(coin_value){
	var result = "";
	var base_money_value = Math.floor(coin_value / 2);
	return parseFloat(base_money_value) + parseFloat(D(base_money_value) * 2);
}

function random_treasurevalue(coin_value){
	var result = "";
	var base_money_value = Math.floor(coin_value / 4);
	return parseFloat(coin_value) + parseFloat(D(base_money_value));
}

function uncommon_jewelry(){
	var result = "";
	var rt = table_uncommon_jewelry();
	result = rt.Pick();
	return result;
}

function uncommon_gems(){
	var result = "";
	var rt = table_uncommon_gems();
	result = rt.Pick();
	return result;
}

function common_jewelry(){
	var result = "";
	var rt = table_common_jewelry();
	result = rt.Pick();
	return result;
}

function common_gems(){
	var result = "";
	var rt = table_common_gems();
	result = rt.Pick();
	return result;
}

function uncommon_jewels_gems(){
	var result = "";
	var SB = new StringBuilder();
	var Roll = _1D20();	
	if (Roll <= 10) {		
		SB.Append(JewelValue);
		SB.AppendWithDelimiter(uncommon_jewelry(),", ");
		JewelValue = SB.ToString();
	} else {
		SB.Append(GemValue);
		SB.AppendWithDelimiter(uncommon_gems(), ", ");
		GemValue = SB.ToString();
	}
	return "";
}


function common_jewels_gems(){
	var result = "";
	var SB = new StringBuilder();
	var Roll = _1D20();	
	if (Roll <= 10) {		
		SB.Append(JewelValue);
		SB.AppendWithDelimiter(uncommon_jewelry(),", ");
		JewelValue = SB.ToString();
	} else {
		SB.Append(GemValue);
		SB.AppendWithDelimiter(uncommon_gems(), ", ");
		GemValue = SB.ToString();
	}
	return "";
}



function table_common_jewelry() {
	var rt = new RandomTable();
	rt.Push("Copper Necklace with Carnelian Gem (36d)");
	rt.Push("Brass Brooch (1d)");
	rt.Push("Brass Ring with Engravings (1d)");
	rt.Push("Bronze Necklace (10d)");
	rt.Push("Glass Ring with Carvings(1d)");
	rt.Push("Copper Earring with Carvings (1d)");
	rt.Push("Glass Brooch with Inlays of Writing (2d)");
	rt.Push("Bone Necklace with Onyx Gem (28d)");
	rt.Push("Copper Bracelet (8d)");
	rt.Push("Glass Pendent (2d)");
	return rt;
}

function table_uncommon_jewelry() {
	var rt = new RandomTable();
	rt.Push("Silver Bracelet (120d)");
	rt.Push("Silver Ring with Jade Gem (54d)");
	rt.Push("Silver Pendent with Garnet Gem (73d)");
	rt.Push("Ivory Necklace (70d)");
	rt.Push("Silver Necklace (180d)");
	rt.Push("Silver Brooch with Amethyst Gem (58d)");
	rt.Push("Silver Bracelet with Engravings (80d)");
	rt.Push("Ivory Necklace with Garnet Gem (100d)");
	rt.Push("Silver Brooch with Topaz Gem (269d)");
	rt.Push("Silver Brooch with Jacinth Gem (64d)");
	return rt;
}

function table_common_gems() {
	var rt = new RandomTable();
	rt.Push("Agate (5d)");
	rt.Push("Glass (1d)");
	rt.Push("Quartz (Rock Crystal) (5d)");
	rt.Push("Turquoise (5d)");
	rt.Push("Jasper (25d)");
	rt.Push("Onyx (25d)");
	return rt;
}

function table_uncommon_gems() {
	var rt = new RandomTable();
	rt.Push("Amber (50d)");
	rt.Push("Coral (50d)");
	rt.Push("Garnet (50d)");
	rt.Push("Jade (50d)");
	rt.Push("Opal (250d)");
	rt.Push("Pearl (250d)");
	return rt;
}

function table_common_potions() {
	var rt = new RandomTable();
	rt.Push("Potion of Diminution");
	rt.Push("Potion of Gaseous Form");
	rt.Push("Potion of Growth");
	rt.Push("Potion of Healing");
	rt.Push("Potion of Invisibility");
	rt.Push("Potion of Levitation");
	return rt;
}
