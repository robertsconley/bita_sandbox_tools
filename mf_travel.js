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
		SB.Append("<br/>");
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

function EventSubheader(circumstances, significance) {
	var result = '<div class="event_subheader">';
	result += '<span class="event_subheader_item">';
	result += '<span class="event_subheader_label">Circumstances:</span> ';
	result += '<span class="event_subheader_value">' + circumstances + '</span>';
	result += '</span>';

	result += '<span class="event_subheader_sep">|</span>';

	result += '<span class="event_subheader_item">';
	result += '<span class="event_subheader_label">Significance:</span> ';
	result += '<span class="event_subheader_value">' + significance + '</span>';
	result += '</span>';

	result += '</div>';
	return result;
}

function GenerateEncounterSubheader() {
	var circumstances = GenerateCircumstances();
	var significance = GenerateSignificance();
	return EventSubheader(circumstances, significance);
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
	finalresult += GenerateEncounterSubheader();
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
	var desc = "";
	
	switch(roll) {
		case 2:
			result = "Friendly Dwellers";
			desc = Desc_Voyage_Friendly_Dwellers();
			break;
		case 3:
			result = "Random Encounter";
			desc = Desc_Voyage_Random_Encounter();
			break;
		case 4:
			result = "Exceptional Weather";
			desc = Desc_Voyage_Exceptional_Weather();
			break;
		case 5:
			result = "Bounty of the Sea";
			desc = Desc_Voyage_Bounty_of_the_Sea();
			break;
		case 6:
			result = "Ship Encounter";
			desc = Desc_Voyage_Ship_Encounter();
			break;
		case 7:
			result = "Random Encounter";
			desc = Desc_Voyage_Random_Encounter();
			break;
		case 8:
			result = "Ship Encounter";
			desc = Desc_Voyage_Ship_Encounter();
			break;
		case 9:
			result = "Spoilage";
			desc = Desc_Voyage_Spoilage();
			break;
		case 10:
			result = "Freak Weather";
			desc = Desc_Voyage_Freak_Weather();
			break;
		case 11:
			result = "Random Encounter";
			desc = Desc_Voyage_Random_Encounter();
			break;
		case 12:
			result = "Enemies from the Depths";
			desc = Desc_Voyage_Enemies_from_the_Depths();
			break;
	}
	
	finalresult = '<div class = "encounter_block">';
	finalresult += EventTitle(result);
	finalresult += GenerateEncounterSubheader();
	finalresult += desc;
	finalresult += "</div>";
	
	return finalresult;
}	

function TripEncounter(){
	var roll = _2D6();
	var result = "";
	var desc = "";
	
	switch(roll) {
		case 2:
			result = "Unexpected Meeting";
			desc = Desc_Trip_Unexpected_Meeting();
			break;
		case 3:
			result = "Random Encounter";
			desc = Desc_Trip_Random_Encounter();
			break;
		case 4:
			result = "Buried Past";
			desc = Desc_Trip_Buried_Past();
			break;
		case 5:
			result = "Official Business";
			desc = Desc_Trip_Official_Business();
			break;
		case 6:
			result = "In Need of Assistance";
			desc = Desc_Trip_In_Need_of_Assistance();
			break;
		case 7:
			result = "Random Encounter";
			desc = Desc_Trip_Random_Encounter();
			break;
		case 8:
			result = "A Place to Shop";
			desc = Desc_Trip_Place_to_Shop();
			break;
		case 9:
			result = "A Wonder of the City";
			desc = Desc_Trip_Wonder_of_the_City();
			break;
		case 10:
			result = "Sudden Danger";
			desc = Desc_Trip_Sudden_Danger();
			break;
		case 11:
			result = "Random Encounter";
			desc = Desc_Trip_Random_Encounter();
			break;
		case 12:
			result = "Dangerous Encounter";
			desc = Desc_Trip_Dangerous_Encounter();
			break;
	}
	
	finalresult = '<div class = "encounter_block">';
	finalresult += EventTitle(result);
	finalresult += GenerateEncounterSubheader();
	finalresult += desc;
	finalresult += "</div>";
	
	return finalresult;
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
	result = "The character or party encounters a significant enemy group or NPC. The encounter will be a challenge to overcome. This could be combat, but it also can be another type of encounter that could result in a setback in completing the journey or a major goal.";
	result += "<br/>";
	result += "<br/>";
	result += "The referee should pick something or someone found in the area or elsewhere within the setting of the campaign.";
	return EventDescription(result);
}

function Desc_Journey_Natural_Wonder()
{
	result = "The party encounters a natural wonder of the setting of the campaign. The opportunity for a brief respite refreshes the party’s spirit, giving renewed vigor to tackle the rest of the journey.";
	result += "<br/>";
	result += "<br/>";
	result += "The perception skill is vital in making the most of the opportunity. A successful check means that the party loses a level of exhaustion as they enjoy the beauty of their surroundings.";
	return EventDescription(result);
}

