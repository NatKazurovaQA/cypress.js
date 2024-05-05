describe('Покупка аватара', function () {                               
    it('Купить новый аватар', function () {  
         cy.visit('https://pokemonbattle.me/'); // Перейти на сайт
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // Ввести верный логин
         cy.get('#password').type('USER_PASSWORD'); // Ввести верный пароль
         cy.get('.auth__button').click(); // Нажать кнопку "войти"
         cy.get('.header__btns > [href="/shop"]').click(); // Перейти в магазин
         cy.get('.available > button').first().click(); // Купить доступный аватар
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4640340400391387'); // Ввести валидный номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('10/28'); // Ввести валидный срок действия карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // Ввести CVV карты
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('OLEG PETROV'); // Ввести имя владельца карты
         cy.get('.pay-btn').click(); // Оплатить
         cy.get('#cardnumber').type('56456'); // Ввести смс-код
         cy.get('.payment__submit-button').click(); // Отправить
         cy.contains('Покупка прошла успешно').should('be.visible'); //Проверит наличие и видимость текста
        })   
 })