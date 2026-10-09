import {test, expect} from '@playwright/test';

test('Access Register page', async ({page}) => {
    await page.goto('https://utest.com/');
    await page.locator('header[role="banner"] a[ui-sref="signup.personal"]').click();
    await expect(page).toHaveURL(/.*signup\/personal/);
});

test('Verify required fields on Register page', async ({page}) => {
    await page.goto('https://utest.com/');
    
    await page.locator('button[id="onetrust-accept-btn-handler"]').click();

    await page.locator('header[role="banner"] a[ui-sref="signup.personal"]').click();
    await expect(page).toHaveURL(/.*signup\/personal/);

    //await page.locator('button[ng-click="validateBasicInfoStep(userForm);"]').click();

    await expect(page.locator('//form[contains(@class," invalid")]//i[text()="warning"]/following-sibling::span[@id="firstNameError"]')).toHaveText('First name is required');
    await expect(page.locator('//form[contains(@class," invalid")]//i[text()="warning"]/following-sibling::span[@id="lastNameError"]')).toHaveText('Last name is required');
    await expect(page.locator('//form[contains(@class," invalid")]//i[text()="warning"]/following-sibling::span[@id="emailError"]')).toHaveText('Enter valid email');
});