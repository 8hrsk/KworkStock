const fs = require('fs');

class RNW {
    constructor(documentName) {
        this.documentName = `../${documentName}`;

        if (!this.check()) this.create(); // if document doesn't exist, then create one
    }

    check() {
        return fs.existsSync(this.documentName);
    }

    create() {
        fs.writeFileSync(this.documentName, '', 'utf8');
    }

    read(callback) {
        return fs.readFile(this.documentName, 'utf8', (err, data) => {
            if (err) throw err;

            callback(data);
        });
    }

    write(data) {
        if(!data) throw new Error('No data');

        return fs.writeFile(this.documentName, data, 'utf8');
    }
}

module.exports = RNW