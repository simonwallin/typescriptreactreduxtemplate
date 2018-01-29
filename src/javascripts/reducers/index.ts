class InitialState {
    public articles: string [] = [];
}

const rootReducer = (state = InitialState, action: any) => state;

export default rootReducer;
