$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Feature/UI/E2E.feature");
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
      "name": "@Sanity123"
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
        "test_001@yopmail.com",
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
      "name": "@Sanity123"
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
  "status": "passed"
});
formatter.step({
  "name": "User lands to cart page and proceed",
  "keyword": "And "
});
formatter.match({
  "location": "CartStepDefn.user_lands_to_cart_page_and_proceed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User lands on Welcome page",
  "keyword": "Then "
});
formatter.match({
  "location": "WelcomeStepDefn.user_lands_on_Welcome_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"test_001@yopmail.com\" and proceed as guest user",
  "keyword": "And "
});
formatter.match({
  "location": "WelcomeStepDefn.user_enters_and_proceed_as_guest_user(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User lands on billing address page",
  "keyword": "And "
});
formatter.match({
  "location": "BillingStepDefn.user_lands_on_billing_address_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters billing address and proceed",
  "keyword": "And "
});
formatter.match({
  "location": "BillingStepDefn.user_enters_billing_address_and_proceed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User lands on payment page",
  "keyword": "Then "
});
formatter.match({
  "location": "PaymentStepDefn.user_lands_on_payment_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User pay using \"CC\"",
  "keyword": "And "
});
formatter.match({
  "location": "PaymentStepDefn.user_pay_using(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify order confirmation page",
  "keyword": "Then "
});
formatter.match({
  "location": "OrderConfStepDefn.verify_order_confirmation_page()"
});
formatter.result({
  "status": "passed"
});
});