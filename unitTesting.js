const someOrder = {
    items:[
        {name : 'Dragon food' , price : 8 , quantity:8},
        {name : 'Dragon cage' , price : 800 , quantity:2},
        {name : 'shipping' ,    price: 40 , shipping:true}
    ]
}


const orderTotal = order => {
    const totalItems = order.items
    .filter(x=>!x.shipping)
    .reduce((prev , cur)=>prev + (cur.price * cur.quantity) , 0)
    const shippingItem = 
    order.item.find(x => !!x.shipping)
    const shipping = totalItems > 1000 ? 0 : shippingItem.price
    return totalItems + shipping

}
result = orderTotal(someOrder);
result