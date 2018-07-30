
import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            }
            break;

        default:
            return state;
            break;
    }

}
);


const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})


const unsubcribe = store.subscribe(() => {
    console.log(store.getState());
}
);
store.dispatch(incrementCount({ incrementBy: 200 }));
store.dispatch(incrementCount({ incrementBy: "200" }));
store.dispatch(incrementCount(220));
store.dispatch(incrementCount(20));





// store.dispatch(increem);



unsubcribe();
