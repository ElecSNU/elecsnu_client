import { thunk, action } from 'easy-peasy';

const loaderModel = {
    // STORE
    loader_shown: false,

    // THUNKS
    show_loader: thunk(async (actions) => {
        actions.setLoaderOn();
    }),
    hide_loader: thunk(async (actions) => {
        actions.setLoaderOff();
    }),

    // ACTIONS
    setLoaderOn: action((state) => {
        state.loader_shown = true;
    }),
    setLoaderOff: action((state) => {
        state.loader_shown = false;
    }),
};

export default loaderModel;
