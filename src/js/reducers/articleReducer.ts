import {ADD_ARTICLE, DATA_LOADED, FOUND_BAD_WORD} from "../constants/action-types";
import {ArticleActionTypes} from "../actions/types";
import {ArticleState} from "./types";

const initialState = {
    articles: [],
    remoteArticles: [],
    illegalArticle: {
        id:"",
        title:""
    }
};

export function articleReducer(state: ArticleState = initialState, action: ArticleActionTypes): ArticleState {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: [...state.articles, action.payload]
        });
    }
    if (action.type === FOUND_BAD_WORD){
        return Object.assign({}, state, {
            illegalArticle: action.payload
        });
    }
    if (action.type === DATA_LOADED) {
        return Object.assign({}, state, {
           remoteArticles: state.remoteArticles.concat(action.payload)
        });
    }
    return state;
}
