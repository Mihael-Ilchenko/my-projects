/// <reference types="cypress" />

describe('Тестируем игру в пары', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/dist/index.html')
    })

    it('Поле изначально имеет 4 карточки', () => {
        cy.get(".pairs__card")
            .should("have.length", 4)
    })
    it('В каждой карте цифра невидима', () => {
        cy.get(".pairs__card")
            .should('not.have.class', 'pairs__open')

    })
    it('Кликнув по произвольной карте и она осталась открытой', () => {
        cy.get(".pairs__card:first-child").click();
        cy.get(".pairs__card:first-child").should('have.class', 'pairs__open')
    })

    context('проверка выбора парных карточек', () => {
        it('проверка выбора парных карточек посредством совпадения', () => {
            function test() {
                let firstElemValue = null;
                cy.get('.pairs__card-container > div:nth-child(1)').then((el) => {
                    firstElemValue = Number(el[0].textContent);
                });
                let stop = false;
                cy.get('.pairs__card-container div').each(($div, index) => {
                    cy.then(() => {
                        if (stop) {
                            return;
                        }
                        cy.wrap($div).click()
                            .then((num) => {
                                if (firstElemValue == Number(num[0].textContent) && index >= 1) {
                                    stop = true;
                                    cy.wait(500);
                                    cy.get('.pairs__card-container > div:nth-child(1)').click();
                                    cy.wait(500);
                                    cy.get(`.pairs__card-container > div:nth-child(${index + 1})`)
                                        .click()
                                        .should('have.class', 'pairs__success');
                                }
                            });
                        cy.wait(500);
                    });
                });
                cy.wait(500);
            }
            test()
        });
        it('проверка непарности карточек', () => {
            let stop = false;
            let elemList = [];
            cy.get('.pairs__card').each(($el, ind) => {
                cy.then(() => {
                    if (stop) {
                        return;
                    }
                    cy.wrap($el)
                        .click()
                        .then((elem) => {
                            elemList.push(elem[0].textContent);
                            if (elemList.length === 2) {
                                if (elemList[0] == elemList[1]) {
                                    // stop = true;
                                    cy.get(`.pairs__card-container > div:nth-child(${ind + 1})`).should('not.have.class', 'pairs__open');
                                }
                                elemList = [];

                            }
                        });
                    cy.wait(500);
                });
            });
        });
    })


})
