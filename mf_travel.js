function Generate_Travel(){
    var TravelType = "";
	var TravelLength = "";
	TravelType = document.forms["TravelForm"]["TravelType"].value;
	TravelLength = document.forms["TravelForm"]["TravelLength"].value;
	
	var Rest = TravelType + "|" + TravelLength
	
	if (TravelType == "Journey") {
		Result = GenerateJourney(TravelLength);
	} else if (TravelType == "Voyage") {
		Result = GenerateVoyage(TravelLength);
	} else if (TravelType == "Trip") {
		Result = GenerateTrip(TravelLength);
	}
	
	document.getElementById("contentTravel").innerHTML = Result;
	//document.getElementById("contentcopyResult").value = Result;
}

function GenerateJourney(Length){
	var SB = new StringBuilder();
	var nEncounters = NumOfEncounters(Length);
	SB.Append("<h1><b>" + "Journey" + "</b></h1>");
	SB.Append("<h2><b>" + "Encounters: " + "</b>" + nEncounters + "</h2>");
	for (let i = 1; i <= nEncounters; i++) {
		//SB.Append("<br/>");
		SB.Append(JourneyEncounter());
	}
	return SB.ToString();
}

function GenerateVoyage(Length){
	var SB = new StringBuilder();
	var nEncounters = NumOfEncounters(Length);
	SB.Append("<b>" + "Voyage" + "</b>");
	SB.Append("<br/>");
	SB.Append("<b>" + "Encounters: " + "</b>" + nEncounters);
	for (let i = 1; i <= nEncounters; i++) {
		SB.Append("<br/>");
		SB.Append(VoyageEncounter());
	}
	return SB.ToString();
}

function GenerateTrip(Length){
	var SB = new StringBuilder();
	var nEncounters = NumOfEncountersTrip(Length);
	SB.Append("<b>" + "Trip" + "</b>");
	SB.Append("<br/>");
	SB.Append("<b>" + "Encounters: " + "</b>" + nEncounters);
	for (let i = 1; i <= nEncounters; i++) {
		SB.Append("<br/>");
		SB.Append(TripEncounter());
	}
	return SB.ToString();
}

function GenerateCircumstances(){
	var roll = D(3);
	var result = "Neutral";
	switch(roll) {
		case 1:
			result = "Bad";
			break;
		case 2:
			result = "Neutral";
			break;
		case 3:
			result = "Good";
			break;

	}		
	return result;
}

function GenerateSignificance(){
	var roll = D(6);
	var result = "Minor";
	switch(roll) {
		case 1:
			result = "Minor";
			break;
		case 2:
			result = "Minor";
			break;
		case 3:
			result = "Minor";
			break;
		case 4:
			result = "Major";
			break;
		case 5:
			result = "Major";
			break;
		case 6:
			result = "Exceptional";
			break;
	}		
	return result;
}

function JourneyEncounter(){
	var roll = _2D6();
	var result = "";
	var desc = "";
	switch(roll) {
		case 2:
			result = "Chance Meeting";
			desc = Desc_Journey_Meeting();
			break;
		case 3:
			result = "Random Encounter";
			desc = Desc_Journey_Random();
			break;
		case 4:
			result = "Natural Wonder";
			desc = Desc_Journey_Natural_Wonder();
			break;
		case 5:
			result = "Ruins of the Past";
			desc = Desc_Journey_Ruins_Past();
			break;
		case 6:
			result = "Exceptional Campsite";
			desc = Desc_Journey_Campsite();
			break;
		case 7:
			result = "Random Encounter";
			desc = Desc_Journey_Random();
			break;
		case 8:
			result = "Opportunity for Resupply";
			desc = Desc_Journey_Resupply();			
			break;
		case 9:
			result = "Obstacle";
			desc = Desc_Journey_Obstacle();
			break;
		case 10:
			result = "Inclement Weather";
			desc = Desc_Journey_Weather();
			break;
		case 11:
			result = "Random Encounter";
			desc = Desc_Journey_Random();
			break;
		case 12:
			result = "Enemy Abroad";
			desc = Desc_Journey_Enemy_About();
			break;		
	}
	finalresult = '<div class = "encounter_block">';
	finalresult += EventTitle(result);
	finalresult += desc;
	finalresult += "</div>";
	return finalresult;	
}


