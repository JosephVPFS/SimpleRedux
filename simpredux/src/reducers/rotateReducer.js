export default (state, action) => {
    switch(action.type) {
        case "rotate" : 
                console.log(action);
                return {
                    rotating : action.payload
                };
        default : return state;
    }
}