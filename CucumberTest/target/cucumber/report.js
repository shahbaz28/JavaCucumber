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
  "duration": 1989603314,
  "status": "passed"
});
formatter.match({
  "location": "Steps.Navigated_to_the_weather_acceptance_website()"
});
formatter.result({
  "duration": 1040025848,
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
  "duration": 633809102,
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
  "duration": 23784617,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_verify_that_the_five_day_forcast_is_displayed()"
});
formatter.result({
  "duration": 195099221,
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
  "duration": 1925911496,
  "status": "passed"
});
formatter.match({
  "location": "Steps.Navigated_to_the_weather_acceptance_website()"
});
formatter.result({
  "duration": 991774696,
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
  "duration": 592952718,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_a_day()"
});
formatter.result({
  "duration": 101384528,
  "status": "passed"
});
formatter.match({
  "location": "Steps.a_three_hourly_forcast_is_returned()"
});
formatter.result({
  "duration": 175250516,
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
  "duration": 1958037603,
  "status": "passed"
});
formatter.match({
  "location": "Steps.Navigated_to_the_weather_acceptance_website()"
});
formatter.result({
  "duration": 1054548940,
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
  "duration": 660620271,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_a_day()"
});
formatter.result({
  "duration": 111066864,
  "status": "passed"
});
formatter.match({
  "location": "Steps.a_three_hourly_forcast_is_returned()"
});
formatter.result({
  "duration": 171556005,
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
  "duration": 1941856312,
  "status": "passed"
});
formatter.match({
  "location": "Steps.Navigated_to_the_weather_acceptance_website()"
});
formatter.result({
  "duration": 1031264369,
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
  "duration": 582225131,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_a_day()"
});
formatter.result({
  "duration": 99610966,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_a_day()"
});
formatter.result({
  "duration": 69011272,
  "status": "passed"
});
formatter.match({
  "location": "Steps.three_hourly_forecast_should_not_be_visible()"
});
formatter.result({
  "duration": 155915815,
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
  "duration": 1955394093,
  "status": "passed"
});
formatter.match({
  "location": "Steps.Navigated_to_the_weather_acceptance_website()"
});
formatter.result({
  "duration": 1025859931,
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
  "duration": 665124790,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_a_day()"
});
formatter.result({
  "duration": 121042329,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_a_day()"
});
formatter.result({
  "duration": 69479295,
  "status": "passed"
});
formatter.match({
  "location": "Steps.three_hourly_forecast_should_not_be_visible()"
});
formatter.result({
  "duration": 157004995,
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
  "duration": 1943756322,
  "status": "passed"
});
formatter.match({
  "location": "Steps.Navigated_to_the_weather_acceptance_website()"
});
formatter.result({
  "duration": 994407942,
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
  "duration": 564266172,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_a_day()"
});
formatter.result({
  "duration": 99172912,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_three_hourly_temperayure_summary_is_shown()"
});
formatter.result({
  "duration": 396882554,
  "status": "passed"
});
});