function ShipEncounter(){
	var roll = _2D6();
	var result = "";
	switch(roll) {
		case 2:
		case 3:
			result = "Warship Fleet";
			break;
		case 4:
		case 5:
			result = "Merchant Ship";
			break;
		case 6:
		case 7:
		case 8:
			result = "Fishing Boat";
			break;
		case 9:
		case 10:
			result = "Merchant Ship";
			break;
		case 11:
		case 12:
			result = "Single Warship";
			break;		
	}		
	return result;	
}


function VoyageEncounter(){
	var roll = _2D6();
	var result = "";
	var shiptype = "";
	switch(roll) {
		case 2:
			result = "Friendly Dwellers";
			break;
		case 3:
			result = "Random Encounter";
			break;
		case 4:
			result = "Exceptional Weather";
			break;
		case 5:
			result = "Bounty of the Sea";
			break;
		case 6:
			shiptype = ShipEncounter();
			result = "Encounter with " + shiptype;
			break;
		case 7:
			result = "Random Encounter";
			break;
		case 8:
			shiptype = ShipEncounter();
			result = "Encounter with " + shiptype;
			break;
		case 9:
			result = "Spoilage";
			break;
		case 10:
			roll = D(6);
			if (roll <=3) {
				result = "Minor Freak Weather";
			} else if (roll <= 5) {
				result = "Major Freak Weather";
			} else {
				result = "Exceptional Freak Weather";
			}			
			break;
		case 11:
			result = "Random Encounter";		
			break;
		case 12:
			result = "Enemies from the Depths";
			break;
			
	}	
	result = "<b>" + result + "</b>"	
	return result;	
}

function TripEncounter(){
	var roll = _2D6();
	var result = "";
	switch(roll) {
		case 2:
			result = " Chance Meeting";
			result = EncSignificance(result);
			break;
		case 3:
			result = "Random Encounter, ";
			result = result + D(100);
			break;
		case 4:
			result = "Buried Past";
			result = EncSignificance(result);
			break;
		case 5:
			result = " Official Business";
			result = EncSignificance(result);
			result = EncCircumstances(result);
			break;
		case 6:
			result = "In need of Assistance, ";
			roll = D(6);
			if (roll <=3) {
				result = result + "Low Risk";
			} else if (roll <= 5) {
				result = result + "Moderate Risk";
			} else {
				result = result + "High Risk";
			}			
			break;
		case 7:
			result = "Random Encounter, ";
			result = result + D(100);
			break;
		case 8:
			result = "A Place to Shop";
			result = EncCircumstances(result);
			break;
		case 9:
			result = "A Wonder of the City";
			result = EncSignificance(result);
			break;
		case 10:
			result = " Sudden Danger";
			result = EncSignificance(result);
			break;
		case 11:
			result = "Random Encounter, ";
			result = result + D(100);
			break;
		case 12:
			result = " Dangerous Encounter";
			result = EncSignificance(result);
			break;		
	}
	result = "<b>" + result + "</b>"
	return result;	
}

function EncSignificance(Desc) {
	result = Desc;
	roll = D(6);
	if (roll <=3) {
		result = result + ", Minor";
	} else if (roll <= 5) {
		result = result + ", Major";
	} else {
		result = result + ", Exceptional";
	}
	return result;
}

function EncCircumstances(Desc) {
	result = Desc;
	roll = D(6);
	if (roll <=2) {
		result = result + ", Bad";
	} else if (roll <= 3) {
		result = result + ", Neutral";
	} else {
		result = result + ", Good";
	}
	return result;
}


function NumOfEncounters(Length) {
	var result = 0;
	
	if (Length == "Short") {
		result = D(2)-1;
	} else if (Length == "Medium") {
		result = D(4);
	} else if (Length == "Long") {
		result = D(4)+1;
	}	
	return result;
}

function NumOfEncountersTrip(Length) {
	var result = 0;
	
	if (Length == "Short") {
		result = D(2)-1;
	} else if (Length == "Medium") {
		result = D(4)-1;
	} else if (Length == "Long") {
		result = D(4)+1;
	}	
	return result;
}

function EventTitle(Title)
{
	result = '<div class = "event_title">';
	result = result + Title;
	result = result + "</div>";
	//result += "<br/>";
	return result;
}