function Desc_Journey_Ruins_Past()
{
	result = "The party encounters ruins from the region's past. Roll for significance to determine the extent of the ruins. The referee can use this encounter in one of two ways.";
	result += "<br/>";
	result += "<br/>";
	result += "First, as an opportunity for a small adventure.";
	result += "<br/>";
	result += "<br/>";
	result += "Second, the party may visit the ruins as tourists. They may leave feeling inspired or weighed down. Have each member of the party make a History skill check with advantage (15 or better). Look at the total number of successes and consult the following chart: If the party is inspired, they lose a level of exhaustion. If the party is weighed down, they gain a level of exhaustion. Any other result is indifferent.";
	return EventDescription(result);
}

function Desc_Journey_Campsite()
{
	result = "While stopping for the day the party encounters a campsite that is either an exceptionally good or an exceptionally bad one for resting. In both cases the use of the survival skill is crucial to either take advantage of the opportunity or to overcome the challenge.";
	result += "<br/>";
	result += "<br/>";
	result += "If it is an exceptionally good campsite, success will mean that the party will lose an extra level of exhaustion after resting. If it is an exceptionally bad campsite the party will gain a level of exhaustion.";
	result += "<br/>";
	result += "<br/>";
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
	result = "During the journey, the party encounters an opportunity for foraging or hunting to replenish their food or herb supplies.";
	result += "<br/>";
	result += "<br/>";
	result += "If the party chooses to take advantage of the opportunity, make a survival or herblore skill check. The entire party does not have to be involved in the attempt. Of those characters involved, the one with the highest skill should make the roll.";
	return EventDescription(result);
}

function Desc_Journey_Obstacle()
{
	result = "An obstacle forces the party to take an alternate route to their destination. This obstacle can be natural, manmade, or supernatural. Use an Encounter Type roll to decide how much of a detour is involved.";
	result += "<br/>";
	result += "<br/>";
	result += "The survival skill is crucial in dealing with the impact of the detour. A successful check means that a detour has been found and the journey continues without any additional impact. A failure means that the detour was difficult, and the party suffers one level of exhaustion.";
	return EventDescription(result);
}

function Desc_Journey_Weather()
{
	result = "The weather turns foul for the season. A blizzard, thunderstorm, dust, heat, or high humidity create a challenge for the party to overcome.";
	result += "<br/>";
	result += "<br/>";
	result += "The survival skill is crucial to the party’s success in dealing with the weather. Success means the party finds shelter or safety with no further effects on the party. Failure means that the party suffers a level of exhaustion.";
	result += "<br/>";
	result += "<br/>";
	roll = D(6);
	if (roll <=3) {
		result += "<b>Minorly Bad Weather</b>";
	} else if (roll <= 5) {
		result += "<b>Majorly Bad Weather</b>";
	} else {
		result += "<b>Exceptionally Bad Weather</b>";
	}	
	return EventDescription(result);
}

function Desc_Journey_Meeting()
{
	result = "The character or party encounters a significant NPC or group which creates an opportunity to advance an important goal.";
	result += "<br/>";
	result += "<br/>";
	result += "This could be the NPC agreeing to be an ally, passing on important information, or providing significant aid. Locution or persuasion skills will often play a big part in exploiting this opportunity.";
	return EventDescription(result);
}

function Desc_Journey_Random()
{
	result = "Use your favorite random encounter system to generate an encounter with an NPC or creature based on the terrain and circumstances.";
	return EventDescription(result);
}

function Desc_Voyage_Friendly_Dwellers()
{
	result = "The character or party encounters a significant NPC or group living in this area of the sea. The encounter creates an opportunity to advance an important goal. The NPC could agree to be an ally, pass on important information, or provide significant aid. The Locution skill will often play a big part in exploiting this opportunity.";
	return EventDescription(result);
}

function Desc_Voyage_Random_Encounter()
{
	result = "Use your favorite random encounter system to generate an encounter with an NPC or creature based on the location and circumstances. If you do not have a favorite, use encounter tables appropriate to the region or setting of the campaign.";
	return EventDescription(result);
}

function Desc_Voyage_Exceptional_Weather()
{
	result = "The current, tide and wind combine to produce exceptional weather for the voyage. Use the following table to determine the reduction in travel time.";
	result += "<br/>";
	result += "<br/>";
	result += "In addition, when coupled with other events like Bounty of the Sea, exceptional weather grants the crew and party advantage on any skill checks needed to resolve the event.";
	result += "<br/>";
	result += "<br/>";
	result += "A shipwright can use exceptional weather to gain advantage on any skill checks for ongoing repairs of the ship.";
	result += "<br/>";
	result += "<br/>";
	result += "<b>Travel Reduction</b>";
	result += "<br/>";
	result += "1 day voyage: 1 hour";
	result += "<br/>";
	result += "1 week voyage: 1 day";
	result += "<br/>";
	result += "1 month voyage: 4 days";
	return EventDescription(result);
}

