const addItem = [];

const addItems = (state = addItem, action) => {
    console.log("3", ...state, "4" , action.payload)
    switch (action.type) {
        case "ADDITEM" : return [
            ...state,
            action.payload
        ]
        break;

        case "DELITEM" :
            return state = state.filter((x)=>{
                return x.id !== action.payload.id
            })
        break;

        default: return state;
        break;

        
    }
}

export default addItems;