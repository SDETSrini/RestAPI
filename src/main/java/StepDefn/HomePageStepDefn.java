package StepDefn;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import cucumber.api.java.en.When;

import junit.framework.Assert;

public class HomePageStepDefn extends Base {
	
	
	
	//Created by Nithya on 11/12/2019
	//Updated by
	@Given("^User is on HomePage$")
	public void user_is_on_HomePage() throws Exception {
		launchbrowser();
		driver.get("https://qa.timberland.co.uk/");
		
	}

	@And("^Close cookie policy and Deny notification$")
	public void close_cookie_policy_and_Deny_notification() throws Exception {

		driver.findElement(By.xpath("//span[text()='Close']")).click();
		driver.findElement(By.xpath("//button[text()='Deny Notifications']")).click();

	} 
	
	@When("^User click \"([^\"]*)\" and select \"([^\"]*)\"$")
	public void user_click_and_select(String arg1, String arg2) throws Exception {
		
		a = new Actions(driver);
		WebElement men = driver.findElement(By.xpath("(//a[@title='"+arg1+"'])[1]"));
		a.moveToElement(men).build().perform();		
		WebElement tshirts= driver.findElement(By.xpath("//a[@title='"+arg2+"']"));
		tshirts.click();
	
	}
}
