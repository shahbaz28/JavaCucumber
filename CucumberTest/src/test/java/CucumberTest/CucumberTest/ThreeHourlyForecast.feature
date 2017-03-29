#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios 
#<> (placeholder)
#""
## (Comments)

#Sample Feature Definition Template
@tag
Feature: Three Hourly Forecast
	I want to Select day, get three hourly forecast

Scenario Outline: Show Three hourly forecast
Given I have launched Chrome
	And Navigated to the weather acceptance website
When I enter a city name <name>
And select a day 
Then a three hourly fourcast is returned 

Examples:
    | name  |
    | Glasgow | 
    | Edinburgh | 

Scenario Outline: Hide Three hourly forecast
Given I have launched Chrome
	And Navigated to the weather acceptance website
When I enter a city name <name>
And select a day 
And select a day 
Then the three hourly forecast should not be visible 


Examples:
    | name  |
    | Glasgow | 
    | Edinburgh | 

Scenario Outline: Summarise three hour data
Given I have launched Chrome
	And Navigated to the weather acceptance website
When I enter a city name <name>
And select a day 
Then the three hourly temperature summary is shown


Examples:
    | name  |
    | Glasgow | 

