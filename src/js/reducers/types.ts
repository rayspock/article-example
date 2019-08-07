export interface Article {
    id: string,
    title: string
}

export interface ArticleState {
    articles: Array<Article>,
    remoteArticles: Array<Article>,
    illegalArticle: Article
}


