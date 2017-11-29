import {
    ARTICLE_FILTER_SELECT,
    ARTICLE_FILTER_DATE_RANGE
} from '../constants'

const defaultState = {
    selected: [],
    dateRange: {
        from: null,
        to: null,
    }
}

export default (filtersState = defaultState, action) => {
    const { type, payload } = action

    switch (type) {
        case ARTICLE_FILTER_SELECT:
            return {
                ...filtersState,
                selected: payload.articles
            }
        case ARTICLE_FILTER_DATE_RANGE:
            return {
                ...filtersState,
                dateRange: payload.dateRange
            }
    }

    return filtersState
}