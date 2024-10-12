getDataCustomer = (customerName, customerAddress = "New york") => { // default parameters
    const address = `Customer Name : ${customerName}
    Address : ${customerAddress}`
    return address
};

console.log(getDataCustomer(Shinnamon))