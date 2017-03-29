package PageObjects;
import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class weatherForecast {
private static WebElement element = null;

public static WebElement page_Name(WebDriver driver) {

	element = driver.findElement(By.xpath("//*[@id='root']/div/h1"));

	return element;

}
public static boolean fiveDayForecastReturned(WebDriver driver) {
	
	WebElement day1 = driver.findElement(By.xpath("//*[@id='root']/div/div[1]"));
	
	WebElement day2 = driver.findElement(By.xpath("//*[@id='root']/div/div[2]"));
	WebElement day3 = driver.findElement(By.xpath("//*[@id='root']/div/div[3]"));
	WebElement day4 = driver.findElement(By.xpath("//*[@id='root']/div/div[4]"));
	WebElement day5 = driver.findElement(By.xpath("//*[@id='root']/div/div[5]"));
	return 	day1.isDisplayed() && day2.isDisplayed() && day3.isDisplayed() && day4.isDisplayed() &&	day5.isDisplayed();
}
public static WebElement day(WebDriver driver){
	
	element = driver.findElement(By.xpath("//*[@id='root']/div/div[1]/div[1]/span[1]/span[1]"));
	return element;
}
public static List<WebElement> time(WebDriver driver){
	
	List<WebElement> times = new ArrayList<WebElement>();
	
	times.add(driver.findElement(By.xpath("//*[@id='root']/div/div[1]/div[2]/div[1]/span[1]/span")));
	
	times.add(driver.findElement(By.xpath("//*[@id='root']/div/div[1]/div[2]/div[2]/span[1]/span")));
	
	times.add(driver.findElement(By.xpath("//*[@id='root']/div/div[1]/div[2]/div[3]/span[1]/span")));

	times.add(driver.findElement(By.xpath("//*[@id='root']/div/div[1]/div[2]/div[4]/span[1]/span")));
	
	
	return times;
	
	}
public static List<Integer> temp(WebDriver driver){
	
	List<Integer> temps= new ArrayList<Integer>();
	
	String temp;
	
	temp = driver.findElement(By.xpath("//*[@id='root']/div/div[1]/div[2]/div[1]/span[3]/span[1]")).getText();
	temps.add(Integer.parseInt(temp.substring(0, temp.length() - 1)));
	
	temp = driver.findElement(By.xpath("//*[@id='root']/div/div[1]/div[2]/div[2]/span[3]/span[1]")).getText();
	temps.add(Integer.parseInt(temp.substring(0, temp.length() - 1)));
	
	temp = driver.findElement(By.xpath("//*[@id='root']/div/div[1]/div[2]/div[3]/span[3]/span[1]")).getText();
	temps.add(Integer.parseInt(temp.substring(0, temp.length() - 1)));
	
	temp = driver.findElement(By.xpath("//*[@id='root']/div/div[1]/div[2]/div[4]/span[3]/span[1]")).getText();
	temps.add(Integer.parseInt(temp.substring(0, temp.length() - 1)));
	
	
	temp = driver.findElement(By.xpath("//*[@id='root']/div/div[1]/div[2]/div[1]/span[3]/span[2]")).getText();
	temps.add(Integer.parseInt(temp.substring(0, temp.length() - 1)));
	
	
	temp = driver.findElement(By.xpath("//*[@id='root']/div/div[1]/div[2]/div[2]/span[3]/span[2]")).getText();
	temps.add(Integer.parseInt(temp.substring(0, temp.length() - 1)));
	
	
	temp = driver.findElement(By.xpath("//*[@id='root']/div/div[1]/div[2]/div[3]/span[3]/span[2]")).getText();
	temps.add(Integer.parseInt(temp.substring(0, temp.length() - 1)));
	
	
	temp = driver.findElement(By.xpath("//*[@id='root']/div/div[1]/div[2]/div[4]/span[3]/span[2]")).getText();
	temps.add(Integer.parseInt(temp.substring(0, temp.length() - 1)));
	
	
    return temps;

}
public static WebElement MaxTemp(WebDriver driver){
	element = driver.findElement(By.xpath("//*[@id='root']/div/div[1]/div[1]/span[3]/span[1]"));

	return element;

}
public static WebElement MinTemp(WebDriver driver){
	element = driver.findElement(By.xpath("//*[@id='root']/div/div[1]/div[1]/span[3]/span[2]"));

	return element;

}
}


