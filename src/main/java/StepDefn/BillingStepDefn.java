package StepDefn;

import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.By;

import cucumber.api.java.en.And;
import junit.framework.Assert;

public class BillingStepDefn extends Base {

	@And("^User lands on billing address page$")
	public void user_lands_on_billing_address_page() throws Exception {
		Assert.assertEquals("Shipping | Timberland United Kingdom", driver.getTitle());		
	}

	@And("^User enters billing address and proceed$")
	public void user_enters_billing_address_and_proceed() throws Exception {
		Select drpTitle = new Select (driver.findElement(By.id("title-field-select")));
        drpTitle.selectByVisibleText("Mrs.");
        driver.findElement(By.id("first-name")).sendKeys("Nithya");
        driver.findElement(By.id("last-name")).sendKeys("Venkat");
        driver.findElement(By.id("address-1")).sendKeys("1 Tower Hill Terrace");
        driver.findElement(By.id("address2")).sendKeys("St Katharine Wapping");
        driver.findElement(By.id("city-name")).sendKeys("London");
        driver.findElement(By.id("zipcode")).sendKeys("ba1 2eh");
        driver.findElement(By.id("phone-1")).sendKeys("7123456789");        
        driver.findElement(By.id("wp-CheckboxConfirmTermsAndConditions")).click();
        driver.findElement(By.xpath("//a[text()='Proceed to payment']")).click();
        Thread.sleep(5000);
	}
}
