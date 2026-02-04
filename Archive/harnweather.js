const Table = [, [], [], [], []];
    // Month names 1–12
const MonthName = [, // index 0 unused
"Nuzyael", "Peonu", "Kelen", "Nolus", "Larane", "Agrazhar", "Azura", "Halane", "Savor", "Ilvin", "Navek", "Morgat"];

// Watch periods 1–6
const Watch = [, // index 0 unused
"Midnight to 4:00am", "4:00am to 8:00am", "8:00am to Noon", "Noon to 4:00pm", "4:00pm to 8:00pm", "8:00pm to Midnight"];

// WatchLight: [season][watch] = "Day" or "Night"
const WatchLight = [, // index 0 unused
[, "Night", "Night", "Day", "Day", "Day", "Night"], // season 1
[, "Night", "Day", "Day", "Day", "Day", "Night"], // season 2
[, "Night", "Night", "Day", "Day", "Day", "Night"], // season 3
[, "Night", "Night", "Day", "Day", "Night", "Night"]// season 4
];



function Generate_Weather() {
    var ClimbatType = "";
    var StartMonth = "";
    ClimateType = document.forms["WeatherForm"]["ClimateType"].value;
    StartMonth = document.forms["WeatherForm"]["StartMonth"].value;

    //	var Rest = TravelType + "|" + TravelLength

    var Season = FindSeason(StartMonth);
    Result = Season;
    if (Season == "Spring") {
        Result = GenerateSpring(ClimateType, StartMonth)
    } else if (Season == "Summer") {
        Result = GenerateSummer(ClimateType, StartMonth)
    } else if (Season == "Autumn") {
        Result = GenerateAutumn(ClimateType, StartMonth)
    } else if (Season == "Winter") {
        Result = GenerateWinter(ClimateType, StartMonth)
    }

    document.getElementById("contentWeather").innerHTML = Result;
    //document.getElementById("contentcopyResult").value = Result;
}

function FindSeason(StartMonth) {
    var Result = "";

    if (StartMonth >= 1 && StartMonth <= 3) {
        Result = "Spring";
    } else if (StartMonth >= 4 && StartMonth <= 6) {
        Result = "Summer";
    } else if (StartMonth >= 7 && StartMonth <= 9) {
        Result = "Autumn";
    } else if (StartMonth >= 10 && StartMonth <= 12) {
        Result = "Winter";
    } else {
        Result = "Invalid month";
    }
    return Result;
}

function GenerateSpring(ClimateType, StartMonth) {
    var Result = "";
    InitializeClimate(ClimateType);
    Result = MonthName[StartMonth];
    return Result;
}

function GenerateSummer(ClimateType, StartMonth) {
    var Result = "";
    return Result;
}

function GenerateAutumn(ClimateType, StartMonth) {
    var Result = "";
    return Result;
}

function GenerateWinter(ClimateType, StartMonth) {
    var Result = "";
    return Result;
}

function InitializeClimate(ClimateType) {
	InitializeTemperate();
}

