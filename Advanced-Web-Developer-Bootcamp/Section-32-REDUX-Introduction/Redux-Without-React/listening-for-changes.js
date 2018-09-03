// Listening For Changes
// You can add a listener to see when the state has changed

const store = Redux.createStore(rootReducer);
const changeCallback = () => {
    console.log("State has changed",
        store.getState());
}
const unsubscribe =  // here is how we stop the event listener
    store.listen(changeCallback);
