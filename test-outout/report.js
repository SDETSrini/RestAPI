$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Feature/E2E.feature");
formatter.feature({
  "name": "Timberland Sanity Testing",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Guest User checkout using CC",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User click \"\u003ccategory\u003e\" and select \"\u003csubcategory\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Select the first product",
  "keyword": "And "
});
formatter.step({
  "name": "Select the quantity size and proceed to cart",
  "keyword": "And "
});
formatter.step({
  "name": "User lands to cart page and proceed",
  "keyword": "And "
});
formatter.step({
  "name": "User lands on Welcome page",
  "keyword": "Then "
});
formatter.step({
  "name": "User enters \"\u003cEmail\u003e\" and proceed as guest user",
  "keyword": "And "
});
formatter.step({
  "name": "User lands on billing address page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters billing address and proceed",
  "keyword": "And "
});
formatter.step({
  "name": "User lands on payment page",
  "keyword": "Then "
});
formatter.step({
  "name": "User pay using \"\u003cPaymentMethod\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Verify order confirmation page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "category",
        "subcategory",
        "Email",
        "PaymentMethod"
      ]
    },
    {
      "cells": [
        "Men",
        "T-Shirts",
        "test@test.com",
        "CC"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefn.user_is_on_HomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close cookie policy and Deny notification",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefn.close_cookie_policy_and_Deny_notification()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Guest User checkout using CC",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User click \"Men\" and select \"T-Shirts\"",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStepDefn.user_click_and_select(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the first product",
  "keyword": "And "
});
formatter.match({
  "location": "PLPStepDefn.select_the_first_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the quantity size and proceed to cart",
  "keyword": "And "
});
formatter.match({
  "location": "PDPStepDefn.select_the_quantity_size_and_proceed_to_cart()"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d78.0.3904.97)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027WKWIN1562108\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.97, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\srinaika\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58218}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 37e98c7d84a7032e2c6fa4ca56a746f8\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat StepDefn.PDPStepDefn.select_the_quantity_size_and_proceed_to_cart(PDPStepDefn.java:12)\r\n\tat ✽.Select the quantity size and proceed to cart(src/main/java/Feature/E2E.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User lands to cart page and proceed",
  "keyword": "And "
});
formatter.match({
  "location": "CartStepDefn.user_lands_to_cart_page_and_proceed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User lands on Welcome page",
  "keyword": "Then "
});
formatter.match({
  "location": "WelcomeStepDefn.user_lands_on_Welcome_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"test@test.com\" and proceed as guest user",
  "keyword": "And "
});
formatter.match({
  "location": "WelcomeStepDefn.user_enters_and_proceed_as_guest_user(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User lands on billing address page",
  "keyword": "And "
});
formatter.match({
  "location": "BillingStepDefn.user_lands_on_billing_address_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters billing address and proceed",
  "keyword": "And "
});
formatter.match({
  "location": "BillingStepDefn.user_enters_billing_address_and_proceed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User lands on payment page",
  "keyword": "Then "
});
formatter.match({
  "location": "PaymentStepDefn.user_lands_on_payment_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User pay using \"CC\"",
  "keyword": "And "
});
formatter.match({
  "location": "PaymentStepDefn.user_pay_using(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify order confirmation page",
  "keyword": "Then "
});
formatter.match({
  "location": "OrderConfStepDefn.verify_order_confirmation_page()"
});
formatter.result({
  "status": "skipped"
});
});