function InitializeTemperate() {
    // 1-based arrays; index 0 is unused

    // Season 1: Spring
    Table[1] = [, // placeholder for index 0
    {
        cloud: "Overcast",
        precipitation: "Showers",
        otherP: "S",
        dayTemp: "Cold",
        nightTemp: "Cold",
        windDirection: "N",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Partly Cloudy",
        precipitation: "None",
        otherP: "N",
        dayTemp: "Cool",
        nightTemp: "Cool",
        windDirection: "NE",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Clear",
        precipitation: "F/M",
        otherP: "N",
        dayTemp: "Warm",
        nightTemp: "Cool",
        windDirection: "SE",
        minWindForce: 0,
        maxWindForce: 2
    }, {
        cloud: "Partly Cloudy",
        precipitation: "Showers",
        otherP: "N",
        dayTemp: "Warm",
        nightTemp: "Warm",
        windDirection: "S",
        minWindForce: 0,
        maxWindForce: 2
    }, {
        cloud: "Overcast",
        precipitation: "Showers",
        otherP: "N",
        dayTemp: "Cool",
        nightTemp: "Cool",
        windDirection: "SW",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Overcast",
        precipitation: "Hail",
        otherP: "N",
        dayTemp: "Cold",
        nightTemp: "Cold",
        windDirection: "NW",
        minWindForce: 2,
        maxWindForce: 4
    }, {
        cloud: "Partly Cloudy",
        precipitation: "Showers",
        otherP: "Y",
        dayTemp: "Cold",
        nightTemp: "Freezing",
        windDirection: "SW",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Partly Cloudy",
        precipitation: "None",
        otherP: "N",
        dayTemp: "Cool",
        nightTemp: "Cool",
        windDirection: "SW",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Partly Cloudy",
        precipitation: "None",
        otherP: "N",
        dayTemp: "Cold",
        nightTemp: "Cold",
        windDirection: "NW",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Partly Cloudy",
        precipitation: "F/M",
        otherP: "N",
        dayTemp: "Freezing",
        nightTemp: "Freezing",
        windDirection: "N",
        minWindForce: 0,
        maxWindForce: 2
    }, {
        cloud: "Clear",
        precipitation: "None",
        otherP: "N",
        dayTemp: "Cool",
        nightTemp: "Freezing",
        windDirection: "N",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Partly Cloudy",
        precipitation: "None",
        otherP: "N",
        dayTemp: "Cool",
        nightTemp: "Freezing",
        windDirection: "NE",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Clear",
        precipitation: "F/M",
        otherP: "N",
        dayTemp: "Warm",
        nightTemp: "Cool",
        windDirection: "SE",
        minWindForce: 0,
        maxWindForce: 2
    }, {
        cloud: "Clear",
        precipitation: "F/M",
        otherP: "N",
        dayTemp: "Hot",
        nightTemp: "Warm",
        windDirection: "S",
        minWindForce: 0,
        maxWindForce: 2
    }, {
        cloud: "Partly Cloudy",
        precipitation: "Thunderstorms",
        otherP: "N",
        dayTemp: "Warm",
        nightTemp: "Warm",
        windDirection: "SW",
        minWindForce: 0,
        maxWindForce: 2
    }, {
        cloud: "Clear",
        precipitation: "None",
        otherP: "N",
        dayTemp: "Cool",
        nightTemp: "Cold",
        windDirection: "NW",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Partly Cloudy",
        precipitation: "Showers",
        otherP: "N",
        dayTemp: "Cool",
        nightTemp: "Cool",
        windDirection: "SW",
        minWindForce: 2,
        maxWindForce: 4
    }, {
        cloud: "Overcast",
        precipitation: "Rain",
        otherP: "N",
        dayTemp: "Cool",
        nightTemp: "Cool",
        windDirection: "SW",
        minWindForce: 2,
        maxWindForce: 4
    }, {
        cloud: "Partly Cloudy",
        precipitation: "Showers",
        otherP: "S",
        dayTemp: "Cold",
        nightTemp: "Cold",
        windDirection: "NW",
        minWindForce: 2,
        maxWindForce: 4
    }, {
        cloud: "Overcast",
        precipitation: "None",
        otherP: "N",
        dayTemp: "Cold",
        nightTemp: "Cold",
        windDirection: "NW",
        minWindForce: 1,
        maxWindForce: 3
    }];

    // Season 2: Summer
    Table[2] = [, {
        cloud: "Partly Cloudy",
        precipitation: "None",
        otherP: "N",
        dayTemp: "Cool",
        nightTemp: "Cool",
        windDirection: "N",
        minWindForce: 0,
        maxWindForce: 2
    }, {
        cloud: "Partly Cloudy",
        precipitation: "Showers",
        otherP: "N",
        dayTemp: "Warm",
        nightTemp: "Warm",
        windDirection: "NE",
        minWindForce: 0,
        maxWindForce: 2
    }, {
        cloud: "Clear",
        precipitation: "F/M",
        otherP: "N",
        dayTemp: "Hot",
        nightTemp: "Cool",
        windDirection: "SE",
        minWindForce: 0,
        maxWindForce: 2
    }, {
        cloud: "Clear",
        precipitation: "None",
        otherP: "N",
        dayTemp: "Hot",
        nightTemp: "Warm",
        windDirection: "S",
        minWindForce: 0,
        maxWindForce: 2
    }, {
        cloud: "Partly Cloudy",
        precipitation: "Thunderstorms",
        otherP: "N",
        dayTemp: "Warm",
        nightTemp: "Warm",
        windDirection: "SW",
        minWindForce: 0,
        maxWindForce: 2
    }, {
        cloud: "Partly Cloudy",
        precipitation: "None",
        otherP: "N",
        dayTemp: "Warm",
        nightTemp: "Cool",
        windDirection: "S",
        minWindForce: 0,
        maxWindForce: 2
    }, {
        cloud: "Overcast",
        precipitation: "Rain",
        otherP: "N",
        dayTemp: "Cool",
        nightTemp: "Cool",
        windDirection: "SW",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Overcast",
        precipitation: "Showers",
        otherP: "N",
        dayTemp: "Cool",
        nightTemp: "Cool",
        windDirection: "NW",
        minWindForce: 2,
        maxWindForce: 4
    }, {
        cloud: "Partly Cloudy",
        precipitation: "None",
        otherP: "N",
        dayTemp: "Warm",
        nightTemp: "Cool",
        windDirection: "SW",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Clear",
        precipitation: "None",
        otherP: "N",
        dayTemp: "Warm",
        nightTemp: "Cool",
        windDirection: "NW",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Clear",
        precipitation: "None",
        otherP: "N",
        dayTemp: "Warm",
        nightTemp: "Cool",
        windDirection: "N",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Clear",
        precipitation: "F/M",
        otherP: "N",
        dayTemp: "Hot",
        nightTemp: "Cool",
        windDirection: "NE",
        minWindForce: 0,
        maxWindForce: 2
    }, {
        cloud: "Partly Cloudy",
        precipitation: "Thunderstorms",
        otherP: "H",
        dayTemp: "Hot",
        nightTemp: "Warm",
        windDirection: "SE",
        minWindForce: 0,
        maxWindForce: 2
    }, {
        cloud: "Partly Cloudy",
        precipitation: "None",
        otherP: "N",
        dayTemp: "Warm",
        nightTemp: "Cool",
        windDirection: "S",
        minWindForce: 0,
        maxWindForce: 2
    }, {
        cloud: "Partly Cloudy",
        precipitation: "None",
        otherP: "N",
        dayTemp: "Warm",
        nightTemp: "Warm",
        windDirection: "SW",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Partly Cloudy",
        precipitation: "None",
        otherP: "N",
        dayTemp: "Warm",
        nightTemp: "Cool",
        windDirection: "SW",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Overcast",
        precipitation: "Rain",
        otherP: "N",
        dayTemp: "Cool",
        nightTemp: "Cool",
        windDirection: "SW",
        minWindForce: 2,
        maxWindForce: 4
    }, {
        cloud: "Overcast",
        precipitation: "Showers",
        otherP: "N",
        dayTemp: "Cool",
        nightTemp: "Cool",
        windDirection: "SW",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Overcast",
        precipitation: "Rain",
        otherP: "N",
        dayTemp: "Cool",
        nightTemp: "Cool",
        windDirection: "SW",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Overcast",
        precipitation: "Rain",
        otherP: "N",
        dayTemp: "Cold",
        nightTemp: "Cold",
        windDirection: "NW",
        minWindForce: 0,
        maxWindForce: 2
    }];

    // Season 3: Autumn
    Table[3] = [, {
        cloud: "Clear",
        precipitation: "None",
        otherP: "N",
        dayTemp: "Cool",
        nightTemp: "Cold",
        windDirection: "N",
        minWindForce: 0,
        maxWindForce: 2
    }, {
        cloud: "Partly Cloudy",
        precipitation: "None",
        otherP: "N",
        dayTemp: "Warm",
        nightTemp: "Cool",
        windDirection: "N",
        minWindForce: 0,
        maxWindForce: 2
    }, {
        cloud: "Clear",
        precipitation: "F/M",
        otherP: "N",
        dayTemp: "Warm",
        nightTemp: "Cool",
        windDirection: "NE",
        minWindForce: 0,
        maxWindForce: 2
    }, {
        cloud: "Clear",
        precipitation: "F/M",
        otherP: "N",
        dayTemp: "Hot",
        nightTemp: "Warm",
        windDirection: "SE",
        minWindForce: 0,
        maxWindForce: 2
    }, {
        cloud: "Partly Cloudy",
        precipitation: "Thunderstorms",
        otherP: "N",
        dayTemp: "Hot",
        nightTemp: "Warm",
        windDirection: "S",
        minWindForce: 0,
        maxWindForce: 2
    }, {
        cloud: "Overcast",
        precipitation: "Showers",
        otherP: "N",
        dayTemp: "Warm",
        nightTemp: "Warm",
        windDirection: "SW",
        minWindForce: 0,
        maxWindForce: 2
    }, {
        cloud: "Overcast",
        precipitation: "Rain",
        otherP: "N",
        dayTemp: "Cool",
        nightTemp: "Cool",
        windDirection: "NW",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Overcast",
        precipitation: "Rain",
        otherP: "N",
        dayTemp: "Cold",
        nightTemp: "Cold",
        windDirection: "SW",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Overcast",
        precipitation: "None",
        otherP: "N",
        dayTemp: "Cold",
        nightTemp: "Cold",
        windDirection: "NW",
        minWindForce: 2,
        maxWindForce: 4
    }, {
        cloud: "Overcast",
        precipitation: "None",
        otherP: "N",
        dayTemp: "Cold",
        nightTemp: "Cold",
        windDirection: "NW",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Overcast",
        precipitation: "None",
        otherP: "N",
        dayTemp: "Cold",
        nightTemp: "Cold",
        windDirection: "N",
        minWindForce: 2,
        maxWindForce: 4
    }, {
        cloud: "Overcast",
        precipitation: "Showers",
        otherP: "N",
        dayTemp: "Cool",
        nightTemp: "Cool",
        windDirection: "NE",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Partly Cloudy",
        precipitation: "F/M",
        otherP: "N",
        dayTemp: "Warm",
        nightTemp: "Cool",
        windDirection: "SE",
        minWindForce: 0,
        maxWindForce: 2
    }, {
        cloud: "Overcast",
        precipitation: "Rain",
        otherP: "N",
        dayTemp: "Cool",
        nightTemp: "Cool",
        windDirection: "S",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Overcast",
        precipitation: "Rain",
        otherP: "N",
        dayTemp: "Cool",
        nightTemp: "Cool",
        windDirection: "SW",
        minWindForce: 2,
        maxWindForce: 4
    }, {
        cloud: "Partly Cloudy",
        precipitation: "Showers",
        otherP: "N",
        dayTemp: "Warm",
        nightTemp: "Cool",
        windDirection: "S",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Clear",
        precipitation: "None",
        otherP: "N",
        dayTemp: "Warm",
        nightTemp: "Cool",
        windDirection: "SW",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Partly Cloudy",
        precipitation: "Showers",
        otherP: "N",
        dayTemp: "Cool",
        nightTemp: "Cold",
        windDirection: "NW",
        minWindForce: 2,
        maxWindForce: 4
    }, {
        cloud: "Overcast",
        precipitation: "Showers",
        otherP: "S",
        dayTemp: "Cold",
        nightTemp: "Freezing",
        windDirection: "SW",
        minWindForce: 2,
        maxWindForce: 4
    }, {
        cloud: "Partly Cloudy",
        precipitation: "Hail",
        otherP: "N",
        dayTemp: "Freezing",
        nightTemp: "Freezing",
        windDirection: "NW",
        minWindForce: 1,
        maxWindForce: 3
    }];

    // Season 4: Winter
    Table[4] = [, {
        cloud: "Overcast",
        precipitation: "Showers",
        otherP: "N",
        dayTemp: "Cold",
        nightTemp: "Freezing",
        windDirection: "N",
        minWindForce: 0,
        maxWindForce: 2
    }, {
        cloud: "Overcast",
        precipitation: "Showers",
        otherP: "S",
        dayTemp: "Freezing",
        nightTemp: "Freezing",
        windDirection: "NW",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Overcast",
        precipitation: "None",
        otherP: "N",
        dayTemp: "Cold",
        nightTemp: "Cold",
        windDirection: "N",
        minWindForce: 2,
        maxWindForce: 4
    }, {
        cloud: "Partly Cloudy",
        precipitation: "None",
        otherP: "N",
        dayTemp: "Cool",
        nightTemp: "Cold",
        windDirection: "NE",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Clear",
        precipitation: "F/M",
        otherP: "N",
        dayTemp: "Warm",
        nightTemp: "Cold",
        windDirection: "SE",
        minWindForce: 0,
        maxWindForce: 2
    }, {
        cloud: "Partly Cloudy",
        precipitation: "Showers",
        otherP: "N",
        dayTemp: "Cool",
        nightTemp: "Freezing",
        windDirection: "S",
        minWindForce: 0,
        maxWindForce: 2
    }, {
        cloud: "Overcast",
        precipitation: "Rain",
        otherP: "S",
        dayTemp: "Cold",
        nightTemp: "Cold",
        windDirection: "NW",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Overcast",
        precipitation: "Showers",
        otherP: "S",
        dayTemp: "Cold",
        nightTemp: "Cold",
        windDirection: "NW",
        minWindForce: 0,
        maxWindForce: 2
    }, {
        cloud: "Overcast",
        precipitation: "Showers",
        otherP: "N",
        dayTemp: "Cool",
        nightTemp: "Cool",
        windDirection: "SW",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Overcast",
        precipitation: "None",
        otherP: "N",
        dayTemp: "Cold",
        nightTemp: "Cold",
        windDirection: "NW",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Overcast",
        precipitation: "Hail",
        otherP: "N",
        dayTemp: "Cold",
        nightTemp: "Cold",
        windDirection: "N",
        minWindForce: 2,
        maxWindForce: 4
    }, {
        cloud: "Partly Cloudy",
        precipitation: "F/M",
        otherP: "N",
        dayTemp: "Freezing",
        nightTemp: "Freezing",
        windDirection: "N",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Clear",
        precipitation: "None",
        otherP: "N",
        dayTemp: "Cool",
        nightTemp: "Freezing",
        windDirection: "NE",
        minWindForce: 2,
        maxWindForce: 4
    }, {
        cloud: "Partly Cloudy",
        precipitation: "None",
        otherP: "N",
        dayTemp: "Cool",
        nightTemp: "Cold",
        windDirection: "SE",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Clear",
        precipitation: "None",
        otherP: "N",
        dayTemp: "Cool",
        nightTemp: "Freezing",
        windDirection: "S",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Partly Cloudy",
        precipitation: "Showers",
        otherP: "N",
        dayTemp: "Cool",
        nightTemp: "Cold",
        windDirection: "SW",
        minWindForce: 2,
        maxWindForce: 4
    }, {
        cloud: "Overcast",
        precipitation: "Rain",
        otherP: "S",
        dayTemp: "Cold",
        nightTemp: "Freezing",
        windDirection: "NW",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Overcast",
        precipitation: "Showers",
        otherP: "S",
        dayTemp: "Cold",
        nightTemp: "Cold",
        windDirection: "SW",
        minWindForce: 2,
        maxWindForce: 4
    }, {
        cloud: "Overcast",
        precipitation: "Hail",
        otherP: "N",
        dayTemp: "Cold",
        nightTemp: "Cold",
        windDirection: "SW",
        minWindForce: 1,
        maxWindForce: 3
    }, {
        cloud: "Overcast",
        precipitation: "None",
        otherP: "N",
        dayTemp: "Cold",
        nightTemp: "Cold",
        windDirection: "NW",
        minWindForce: 1,
        maxWindForce: 3
    }];

    //return { Table, Months, Watch, WatchLight };
}
