const { excuteSteps } = require("../../utilities/actions");

exports.LoginSmart = class LoginSmart {
  constructor(test, page) {
    this.test = test;
    this.page = page;
    this.contactBtn=page.locator("(//a[text()='Contact Us'])[1]");
    this.launchText=page.locator("//h1[text()='We’re always here to help.']");
    this.callUs=page.locator("(//div[@class='cnt-detail-title'])[1]");
    this.email=page.locator("(//div[@class='cnt-detail-title'])[2]");
    this.getDemoBtn=page.locator("(//a[@title='Get Demo'][@class='cta_button '])[1]");
    this.firstName=page.locator("//input[@name='firstname']");
    this.lastName=page.locator("//input[@name='lastname']");
    this.companyName=page.locator("//input[@placeholder='Company Nam']");
    this.getDemoBtn=page.locator("(//a[@title='Get Demo'][@class='cta_button '])[1]");
    
  }
  launchingApplication = async (baseUrl) => {
    await excuteSteps(
      this.test,
      await this.page,
      "navigate",
      `Launch Smart moveing webpage ${baseUrl}`,
      baseUrl
    );
  };
  clickOnContactBtn = async () => {
    await excuteSteps(
      this.test,
      this.contactBtn,
      "click",
      `Click on Login button`
    );
  };
  clickOnDemoBtn = async () => {
    await excuteSteps(
      this.test,
      this.getDemoBtn,
      "click",
      `Click on Get Demo button`
    );
  };

    enterFirstName = async (fname) => {
        await excuteSteps(
      this.test,
      this.firstName,
      "fill",
      `Enter the user's in the first name input field.${fname}`,
      fname
    );
  };

enterLastName = async (lname) => {
    await excuteSteps(
      this.test,
      this.lastName,
      "fill",
      `Enter the user's last name in input field.${lname}`,
      lname
    );
  };

  enterCompanyName = async (cname) => {
    await excuteSteps(
      this.test,
      this.companyName,
      "fill",
      `Enter the comapny name in input field.${cname}`,
      cname
    );
  };

};
