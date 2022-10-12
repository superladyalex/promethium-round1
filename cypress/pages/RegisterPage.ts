export class RegisterPage {
    private button = 'button';
    private signUpText = 'Sign Up';
    private errorMessage = '.ant-form-item-explain-error';
    private companyEmailInput = '#UserRegister_root_user'
    private firstNameInput = '#UserRegister_first_name'
    private lastNameInput = '#UserRegister_last_name'
    private companyNameInput = '#UserRegister_company_name'
    private jobFunctionDropdown = '#UserRegister_job_function'
    private dropDownElementClass = '.ant-select-item-option'
    private spinner = '.ant-btn-loading-icon'

    submitRegistration() {
        let submitButton = cy.get(this.button).contains(this.signUpText)
        submitButton.click()
        return this;
    }

    fillRegistration(companyEmail: string, firstName: string, lastName: string, companyName: string, jobFunction: string) {
        cy.get(this.companyEmailInput).type(companyEmail)
        cy.get(this.firstNameInput).type(firstName)
        cy.get(this.lastNameInput).type(lastName)
        cy.get(this.companyNameInput).type(companyName)
        cy.get(this.jobFunctionDropdown).click()
        cy.get(this.dropDownElementClass).contains('Data Analysis').click()
        return this;
    }

    getErrorTextForIndex(index: number) {
        return cy.get(this.errorMessage).eq(index)
    }

    waitForLoadingSpinner() {
        cy.get(this.spinner ,{timeout: 30000}).should('not.exist')
        return this
    }

}