function EventDescription(Desc) {
	result = '<p class = "event_desc" >';
	result += Desc;
	result += "</p>"
	return result;
}

function Desc_Journey_Enemy_About()
{
	result = "The character or party encounters a significant enemy group or NPC. The encounter will be a challenge to overcome. This could be combat, but it also can be another type of encounter that could result in a setback in completing the journey or a major goal. The referee should pick something or someone found in the area or elsewhere within the setting of the campaign.";
	return EventDescription(result);
}

function Desc_Journey_Natural_Wonder()
{
	result = "The party encounters a natural wonder of the setting of the campaign. The opportunity for a brief respite refreshes the party’s spirit, giving renewed vigor to tackle the rest of the journey. The perception skill is the vital in making the most of the opportunity. A successful check means that the party loses a level of exhaustion as they enjoy the beauty of their surroundings. ";
	return EventDescription(result);
}

function Desc_Journey_Ruins_Past()
{
	result = "The party encounters ruins from the region's past. Roll for significance to determine the extent of the ruins. The referee can use this encounter in one of two ways. First, as an opportunity for a small adventure.";
	result += "<br/>"
	result += "<br/>"
	result += "Second, the party to visit the ruins as tourists. They may leave feeling inspired or weighed down. Have each member of the party make a History skill check with advantage (15 or better). Look at the total number of successes and consult the following chart: If the party is inspired, they lose a level of exhaustion. If the party is weighed down, they gain a level of exhaustion. Any other result is indifferent."
	return EventDescription(result);
}

function Desc_Journey_Campsite()
{
	result = "While stopping for the day the party encounters a campsite that is either an exceptionally good or an exceptionally bad one for resting. In both cases the use of the survival skill is crucial to either take advantage of the opportunity or to overcome the challenge. If it is an exceptionally good campsite, success will mean that the party will lose an extra level of exhaustion after resting. If it is an exceptionally bad campsite the party will gain a level of exhaustion.  ";
	result += "<br/>"
	roll = D(6);
	if (roll <=3) {
		result += "<b>Exceptionally Bad Campsite</b>";
	} else {
		result += "<b>Exceptionally Good Campsite</b>";
	}
	return EventDescription(result);
}

function Desc_Journey_Resupply()
{
	result = "During the journey, the party encounters an opportunity for foraging or hunting to replenish their food or herb supplies. If the party chooses to take advantage of the opportunity, make a survival or herblore skill check. The entire party does not have to be involved in the attempt. Of those characters involved, the one with the highest skill should make the roll.";
	return EventDescription(result);
}

function Desc_Journey_Obstacle()
{
	result = "An obstacle forces the party to take an alternate route to their destination. This obstacle can be natural, manmade, or supernatural. Use an Encounter Type roll to decide how much of a detour is involved. The survival skill is crucial in dealing with the impact of the detour. A successful check means that a detour has been found and the journey continues without any additional impact. A failure means that the detour was difficult, and the party suffers one level of fatigue.";
	return EventDescription(result);
}

function Desc_Journey_Weather()
{
	result = "The weather turns foul for the season. A blizzard, thunderstorm, dust, heat, or high humidity create a challenge for the party to overcome.  The survival skill is crucial to the party’s success in dealing with the weather. Success means the party finds shelter or safety with no further effects on the party. Failure means that the party suffers a level of exhaustion. ";
	result += "<br/>"
	roll = D(6);
	if (roll <=3) {
		result += "<b>Minorly Bad Weather</b>";
	} else if (roll <= 5) {
		result += "<b>Majorly Bad Weather</b>";
	} else {
		result += "<b>Exceptionaly Bad Weather</b>";
	}	
	return EventDescription(result);
}

function Desc_Journey_Meeting()
{
	result = "The character or party encounters a significant NPC or group which creates an opportunity to advance an important goal. This could be the NPC agreeing to be an ally, passing on important information, or providing significant aid. Locution or persuasion skills will often play a big part in exploiting this opportunity.";
	return EventDescription(result);
}

function Desc_Journey_Random()
{
	result = "Use your favorite random encounter system to generate an encounter with an NPC or creature based on the terrain and circumstances.";
	return EventDescription(result);
}

function Desc_Journey_()
{
	result = "";
	return EventDescription(result);
}
