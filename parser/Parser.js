const axios = require('axios');
const { JSDOM } = require('jsdom');
const fetch = require('node-fetch');

const sleep = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

class Parser {
    constructor(links, selectors) {
        this.selectors = selectors;
        this.dataArray = [];

        // links.forEach((link) => {
        //     this.get(link, (data) => {
        //         this.parseDom(data)
        //     })
        // })

        // for (const link in links) {
        //     this.get(link, async (data) => {
        //         this.parseDom(data)
        //         await sleep(1000)
        //     })
        // }

        this.fetchGet(links.it, (data) => {
            this.parseDom(data)
        })
    }

    async get(link, callback) {
        axios.get(link)
            .then((response) => {
                console.log(response);
                console.log(response.data);
                callback(response.data)
            })
    }

    async fetchGet(link, callback) { // true
        const response = await fetch(link)
        const body = await response.json
        callback(body)
    }

    async parseDom(htmlData) { // parse HTML into jsdom
        const dom = new JSDOM(htmlData)
        await sleep(10000)
        console.log(dom.window.document.body);
        this.getDataFromDOM(dom)
    }

    constructObject(data) { // set a js Object from recieved data

    }

    getDataFromDOM(dom) {
        const latestStock = dom.window.document.querySelector(this.selectors.stockSelector)
        console.log(latestStock);

        this.StockChildren = this.getChildren(latestStock)

        this.constructObject(this.getDataFromFirstStock())
    }

    getChildren(element) {
        return Array.from(element.children)
    }

    getDataFromAllStock() {} // TODO: get all children from stock first page

    getDataFromFirstStock() {
        const firstStock = this.StockChildren[0]

        const stockId = firstStock.dataset.id // get stock d from dataset
        const stockTitle = firstStock.querySelector(this.selectors.stockNameSelector).textContent // get stock name from html
        const stockUrl = `https://kwork.ru/projects/${stockId}/view` // create stock URL
        const stockPreferredPrice = firstStock.querySelector(this.selectors.stockPreferredPriceSelector) // get stock preferred price
        const stockMaxPrice = firstStock.querySelector(this.selectors.stockMaxPriceSelector) // get stock max price
        const stockContent = firstStock.querySelector(this.selectors.stockContentSelector) // get stock content
        const stockPayerName = firstStock.querySelector(this.selectors.stockPayerNameSelector) // get stock payer name
        const stockTimeLeft = firstStock.querySelector(this.selectors.stockTimeLeftSelector) // get stock time left
        const stockOffers = firstStock.querySelector(this.selectors.stockOffersSelector) // get stock offers

        return { stockId, stockTitle, stockUrl, stockPreferredPrice, stockMaxPrice, stockContent, stockPayerName, stockTimeLeft, stockOffers }
    }
}

module.exports = Parser;