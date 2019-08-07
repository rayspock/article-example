import {ADD_ARTICLE, DATA_LOADED, FOUND_BAD_WORD} from "../constants/action-types";
import { Article } from "../reducers/types";

interface AddArticleAction {
    type: typeof ADD_ARTICLE
    payload: Article
}

interface FoundBadWordAction {
    type: typeof FOUND_BAD_WORD
    payload: Article
}

interface DataLoadedAction {
    type: typeof DATA_LOADED
    payload: Array<Article>
}

export type ArticleActionTypes = AddArticleAction | FoundBadWordAction | DataLoadedAction
