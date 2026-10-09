import {Page, expect} from '@playwright/test';
import { UiHelper } from '../../utils/uiHelper';

export class RegisterPage {
    constructor(readonly page: Page) {}

    private readonly firstNameWarningText = '//form[contains(@class," invalid")]//i[text()="warning"]/following-sibling::span[@id="firstNameError"]';
    private readonly lastNameWarningText = '//form[contains(@class," invalid")]//i[text()="warning"]/following-sibling::span[@id="lastNameError"]';
    private readonly emailWarningText = '//form[contains(@class," invalid")]//i[text()="warning"]/following-sibling::span[@id="emailError"]';
    private readonly continueButton = 'button[ng-click="validateBasicInfoStep(userForm);"]';

    async gotoRegisterPage()
    {
        await this.page.goto('https://utest.com/signup/personal');
    }
    
    async clickOnContinueButton()
    {
        await UiHelper.findElement(this.page, this.continueButton).click();
    }

    async verifyRequiredFieldWarning()
    {
        await expect(UiHelper.findElement(this.page, this.firstNameWarningText)).toHaveText("First name is required");
        await expect(UiHelper.findElement(this.page, this.lastNameWarningText)).toHaveText("Last name is required");
        await expect(UiHelper.findElement(this.page, this.emailWarningText)).toHaveText("Enter valid email");

        this.page.getAttribute();
        this.page.getByRole();
        this.page.getByText();
        this.page.getByTitle();
    }
}