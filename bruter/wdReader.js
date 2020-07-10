const fs = require('fs');
const assert = require('assert');


const fileOps = {


    currentPass: null,
    async readFromFile() {

        try {
            //assert(process.argv.slice(2).length !== 2, "User and password lists are required.") 
            const usernames = fs.readFileSync("/home/expirty/Documents/nodejs/bruter/" + process.argv.slice(2)[0]);
            this.userNames = JSON.parse(usernames).array
            this.currentUserIdx = -1
            this.passData = fs.readFileSync(process.argv.slice(2)[1], 'utf8').split('\n');
            var cp = this.passData.pop()
            if (cp.length >= 6)
                this.currentPass = cp
            else
                this.currentPass = "continue"
            return Promise.resolve(true)
        }
        catch (ex) {
            Promise.resolve(false)
        }

    },

    nextUserName() {

        if (this.userNames != undefined) {
            if (this.currentUserIdx == this.userNames.length - 1) {
                var cp = this.passData.pop()
                if (cp.length >= 6)
                    this.currentPass = cp
                else
                    this.currentPass = "continue"
                this.currentUserIdx = -1
            }
            this.currentUserIdx += 1
            return this.userNames[this.currentUserIdx]
        }
    }
}


module.exports = fileOps