var d_value;
var d_prof;

function InitDemoValues(){
	d_prof = [
		 "Arcane"         // 0
		,"Artist"         // 1
		,"Baker"          // 2
		,"Carpenter"      // 3
		,"Chandler"       // 4
		,"Clerk"          // 5
		,"Engineer"       // 6
		,"Finesmith"      // 7
		,"Fisherman"      // 8
		,"Games"          // 9
		,"Glassmaker"     //10
		,"Harper"         //11
		,"Herbalist"      //12
		,"Hireling"       //13
		,"Jeweler"        //14
		,"Legal"          //15
		,"Leathercrafter" //16
		,"Luxury"         //17
		,"Mason"          //18
		,"Merchant"       //19
		,"Mercenary"      //20
		,"Metalsmith"     //21
		,"Military"       //22
		,"Miller"         //23
		,"Miner"          //24
		,"Ostler"         //25
		,"Physician"      //26
		,"Pilot"          //27
		,"Potter"         //28
		,"Religious"      //29
		,"Rulers"         //30
		,"Sailor"         //31
		,"Scholar"        //32
		,"Shipwright"     //33
		,"Tailor"         //34
		,"Tanner"         //35
		,"Tavern"         //36
		,"Teamster"       //37
		,"Timber"         //38
		,"Weaponsmith"    //39
		,"Weaver"         //40
	];
	d_value = [
	   1200, // Arcane
		900, // Artist
		180, // Baker
		220, // Carpenter
		450, // Chandler
	   3000, // Clerk
	   8000, // Engineer
		260, // Finesmith
	   1100, // Fisherman
	   2500, // Games
	   1400, // Glassmaker
	   5000, // Harper
		650, // Herbalist
		140, // Hireling
		300, // Jeweler
	   1200, // Legal
		120, // Leathercrafter
	  12000, // Luxury
		240, // Mason
		260, // Merchant
	   2000, // Mercenary
		550, // Metalsmith
		400, // Military
		300, // Miller
	   1600, // Miner
		350, // Ostler
		320, // Physician
	   2000, // Pilot
	   2400, // Potter
		700, // Religious
	   2500, // Rulers
	   4500, // Sailor
		500, // Scholar
	   4000, // Shipwright
		110, // Tailor
	   1000, // Tanner
		140, // Tavern
	   1100, // Teamster
		900, // Timber
		500, // Weaponsmith
		130  // Weaver
	];
	
	d_value = [
     8000, // Arcane
     1200, // Artist
      350, // Baker
      175, // Carpenter
      750, // Chandler
     4500, // Clerk
    15000, // Engineer
      500, // Finesmith
      450, // Fisherman
     4500, // Games
     2500, // Glassmaker
     4000, // Harper
      350, // Herbalist
       65, // Hireling
      500, // Jeweler
     2000, // Legal
       85, // Leathercrafter
    22000, // Luxury
      300, // Mason
      250, // Merchant
     2500, // Mercenary
      350, // Metalsmith
       50, // Military
      250, // Miller
     1500, // Miner
      375, // Ostler
     1500, // Physician
     1500, // Pilot
     2000, // Potter
      250, // Religious
      250, // Rulers
     2000, // Sailor
     1200, // Scholar
     2800, // Shipwright
      120, // Tailor
      900, // Tanner
      140, // Tavern
     1000, // Teamster
      750, // Timber
      550, // Weaponsmith
       75  // Weaver
	];
	
	return;
}

function GetShopTypeCount() {
	var result = Math.min(d_prof.length, d_value.length);
	if (d_prof.length !== d_value.length) {
		console.warn("Shop type data mismatch: " + d_prof.length + " labels vs " + d_value.length + " values.");
	}
	return result;
}

