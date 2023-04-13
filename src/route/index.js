const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('index', {
    layout: 'default',
    // text: 'Click me',
  })
})

router.get('/users', function (req, res) {
  res.render('user-list', {
    layout: 'header',
    title: 'User-list page',

    data: {
      userlist: [
        {
          id: 6545,
          name: 'Semen',
          isAdmin: true,
          isConfirm: true,
          balance: 0,
        },
        {
          id: 4321,
          name: 'Roma',
          isAdmin: false,
          isConfirm: true,
          balance: 85,

        },
        {
          id: 7788,
          name: 'Ira',
          isAdmin: false,
          isConfirm: false,
          balance: null,

        },
      ],
    },
  })
})

router.get('/product', function (req, res) {
  res.render('product', {
    layout: 'default',
    
    product: {
      ㅤname: 'Корм для риб',
      ㅤcost: 72.5,
      ㅤimg: 'fish.png',
      },
  })
})

module.exports = router
