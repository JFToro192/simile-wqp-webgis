const url = require('url')
const express = require('express')
const router = express.Router()
const needle = require('needle')


// Env vars
const API_BASE_URL = process.env.SITE_URL+'/geoserver/ows'
console.log(API_BASE_URL);

router.get('/', async (req,res) => {
    console.log(url.parse(req.url,true).query);
    try {
        const params = new URLSearchParams({
            // ['key'] : API_KEY_VALUE
            ...url.parse(req.url,true).query
        })

        const apiRes = await needle('get', `${API_BASE_URL}?${params}`)
        const data = apiRes.body

        res.status(200).json({data})
    } catch {
        res.status(500).json({success:false})
    }


  })

  module.exports = router