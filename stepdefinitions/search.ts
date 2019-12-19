import { browser, protractor } from "protractor";
import { SearchPageObject } from "../pages/searchPage";
const { When, Then } = require("cucumber");

const search: SearchPageObject = new SearchPageObject();
var demo:string[]=[1];

When(/^I type "(.*?)"$/, async (text) => {
    await search.searchTextBox.sendKeys(text);

});

When(/^I click on search button$/, async () => {
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
    demo[0]='uttam';
    console.log('++++++++++++++++++++++++++++++++++++++');
    console.log(demo);
});

Then(/^I click on google logo$/, async () => {
    await search.logo.click();
});