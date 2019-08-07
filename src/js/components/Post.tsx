import React, {Component} from "react";
import {connect} from "react-redux";
import {getData} from "../actions/index";
import {AppState} from "../reducers";
import {Dispatch} from "redux";
import {Article} from "../reducers/types";


interface PostProps {
    getData: Function,
    articles: Array<Article>
}

const mapStateToProps = (state: AppState) => {
    const {article} = state;
    return {
        articles: article.remoteArticles.slice(0, 10)
    };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getData: () => dispatch(getData())
    };
}

class Post extends Component<PostProps> {

    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <ul className="list-group list-group-flush">
                {this.props.articles.map(el => (
                    <li className="list-group-item" key={el.id}>
                        {el.title}
                    </li>
                ))}
            </ul>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
