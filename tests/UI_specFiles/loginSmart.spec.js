const { test, expect } = require("@playwright/test");
const sections = require("../../pageObjects/UI_Pages/pageIndex");
const testData = require("../../test_Data/testData.json");
require("dotenv").config();
const {FakerDataPage} = require("../../utilities/faker_data")

test.describe("Smart moving Tests", () => {
    test("Launching smart moving and verifying contact us page", async ({page,}) => {
    const loginSmart = new sections.LoginSmart(test, page);
    await loginSmart.launchingApplication([process.env.SMART_MOVING_BASE_URL]);
    await page.waitForTimeout(parseInt(process.env.SMALL_WAIT));
    await expect(loginSmart.contactBtn).toBeVisible();
    await page.waitForTimeout(parseInt(process.env.SMALL_WAIT));
    await loginSmart.clickOnContactBtn();
    await page.waitForTimeout(parseInt(process.env.SMALL_WAIT));
    await expect(loginSmart.callUs).toHaveText(' call us ');
    });

    test("Scheduling demo for smart moving", async({page})=>{
     const fakerPage = new FakerDataPage();
     const loginSmart = new sections.LoginSmart(test, page);
     const data = fakerPage.fakerData();
    await loginSmart.launchingApplication([process.env.SMART_MOVING_BASE_URL]);
    await page.waitForTimeout(parseInt(process.env.SMALL_WAIT));
    await loginSmart.clickOnDemoBtn();
    await page.waitForTimeout(parseInt(process.env.SMALL_WAIT));
    await loginSmart.enterFirstName([data.firstname]);
    await page.waitForTimeout(parseInt(process.env.SMALL_WAIT));
    await loginSmart.enterLastName([data.lastname]);
    await loginSmart.enterCompanyName([data.additionalneeds]);

    });
});