function ZeroedDemographics() {
	var Demographics = [];
	for (var i = 0; i < d_prof.length; i++) {
		Demographics.push(0);
	}
	return Demographics;
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
	InitDemoValues();
	var shopTypeCount = GetShopTypeCount();
	var Tally = ZeroedDemographics();
	
	
	for (var i = 0; i < shopTypeCount; i++) {
		var OneMore;
		var OneMoreRoll;
		TempD = d_value[i]/ nPopulation;
	    TempD =  nPopulation / d_value[i];
		Tally[i] = Math.floor(TempD);
		OneMore = TempD - Tally[i];
		OneMoreRoll = D(100)/100;
		if (OneMoreRoll <= OneMore) {
			Tally[i] += 1;
		}
		
	}
	for (var i = 0; i < shopTypeCount; i++) {
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
		case "Bugbear_Civilized":
			result = DemoInfo_Bugbear_Civilized();
			break;
		case "Bugbear_Tribal":
			result = DemoInfo_Bugbear_Tribal();
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
	InitDemoValues();
	return ZeroedDemographics();
}

function DemoInfo_Bugbear_Civilized() { return Demographic_Template(); }
function DemoInfo_Bugbear_Tribal()
{
	return Demographic_Template();
	var Demographics = [
		  0 // Arcane          0
		, 0 // Artist          1
		, 0 // Baker           2
		, 0 // Carpenter       3
		, 0 // Chandler        4
		, 0 // Clerk           5
		, 0 // Engineer        6
		, 0 // Finesmith       7
		, 0 // Fisherman       8
		, 0 // Games           9
		, 0 // Glassmaker     10
		, 0 // Harper         11
		, 0 // Herbalist      12
		, 0 // Hireling       13
		, 0 // Jeweler        14
		, 0 // Legal          15
		, 0 // Leathercrafter 16
		, 0 // Luxury         17
		, 0 // Mason          18
		, 0 // Merchant       19
		, 0 // Mercenary      20
		, 0 // Metalsmith     21
		, 0 // Military       22
		, 0 // Miller         23
		, 0 // Miner          24
		, 0 // Ostler         25
		, 0 // Physician      26
		, 0 // Pilot          27
		, 0 // Potter         28
		, 0 // Religious      29
		, 0 // Rulers         30
		, 0 // Sailor         31
		, 0 // Scholar        32
		, 0 // Shipwright     33
		, 0 // Tailor         34
		, 0 // Tanner         35
		, 0 // Tavern         36
		, 0 // Teamster       37
		, 0 // Timber         38
		, 0 // Weaponsmith    39
		, 0 // Weaver         40
		];	
	return Demographics;
}

function DemoInfo_Dwarf()
{
	return Demographic_Template();
	var Demographics = [
		  0 // Arcane          0
		, 0 // Artist          1
		, 0 // Baker           2
		, 0 // Carpenter       3
		, 0 // Chandler        4
		, 0 // Clerk           5
		, 0 // Engineer        6
		, 0 // Finesmith       7
		, 0 // Fisherman       8
		, 0 // Games           9
		, 0 // Glassmaker     10
		, 0 // Harper         11
		, 0 // Herbalist      12
		, 0 // Hireling       13
		, 0 // Jeweler        14
		, 0 // Legal          15
		, 0 // Leathercrafter 16
		, 0 // Luxury         17
		, 0 // Mason          18
		, 0 // Merchant       19
		, 0 // Mercenary      20
		, 0 // Metalsmith     21
		, 0 // Military       22
		, 0 // Miller         23
		, 0 // Miner          24
		, 0 // Ostler         25
		, 0 // Physician      26
		, 0 // Pilot          27
		, 0 // Potter         28
		, 0 // Religious      29
		, 0 // Rulers         30
		, 0 // Sailor         31
		, 0 // Scholar        32
		, 0 // Shipwright     33
		, 0 // Tailor         34
		, 0 // Tanner         35
		, 0 // Tavern         36
		, 0 // Teamster       37
		, 0 // Timber         38
		, 0 // Weaponsmith    39
		, 0 // Weaver         40
		];	
	return Demographics;
}
function DemoInfo_Gnome()
{
	return Demographic_Template();
	var Demographics = [
		  0 // Arcane          0
		, 0 // Artist          1
		, 0 // Baker           2
		, 0 // Carpenter       3
		, 0 // Chandler        4
		, 0 // Clerk           5
		, 0 // Engineer        6
		, 0 // Finesmith       7
		, 0 // Fisherman       8
		, 0 // Games           9
		, 0 // Glassmaker     10
		, 0 // Harper         11
		, 0 // Herbalist      12
		, 0 // Hireling       13
		, 0 // Jeweler        14
		, 0 // Legal          15
		, 0 // Leathercrafter 16
		, 0 // Luxury         17
		, 0 // Mason          18
		, 0 // Merchant       19
		, 0 // Mercenary      20
		, 0 // Metalsmith     21
		, 0 // Military       22
		, 0 // Miller         23
		, 0 // Miner          24
		, 0 // Ostler         25
		, 0 // Physician      26
		, 0 // Pilot          27
		, 0 // Potter         28
		, 0 // Religious      29
		, 0 // Rulers         30
		, 0 // Sailor         31
		, 0 // Scholar        32
		, 0 // Shipwright     33
		, 0 // Tailor         34
		, 0 // Tanner         35
		, 0 // Tavern         36
		, 0 // Teamster       37
		, 0 // Timber         38
		, 0 // Weaponsmith    39
		, 0 // Weaver         40
		];	
	return Demographics;
}
function DemoInfo_Elf()
{
	return Demographic_Template();
	var Demographics = [
		  0 // Arcane          0
		, 0 // Artist          1
		, 0 // Baker           2
		, 0 // Carpenter       3
		, 0 // Chandler        4
		, 0 // Clerk           5
		, 0 // Engineer        6
		, 0 // Finesmith       7
		, 0 // Fisherman       8
		, 0 // Games           9
		, 0 // Glassmaker     10
		, 0 // Harper         11
		, 0 // Herbalist      12
		, 0 // Hireling       13
		, 0 // Jeweler        14
		, 0 // Legal          15
		, 0 // Leathercrafter 16
		, 0 // Luxury         17
		, 0 // Mason          18
		, 0 // Merchant       19
		, 0 // Mercenary      20
		, 0 // Metalsmith     21
		, 0 // Military       22
		, 0 // Miller         23
		, 0 // Miner          24
		, 0 // Ostler         25
		, 0 // Physician      26
		, 0 // Pilot          27
		, 0 // Potter         28
		, 0 // Religious      29
		, 0 // Rulers         30
		, 0 // Sailor         31
		, 0 // Scholar        32
		, 0 // Shipwright     33
		, 0 // Tailor         34
		, 0 // Tanner         35
		, 0 // Tavern         36
		, 0 // Teamster       37
		, 0 // Timber         38
		, 0 // Weaponsmith    39
		, 0 // Weaver         40
		];	
	return Demographics;
}
function DemoInfo_Sylvan()
{
	return Demographic_Template();
	var Demographics = [
		  0 // Arcane          0
		, 0 // Artist          1
		, 0 // Baker           2
		, 0 // Carpenter       3
		, 0 // Chandler        4
		, 0 // Clerk           5
		, 0 // Engineer        6
		, 0 // Finesmith       7
		, 0 // Fisherman       8
		, 0 // Games           9
		, 0 // Glassmaker     10
		, 0 // Harper         11
		, 0 // Herbalist      12
		, 0 // Hireling       13
		, 0 // Jeweler        14
		, 0 // Legal          15
		, 0 // Leathercrafter 16
		, 0 // Luxury         17
		, 0 // Mason          18
		, 0 // Merchant       19
		, 0 // Mercenary      20
		, 0 // Metalsmith     21
		, 0 // Military       22
		, 0 // Miller         23
		, 0 // Miner          24
		, 0 // Ostler         25
		, 0 // Physician      26
		, 0 // Pilot          27
		, 0 // Potter         28
		, 0 // Religious      29
		, 0 // Rulers         30
		, 0 // Sailor         31
		, 0 // Scholar        32
		, 0 // Shipwright     33
		, 0 // Tailor         34
		, 0 // Tanner         35
		, 0 // Tavern         36
		, 0 // Teamster       37
		, 0 // Timber         38
		, 0 // Weaponsmith    39
		, 0 // Weaver         40
		];	
	return Demographics;
}
function DemoInfo_Halfling()
{
	return Demographic_Template();
	var Demographics = [
		  0 // Arcane          0
		, 0 // Artist          1
		, 0 // Baker           2
		, 0 // Carpenter       3
		, 0 // Chandler        4
		, 0 // Clerk           5
		, 0 // Engineer        6
		, 0 // Finesmith       7
		, 0 // Fisherman       8
		, 0 // Games           9
		, 0 // Glassmaker     10
		, 0 // Harper         11
		, 0 // Herbalist      12
		, 0 // Hireling       13
		, 0 // Jeweler        14
		, 0 // Legal          15
		, 0 // Leathercrafter 16
		, 0 // Luxury         17
		, 0 // Mason          18
		, 0 // Merchant       19
		, 0 // Mercenary      20
		, 0 // Metalsmith     21
		, 0 // Military       22
		, 0 // Miller         23
		, 0 // Miner          24
		, 0 // Ostler         25
		, 0 // Physician      26
		, 0 // Pilot          27
		, 0 // Potter         28
		, 0 // Religious      29
		, 0 // Rulers         30
		, 0 // Sailor         31
		, 0 // Scholar        32
		, 0 // Shipwright     33
		, 0 // Tailor         34
		, 0 // Tanner         35
		, 0 // Tavern         36
		, 0 // Teamster       37
		, 0 // Timber         38
		, 0 // Weaponsmith    39
		, 0 // Weaver         40
		];	
	return Demographics;
}

function DemoInfo_Sorobe()
{
	return Demographic_Template();
	var Demographics = [
		  0 // Arcane          0
		, 0 // Artist          1
		, 0 // Baker           2
		, 0 // Carpenter       3
		, 0 // Chandler        4
		, 0 // Clerk           5
		, 0 // Engineer        6
		, 0 // Finesmith       7
		, 0 // Fisherman       8
		, 0 // Games           9
		, 0 // Glassmaker     10
		, 0 // Harper         11
		, 0 // Herbalist      12
		, 0 // Hireling       13
		, 0 // Jeweler        14
		, 0 // Legal          15
		, 0 // Leathercrafter 16
		, 0 // Luxury         17
		, 0 // Mason          18
		, 0 // Merchant       19
		, 0 // Mercenary      20
		, 0 // Metalsmith     21
		, 0 // Military       22
		, 0 // Miller         23
		, 0 // Miner          24
		, 0 // Ostler         25
		, 0 // Physician      26
		, 0 // Pilot          27
		, 0 // Potter         28
		, 0 // Religious      29
		, 0 // Rulers         30
		, 0 // Sailor         31
		, 0 // Scholar        32
		, 0 // Shipwright     33
		, 0 // Tailor         34
		, 0 // Tanner         35
		, 0 // Tavern         36
		, 0 // Teamster       37
		, 0 // Timber         38
		, 0 // Weaponsmith    39
		, 0 // Weaver         40
		];	
	return Demographics;
}

function DemoInfo_Ostrobard()
{
	return Demographic_Template();
	var Demographics = [
		  0 // Arcane          0
		, 0 // Artist          1
		, 0 // Baker           2
		, 0 // Carpenter       3
		, 0 // Chandler        4
		, 0 // Clerk           5
		, 0 // Engineer        6
		, 0 // Finesmith       7
		, 0 // Fisherman       8
		, 0 // Games           9
		, 0 // Glassmaker     10
		, 0 // Harper         11
		, 0 // Herbalist      12
		, 0 // Hireling       13
		, 0 // Jeweler        14
		, 0 // Legal          15
		, 0 // Leathercrafter 16
		, 0 // Luxury         17
		, 0 // Mason          18
		, 0 // Merchant       19
		, 0 // Mercenary      20
		, 0 // Metalsmith     21
		, 0 // Military       22
		, 0 // Miller         23
		, 0 // Miner          24
		, 0 // Ostler         25
		, 0 // Physician      26
		, 0 // Pilot          27
		, 0 // Potter         28
		, 0 // Religious      29
		, 0 // Rulers         30
		, 0 // Sailor         31
		, 0 // Scholar        32
		, 0 // Shipwright     33
		, 0 // Tailor         34
		, 0 // Tanner         35
		, 0 // Tavern         36
		, 0 // Teamster       37
		, 0 // Timber         38
		, 0 // Weaponsmith    39
		, 0 // Weaver         40
		];	
	return Demographics;
}

function DemoInfo_Grand_Kingdom()
{
	return Demographic_Template();
	var Demographics = [
		  0 // Arcane          0
		, 0 // Artist          1
		, 0 // Baker           2
		, 0 // Carpenter       3
		, 0 // Chandler        4
		, 0 // Clerk           5
		, 0 // Engineer        6
		, 0 // Finesmith       7
		, 0 // Fisherman       8
		, 0 // Games           9
		, 0 // Glassmaker     10
		, 0 // Harper         11
		, 0 // Herbalist      12
		, 0 // Hireling       13
		, 0 // Jeweler        14
		, 0 // Legal          15
		, 0 // Leathercrafter 16
		, 0 // Luxury         17
		, 0 // Mason          18
		, 0 // Merchant       19
		, 0 // Mercenary      20
		, 0 // Metalsmith     21
		, 0 // Military       22
		, 0 // Miller         23
		, 0 // Miner          24
		, 0 // Ostler         25
		, 0 // Physician      26
		, 0 // Pilot          27
		, 0 // Potter         28
		, 0 // Religious      29
		, 0 // Rulers         30
		, 0 // Sailor         31
		, 0 // Scholar        32
		, 0 // Shipwright     33
		, 0 // Tailor         34
		, 0 // Tanner         35
		, 0 // Tavern         36
		, 0 // Teamster       37
		, 0 // Timber         38
		, 0 // Weaponsmith    39
		, 0 // Weaver         40
		];	
	return Demographics;
}
function DemoInfo_Rurasin()
{
	return Demographic_Template();
	var Demographics = [
		  0 // Arcane          0
		, 0 // Artist          1
		, 0 // Baker           2
		, 0 // Carpenter       3
		, 0 // Chandler        4
		, 0 // Clerk           5
		, 0 // Engineer        6
		, 0 // Finesmith       7
		, 0 // Fisherman       8
		, 0 // Games           9
		, 0 // Glassmaker     10
		, 0 // Harper         11
		, 0 // Herbalist      12
		, 0 // Hireling       13
		, 0 // Jeweler        14
		, 0 // Legal          15
		, 0 // Leathercrafter 16
		, 0 // Luxury         17
		, 0 // Mason          18
		, 0 // Merchant       19
		, 0 // Mercenary      20
		, 0 // Metalsmith     21
		, 0 // Military       22
		, 0 // Miller         23
		, 0 // Miner          24
		, 0 // Ostler         25
		, 0 // Physician      26
		, 0 // Pilot          27
		, 0 // Potter         28
		, 0 // Religious      29
		, 0 // Rulers         30
		, 0 // Sailor         31
		, 0 // Scholar        32
		, 0 // Shipwright     33
		, 0 // Tailor         34
		, 0 // Tanner         35
		, 0 // Tavern         36
		, 0 // Teamster       37
		, 0 // Timber         38
		, 0 // Weaponsmith    39
		, 0 // Weaver         40
		];	
	return Demographics;
}
function DemoInfo_Gnoll()
{
	return Demographic_Template();
	var Demographics = [
		  0 // Arcane          0
		, 0 // Artist          1
		, 0 // Baker           2
		, 0 // Carpenter       3
		, 0 // Chandler        4
		, 0 // Clerk           5
		, 0 // Engineer        6
		, 0 // Finesmith       7
		, 0 // Fisherman       8
		, 0 // Games           9
		, 0 // Glassmaker     10
		, 0 // Harper         11
		, 0 // Herbalist      12
		, 0 // Hireling       13
		, 0 // Jeweler        14
		, 0 // Legal          15
		, 0 // Leathercrafter 16
		, 0 // Luxury         17
		, 0 // Mason          18
		, 0 // Merchant       19
		, 0 // Mercenary      20
		, 0 // Metalsmith     21
		, 0 // Military       22
		, 0 // Miller         23
		, 0 // Miner          24
		, 0 // Ostler         25
		, 0 // Physician      26
		, 0 // Pilot          27
		, 0 // Potter         28
		, 0 // Religious      29
		, 0 // Rulers         30
		, 0 // Sailor         31
		, 0 // Scholar        32
		, 0 // Shipwright     33
		, 0 // Tailor         34
		, 0 // Tanner         35
		, 0 // Tavern         36
		, 0 // Teamster       37
		, 0 // Timber         38
		, 0 // Weaponsmith    39
		, 0 // Weaver         40
		];	
	return Demographics;
}
function DemoInfo_Goblin_Civilized()
{
	return Demographic_Template();
	var Demographics = [
		  0 // Arcane          0
		, 0 // Artist          1
		, 0 // Baker           2
		, 0 // Carpenter       3
		, 0 // Chandler        4
		, 0 // Clerk           5
		, 0 // Engineer        6
		, 0 // Finesmith       7
		, 0 // Fisherman       8
		, 0 // Games           9
		, 0 // Glassmaker     10
		, 0 // Harper         11
		, 0 // Herbalist      12
		, 0 // Hireling       13
		, 0 // Jeweler        14
		, 0 // Legal          15
		, 0 // Leathercrafter 16
		, 0 // Luxury         17
		, 0 // Mason          18
		, 0 // Merchant       19
		, 0 // Mercenary      20
		, 0 // Metalsmith     21
		, 0 // Military       22
		, 0 // Miller         23
		, 0 // Miner          24
		, 0 // Ostler         25
		, 0 // Physician      26
		, 0 // Pilot          27
		, 0 // Potter         28
		, 0 // Religious      29
		, 0 // Rulers         30
		, 0 // Sailor         31
		, 0 // Scholar        32
		, 0 // Shipwright     33
		, 0 // Tailor         34
		, 0 // Tanner         35
		, 0 // Tavern         36
		, 0 // Teamster       37
		, 0 // Timber         38
		, 0 // Weaponsmith    39
		, 0 // Weaver         40
		];	
	return Demographics;
}
function DemoInfo_Goblin_Tribal()
{
	return Demographic_Template();
	var Demographics = [
		  0 // Arcane          0
		, 0 // Artist          1
		, 0 // Baker           2
		, 0 // Carpenter       3
		, 0 // Chandler        4
		, 0 // Clerk           5
		, 0 // Engineer        6
		, 0 // Finesmith       7
		, 0 // Fisherman       8
		, 0 // Games           9
		, 0 // Glassmaker     10
		, 0 // Harper         11
		, 0 // Herbalist      12
		, 0 // Hireling       13
		, 0 // Jeweler        14
		, 0 // Legal          15
		, 0 // Leathercrafter 16
		, 0 // Luxury         17
		, 0 // Mason          18
		, 0 // Merchant       19
		, 0 // Mercenary      20
		, 0 // Metalsmith     21
		, 0 // Military       22
		, 0 // Miller         23
		, 0 // Miner          24
		, 0 // Ostler         25
		, 0 // Physician      26
		, 0 // Pilot          27
		, 0 // Potter         28
		, 0 // Religious      29
		, 0 // Rulers         30
		, 0 // Sailor         31
		, 0 // Scholar        32
		, 0 // Shipwright     33
		, 0 // Tailor         34
		, 0 // Tanner         35
		, 0 // Tavern         36
		, 0 // Teamster       37
		, 0 // Timber         38
		, 0 // Weaponsmith    39
		, 0 // Weaver         40
		];	
	return Demographics;
}
function DemoInfo_Hobgoblin_Civilized()
{
	return Demographic_Template();
	var Demographics = [
		  0 // Arcane          0
		, 0 // Artist          1
		, 0 // Baker           2
		, 0 // Carpenter       3
		, 0 // Chandler        4
		, 0 // Clerk           5
		, 0 // Engineer        6
		, 0 // Finesmith       7
		, 0 // Fisherman       8
		, 0 // Games           9
		, 0 // Glassmaker     10
		, 0 // Harper         11
		, 0 // Herbalist      12
		, 0 // Hireling       13
		, 0 // Jeweler        14
		, 0 // Legal          15
		, 0 // Leathercrafter 16
		, 0 // Luxury         17
		, 0 // Mason          18
		, 0 // Merchant       19
		, 0 // Mercenary      20
		, 0 // Metalsmith     21
		, 0 // Military       22
		, 0 // Miller         23
		, 0 // Miner          24
		, 0 // Ostler         25
		, 0 // Physician      26
		, 0 // Pilot          27
		, 0 // Potter         28
		, 0 // Religious      29
		, 0 // Rulers         30
		, 0 // Sailor         31
		, 0 // Scholar        32
		, 0 // Shipwright     33
		, 0 // Tailor         34
		, 0 // Tanner         35
		, 0 // Tavern         36
		, 0 // Teamster       37
		, 0 // Timber         38
		, 0 // Weaponsmith    39
		, 0 // Weaver         40
		];	
	return Demographics;
}
function DemoInfo_Hobgoblin_Tribal()
{
	return Demographic_Template();
	var Demographics = [
		  0 // Arcane          0
		, 0 // Artist          1
		, 0 // Baker           2
		, 0 // Carpenter       3
		, 0 // Chandler        4
		, 0 // Clerk           5
		, 0 // Engineer        6
		, 0 // Finesmith       7
		, 0 // Fisherman       8
		, 0 // Games           9
		, 0 // Glassmaker     10
		, 0 // Harper         11
		, 0 // Herbalist      12
		, 0 // Hireling       13
		, 0 // Jeweler        14
		, 0 // Legal          15
		, 0 // Leathercrafter 16
		, 0 // Luxury         17
		, 0 // Mason          18
		, 0 // Merchant       19
		, 0 // Mercenary      20
		, 0 // Metalsmith     21
		, 0 // Military       22
		, 0 // Miller         23
		, 0 // Miner          24
		, 0 // Ostler         25
		, 0 // Physician      26
		, 0 // Pilot          27
		, 0 // Potter         28
		, 0 // Religious      29
		, 0 // Rulers         30
		, 0 // Sailor         31
		, 0 // Scholar        32
		, 0 // Shipwright     33
		, 0 // Tailor         34
		, 0 // Tanner         35
		, 0 // Tavern         36
		, 0 // Teamster       37
		, 0 // Timber         38
		, 0 // Weaponsmith    39
		, 0 // Weaver         40
		];	
	return Demographics;
}
function DemoInfo_Ochre_Empire()
{
	return Demographic_Template();
	var Demographics = [
		  0 // Arcane          0
		, 0 // Artist          1
		, 0 // Baker           2
		, 0 // Carpenter       3
		, 0 // Chandler        4
		, 0 // Clerk           5
		, 0 // Engineer        6
		, 0 // Finesmith       7
		, 0 // Fisherman       8
		, 0 // Games           9
		, 0 // Glassmaker     10
		, 0 // Harper         11
		, 0 // Herbalist      12
		, 0 // Hireling       13
		, 0 // Jeweler        14
		, 0 // Legal          15
		, 0 // Leathercrafter 16
		, 0 // Luxury         17
		, 0 // Mason          18
		, 0 // Merchant       19
		, 0 // Mercenary      20
		, 0 // Metalsmith     21
		, 0 // Military       22
		, 0 // Miller         23
		, 0 // Miner          24
		, 0 // Ostler         25
		, 0 // Physician      26
		, 0 // Pilot          27
		, 0 // Potter         28
		, 0 // Religious      29
		, 0 // Rulers         30
		, 0 // Sailor         31
		, 0 // Scholar        32
		, 0 // Shipwright     33
		, 0 // Tailor         34
		, 0 // Tanner         35
		, 0 // Tavern         36
		, 0 // Teamster       37
		, 0 // Timber         38
		, 0 // Weaponsmith    39
		, 0 // Weaver         40
		];	
	return Demographics;
}
function DemoInfo_Viridian()
{
	return Demographic_Template();
	var Demographics = [
		  0 // Arcane          0
		, 0 // Artist          1
		, 0 // Baker           2
		, 0 // Carpenter       3
		, 0 // Chandler        4
		, 0 // Clerk           5
		, 0 // Engineer        6
		, 0 // Finesmith       7
		, 0 // Fisherman       8
		, 0 // Games           9
		, 0 // Glassmaker     10
		, 0 // Harper         11
		, 0 // Herbalist      12
		, 0 // Hireling       13
		, 0 // Jeweler        14
		, 0 // Legal          15
		, 0 // Leathercrafter 16
		, 0 // Luxury         17
		, 0 // Mason          18
		, 0 // Merchant       19
		, 0 // Mercenary      20
		, 0 // Metalsmith     21
		, 0 // Military       22
		, 0 // Miller         23
		, 0 // Miner          24
		, 0 // Ostler         25
		, 0 // Physician      26
		, 0 // Pilot          27
		, 0 // Potter         28
		, 0 // Religious      29
		, 0 // Rulers         30
		, 0 // Sailor         31
		, 0 // Scholar        32
		, 0 // Shipwright     33
		, 0 // Tailor         34
		, 0 // Tanner         35
		, 0 // Tavern         36
		, 0 // Teamster       37
		, 0 // Timber         38
		, 0 // Weaponsmith    39
		, 0 // Weaver         40
		];	
	return Demographics;
}
function DemoInfo_Kobold()
{
	return Demographic_Template();
	var Demographics = [
		  0 // Arcane          0
		, 0 // Artist          1
		, 0 // Baker           2
		, 0 // Carpenter       3
		, 0 // Chandler        4
		, 0 // Clerk           5
		, 0 // Engineer        6
		, 0 // Finesmith       7
		, 0 // Fisherman       8
		, 0 // Games           9
		, 0 // Glassmaker     10
		, 0 // Harper         11
		, 0 // Herbalist      12
		, 0 // Hireling       13
		, 0 // Jeweler        14
		, 0 // Legal          15
		, 0 // Leathercrafter 16
		, 0 // Luxury         17
		, 0 // Mason          18
		, 0 // Merchant       19
		, 0 // Mercenary      20
		, 0 // Metalsmith     21
		, 0 // Military       22
		, 0 // Miller         23
		, 0 // Miner          24
		, 0 // Ostler         25
		, 0 // Physician      26
		, 0 // Pilot          27
		, 0 // Potter         28
		, 0 // Religious      29
		, 0 // Rulers         30
		, 0 // Sailor         31
		, 0 // Scholar        32
		, 0 // Shipwright     33
		, 0 // Tailor         34
		, 0 // Tanner         35
		, 0 // Tavern         36
		, 0 // Teamster       37
		, 0 // Timber         38
		, 0 // Weaponsmith    39
		, 0 // Weaver         40
		];	
	return Demographics;
}
function DemoInfo_Lizardmen()
{
	return Demographic_Template();
	var Demographics = [
		  0 // Arcane          0
		, 0 // Artist          1
		, 0 // Baker           2
		, 0 // Carpenter       3
		, 0 // Chandler        4
		, 0 // Clerk           5
		, 0 // Engineer        6
		, 0 // Finesmith       7
		, 0 // Fisherman       8
		, 0 // Games           9
		, 0 // Glassmaker     10
		, 0 // Harper         11
		, 0 // Herbalist      12
		, 0 // Hireling       13
		, 0 // Jeweler        14
		, 0 // Legal          15
		, 0 // Leathercrafter 16
		, 0 // Luxury         17
		, 0 // Mason          18
		, 0 // Merchant       19
		, 0 // Mercenary      20
		, 0 // Metalsmith     21
		, 0 // Military       22
		, 0 // Miller         23
		, 0 // Miner          24
		, 0 // Ostler         25
		, 0 // Physician      26
		, 0 // Pilot          27
		, 0 // Potter         28
		, 0 // Religious      29
		, 0 // Rulers         30
		, 0 // Sailor         31
		, 0 // Scholar        32
		, 0 // Shipwright     33
		, 0 // Tailor         34
		, 0 // Tanner         35
		, 0 // Tavern         36
		, 0 // Teamster       37
		, 0 // Timber         38
		, 0 // Weaponsmith    39
		, 0 // Weaver         40
		];	
	return Demographics;
}
function DemoInfo_Desert_Nomads()
{
	return Demographic_Template();
	var Demographics = [
		  0 // Arcane          0
		, 0 // Artist          1
		, 0 // Baker           2
		, 0 // Carpenter       3
		, 0 // Chandler        4
		, 0 // Clerk           5
		, 0 // Engineer        6
		, 0 // Finesmith       7
		, 0 // Fisherman       8
		, 0 // Games           9
		, 0 // Glassmaker     10
		, 0 // Harper         11
		, 0 // Herbalist      12
		, 0 // Hireling       13
		, 0 // Jeweler        14
		, 0 // Legal          15
		, 0 // Leathercrafter 16
		, 0 // Luxury         17
		, 0 // Mason          18
		, 0 // Merchant       19
		, 0 // Mercenary      20
		, 0 // Metalsmith     21
		, 0 // Military       22
		, 0 // Miller         23
		, 0 // Miner          24
		, 0 // Ostler         25
		, 0 // Physician      26
		, 0 // Pilot          27
		, 0 // Potter         28
		, 0 // Religious      29
		, 0 // Rulers         30
		, 0 // Sailor         31
		, 0 // Scholar        32
		, 0 // Shipwright     33
		, 0 // Tailor         34
		, 0 // Tanner         35
		, 0 // Tavern         36
		, 0 // Teamster       37
		, 0 // Timber         38
		, 0 // Weaponsmith    39
		, 0 // Weaver         40
		];	
	return Demographics;
}
function DemoInfo_Sons_Vadim()
{
	return Demographic_Template();
	var Demographics = [
		  0 // Arcane          0
		, 0 // Artist          1
		, 0 // Baker           2
		, 0 // Carpenter       3
		, 0 // Chandler        4
		, 0 // Clerk           5
		, 0 // Engineer        6
		, 0 // Finesmith       7
		, 0 // Fisherman       8
		, 0 // Games           9
		, 0 // Glassmaker     10
		, 0 // Harper         11
		, 0 // Herbalist      12
		, 0 // Hireling       13
		, 0 // Jeweler        14
		, 0 // Legal          15
		, 0 // Leathercrafter 16
		, 0 // Luxury         17
		, 0 // Mason          18
		, 0 // Merchant       19
		, 0 // Mercenary      20
		, 0 // Metalsmith     21
		, 0 // Military       22
		, 0 // Miller         23
		, 0 // Miner          24
		, 0 // Ostler         25
		, 0 // Physician      26
		, 0 // Pilot          27
		, 0 // Potter         28
		, 0 // Religious      29
		, 0 // Rulers         30
		, 0 // Sailor         31
		, 0 // Scholar        32
		, 0 // Shipwright     33
		, 0 // Tailor         34
		, 0 // Tanner         35
		, 0 // Tavern         36
		, 0 // Teamster       37
		, 0 // Timber         38
		, 0 // Weaponsmith    39
		, 0 // Weaver         40
		];	
	return Demographics;
}
function DemoInfo_Ogre()
{
	return Demographic_Template();
	var Demographics = [
		  0 // Arcane          0
		, 0 // Artist          1
		, 0 // Baker           2
		, 0 // Carpenter       3
		, 0 // Chandler        4
		, 0 // Clerk           5
		, 0 // Engineer        6
		, 0 // Finesmith       7
		, 0 // Fisherman       8
		, 0 // Games           9
		, 0 // Glassmaker     10
		, 0 // Harper         11
		, 0 // Herbalist      12
		, 0 // Hireling       13
		, 0 // Jeweler        14
		, 0 // Legal          15
		, 0 // Leathercrafter 16
		, 0 // Luxury         17
		, 0 // Mason          18
		, 0 // Merchant       19
		, 0 // Mercenary      20
		, 0 // Metalsmith     21
		, 0 // Military       22
		, 0 // Miller         23
		, 0 // Miner          24
		, 0 // Ostler         25
		, 0 // Physician      26
		, 0 // Pilot          27
		, 0 // Potter         28
		, 0 // Religious      29
		, 0 // Rulers         30
		, 0 // Sailor         31
		, 0 // Scholar        32
		, 0 // Shipwright     33
		, 0 // Tailor         34
		, 0 // Tanner         35
		, 0 // Tavern         36
		, 0 // Teamster       37
		, 0 // Timber         38
		, 0 // Weaponsmith    39
		, 0 // Weaver         40
		];	
	return Demographics;
}
function DemoInfo_Orc()
{
	return Demographic_Template();
	var Demographics = [
		  0 // Arcane          0
		, 0 // Artist          1
		, 0 // Baker           2
		, 0 // Carpenter       3
		, 0 // Chandler        4
		, 0 // Clerk           5
		, 0 // Engineer        6
		, 0 // Finesmith       7
		, 0 // Fisherman       8
		, 0 // Games           9
		, 0 // Glassmaker     10
		, 0 // Harper         11
		, 0 // Herbalist      12
		, 0 // Hireling       13
		, 0 // Jeweler        14
		, 0 // Legal          15
		, 0 // Leathercrafter 16
		, 0 // Luxury         17
		, 0 // Mason          18
		, 0 // Merchant       19
		, 0 // Mercenary      20
		, 0 // Metalsmith     21
		, 0 // Military       22
		, 0 // Miller         23
		, 0 // Miner          24
		, 0 // Ostler         25
		, 0 // Physician      26
		, 0 // Pilot          27
		, 0 // Potter         28
		, 0 // Religious      29
		, 0 // Rulers         30
		, 0 // Sailor         31
		, 0 // Scholar        32
		, 0 // Shipwright     33
		, 0 // Tailor         34
		, 0 // Tanner         35
		, 0 // Tavern         36
		, 0 // Teamster       37
		, 0 // Timber         38
		, 0 // Weaponsmith    39
		, 0 // Weaver         40
		];	
	return Demographics;
}
function DemoInfo_Reptilemen()
{
	return Demographic_Template();
	var Demographics = [
		  0 // Arcane          0
		, 0 // Artist          1
		, 0 // Baker           2
		, 0 // Carpenter       3
		, 0 // Chandler        4
		, 0 // Clerk           5
		, 0 // Engineer        6
		, 0 // Finesmith       7
		, 0 // Fisherman       8
		, 0 // Games           9
		, 0 // Glassmaker     10
		, 0 // Harper         11
		, 0 // Herbalist      12
		, 0 // Hireling       13
		, 0 // Jeweler        14
		, 0 // Legal          15
		, 0 // Leathercrafter 16
		, 0 // Luxury         17
		, 0 // Mason          18
		, 0 // Merchant       19
		, 0 // Mercenary      20
		, 0 // Metalsmith     21
		, 0 // Military       22
		, 0 // Miller         23
		, 0 // Miner          24
		, 0 // Ostler         25
		, 0 // Physician      26
		, 0 // Pilot          27
		, 0 // Potter         28
		, 0 // Religious      29
		, 0 // Rulers         30
		, 0 // Sailor         31
		, 0 // Scholar        32
		, 0 // Shipwright     33
		, 0 // Tailor         34
		, 0 // Tanner         35
		, 0 // Tavern         36
		, 0 // Teamster       37
		, 0 // Timber         38
		, 0 // Weaponsmith    39
		, 0 // Weaver         40
		];	
	return Demographics;
}
function DemoInfo_Serpentmen()
{
	return Demographic_Template();
	var Demographics = [
		  0 // Arcane          0
		, 0 // Artist          1
		, 0 // Baker           2
		, 0 // Carpenter       3
		, 0 // Chandler        4
		, 0 // Clerk           5
		, 0 // Engineer        6
		, 0 // Finesmith       7
		, 0 // Fisherman       8
		, 0 // Games           9
		, 0 // Glassmaker     10
		, 0 // Harper         11
		, 0 // Herbalist      12
		, 0 // Hireling       13
		, 0 // Jeweler        14
		, 0 // Legal          15
		, 0 // Leathercrafter 16
		, 0 // Luxury         17
		, 0 // Mason          18
		, 0 // Merchant       19
		, 0 // Mercenary      20
		, 0 // Metalsmith     21
		, 0 // Military       22
		, 0 // Miller         23
		, 0 // Miner          24
		, 0 // Ostler         25
		, 0 // Physician      26
		, 0 // Pilot          27
		, 0 // Potter         28
		, 0 // Religious      29
		, 0 // Rulers         30
		, 0 // Sailor         31
		, 0 // Scholar        32
		, 0 // Shipwright     33
		, 0 // Tailor         34
		, 0 // Tanner         35
		, 0 // Tavern         36
		, 0 // Teamster       37
		, 0 // Timber         38
		, 0 // Weaponsmith    39
		, 0 // Weaver         40
		];	
	return Demographics;
}
function DemoInfo_Vasan()
{
	return Demographic_Template();
	var Demographics = [
		  0 // Arcane          0
		, 0 // Artist          1
		, 0 // Baker           2
		, 0 // Carpenter       3
		, 0 // Chandler        4
		, 0 // Clerk           5
		, 0 // Engineer        6
		, 0 // Finesmith       7
		, 0 // Fisherman       8
		, 0 // Games           9
		, 0 // Glassmaker     10
		, 0 // Harper         11
		, 0 // Herbalist      12
		, 0 // Hireling       13
		, 0 // Jeweler        14
		, 0 // Legal          15
		, 0 // Leathercrafter 16
		, 0 // Luxury         17
		, 0 // Mason          18
		, 0 // Merchant       19
		, 0 // Mercenary      20
		, 0 // Metalsmith     21
		, 0 // Military       22
		, 0 // Miller         23
		, 0 // Miner          24
		, 0 // Ostler         25
		, 0 // Physician      26
		, 0 // Pilot          27
		, 0 // Potter         28
		, 0 // Religious      29
		, 0 // Rulers         30
		, 0 // Sailor         31
		, 0 // Scholar        32
		, 0 // Shipwright     33
		, 0 // Tailor         34
		, 0 // Tanner         35
		, 0 // Tavern         36
		, 0 // Teamster       37
		, 0 // Timber         38
		, 0 // Weaponsmith    39
		, 0 // Weaver         40
		];	
	return Demographics;
}

