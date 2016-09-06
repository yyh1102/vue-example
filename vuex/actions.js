
// 一种写法
export const incrementCounter=(store)=>{
    store.dispatch('INCREMENT',1);
}

//另一种写法 (利用es6的解构取值特性)
export const reduceCounter=({dispatch,state})=>{
    dispatch('REDUCE',1);
}