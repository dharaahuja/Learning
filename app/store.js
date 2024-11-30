const configurestore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../app/features/cake/cakeSlice')
const icecreamReducer = require('../app/features/icecream/icecreamSlice')

const store = configurestore( {
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
    }
})

module.exports  = store
