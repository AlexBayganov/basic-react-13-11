import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import { articleFilterSelect } from '../../AC'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        selected: PropTypes.array.isRequired,
        handleArticleFilterSelect: PropTypes.func.isRequired
    };

    handleChange = selected => this.props.handleArticleFilterSelect(selected)

    render() {
        const { articles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={this.props.selected}
            onChange={this.handleChange}
            multi
        />
    }
}

export default connect(state => ({
    selected: state.filters.selected
}), {
    handleArticleFilterSelect: articleFilterSelect
})(SelectFilter)