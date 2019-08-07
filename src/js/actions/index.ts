import {ADD_ARTICLE, DATA_REQUESTED, FOUND_BAD_WORD} from "../constants/action-types";
import {ArticleActionTypes} from "./types";
import {Article} from "../reducers/types";

export function addArticle(payload: Article): ArticleActionTypes {
    return {
        type: ADD_ARTICLE,
        payload
    }
};

export function foundBadWord(payload: Article): ArticleActionTypes {
    return {
        type: FOUND_BAD_WORD,
        payload
    }
};

export function getData() {
    return { type: DATA_REQUESTED }
}
