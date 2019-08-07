import {combineReducers} from 'redux';
import {articleReducer} from "./articleReducer";
import {ArticleState} from "./types";

export interface AppState {
    article: ArticleState
}

const rootReducer = combineReducers<AppState>({
    article: articleReducer
});

export default rootReducer;
