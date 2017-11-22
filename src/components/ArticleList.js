import React, {Component} from 'react'
import { arrayOf, shape, string, array, func } from 'prop-types'
import Article from './Article'
import accordion from '../decorators/accordion'

function ArticleList(props) {
    const articleElements = props.articles.map((article, index) => <li key = {article.id}>
        <Article
            article = {article}
            isOpen = {props.openAccordionItemId === article.id}
            toggleOpen = {props.setAccordionItemId}
        />
    </li>)
    return (
        <ul>
            {articleElements}
        </ul>
    )
}

ArticleList.propTypes = {
    articles: arrayOf(shape({
        title: string.isRequired,
        text: string,
        comments: array
    })).isRequired,
    openAccordionItemId: string,
    setAccordionItemId: func.isRequired
}

export default accordion(ArticleList)

// CASE WHEN EXTENDS ACCORDION
//
// import React, {Component} from 'react'
// import Article from './Article'
// import Accordion from './Accordion'
//
// class ArticleList extends Accordion {
//     render() {
//         console.warn(this.state)
//
//         const articleElements = this.props.articles.map((article, index) => <li key = {article.id}>
//             <Article
//                 article = {article}
//                 isOpen = {this.state.openAccordionItemId === article.id}
//                 toggleOpen = {this.setAccordionItemId}
//             />
//         </li>)
//         return (
//             <ul>
//                 {articleElements}
//             </ul>
//         )
//     }
// }
//
// export default ArticleList
