import React, {Component} from "react";
import {connect} from "react-redux";
import uuidv1 from "uuid";
import {addArticle} from "../actions";
import {Article} from "../reducers/types";
import {Dispatch} from "redux";
import {AppState} from "../reducers";
import Alert from "react-bootstrap/Alert";

interface ConnectedFormState {
    title: string;
}

interface ConnectedFormProps {
    addArticle: Function;
    illegalArticle: Article;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addArticle: (article: Article) => dispatch(addArticle(article))
    };
}

const mapStateToProps = (state: AppState) => {
    const {article} = state;
    return {illegalArticle: article.illegalArticle};
};

class ConnectedForm extends Component<ConnectedFormProps, ConnectedFormState> {
    constructor(props: ConnectedFormProps) {
        super(props);
        this.state = {
            title: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        this.setState({title: event.target.value});
    }

    handleSubmit(event: any) {
        event.preventDefault();
        const {title} = this.state;
        const id = uuidv1();
        this.props.addArticle({title, id});
        this.setState({title: ""});
    }

    render() {
        const {title} = this.state;
        const {illegalArticle} = this.props
        return (
            <form onSubmit={this.handleSubmit}>
                {illegalArticle.title && (
                    <Alert variant='danger'>
                        {illegalArticle.title} is illegal word !
                    </Alert>
                )}
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                    SAVE
                </button>
            </form>
        );
    }
}

const Form = connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);

export default Form;
