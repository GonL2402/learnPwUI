import {test} from '@playwright/test';
import {HomePage } from '../../_page-objects/utest/homePage'

test ('Access Register page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.gotoHomePage();
    await homePage.clickOnJoinNowButton();
    await homePage.verifyRegisterPageLoaded();
});

test ('Verify required fields on Register page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.gotoHomePage();
    await homePage.clickOnJoinNowButton();
    await homePage.verifyRegisterPageLoaded();

    await page.locator('button[ng-click="validateBasicInfoStep(userForm);"]').click();
});