function Desc_Voyage_Bounty_of_the_Sea()
{
	result = "During the voyage, the crew spots an opportunity for fishing or harvesting seafood. Make a ship’s crew roll using Seamanship. If successful, the crew harvests Xd6 man-days worth of food from the sea, where X is equal to half the number of crew members on the ship, rounded up. Each man-day of food takes up 2 pounds of cargo space.";
	result += "<br/>";
	result += "<br/>";
	result += "The crew roll can be made with advantage if the captain or pilot of the ship makes a successful Survival check. The ship is assumed to have supplies of salt and other preservatives to process the harvest for long-term storage.";
	return EventDescription(result);
}

function Desc_Voyage_Ship_Encounter()
{
	result = "This is an encounter with a ship voyaging across the same expanse of ocean as the party’s ship. Roll on the ship encounter table to determine the type of ship, its significance, and the circumstances of the encounter, whether good, bad, or neutral.";
	result += "<br/>";
	result += "<br/>";
	roll = D(6) + D(6);
	if (roll <= 3) {
		result += "<b>Ship Encounter: Warship Fleet</b>";
	} else if (roll <= 5) {
		result += "<b>Ship Encounter: Merchant</b>";
	} else if (roll <= 8) {
		result += "<b>Ship Encounter: Fishing Boat</b>";
	} else if (roll <= 10) {
		result += "<b>Ship Encounter: Merchant</b>";
	} else {
		result += "<b>Ship Encounter: Single Warship</b>";
	}
	return EventDescription(result);
}

function Desc_Voyage_Spoilage()
{
	result = "The ship is facing a catastrophic loss of supplies, whether it is rotten wood in barrels and crates, or vermin getting into the food stores. Roll 1d6 and multiply the result by 10%. This is the amount of food that is lost.";
	result += "<br/>";
	result += "<br/>";
	result += "A successful Shipwright skill check or Intelligence check cuts the loss in half. The crew can assist and allow this roll to be made with advantage if they succeed on a Crew skill check.";
	return EventDescription(result);
}

function Desc_Voyage_Freak_Weather()
{
	result = "The current, tide, and or wind combine to form a dangerous storm or condition that could wreck the ship and harm the crew. Roll for significance.";
	result += "<br/>";
	result += "<br/>";
	result += "The crew makes a roll to secure the ship against the freak weather. On a success, the ship suffers half damage. On a failure, the ship suffers the full amount of damage, and each individual crew member suffers the damage in the crew column. Each character in the party must make a saving throw or suffer damage as per the crew column.";
	result += "<br/>";
	result += "<br/>";
	roll = D(6);
	if (roll <= 3) {
		result += "<b>Minor Freak Weather</b>";
		result += "<br/>";
		result += "Ship Damage: 2d6";
		result += "<br/>";
		result += "Crew Damage: None";
	} else if (roll <= 5) {
		result += "<b>Major Freak Weather</b>";
		result += "<br/>";
		result += "Ship Damage: 4d6";
		result += "<br/>";
		result += "Crew Damage: 1d6";
	} else {
		result += "<b>Exceptional Freak Weather</b>";
		result += "<br/>";
		result += "Ship Damage: 8d6";
		result += "<br/>";
		result += "Crew Damage: 2d6";
	}
	return EventDescription(result);
}

function Desc_Voyage_Enemies_from_the_Depths()
{
	result = "The character or party encounters a significant enemy group or some type of sea monster. The encounter is a challenge to overcome. This could involve combat, but it could also be another type of encounter that results in a setback in completing the voyage.";
	result += "<br/>";
	result += "<br/>";
	result += "Unlike a random encounter, the referee should pick the encounter based on the area of the ocean they are in, or from elsewhere in the setting of the campaign.";
	result += "<br/>";
	result += "<br/>";
	result += "This encounter can be avoided by a successful Seamanship roll by the ship’s pilot or captain.";
	return EventDescription(result);
}

function Desc_Trip_Unexpected_Meeting()
{
	result = "The character or party encounters a significant NPC or group from the city which creates an opportunity to advance an important goal. This could be the NPC agreeing to be an ally, passing on important information, or providing significant aid.";
	result += "<br/>";
	result += "<br/>";
	result += "The Locution skill will often play a big part in exploiting this opportunity.";
	return EventDescription(result);
}

