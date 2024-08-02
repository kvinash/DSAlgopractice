let orderInfo = [];


//order Notification
let addOrder = (orderId, customerId, orderAmount) => {
      orderInfo.push({orderId : orderId, orderAmount : 
       orderAmount,customerId:customerId});
      return null;
}

//Last 10 order API
let getLastTenOrder = (pageNum) => {
    let lastTenOrder = [];
  //  let totalPage = Math.ceil(orderInfo.length/pageNum);
    let lastOrder = orderInfo.length-1;
    let maxOrder = orderInfo.length > 10 ? lastOrder-10 : -1
    for(let i=lastOrder ; i > maxOrder ; i--){
      lastTenOrder.push(orderInfo[i]);
    }

  return lastTenOrder;
}




