import {RegisterPage} from "../pages/RegisterPage";
import {ThankYouPage} from "../pages/ThankYouPage";
import {NavBar} from "../pages/NavBar";
import {ProductPage} from "../pages/ProductPage";
import {WebinarsPage} from "../pages/WebinarsPage";

describe('Promethium.ai Tests', () => {
    let registerPage = new RegisterPage();
    let titlePage = new ThankYouPage();
    let navBar = new NavBar();
    let productPage = new ProductPage();
    let webinarsPage = new WebinarsPage();

    it('Ensure Home Page Elements are present and expected values', () => {
        cy.visit('/') // baseurl is already configured

        navBar.getLogo().should('be.visible')
        navBar.getTextFromRichText(0).should('have.text', "Promethium Collaborative Data Analytics")
        navBar.getTextFromRichText(1).should('have.text', "Never miss an opportunity.")
    })

    it('Ensure Registration Page displays proper field level alerts on submit', () => {
        cy.visit('/') // baseurl is already configured

        navBar.clickTryNow()
        registerPage.submitRegistration()

        registerPage.getErrorTextForIndex(0).should('be.visible').should('have.text', "Email is required")
        registerPage.getErrorTextForIndex(1).should('be.visible').should('have.text', "First name is required")
        registerPage.getErrorTextForIndex(2).should('be.visible').should('have.text', "Last name is required")
        registerPage.getErrorTextForIndex(3).should('be.visible').should('have.text', "Company name is required")
        registerPage.getErrorTextForIndex(4).should('be.visible').should('have.text', "Job function is required")
    })

    it('Ensure users can successfully register', () => {
        cy.visit('/') // baseurl is already configured

        navBar.clickTryNow()

        let uuid = () => Cypress._.random(0, 1e6)
        let generatedEmail = `${uuid()}@test.com`

        registerPage.fillRegistration(generatedEmail,'TestFirst', 'TestLast', 'TestCompany', 'Data Engineering')
            .submitRegistration()
            .waitForLoadingSpinner()

        titlePage.getTitle().should('have.text', 'Thank you for signing up.')
        titlePage.getUrl().should('contain', `/user/confirmation?email=${generatedEmail}`)
    })

    it('Verify Datasouces', () => {
        cy.visit('/') // baseurl is already configured

        navBar.openDropdown('Product', 'Data Connectors')

        productPage.getUrl().should('contain', '/promethium-data-connectors')

        productPage.getDataSourceValues()  //I do not like the way these assertions are done in the page rather than in the test. this should be changed.
    })

    it.only('Download', () => {
        cy.visit('/') // baseurl is already configured

        navBar.openDropdown('Resources', 'Collateral & Webinars')

        webinarsPage.downloadFile('Solution For dbt')

    })
})