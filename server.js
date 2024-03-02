const express = require("express")
const app = express()

const HTTP_PORT = 8080
const path = require("path")

app.use(express.static("public"))
app.set('view engine', 'ejs');

let modules = [
    {
        name: "ComStats",
        url: "https://comstats.org/",
        image: "https://www.comstats.org/_next/image?url=%2FAnimated1.gif&w=384&q=75",
        description: "All Statistics of CommuneAI at one place. Staking infrastructure, prices, validators, miners, swap, bridge, exchange for $COMAI."   
    },
    {
        name: "ComChat",
        url: "https://comchat.io/",
        image: "https://comchat.io/icons/favicon-32x32.png",
        description: "LLM GPT aggregator built on COMAI"   
    },
    {
        name: "ComSwap",
        url: "https://comswap.io/",
        image: "https://comswap.io/static/media/logo.0eafc56c200101eecb87.png",
        description: "OTC $COMAI exchange"   
    },
    {
        name: "ComWallet",
        url: "https://comwallet.io/",
        image: "https://comwallet.io/logo.svg",
        description: "Wallet for $COMAI"   
    },
    {
        name: "WebZero.events",
        url: "https://webzero.events/",
        image: "https://static.wixstatic.com/media/b432cc_d48b66fc172547319d6bc3db6f34e7a0%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/b432cc_d48b66fc172547319d6bc3db6f34e7a0%7Emv2.png",
        description: "Web3 events app powered by WebZero to connect to DAOs and community-staking to fund workshops and events."
           
    },
    // {
    //     name: "",
    //     url: "",
    //     image: "",
    //     description: ""   
    // },
    // {
    //     name: "",
    //     url: "",
    //     image: "",
    //     description: ""   
    // },
    // {
    //     name: "",
    //     url: "",
    //     image: "",
    //     description: ""   
    // }
]

app.get("/", (req, res) => {
    
      res.render('index', {
        modules: modules,
      });
})


app.use((req, res, next) => {
    res.status(404).send("404 - We're unable to find what you're looking for.");
})

app.listen(HTTP_PORT, () => {
    console.log(`server listening at port ${HTTP_PORT}`)
})