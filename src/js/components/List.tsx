import React from "react";
import {connect} from "react-redux";
import {Article} from "../reducers/types";
import {AppState} from "../reducers";

interface ListProps {
    articles: Array<Article>
}

const mapStateToProps = (state: AppState) => {
    const {article} = state;
    return {
        articles: article.articles
    };
};

const ConnectedList = ({articles}: ListProps) => {
    return (
        <ul className="list-group list-group-flush">
            {articles.map(el => (
                    <li className="list-group-item" key={el.id}>
                        {el.title}
                    </li>
                )
            )}
        </ul>
    );
};

const List = connect(mapStateToProps)(ConnectedList);

export default List;
