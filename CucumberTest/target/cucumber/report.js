$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('CucumberTest\CucumberTest\5dayForcast.feature');
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    }
  ],
  "line": 20,
  "name": "I want to Enter city name and get a five day weather forecast",
  "description": "",
  "id": "i-want-to-enter-city-name-and-get-a-five-day-weather-forecast",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 30,
  "name": "I want to Enter city name and get a five day weather forecast",
  "description": "",
  "id": "i-want-to-enter-city-name-and-get-a-five-day-weather-forecast;i-want-to-enter-city-name-and-get-a-five-day-weather-forecast;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "I have launched Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Navigated to the weather acceptance website",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter a city name Aberdeen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I verify that the correct city Aberdeen is returned",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I verify that the five day forecast is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_have_launched_Chrome()"
});
formatter.result({
  "duration": 1930606919,
  "status": "passed"
});
formatter.match({
  "location": "Steps.Navigated_to_the_weather_acceptance_website()"
});
formatter.result({
  "duration": 768772662,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aberdeen",
      "offset": 20
    }
  ],
  "location": "Steps.I_enter_a_city_name(String)"
});
formatter.result({
  "duration": 615842754,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aberdeen",
      "offset": 31
    }
  ],
  "location": "Steps.I_verify_that_the_correct_city_is_returned(String)"
});
formatter.result({
  "duration": 22995547,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_verify_that_the_five_day_forcast_is_displayed()"
});
formatter.result({
  "duration": 176549486,
  "status": "passed"
});
formatter.uri('CucumberTest\CucumberTest\ThreeHourlyForecast.feature');
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 19,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 21,
  "name": "Three Hourly Forecast",
  "description": "I want to Select day, get three hourly forecast",
  "id": "three-hourly-forecast",
  "keyword": "Feature",
  "tags": [
    {
      "line": 20,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 33,
  "name": "Show Three hourly forecast",
  "description": "",
  "id": "three-hourly-forecast;show-three-hourly-forecast;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I have launched Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Navigated to the weather acceptance website",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter a city name Glasgow",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "select a day",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "a three hourly fourcast is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_have_launched_Chrome()"
});
formatter.result({
  "duration": 1946379306,
  "status": "passed"
});
formatter.match({
  "location": "Steps.Navigated_to_the_weather_acceptance_website()"
});
formatter.result({
  "duration": 781561195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Glasgow",
      "offset": 20
    }
  ],
  "location": "Steps.I_enter_a_city_name(String)"
});
formatter.result({
  "duration": 552699427,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_a_day()"
});
formatter.result({
  "duration": 101463353,
  "status": "passed"
});
formatter.match({
  "location": "Steps.a_three_hourly_forcast_is_returned()"
});
formatter.result({
  "duration": 172713747,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Show Three hourly forecast",
  "description": "",
  "id": "three-hourly-forecast;show-three-hourly-forecast;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I have launched Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Navigated to the weather acceptance website",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter a city name Edinburgh",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "select a day",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "a three hourly fourcast is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_have_launched_Chrome()"
});
formatter.result({
  "duration": 1930742810,
  "status": "passed"
});
formatter.match({
  "location": "Steps.Navigated_to_the_weather_acceptance_website()"
});
formatter.result({
  "duration": 809291988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Edinburgh",
      "offset": 20
    }
  ],
  "location": "Steps.I_enter_a_city_name(String)"
});
formatter.result({
  "duration": 647429402,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_a_day()"
});
formatter.result({
  "duration": 111777520,
  "status": "passed"
});
formatter.match({
  "location": "Steps.a_three_hourly_forcast_is_returned()"
});
formatter.result({
  "duration": 172383668,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Hide Three hourly forecast",
  "description": "",
  "id": "three-hourly-forecast;hide-three-hourly-forecast;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I have launched Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "Navigated to the weather acceptance website",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter a city name Glasgow",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "select a day",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "select a day",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "the three hourly forecast should not be visible",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_have_launched_Chrome()"
});
formatter.result({
  "duration": 1961366726,
  "status": "passed"
});
formatter.match({
  "location": "Steps.Navigated_to_the_weather_acceptance_website()"
});
formatter.result({
  "duration": 834628472,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Glasgow",
      "offset": 20
    }
  ],
  "location": "Steps.I_enter_a_city_name(String)"
});
formatter.result({
  "duration": 596142666,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_a_day()"
});
formatter.result({
  "duration": 101227699,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_a_day()"
});
formatter.result({
  "duration": 70334875,
  "status": "passed"
});
formatter.match({
  "location": "Steps.three_hourly_forecast_should_not_be_visible()"
});
formatter.result({
  "duration": 148291961,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Hide Three hourly forecast",
  "description": "",
  "id": "three-hourly-forecast;hide-three-hourly-forecast;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I have launched Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "Navigated to the weather acceptance website",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter a city name Edinburgh",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "select a day",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "select a day",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "the three hourly forecast should not be visible",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_have_launched_Chrome()"
});
formatter.result({
  "duration": 1932233096,
  "status": "passed"
});
formatter.match({
  "location": "Steps.Navigated_to_the_weather_acceptance_website()"
});
formatter.result({
  "duration": 790291061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Edinburgh",
      "offset": 20
    }
  ],
  "location": "Steps.I_enter_a_city_name(String)"
});
formatter.result({
  "duration": 643820286,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_a_day()"
});
formatter.result({
  "duration": 112037396,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_a_day()"
});
formatter.result({
  "duration": 64965334,
  "status": "passed"
});
formatter.match({
  "location": "Steps.three_hourly_forecast_should_not_be_visible()"
});
formatter.result({
  "duration": 157214375,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Summarise three hour data",
  "description": "",
  "id": "three-hourly-forecast;summarise-three-hour-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "I have launched Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "Navigated to the weather acceptance website",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I enter a city name Glasgow",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "select a day",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "the three hourly temperature summary is shown",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_have_launched_Chrome()"
});
formatter.result({
  "duration": 1951347332,
  "status": "passed"
});
formatter.match({
  "location": "Steps.Navigated_to_the_weather_acceptance_website()"
});
formatter.result({
  "duration": 1290383844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Glasgow",
      "offset": 20
    }
  ],
  "location": "Steps.I_enter_a_city_name(String)"
});
formatter.result({
  "duration": 555151213,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_a_day()"
});
formatter.result({
  "duration": 100539623,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_three_hourly_temperayure_summary_is_shown()"
});
formatter.result({
  "duration": 396092251,
  "status": "passed"
});
});