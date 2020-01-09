const express = require('express')
const router = require('express-promise-router')()

router.get('/hello', async (req, res) => {
  return res.json({ hello: 'world' })
})

module.exports = router
