import {BasePage} from "./BasePage";

export class ProductPage extends BasePage {

    private featuredDataConnectorsTitle = '[title="Promethium Featured Data Connectors"]'
    private linkElement = '[data-testid="linkElement"]'
    private richTextElement = '[data-testid="richTextElement"]'
    private textValue

    getDataSourceValues() {
        let firstSet = cy.get(this.featuredDataConnectorsTitle).find(this.linkElement).first().find('img').invoke('attr', 'alt')

        firstSet.should('contain', 'IBM DB2')
        firstSet.should('contain', 'JDBC')
        firstSet.should('contain', 'Delta.io')
        firstSet.should('contain', 'Teradata')
        firstSet.should('contain', 'Snowflake')
        firstSet.should('contain', 'SAP HANA')
        firstSet.should('contain', 'Greenplum')

        let secondSet = cy.get(this.featuredDataConnectorsTitle).find(this.linkElement).last().find('img').invoke('attr', 'alt')

        secondSet.should('contain', 'Apache Hive')
        secondSet.should('contain', 'Cloudera Database')
        secondSet.should('contain', 'MemSQL')
        secondSet.should('contain', 'SingleStore')
        secondSet.should('contain', 'MySQL')
        secondSet.should('contain', 'Oracle')
        secondSet.should('contain', 'MAPR')
        secondSet.should('contain', 'IBM Cloud')
        secondSet.should('contain', 'Microsoft SQL Server')
        secondSet.should('contain', 'PostgreSQL')
        secondSet.should('contain', 'Metastore')

    }

}