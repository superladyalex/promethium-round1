import {BasePage} from "./BasePage";

export class ThankYouPage extends BasePage{

    private title = '.title___30mpn'


    getTitle() {
        return cy.get(this.title)
    }

    // getUrl() {
    //     return cy.url()
    // }
}