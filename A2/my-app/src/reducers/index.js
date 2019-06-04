const initialState = {
    messages: ["Oliver's first message!", 
                "Oliver's second message!", 
                "Oliver's third message!"],
    detailMessage: "",
    detailMessageShown: false
}

const reducer = (state = initialState, action) => {
    if (action.type === "ADD_MESSAGE") {
        return{
            ...state,                                        // we shouldn't mutate old state.       
            messages: state.messages.concat(action.message)  // can not use push(), similar to push
        }   
    }
    if (action.type === "DELETE_MESSAGE") {
        return{
            ...state,
            messages: []
    }} 
    if (action.type === "SHOW_DETAIL") {
        return{
            ...state,
            detailMessage: action.message,
            detailMessageShown: true
    }}
    if (action.type === "CLOSE_DETAIL") {
        return{
            ...state,
            detailMessage: '',
            detailMessageShown: false
    }}
    else {
        return state;
    }
    
};

export default reducer;


