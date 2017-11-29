import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from './common/Accordion'
import {connect} from 'react-redux'

class ArticleList extends Accordion {
    getArticles() {
        const { articles, filters } = this.props
        const selectedArticleIds = filters.selected.map(article => article.value);
        const { from, to } = filters.dateRange;
        const dateRangeFrom = new Date(Date.parse(from)).toDateString();
        const dateRangeTo = new Date(Date.parse(to) + 1000*60*60*24).toDateString();
        /*
         Вот тут дольше всего провозился с датой. В итоге фильтр по дате все равно
         работает не корректно. Если есть возможность покажи пожалуйста правильный
         вариант реализации фильтра по дате. Может тут лучше было Moment.js подключить?
         */

        const filteredArticles = articles.filter((article) => {
            const filterSelect = selectedArticleIds.length > 0 ?
                selectedArticleIds.indexOf(article.id) !== -1
                : true

            const filterDateFrom = from ?
                Date.parse(dateRangeFrom) <= Date.parse(article.date)
                : true
            const filterDateTo = to ?
                Date.parse(dateRangeTo) > Date.parse(article.date)
                : true

            return filterSelect && filterDateFrom && filterDateTo
        });

        const articleElements = filteredArticles.map((article) =>
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === this.state.openItemId}
                    toggleOpen={this.toggleOpenItemMemoized(article.id)}
                />
            </li>
        )

        return articleElements
    }

    render() {
        const articleElements = this.getArticles()
        if (!articleElements.length)
            return <h3>No Articles</h3>

        return (
            <ul>{articleElements}</ul>
        )
    }
}


ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    filters: PropTypes.shape({}).isRequired
}

export default connect(state => ({
    articles: state.articles,
    filters: state.filters
}))(ArticleList)