const axios = require('axios');
const { JSDOM } = require('jsdom');

class Parser {
    constructor(links) {
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
    }

    constructObject() {} // set a js Object from recieved data


}

module.exports = Parser;