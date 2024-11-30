const { stat } = require('fs')
const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators

const CAKE_ORDERED ="CAKE_ORDERED"
const CAKE_RESTOCKED = "CAKE_RESTOCKED"

function orderCake()
{
    return {
        type: CAKE_ORDERED,
        quantity: 1,
    }
}

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        quantity: qty
    }
}
//(preiousState, action) => newState

const initialState = {
    numOfCakes: 10,
}

const reducer =  (state = initialState, action) => {
    switch(action.type) {
     case CAKE_ORDERED:
        return {
            ...state,
            numOfCakes: state.numOfCakes - 1,
        }
    case CAKE_RESTOCKED:
        return {
            ...state,
            numOfCakes: state.numOfCakes + action.quantity
        }
        default:
            return state
    }
}

const store = createStore(reducer)
console.log('Initial state', store.getState())

// const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))
// store.dispatch(orderCake())
// store.dispatch(restockCake(3))

const actions = bindActionCreators({orderCake, restockCake}, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.restockCake()

//unsubscribe();                                 