import {
    INCREMENT,
    DELETE_ARTICLE,
    ARTICLE_FILTER_SELECT,
    ARTICLE_FILTER_DATE_RANGE
} from '../constants'

export function increment() {
    const action = { type: INCREMENT }
    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function articleFilterSelect(articles) {
    return {
        type: ARTICLE_FILTER_SELECT,
        payload: { articles }
    }
}

export function articleFilterDateRange(dateRange) {
    return {
        type: ARTICLE_FILTER_DATE_RANGE,
        payload: { dateRange }
    }
}