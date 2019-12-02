const express = require('express')
const { getLoansWithProductsByUserId, checkMissingField } = require('../services/loansService')
const { checkContentType } = require('../services/authService')
const data = require('../helpers/mockData_BE')

const router = express.Router()

router
  .route('/')
  .get(async (req, res, next) => {
    const loansData = await getLoansWithProductsByUserId(req.query.id)
    return loansData.error ? next(loansData.error) : res.status(200).json(loansData)
  })
  .post((req, res) => {
    const isContentType = checkContentType(req.headers)
    if (!isContentType) {
      return res.status(400).send({ error: 'Please specify content-type in request header' })
    }
    const check = checkMissingField(req.body)
    return check.error
      ? res.status(400).send(check)
      : res.status(200).send({
          loanId: 1,
          status: 'granted'
        })
  })

router.param('id', (req, res, next, name) => {
  if (Number.isInteger(Number(name))) {
    return next()
  }
  return res.status(400).send({ error: 'Loan id should be an integer' })
})

router.route('/:id').get((req, res) => {
  res.status(200).send(data.loansDetails)
})

module.exports = router
