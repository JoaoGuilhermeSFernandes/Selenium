const {Builder, By, Key} = require ('selenium-webdriver')
const assert = require ("assert")
var should = require("chai").should()

async function example() {

    //Declarar o navegador 
    let driver = await new Builder().forBrowser("firefox").build(); 

    //Navegar até o site
    await driver.get("http://herziopinto.github.io/lista-de-tarefas/")
    
    //Dar uma pausa na execução da função 
    //await driver.sleep (5000)

    //Adicionar 10 tarefas 
    await driver.findElement(By.id("inputTask")).sendKeys("Aprender Selenium", Key.RETURN)
    await driver.findElement(By.id("inputTask")).sendKeys("Aprender JavaScript", Key.RETURN)
    await driver.findElement(By.id("inputTask")).sendKeys("Aprender Git", Key.RETURN)
    await driver.findElement(By.id("inputTask")).sendKeys("Aprender Github", Key.RETURN)
    await driver.findElement(By.id("inputTask")).sendKeys("Tirar dúvidas com o professor", Key.RETURN)
    await driver.findElement(By.id("inputTask")).sendKeys("Fazer todas as atividades", Key.RETURN)
    await driver.findElement(By.id("inputTask")).sendKeys("Estudar 5 horas por dia", Key.RETURN)
    await driver.findElement(By.id("inputTask")).sendKeys("Conversar com os colegas de sala", Key.RETURN)
    await driver.findElement(By.id("inputTask")).sendKeys("Assistir Lume Stack", Key.RETURN)
    await driver.findElement(By.id("inputTask")).sendKeys("Memorizar os detalhes de cada teste", Key.RETURN)
    await driver.findElement(By.id("inputTask")).sendKeys("Aprender Jira", Key.RETURN)
    await driver.findElement(By.id("inputTask")).sendKeys("Aprender Poostman", Key.RETURN)
    
    //Assertion
    let seleniumText = await driver.findElement(By.xpath("/html/body/div/section/ul/li/label")).getText()
    .then(function(value){
        return value
    })

    //Assertion usando o node puro (Vanilla Js)
    //assert.strictEqual(seleniumText, "Aprender Selenium")

    //Asserction usando Chai
    seleniumText.should.equal("Aprender Selenium")
    javascriptText.should.equal("Aprender JavaScript")
    gitText.should.equal("Aprender Git")
    githubText.should.equal("Aprender Github")
    tirardúvidascomoprofessorText.should.equal("Tirar dúvidas com o professor")
    fazertodasasatividadesText.should.equal("Fazer todas as atividades")
    estudar5horaspordiaText.should.equal("Estudas 5 horas por dia")
    conversarcomoscolegasdesalaText.should.equal("Conversar com os colegas de sala")
    assistirlumestackText.should.equal("Assistir Lume Stack")
    memorizarosdetalhesdecadatesteText.should.equal("Memorizar os detalhes de cada teste")
    aprenderjiraText.should.equal("Aprender Jira")
    aprenderpoostmanText.should.equal("Aprender Poostman")


    //Fechar o navegador
    await driver.quit()
}

example()
