var d_value;
var d_prof;

function D(dice) {
    return Math.ceil(dice * Math.random());
}

function _1D6() {
	return D(6);
}

function _2D6() {
	return D(6) + D(6);
}

function _3D6() {
	return D(6) + D(6) + D(6);
}

function _4D6() {
	return D(6) + D(6) + D(6) + D(6);
}

function _5D6() {
	return D(6) + D(6) + D(6) + D(6) + D(6);
}

function _6D6() {
	return D(6) + D(6) + D(6) + D(6) + D(6) + D(6);
}

function _2D8() {
	return D(8) + D(8);
}

function _3D8() {
	return D(8) + D(8) + D(8);
}

function _2D12() {
	return D(12) + D(12);
}

function _1D10() {
	return D(10);
}

function _2D10() {
	return D(10) + D(10);
}

function _3D10() {
	return D(10) + D(10) + D(10);
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function _1DF() {
    var roll = D(6);
    var result = 0;
    switch (roll) {
        case 1:
            return -1;
        case 2:
            return -1;
        case 3:
            return 0;
        case 4:
            return 0;
        case 5:
            return 1;
        case 6:
            return 1;
    }
}

class StringBuilder {
	constructor(){
		this.stringresult = "";
	}
	
	Test() {
		this.stringresult = "Test Done";
		return;
	}
	
	Append(stringtext){
		this.stringresult = this.stringresult + stringtext;
	}
	
	ToString(){
		return this.stringresult;
	}
}

class RandomTable {
	constructor() {
		this.rEntries = [];
		this.nEntries = 0;
	}
	Add(value, loVal, hiVal){
		var tEntry = new RandomEntry(value, loVal, hiVal);
		this.rEntries.push(tEntry);
		this.nEntries++;
	}
	
	Generate(Roll){
		var I = 0;
		var result = "";
		for (I = 0; I < this.nEntries; I++)
		{
			if (this.rEntries[I].IsBetween(Roll)) {
				result = this.rEntries[I].value;
			}
		}
		return result;
	}
	
}

class RandomEntry {
	constructor(value, loVal, hiVal) {
		this.value = value;
		this.loVal = loVal;
		this.hiVal = hiVal;
	}

	
	IsBetween(aValue){
		var result = false;
		if (aValue >= this.loVal) {
			if (aValue <= this.hiVal) {
				result = true;
			}
		}
		return result;
	}
}



function _4DF() {
    //return _1DF() + _1DF() + _1DF() + _1DF();
	//return D(6)-D(6);
	return D(6)+D(6);
	//return D(5)+D(5);
	//return D(3)+D(3)+D(3)+D(3);
}

function InitDemoValues(){
	d_prof = [
				 "Artist"         // 0
				,"Baker"          // 1
				,"Carpenter"      // 2
				,"Chandler"       // 3
				,"Clerk"          // 4
				,"Engineer"       // 5
				,"Finesmith"      // 6
				,"Fisherman"      // 7
				,"Games"          // 8
				,"Glassmaker"     // 9
				,"Harper"         //10
				,"Herbalist"      //11
				,"Jeweler"        //12
				,"Laborer"        //13
				,"Leathercrafter" //14
				,"Legal" 		  //15
				,"Luxury" 		  //16
				,"Mason"          //17
				,"Mercernary"     //18
				,"Merchant"       //19
				,"Metalsmith"     //20
				,"Miller"         //21
				,"Miner"          //22
				,"Ostler"         //23
				,"Physician"      //24
				,"Pilot"          //25
				,"Potter"         //26
				,"Religious"      //27
				,"Sailor"         //28
				,"Scholar"        //29
				,"Servant"        //30
				,"Shipwright"     //31
				,"Tailor"         //32
				,"Tanner"         //33
				,"Tavern"         //34
				,"Teamster"       //35
				,"Timber"         //36
				,"Weaponsmith"    //37
				,"Weaver"    //38
	
	];
	d_value = [	 965   // 0
				,202   // 1
				,196   // 2
				,509   // 3
				,3929  // 4
				,13750 // 5
				,238   // 6
				,1078  // 7
				,3667  // 8
				,1375  // 9
				,6875  //10
				,573   //11
				,276   //12
				,149   //13
				,80    //14
				,1222  //15
				,18333 //16
				,259   //17
				,3929  //18
				,243   //19
				,529   //20
				,275   //21
				,1618  //22
				,322   //23
				,289   //24
				,1774  //25
				,2619  //26
				,786   //27
				,4583  //28
				,353   //29
				,154   //30
				,3929  //31
				,94    //32
				,1058  //33
				,130   //34
				,1122  //35
				,833   //36
				,462   //37
				,119   //38
]
	
	return;
}

function CopySettlement() {
  var copyText = document.getElementById("contentcopySettlement");
  copyText.value = document.getElementById("contentSettlement").innerHTML
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Settlement: " + copyText.value);
}

function CopyGarrison() {
  var copyText = document.getElementById("contentcopyGarrison");
  copyText.value = document.getElementById("contentGarrison").innerHTML
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Garrison: " + copyText.value);
}

function Generate_Shops(){
	var SB = new StringBuilder();
	var result = "";
	var TType = "";
	TType = document.forms["myForm"]["Settlement_CultureTypes"].value
	
	var TempD = 0.0;
	var nPopulation = parseInt(document.forms["myForm"]["nPopulation"].value);
	var Tally = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var FinalTally = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	InitDemoValues();
	
	
	for (i = 0; i < 39; i++) {
		TempD = d_value[i]/ nPopulation;
	    TempD =  nPopulation / d_value[i];
		Tally[i] = Math.floor(TempD);
		OneMore = TempD - Tally[i];
		OneMoreRoll = D(100)/100;
		if (OneMoreRoll <= OneMore) {
			Tally[i] += 1;
		}
		
	}
	for (i = 0; i < 39; i++) {
		if (Tally[i] > 0) {
			if (i > 0) SB.Append(" ");
			SB.Append(d_prof[i]);
			SB.Append(" ");
			SB.Append(Tally[i]);
			SB.Append(";");
		}
	}
	
	result = SB.ToString();
	document.getElementById("contentSettlement").innerHTML = result;
	document.getElementById("contentcopySettlement").value = result;
	return;
}


function Troop_Types()
{
	var TroopTypes = [
		"Light Foot",           // 0
		"Med. Foot",            // 1
		"Hvy. Foot",            // 2
		"Slingers",             // 3
		"Shortbow",             // 4
		"Crossbow",             // 5
		"Longbow",              // 6
		"Lgt. Cavalry",         // 7
		"Horse Archers",        // 8
		"Med. Cavalry",         // 9
		"Hvy. Cavalry",         // 10
		"Hvy. Cavalry w/Bows",  // 11
		"Camel Archers",        // 12
		"Camel Lancers",        // 13
		"War Elephants",        // 14
		"Mounted Crossbowmen",  // 15
		"Beast Riders"          // 16
	];	
	return TroopTypes;
}

function GetDemoInfo(race_culture)
{
	var result;
	switch (race_culture)
	{
		case "Bugbear":
			result = DemoInfo_Bugbear();
			break;
		case "Dwarf":
			result = DemoInfo_Dwarf();
			break;
		case "Gnome":
			result = DemoInfo_Gnome();
			break;
		case "Elf":
			result = DemoInfo_Elf();
			break;
		case "Halfling":
			result = DemoInfo_Halfling();
			break;
		case "Sorobe":
			result = DemoInfo_Sorobe();
			break;
		case "Sylvan":
			result = DemoInfo_Sylvan();
			break;
		case "Grand_Kingdom":
			result = DemoInfo_Grand_Kingdom();
			break;
		case "Rurasin":
			result = DemoInfo_Rurasin();
			break;
		case "Ostrobard":
			result = DemoInfo_Ostrobard();
			break;
		case "Gnoll":
			result = DemoInfo_Gnoll();
			break;
		case "Goblin_Civilized":
			result = DemoInfo_Goblin_Civilized();
			break;
		case "Goblin_Tribal":
			result = DemoInfo_Goblin_Tribal();
			break;
		case "Hobgoblin_Civilized":
			result = DemoInfo_Hobgoblin_Civilized();
			break;
		case "Hobgoblin_Tribal":
			result = DemoInfo_Hobgoblin_Tribal();
			break;
		case "Ochre Empire":
			result = DemoInfo_Ochre_Empire();
			break;
		case "Viridian":
			result = DemoInfo_Viridian();
			break;
		case "Kobold":
			result = DemoInfo_Kobold();
			break;
		case "Lizardmen":
			result = DemoInfo_Lizardmen();
			break;
		case "Desert_Nomads":
			result = DemoInfo_Desert_Nomads();
			break;
		case "Sons_Vadim":
			result = DemoInfo_Sons_Vadim();
			break;
		case "Ogre":
			result = DemoInfo_Ogre();
			break;
		case "Orc":
			result = DemoInfo_Orc();
			break;
		case "Reptilemen":
			result = DemoInfo_Reptilemen();
			break;
		case "Serpentmen":
			result = DemoInfo_Serpentmen();
			break;
		case "Vasan":
			result = DemoInfo_Vasan();
			break;
	}
	return result;
}

function Demographic_Template()
{
	var Demographics = [
		  0 // Artist 		   0
		, 0 // Baker           1
		, 0 // Carpenter       2
		, 0 // Chandler        3
		, 0 // Clerk           4
		, 0 // Engineer        5
		, 0 // Finesmith       6
		, 0 // Fisherman       7
		, 0 // Games           8
		, 0 // Glassmaker      9
		, 0 // Harper         10
		, 0 // Herbalist      11
		, 0 // Jeweler        12
		, 0 // Laborer        13
		, 0 // Leathercrafter 14
		, 0 // Legal          15
		, 0 // Luxury         16
		, 0 // Mason          17
		, 0 // Mercernary     18
		, 0 // Merchant       19
		, 0 // Metalsmith     20
		, 0 // Miller         21
		, 0 // Miner          22
		, 0 // Ostler         23
		, 0 // Physician      24
		, 0 // Pilot          25
		, 0 // Potter         26
		, 0 // Religious      27
		, 0 // Sailor         28
		, 0 // Scholar        29
		, 0 // Servant        30
		, 0 // Shipwright     31
		, 0 // Tailor         32
		, 0 // Tanner         33
		, 0 // Tavern         34
		, 0 // Teamster       35
		, 0 // Timber         36
		, 0 // Weaponsmith    37

	];	
	return Demographics;
}

function DemoInfo_Bugbear()
{
	var TroopComp = [
		  0 // Artist 		   0
		, 0 // Baker           1
		, 0 // Carpenter       2
		, 0 // Chandler        3
		, 0 // Clerk           4
		, 0 // Engineer        5
		, 0 // Finesmith       6
		, 0 // Fisherman       7
		, 0 // Games           8
		, 0 // Glassmaker      9
		, 0 // Harper         10
		, 0 // Herbalist      11
		, 0 // Jeweler        12
		, 0 // Laborer        13
		, 0 // Leathercrafter 14
		, 0 // Legal          15
		, 0 // Luxury         16
		, 0 // Mason          17
		, 0 // Mercernary     18
		, 0 // Merchant       19
		, 0 // Metalsmith     20
		, 0 // Miller         21
		, 0 // Miner          22
		, 0 // Ostler         23
		, 0 // Physician      24
		, 0 // Pilot          25
		, 0 // Potter         26
		, 0 // Religious      27
		, 0 // Sailor         28
		, 0 // Scholar        29
		, 0 // Servant        30
		, 0 // Shipwright     31
		, 0 // Tailor         32
		, 0 // Tanner         33
		, 0 // Tavern         34
		, 0 // Teamster       35
		, 0 // Timber         36
		, 0 // Weaponsmith    37
		];	
	return TroopComp;
}
function DemoInfo_Dwarf()
{
	var TroopComp = [
		  0 // Artist 		   0
		, 0 // Baker           1
		, 0 // Carpenter       2
		, 0 // Chandler        3
		, 0 // Clerk           4
		, 0 // Engineer        5
		, 0 // Finesmith       6
		, 0 // Fisherman       7
		, 0 // Games           8
		, 0 // Glassmaker      9
		, 0 // Harper         10
		, 0 // Herbalist      11
		, 0 // Jeweler        12
		, 0 // Laborer        13
		, 0 // Leathercrafter 14
		, 0 // Legal          15
		, 0 // Luxury         16
		, 0 // Mason          17
		, 0 // Mercernary     18
		, 0 // Merchant       19
		, 0 // Metalsmith     20
		, 0 // Miller         21
		, 0 // Miner          22
		, 0 // Ostler         23
		, 0 // Physician      24
		, 0 // Pilot          25
		, 0 // Potter         26
		, 0 // Religious      27
		, 0 // Sailor         28
		, 0 // Scholar        29
		, 0 // Servant        30
		, 0 // Shipwright     31
		, 0 // Tailor         32
		, 0 // Tanner         33
		, 0 // Tavern         34
		, 0 // Teamster       35
		, 0 // Timber         36
		, 0 // Weaponsmith    37
		];	
	return TroopComp;
}
function DemoInfo_Gnome()
{
	var TroopComp = [
		  0 // Artist 		   0
		, 0 // Baker           1
		, 0 // Carpenter       2
		, 0 // Chandler        3
		, 0 // Clerk           4
		, 0 // Engineer        5
		, 0 // Finesmith       6
		, 0 // Fisherman       7
		, 0 // Games           8
		, 0 // Glassmaker      9
		, 0 // Harper         10
		, 0 // Herbalist      11
		, 0 // Jeweler        12
		, 0 // Laborer        13
		, 0 // Leathercrafter 14
		, 0 // Legal          15
		, 0 // Luxury         16
		, 0 // Mason          17
		, 0 // Mercernary     18
		, 0 // Merchant       19
		, 0 // Metalsmith     20
		, 0 // Miller         21
		, 0 // Miner          22
		, 0 // Ostler         23
		, 0 // Physician      24
		, 0 // Pilot          25
		, 0 // Potter         26
		, 0 // Religious      27
		, 0 // Sailor         28
		, 0 // Scholar        29
		, 0 // Servant        30
		, 0 // Shipwright     31
		, 0 // Tailor         32
		, 0 // Tanner         33
		, 0 // Tavern         34
		, 0 // Teamster       35
		, 0 // Timber         36
		, 0 // Weaponsmith    37
		];	
	return TroopComp;
}
function DemoInfo_Elf()
{
	var TroopComp = [
		  0 // Artist 		   0
		, 0 // Baker           1
		, 0 // Carpenter       2
		, 0 // Chandler        3
		, 0 // Clerk           4
		, 0 // Engineer        5
		, 0 // Finesmith       6
		, 0 // Fisherman       7
		, 0 // Games           8
		, 0 // Glassmaker      9
		, 0 // Harper         10
		, 0 // Herbalist      11
		, 0 // Jeweler        12
		, 0 // Laborer        13
		, 0 // Leathercrafter 14
		, 0 // Legal          15
		, 0 // Luxury         16
		, 0 // Mason          17
		, 0 // Mercernary     18
		, 0 // Merchant       19
		, 0 // Metalsmith     20
		, 0 // Miller         21
		, 0 // Miner          22
		, 0 // Ostler         23
		, 0 // Physician      24
		, 0 // Pilot          25
		, 0 // Potter         26
		, 0 // Religious      27
		, 0 // Sailor         28
		, 0 // Scholar        29
		, 0 // Servant        30
		, 0 // Shipwright     31
		, 0 // Tailor         32
		, 0 // Tanner         33
		, 0 // Tavern         34
		, 0 // Teamster       35
		, 0 // Timber         36
		, 0 // Weaponsmith    37
		];	
	return TroopComp;
}
function DemoInfo_Sylvan()
{
	var TroopComp = [
		  0 // Artist 		   0
		, 0 // Baker           1
		, 0 // Carpenter       2
		, 0 // Chandler        3
		, 0 // Clerk           4
		, 0 // Engineer        5
		, 0 // Finesmith       6
		, 0 // Fisherman       7
		, 0 // Games           8
		, 0 // Glassmaker      9
		, 0 // Harper         10
		, 0 // Herbalist      11
		, 0 // Jeweler        12
		, 0 // Laborer        13
		, 0 // Leathercrafter 14
		, 0 // Legal          15
		, 0 // Luxury         16
		, 0 // Mason          17
		, 0 // Mercernary     18
		, 0 // Merchant       19
		, 0 // Metalsmith     20
		, 0 // Miller         21
		, 0 // Miner          22
		, 0 // Ostler         23
		, 0 // Physician      24
		, 0 // Pilot          25
		, 0 // Potter         26
		, 0 // Religious      27
		, 0 // Sailor         28
		, 0 // Scholar        29
		, 0 // Servant        30
		, 0 // Shipwright     31
		, 0 // Tailor         32
		, 0 // Tanner         33
		, 0 // Tavern         34
		, 0 // Teamster       35
		, 0 // Timber         36
		, 0 // Weaponsmith    37
		];	
	return TroopComp;
}
function DemoInfo_Halfling()
{
	var TroopComp = [
		  0 // Artist 		   0
		, 0 // Baker           1
		, 0 // Carpenter       2
		, 0 // Chandler        3
		, 0 // Clerk           4
		, 0 // Engineer        5
		, 0 // Finesmith       6
		, 0 // Fisherman       7
		, 0 // Games           8
		, 0 // Glassmaker      9
		, 0 // Harper         10
		, 0 // Herbalist      11
		, 0 // Jeweler        12
		, 0 // Laborer        13
		, 0 // Leathercrafter 14
		, 0 // Legal          15
		, 0 // Luxury         16
		, 0 // Mason          17
		, 0 // Mercernary     18
		, 0 // Merchant       19
		, 0 // Metalsmith     20
		, 0 // Miller         21
		, 0 // Miner          22
		, 0 // Ostler         23
		, 0 // Physician      24
		, 0 // Pilot          25
		, 0 // Potter         26
		, 0 // Religious      27
		, 0 // Sailor         28
		, 0 // Scholar        29
		, 0 // Servant        30
		, 0 // Shipwright     31
		, 0 // Tailor         32
		, 0 // Tanner         33
		, 0 // Tavern         34
		, 0 // Teamster       35
		, 0 // Timber         36
		, 0 // Weaponsmith    37
		];	
	return TroopComp;
}

function DemoInfo_Sorobe()
{
	var TroopComp = [
		  0 // Artist 		   0
		, 0 // Baker           1
		, 0 // Carpenter       2
		, 0 // Chandler        3
		, 0 // Clerk           4
		, 0 // Engineer        5
		, 0 // Finesmith       6
		, 0 // Fisherman       7
		, 0 // Games           8
		, 0 // Glassmaker      9
		, 0 // Harper         10
		, 0 // Herbalist      11
		, 0 // Jeweler        12
		, 0 // Laborer        13
		, 0 // Leathercrafter 14
		, 0 // Legal          15
		, 0 // Luxury         16
		, 0 // Mason          17
		, 0 // Mercernary     18
		, 0 // Merchant       19
		, 0 // Metalsmith     20
		, 0 // Miller         21
		, 0 // Miner          22
		, 0 // Ostler         23
		, 0 // Physician      24
		, 0 // Pilot          25
		, 0 // Potter         26
		, 0 // Religious      27
		, 0 // Sailor         28
		, 0 // Scholar        29
		, 0 // Servant        30
		, 0 // Shipwright     31
		, 0 // Tailor         32
		, 0 // Tanner         33
		, 0 // Tavern         34
		, 0 // Teamster       35
		, 0 // Timber         36
		, 0 // Weaponsmith    37
		];	
	return TroopComp;
}

function DemoInfo_Ostrobard()
{
	var TroopComp = [
		  0 // Artist 		   0
		, 0 // Baker           1
		, 0 // Carpenter       2
		, 0 // Chandler        3
		, 0 // Clerk           4
		, 0 // Engineer        5
		, 0 // Finesmith       6
		, 0 // Fisherman       7
		, 0 // Games           8
		, 0 // Glassmaker      9
		, 0 // Harper         10
		, 0 // Herbalist      11
		, 0 // Jeweler        12
		, 0 // Laborer        13
		, 0 // Leathercrafter 14
		, 0 // Legal          15
		, 0 // Luxury         16
		, 0 // Mason          17
		, 0 // Mercernary     18
		, 0 // Merchant       19
		, 0 // Metalsmith     20
		, 0 // Miller         21
		, 0 // Miner          22
		, 0 // Ostler         23
		, 0 // Physician      24
		, 0 // Pilot          25
		, 0 // Potter         26
		, 0 // Religious      27
		, 0 // Sailor         28
		, 0 // Scholar        29
		, 0 // Servant        30
		, 0 // Shipwright     31
		, 0 // Tailor         32
		, 0 // Tanner         33
		, 0 // Tavern         34
		, 0 // Teamster       35
		, 0 // Timber         36
		, 0 // Weaponsmith    37
		];	
	return TroopComp;
}

function DemoInfo_Grand_Kingdom()
{
	var TroopComp = [
		  0 // Artist 		   0
		, 0 // Baker           1
		, 0 // Carpenter       2
		, 0 // Chandler        3
		, 0 // Clerk           4
		, 0 // Engineer        5
		, 0 // Finesmith       6
		, 0 // Fisherman       7
		, 0 // Games           8
		, 0 // Glassmaker      9
		, 0 // Harper         10
		, 0 // Herbalist      11
		, 0 // Jeweler        12
		, 0 // Laborer        13
		, 0 // Leathercrafter 14
		, 0 // Legal          15
		, 0 // Luxury         16
		, 0 // Mason          17
		, 0 // Mercernary     18
		, 0 // Merchant       19
		, 0 // Metalsmith     20
		, 0 // Miller         21
		, 0 // Miner          22
		, 0 // Ostler         23
		, 0 // Physician      24
		, 0 // Pilot          25
		, 0 // Potter         26
		, 0 // Religious      27
		, 0 // Sailor         28
		, 0 // Scholar        29
		, 0 // Servant        30
		, 0 // Shipwright     31
		, 0 // Tailor         32
		, 0 // Tanner         33
		, 0 // Tavern         34
		, 0 // Teamster       35
		, 0 // Timber         36
		, 0 // Weaponsmith    37
		];	
	return TroopComp;
}
function DemoInfo_Rurasin()
{
	var TroopComp = [
		  0 // Artist 		   0
		, 0 // Baker           1
		, 0 // Carpenter       2
		, 0 // Chandler        3
		, 0 // Clerk           4
		, 0 // Engineer        5
		, 0 // Finesmith       6
		, 0 // Fisherman       7
		, 0 // Games           8
		, 0 // Glassmaker      9
		, 0 // Harper         10
		, 0 // Herbalist      11
		, 0 // Jeweler        12
		, 0 // Laborer        13
		, 0 // Leathercrafter 14
		, 0 // Legal          15
		, 0 // Luxury         16
		, 0 // Mason          17
		, 0 // Mercernary     18
		, 0 // Merchant       19
		, 0 // Metalsmith     20
		, 0 // Miller         21
		, 0 // Miner          22
		, 0 // Ostler         23
		, 0 // Physician      24
		, 0 // Pilot          25
		, 0 // Potter         26
		, 0 // Religious      27
		, 0 // Sailor         28
		, 0 // Scholar        29
		, 0 // Servant        30
		, 0 // Shipwright     31
		, 0 // Tailor         32
		, 0 // Tanner         33
		, 0 // Tavern         34
		, 0 // Teamster       35
		, 0 // Timber         36
		, 0 // Weaponsmith    37
		];	
	return TroopComp;
}
function DemoInfo_Gnoll()
{
	var TroopComp = [
		  0 // Artist 		   0
		, 0 // Baker           1
		, 0 // Carpenter       2
		, 0 // Chandler        3
		, 0 // Clerk           4
		, 0 // Engineer        5
		, 0 // Finesmith       6
		, 0 // Fisherman       7
		, 0 // Games           8
		, 0 // Glassmaker      9
		, 0 // Harper         10
		, 0 // Herbalist      11
		, 0 // Jeweler        12
		, 0 // Laborer        13
		, 0 // Leathercrafter 14
		, 0 // Legal          15
		, 0 // Luxury         16
		, 0 // Mason          17
		, 0 // Mercernary     18
		, 0 // Merchant       19
		, 0 // Metalsmith     20
		, 0 // Miller         21
		, 0 // Miner          22
		, 0 // Ostler         23
		, 0 // Physician      24
		, 0 // Pilot          25
		, 0 // Potter         26
		, 0 // Religious      27
		, 0 // Sailor         28
		, 0 // Scholar        29
		, 0 // Servant        30
		, 0 // Shipwright     31
		, 0 // Tailor         32
		, 0 // Tanner         33
		, 0 // Tavern         34
		, 0 // Teamster       35
		, 0 // Timber         36
		, 0 // Weaponsmith    37
		];	
	return TroopComp;
}
function DemoInfo_Goblin_Civilized()
{
	var TroopComp = [
		  0 // Artist 		   0
		, 0 // Baker           1
		, 0 // Carpenter       2
		, 0 // Chandler        3
		, 0 // Clerk           4
		, 0 // Engineer        5
		, 0 // Finesmith       6
		, 0 // Fisherman       7
		, 0 // Games           8
		, 0 // Glassmaker      9
		, 0 // Harper         10
		, 0 // Herbalist      11
		, 0 // Jeweler        12
		, 0 // Laborer        13
		, 0 // Leathercrafter 14
		, 0 // Legal          15
		, 0 // Luxury         16
		, 0 // Mason          17
		, 0 // Mercernary     18
		, 0 // Merchant       19
		, 0 // Metalsmith     20
		, 0 // Miller         21
		, 0 // Miner          22
		, 0 // Ostler         23
		, 0 // Physician      24
		, 0 // Pilot          25
		, 0 // Potter         26
		, 0 // Religious      27
		, 0 // Sailor         28
		, 0 // Scholar        29
		, 0 // Servant        30
		, 0 // Shipwright     31
		, 0 // Tailor         32
		, 0 // Tanner         33
		, 0 // Tavern         34
		, 0 // Teamster       35
		, 0 // Timber         36
		, 0 // Weaponsmith    37
		];	
	return TroopComp;
}
function DemoInfo_Goblin_Tribal()
{
	var TroopComp = [
		  0 // Artist 		   0
		, 0 // Baker           1
		, 0 // Carpenter       2
		, 0 // Chandler        3
		, 0 // Clerk           4
		, 0 // Engineer        5
		, 0 // Finesmith       6
		, 0 // Fisherman       7
		, 0 // Games           8
		, 0 // Glassmaker      9
		, 0 // Harper         10
		, 0 // Herbalist      11
		, 0 // Jeweler        12
		, 0 // Laborer        13
		, 0 // Leathercrafter 14
		, 0 // Legal          15
		, 0 // Luxury         16
		, 0 // Mason          17
		, 0 // Mercernary     18
		, 0 // Merchant       19
		, 0 // Metalsmith     20
		, 0 // Miller         21
		, 0 // Miner          22
		, 0 // Ostler         23
		, 0 // Physician      24
		, 0 // Pilot          25
		, 0 // Potter         26
		, 0 // Religious      27
		, 0 // Sailor         28
		, 0 // Scholar        29
		, 0 // Servant        30
		, 0 // Shipwright     31
		, 0 // Tailor         32
		, 0 // Tanner         33
		, 0 // Tavern         34
		, 0 // Teamster       35
		, 0 // Timber         36
		, 0 // Weaponsmith    37
		];	
	return TroopComp;
}
function DemoInfo_Hobgoblin_Civilized()
{
	var TroopComp = [
		  0 // Artist 		   0
		, 0 // Baker           1
		, 0 // Carpenter       2
		, 0 // Chandler        3
		, 0 // Clerk           4
		, 0 // Engineer        5
		, 0 // Finesmith       6
		, 0 // Fisherman       7
		, 0 // Games           8
		, 0 // Glassmaker      9
		, 0 // Harper         10
		, 0 // Herbalist      11
		, 0 // Jeweler        12
		, 0 // Laborer        13
		, 0 // Leathercrafter 14
		, 0 // Legal          15
		, 0 // Luxury         16
		, 0 // Mason          17
		, 0 // Mercernary     18
		, 0 // Merchant       19
		, 0 // Metalsmith     20
		, 0 // Miller         21
		, 0 // Miner          22
		, 0 // Ostler         23
		, 0 // Physician      24
		, 0 // Pilot          25
		, 0 // Potter         26
		, 0 // Religious      27
		, 0 // Sailor         28
		, 0 // Scholar        29
		, 0 // Servant        30
		, 0 // Shipwright     31
		, 0 // Tailor         32
		, 0 // Tanner         33
		, 0 // Tavern         34
		, 0 // Teamster       35
		, 0 // Timber         36
		, 0 // Weaponsmith    37
		];	
	return TroopComp;
}
function DemoInfo_Hobgoblin_Tribal()
{
	var TroopComp = [
		  0 // Artist 		   0
		, 0 // Baker           1
		, 0 // Carpenter       2
		, 0 // Chandler        3
		, 0 // Clerk           4
		, 0 // Engineer        5
		, 0 // Finesmith       6
		, 0 // Fisherman       7
		, 0 // Games           8
		, 0 // Glassmaker      9
		, 0 // Harper         10
		, 0 // Herbalist      11
		, 0 // Jeweler        12
		, 0 // Laborer        13
		, 0 // Leathercrafter 14
		, 0 // Legal          15
		, 0 // Luxury         16
		, 0 // Mason          17
		, 0 // Mercernary     18
		, 0 // Merchant       19
		, 0 // Metalsmith     20
		, 0 // Miller         21
		, 0 // Miner          22
		, 0 // Ostler         23
		, 0 // Physician      24
		, 0 // Pilot          25
		, 0 // Potter         26
		, 0 // Religious      27
		, 0 // Sailor         28
		, 0 // Scholar        29
		, 0 // Servant        30
		, 0 // Shipwright     31
		, 0 // Tailor         32
		, 0 // Tanner         33
		, 0 // Tavern         34
		, 0 // Teamster       35
		, 0 // Timber         36
		, 0 // Weaponsmith    37
		];	
	return TroopComp;
}
function DemoInfo_Ochre_Empire()
{
	var TroopComp = [
		  0 // Artist 		   0
		, 0 // Baker           1
		, 0 // Carpenter       2
		, 0 // Chandler        3
		, 0 // Clerk           4
		, 0 // Engineer        5
		, 0 // Finesmith       6
		, 0 // Fisherman       7
		, 0 // Games           8
		, 0 // Glassmaker      9
		, 0 // Harper         10
		, 0 // Herbalist      11
		, 0 // Jeweler        12
		, 0 // Laborer        13
		, 0 // Leathercrafter 14
		, 0 // Legal          15
		, 0 // Luxury         16
		, 0 // Mason          17
		, 0 // Mercernary     18
		, 0 // Merchant       19
		, 0 // Metalsmith     20
		, 0 // Miller         21
		, 0 // Miner          22
		, 0 // Ostler         23
		, 0 // Physician      24
		, 0 // Pilot          25
		, 0 // Potter         26
		, 0 // Religious      27
		, 0 // Sailor         28
		, 0 // Scholar        29
		, 0 // Servant        30
		, 0 // Shipwright     31
		, 0 // Tailor         32
		, 0 // Tanner         33
		, 0 // Tavern         34
		, 0 // Teamster       35
		, 0 // Timber         36
		, 0 // Weaponsmith    37
		];	
	return TroopComp;
}
function DemoInfo_Viridian()
{
	var TroopComp = [
		  0 // Artist 		   0
		, 0 // Baker           1
		, 0 // Carpenter       2
		, 0 // Chandler        3
		, 0 // Clerk           4
		, 0 // Engineer        5
		, 0 // Finesmith       6
		, 0 // Fisherman       7
		, 0 // Games           8
		, 0 // Glassmaker      9
		, 0 // Harper         10
		, 0 // Herbalist      11
		, 0 // Jeweler        12
		, 0 // Laborer        13
		, 0 // Leathercrafter 14
		, 0 // Legal          15
		, 0 // Luxury         16
		, 0 // Mason          17
		, 0 // Mercernary     18
		, 0 // Merchant       19
		, 0 // Metalsmith     20
		, 0 // Miller         21
		, 0 // Miner          22
		, 0 // Ostler         23
		, 0 // Physician      24
		, 0 // Pilot          25
		, 0 // Potter         26
		, 0 // Religious      27
		, 0 // Sailor         28
		, 0 // Scholar        29
		, 0 // Servant        30
		, 0 // Shipwright     31
		, 0 // Tailor         32
		, 0 // Tanner         33
		, 0 // Tavern         34
		, 0 // Teamster       35
		, 0 // Timber         36
		, 0 // Weaponsmith    37
		];	
	return TroopComp;
}
function DemoInfo_Kobold()
{
	var TroopComp = [
		  0 // Artist 		   0
		, 0 // Baker           1
		, 0 // Carpenter       2
		, 0 // Chandler        3
		, 0 // Clerk           4
		, 0 // Engineer        5
		, 0 // Finesmith       6
		, 0 // Fisherman       7
		, 0 // Games           8
		, 0 // Glassmaker      9
		, 0 // Harper         10
		, 0 // Herbalist      11
		, 0 // Jeweler        12
		, 0 // Laborer        13
		, 0 // Leathercrafter 14
		, 0 // Legal          15
		, 0 // Luxury         16
		, 0 // Mason          17
		, 0 // Mercernary     18
		, 0 // Merchant       19
		, 0 // Metalsmith     20
		, 0 // Miller         21
		, 0 // Miner          22
		, 0 // Ostler         23
		, 0 // Physician      24
		, 0 // Pilot          25
		, 0 // Potter         26
		, 0 // Religious      27
		, 0 // Sailor         28
		, 0 // Scholar        29
		, 0 // Servant        30
		, 0 // Shipwright     31
		, 0 // Tailor         32
		, 0 // Tanner         33
		, 0 // Tavern         34
		, 0 // Teamster       35
		, 0 // Timber         36
		, 0 // Weaponsmith    37
		];	
	return TroopComp;
}
function DemoInfo_Lizardmen()
{
	var TroopComp = [
	   80, //"Light Foot",             0
		0, //"Med. Foot",              1
	   10, //"Hvy. Foot",              2
		0, //"Slingers",               3
	   10, //"Shortbow",               4
		0, //"Crossbow",               5
		0, //"Longbow",                6
		0, //"Lgt. Cavalry",           7
		0, //"Horse Archers",          8
		0, //"Med. Cavalry",           9
		0, //"Hvy. Cavalry",          10
		0, //"Hvy. Cavalry w/Bows",   11
		0, //"Camel Archers",         12
		0, //"Camel Lancers",         13
		0, //"War Elephants",         14
		0, //"Mounted Crossbowmen",   15
		0  //"Beast Riders"           16
	];	
	return TroopComp;
}
function DemoInfo_Desert_Nomads()
{
	var TroopComp = [
	   20, //"Light Foot",             0
	   20, //"Med. Foot",              1
		0, //"Hvy. Foot",              2
	   10, //"Slingers",               3
	   10, //"Shortbow",               4
		0, //"Crossbow",               5
		0, //"Longbow",                6
	   30, //"Lgt. Cavalry",           7
	   20, //"Horse Archers",          8
		0, //"Med. Cavalry",           9
		0, //"Hvy. Cavalry",          10
		0, //"Hvy. Cavalry w/Bows",   11
		0, //"Camel Archers",         12
		0, //"Camel Lancers",         13
		0, //"War Elephants",         14
		0, //"Mounted Crossbowmen",   15
		0  //"Beast Riders"           16
	];	
	return TroopComp;
}
function DemoInfo_Sons_Vadim()
{
	var TroopComp = [
	   30, //"Light Foot",             0
	   10, //"Med. Foot",              1
		0, //"Hvy. Foot",              2
		0, //"Slingers",               3
	   10, //"Shortbow",               4
		0, //"Crossbow",               5
		0, //"Longbow",                6
	   15, //"Lgt. Cavalry",           7
	   30, //"Horse Archers",          8
		0, //"Med. Cavalry",           9
		0, //"Hvy. Cavalry",          10
	    5, //"Hvy. Cavalry w/Bows",   11
		0, //"Camel Archers",         12
		0, //"Camel Lancers",         13
		0, //"War Elephants",         14
		0, //"Mounted Crossbowmen",   15
		0  //"Beast Riders"           16
	];	
	return TroopComp;
}
function DemoInfo_Ogre()
{
	var TroopComp = [
	   60, //"Light Foot",             0
	   30, //"Med. Foot",              1
	   10, //"Hvy. Foot",              2
		0, //"Slingers",               3
		0, //"Shortbow",               4
		0, //"Crossbow",               5
		0, //"Longbow",                6
		0, //"Lgt. Cavalry",           7
		0, //"Horse Archers",          8
		0, //"Med. Cavalry",           9
		0, //"Hvy. Cavalry",          10
		0, //"Hvy. Cavalry w/Bows",   11
		0, //"Camel Archers",         12
		0, //"Camel Lancers",         13
		0, //"War Elephants",         14
		0, //"Mounted Crossbowmen",   15
		0  //"Beast Riders"           16
	];	
	return TroopComp;
}
function DemoInfo_Orc()
{
	var TroopComp = [
	   50, //"Light Foot",             0
	   10, //"Med. Foot",              1
	   10, //"Hvy. Foot",              2
		0, //"Slingers",               3
	   20, //"Shortbow",               4
		0, //"Crossbow",               5
		0, //"Longbow",                6
		0, //"Lgt. Cavalry",           7
		0, //"Horse Archers",          8
		0, //"Med. Cavalry",           9
		0, //"Hvy. Cavalry",          10
		0, //"Hvy. Cavalry w/Bows",   11
		0, //"Camel Archers",         12
		0, //"Camel Lancers",         13
		0, //"War Elephants",         14
		0, //"Mounted Crossbowmen",   15
	   10  //"Beast Riders"           16
	];	
	return TroopComp;
}
function DemoInfo_Reptilemen()
{
	var TroopComp = [
	   50, //"Light Foot",             0
	   20, //"Med. Foot",              1
	   10, //"Hvy. Foot",              2
		0, //"Slingers",               3
		0, //"Shortbow",               4
	   20, //"Crossbow",               5
		0, //"Longbow",                6
		0, //"Lgt. Cavalry",           7
		0, //"Horse Archers",          8
		0, //"Med. Cavalry",           9
		0, //"Hvy. Cavalry",          10
		0, //"Hvy. Cavalry w/Bows",   11
		0, //"Camel Archers",         12
		0, //"Camel Lancers",         13
		0, //"War Elephants",         14
		0, //"Mounted Crossbowmen",   15
		0  //"Beast Riders"           16
	];	
	return TroopComp;
}
function DemoInfo_Serpentmen()
{
	var TroopComp = [
		0, //"Light Foot",             0
	   20, //"Med. Foot",              1
	   20, //"Hvy. Foot",              2
		0, //"Slingers",               3
		0, //"Shortbow",               4
	   30, //"Crossbow",               5
		0, //"Longbow",                6
		0, //"Lgt. Cavalry",           7
		0, //"Horse Archers",          8
		0, //"Med. Cavalry",           9
		0, //"Hvy. Cavalry",          10
		0, //"Hvy. Cavalry w/Bows",   11
		0, //"Camel Archers",         12
		0, //"Camel Lancers",         13
	   10, //"War Elephants",         14
		0, //"Mounted Crossbowmen",   15
	   20  //"Beast Riders"           16
	];	
	return TroopComp;
}
function DemoInfo_Vasan()
{
	var TroopComp = [
	   50, //"Light Foot",             0
	   30, //"Med. Foot",              1
	    0, //"Hvy. Foot",              2
	    0, //"Slingers",               3
	   20, //"Shortbow",               4
		0, //"Crossbow",               5
		0, //"Longbow",                6
		0, //"Lgt. Cavalry",           7
		0, //"Horse Archers",          8
		0, //"Med. Cavalry",           9
		0, //"Hvy. Cavalry",          10
		0, //"Hvy. Cavalry w/Bows",   11
		0, //"Camel Archers",         12
		0, //"Camel Lancers",         13
		0, //"War Elephants",         14
		0, //"Mounted Crossbowmen",   15
		0  //"Beast Riders"           16
	];	
	return TroopComp;
}


