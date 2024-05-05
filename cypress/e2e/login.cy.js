describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввести верный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввести верный пароль
        cy.get('#loginButton').click(); // Нажать войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверить текст после авт-ии
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Наличие кнопки крестик видной для пользователя
    })

    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#forgotEmailButton').click(); // Нажать "Забыли пароль?"
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввести почту
        cy.get('#restoreEmailButton').click(); // Отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверить текст 
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Наличие кнопки крестик видной для пользователя   
    })

    it('Правельный логин и не правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввести верный логин
        cy.get('#pass').type('Loveqastudio1'); // Ввести не верный пароль
        cy.get('#loginButton').click(); // Нажать войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверить текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Наличие кнопки крестик видной для пользователя   
    })

    it('Не правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#mail').type('grman@dolnikov.ru'); // Ввести не верный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввести верный пароль
        cy.get('#loginButton').click(); // Нажать войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверить текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Наличие кнопки крестик видной для пользователя
    })

    it('Логин без @', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#mail').type('germandolnikov.ru'); // Ввести логин без @
        cy.get('#pass').type('iLoveqastudio1'); // ввести верный пароль
        cy.get('#loginButton').click(); // Нажать войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверить текст 
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    })
    it('Заглавные буквы в логине', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввести верный логин с заглавными буквами
        cy.get('#pass').type('iLoveqastudio1'); // ввести верный пароль
        cy.get('#loginButton').click(); // Нажать войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверить текст после авт-ии
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Наличие кнопки крестик видной для пользователя
    })

})