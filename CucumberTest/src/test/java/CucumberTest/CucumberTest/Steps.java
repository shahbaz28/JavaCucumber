package CucumberTest.CucumberTest;

import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import PageObjects.weatherForecast;
import cucumber.annotation.After;
import cucumber.annotation.en.And;
import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;


public class Steps {
	
	WebDriver driver = null;
	@Given("^I have launched Chrome$")
	    public void I_have_launched_Chrome(){
		System.setProperty("webdriver.chrome.driver", "D:\\Downloads\\chromedriver_win32\\chromedriver.exe");
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--start-maximized");
	    driver = new ChromeDriver(options);

		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);		
	}
	@And ("^Navigated to the weather acceptance website$")
	public void Navigated_to_the_weather_acceptance_website(){
		driver.get("https://weather-acceptance.herokuapp.com/");
		String Actualtext= weatherForecast.page_Name(driver).getText();
		Assert.assertEquals(Actualtext, "Five Day Weather Forecast for");
		
	}
	
	@When ("^I enter a city name (.*)$")
	public void I_enter_a_city_name(String name){
		WebElement searchBox = driver.findElement(By.name("city"));
		searchBox.clear();
		searchBox.sendKeys(name);
		searchBox.sendKeys(Keys.RETURN);
	}
	
	@Then("^I verify that the correct city (.*) is returned$")
	public void I_verify_that_the_correct_city_is_returned(String city){
		WebElement searchBox = driver.findElement(By.name("city"));
		searchBox.getAttribute("value");
		Assert.assertEquals(city, searchBox.getAttribute("value"));
	}
	
	@Then("^I verify that the five day forecast is displayed$")
	public void I_verify_that_the_five_day_forcast_is_displayed(){
		Assert.assertTrue(weatherForecast.fiveDayForecastReturned(driver));
		
	}
	
	
	@When("^select a day$")
	public void select_a_day() {
	    // Express the Regexp above with the code you wish you had
		WebElement day = weatherForecast.day(driver);
		day.click();
	}
	
	@Then("^a three hourly fourcast is returned$")
	public void a_three_hourly_forcast_is_returned()
	{
		List<WebElement> times = weatherForecast.time(driver);
		
		int lastTime = -1;
		
		for(WebElement element : times)
		{
			int currentTime = Integer.parseInt(element.getText());
			if(lastTime != -1)
			{
				Assert.assertTrue((lastTime + 300) == currentTime);
			}
			lastTime = currentTime;
		}	
	
	}

	@Then ("^the three hourly forecast should not be visible$")
	public void three_hourly_forecast_should_not_be_visible()
	{
		List<WebElement> times = weatherForecast.time(driver);
		for(WebElement element : times)
		{		
				Assert.assertFalse(element.isDisplayed());
		}	
			 
	}
	
	@Then ("^the three hourly temperature summary is shown$")
	public void the_three_hourly_temperayure_summary_is_shown()
	{
		List<Integer> temps =  weatherForecast.temp(driver);
		
		String tempString = weatherForecast.MaxTemp(driver).getText();
		int maxTemp = Integer.parseInt(tempString.substring(0,tempString.length() - 1 ));
		
		tempString = weatherForecast.MinTemp(driver).getText();
		int minTemp = Integer.parseInt(tempString.substring(0,tempString.length() - 1));
		
		Collections.sort(temps);
		Assert.assertEquals(minTemp, temps.get(0).intValue());
		Assert.assertEquals(maxTemp, temps.get(temps.size() - 1).intValue()	);
	}
	
	
	@After
	public void CleanUp()
	{
		driver.quit();
	}
	
}


