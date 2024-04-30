const axios = require('axios');
const { JSDOM } = require('jsdom');

class Parser {
    constructor(links, selectors) {
        this.selectors = selectors;
        this.dataArray = [];

        links.forEach((link) => {
            this.get(link, (data) => {
                this.parseDom(data)
            })
        })
    }

    async get(link, callback) {
        axios.get(link)
            .then((response) => {
                callback(response.data)
            })
    }

    parseDom(htmlData) { // parse HTML into jsdom
        const dom = new JSDOM(htmlData)
        this.getDataFromDOM(dom)
    }

    constructObject(data) { // set a js Object from recieved data

    }

    getDataFromDOM(dom) {
        const latestStock = dom.window.document.querySelector(this.selectors.stockSelector)

        this.StockChildren = this.getChildren(latestStock)
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
        const stockPreferredPrice = firstStock.querySelector()

        this.constructObject(

        )
    }
}

module.exports = Parser;