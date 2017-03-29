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


Feature: I want to Enter city name and get a five day weather forecast
Scenario Outline: I want to Enter city name and get a five day weather forecast
Given I have launched Chrome
	And Navigated to the weather acceptance website
When I enter a city name <name> 
Then I verify that the correct city <city> is returned
And I verify that the five day forecast is displayed

Examples:
   | name  |city |
   | Aberdeen |  Aberdeen  |
   | Dundee| Dundee |
   | Edinburgh | Edinburgh |
   | Glasgow | Glasgow |
   | Perth | Perth |
   | Stirling | Stirling |
