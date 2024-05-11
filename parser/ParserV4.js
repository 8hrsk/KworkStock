const axios = require('axios');

class ParserV4 {
    constructor(link, callback) {
        if(link, callback) {
            this.getData(link, (data) => {
                this.data = data;
    
                this.extractJSON()
    
                callback(this.firstObject())
            })
        }
    }

    async getData(link, callback) {
        axios.get(link)
            .then((response) => {
                callback(response.data)
            })
    }

    extractJSON() {
        let str = this.data

        let a = str.match(/"wants"/)
        let b = str.match(/"wantsFromAllRubrics"/)
        let searchedStr = str.substring(a.index, b.index-1)

        searchedStr = JSON.parse(`{ ${searchedStr} }`)

        this.result = searchedStr
    }

    firstObject() {
        if (!this.result) {
            throw new Error('No data got yet!')
        }

        return this.result.wants[0]
    }

    parserGet(link, callback) {
        this.getData(link, (data) => {
            this.data = data;

            this.extractJSON()

            callback(this.firstObject())
        })
    }
}

module.exports = ParserV4