function Desc_Trip_Random_Encounter()
{
	result = "Use your favorite random encounter system to generate an encounter with an NPC or creature based on the time of day and where the party is in the city.";
	return EventDescription(result);
}

function Desc_Trip_Buried_Past()
{
	result = "The party passes an old building, hears a rumor, or finds a piece of the city’s past.";
	result += "<br/>";
	result += "<br/>";
	result += "Have one of the party members make a History skill check. If they succeed, they will either gain advantage on an Area Knowledge skill check concerning the city or gain a useful piece of information that leads to an adventure or an opportunity to advance one of their goals.";
	return EventDescription(result);
}

function Desc_Trip_Official_Business()
{
	result = "The city guard, a noble, agents of a wealthy merchant, or an official approach the party about some official business. Roll for the encounter’s significance and circumstances.";
	result += "<br/>";
	result += "<br/>";
	result += "<b>Bad Circumstances</b>: The party has encountered corrupt officials, or the city government is aware of any misdeeds in the party’s past.";
	result += "<br/>";
	result += "<br/>";
	result += "<b>Neutral Circumstances</b>: Guards asking the party their business in the city or officials making sure that all entry taxes were paid.";
	result += "<br/>";
	result += "<br/>";
	result += "<b>Good Circumstances</b>: A job offer from city officials or a noble offering patronage.";
	result += "<br/>";
	result += "<br/>";
	result += "The exact nature of the encounter depends on the city’s government, if any, and its social structure.";
	return EventDescription(result);
}

function Desc_Trip_In_Need_of_Assistance()
{
	result = "An NPC or group approaches the character or party and asks for assistance with some matter. The request could be as simple as carrying some goods, or as complicated as a desperate father looking for his missing child, or the city guard raising hue and cry to apprehend a criminal.";
	result += "<br/>";
	result += "<br/>";
	result += "The referee should roll for significance to determine how complicated the request is, and then roll on the table below to determine how much risk is involved in helping the NPC or group.";
	result += "<br/>";
	result += "<br/>";

	roll = D(6);
	if (roll <= 3) {
		result += "<b>Risk: Low</b>";
		result += "<br/>";
		result += "Helping only takes a short time.";
	} else if (roll <= 5) {
		result += "<b>Risk: Moderate</b>";
		result += "<br/>";
		result += "Helping will take time and/or the expenditure of some resources.";
	} else {
		result += "<b>Risk: High</b>";
		result += "<br/>";
		result += "Helping could result in a setback of the party’s goals or even combat.";
	}

	return EventDescription(result);
}

function Desc_Trip_Place_to_Shop()
{
	result = "An unusual or wanted item catches a character’s eye as they pass a shop or a street vendor.";
	result += "<br/>";
	result += "<br/>";
	result += "Roll for significance to determine how valuable or useful the item is.";
	return EventDescription(result);
}

function Desc_Trip_Wonder_of_the_City()
{
	result = "The party passes one of the wonders of the city, such as an impressive monument, a street show, or a significant landmark. Even if a character or the party has encountered this before, something about it on this day leaves a lasting impression.";
	result += "<br/>";
	result += "<br/>";
	result += "Have each character make an Area Knowledge (this city) skill check. If successful, the character is inspired and can choose to make a subsequent attack roll or skill check with advantage.";
	result += "<br/>";
	result += "<br/>";
	result += "This inspiration lasts until the following day.";
	return EventDescription(result);
}

function Desc_Trip_Sudden_Danger()
{
	result = "While making their way across the city, the party is beset by sudden danger. Make an encounter significance roll for the severity of the danger.";
	result += "<br/>";
	result += "<br/>";
	result += "Those affected will have to roll a saving throw to avoid the danger. The damage suffered is based on the significance of the danger.";
	result += "<br/>";
	result += "<br/>";

	roll = D(6);
	if (roll <= 2) {
		result += "<b>Example Danger: Runaway Wagon</b>";
	} else if (roll <= 4) {
		result += "<b>Example Danger: Caught in a Riot</b>";
	} else {
		result += "<b>Example Danger: Falling Chamber Pot</b>";
	}

	return EventDescription(result);
}

function Desc_Trip_Dangerous_Encounter()
{
	result = "The character or party runs into a dangerous situation while taking a trip across the city. It could be an encounter with the thieves guild, they can get caught up in a street brawl, or even have an encounter with an urban monster.";
	result += "<br/>";
	result += "<br/>";
	result += "The encounter is a challenge to overcome. This could be combat, but it could also be another type of encounter that results in a setback in completing the trip or a major goal.";
	result += "<br/>";
	result += "<br/>";
	result += "Compared to a random encounter, the referee should choose something or someone found in the city.";
	result += "<br/>";
	result += "<br/>";
	result += "Roll for significance to determine the difficulty of the challenge.";
	return EventDescription(result);
}