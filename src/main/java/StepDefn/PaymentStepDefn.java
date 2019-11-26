package StepDefn;

import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.By;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import junit.framework.Assert;

public class PaymentStepDefn extends Base {

	@Then("^User lands on payment page$")
	public void user_lands_on_payment_page() throws Exception {
		Assert.assertEquals("Billing and Payment | Timberland United Kingdom", driver.getTitle());
	}

	@And("^User pay using \"([^\"]*)\"$")
	public void user_pay_using(String arg1) throws Exception {

		switch (arg1) {

		case "CC":
			driver.switchTo().frame("wp-cl-WPCARDS-iframe-iframe");
			Thread.sleep(1000);
			driver.findElement(By.id("cardNumber")).sendKeys("4444333322221111");
			driver.findElement(By.id("cardholderName")).sendKeys("Nithya");
			driver.findElement(By.id("expiryMonth")).sendKeys("09");
			driver.findElement(By.id("expiryYear")).sendKeys("25");
			driver.findElement(By.id("securityCode")).sendKeys("125");
			driver.findElement(By.id("submitButton")).click();
			Thread.sleep(7000);
			break; // break is optional

		case "PayPal":
			Thread.sleep(7000);
//			driver.findElement(By.xpath("//div[@class= 'small-11 columns'][1]")).click();
			driver.findElement(By.xpath("//div[@class='panel-header row collapse']//h3[text()=' PAYPAL']")).click();
			driver.findElement(By.xpath("//a[@title='PAYPAL']")).click();
			Thread.sleep(5000);
			driver.findElement(By.xpath("//input[@id='PMMakePayment']")).click();
			break; // break is optional

		default:
			// Statements
		}

	}

}
