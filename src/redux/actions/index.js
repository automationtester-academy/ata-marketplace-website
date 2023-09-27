export const addCart = (product) => {
    console.log("2", product)
    return {
        type : "ADDITEM",
        payload : product
    }
}

export const delCart = (product) => {
    return {
        type : "DELITEM",
        payload : product
    }
}