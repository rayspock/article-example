import {ADD_ARTICLE} from "../constants/action-types";
import {ArticleActionTypes} from "../actions/types";
import {Dispatch} from "redux";
import {foundBadWord} from "../actions";


interface MiddlewareProps {
    dispatch: Dispatch
}

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({dispatch}: MiddlewareProps) {
    return function (next: Function) {
        return function (action: ArticleActionTypes) {
            if (action.type === ADD_ARTICLE) {
                const foundWord = forbiddenWords.filter(word =>
                    action.payload.title.includes(word)
                );

                if (foundWord.length) {
                    return dispatch(foundBadWord({
                        id: "",
                        title: action.payload.title
                    }));
                }
            }
            return next(action);
        }
    }
}
