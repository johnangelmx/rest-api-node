const { Router } = require("express")
const router = Router()

// routes
router.get('/test', (req, res) => {
    const data = {
        "name": "Fazt",
        "website": "www.faztweb.com"
    }
    // res.json({ "Title": "Hello world" })
    res.json(data)
})

module.exports = router;