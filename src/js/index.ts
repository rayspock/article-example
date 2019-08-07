import store from "../js/store/index";
import { addArticle } from "../js/actions/index";

(window as any).store = store;
(window as any).addArticle = addArticle;
