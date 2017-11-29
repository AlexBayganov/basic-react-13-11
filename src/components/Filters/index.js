import React, { Component } from 'react'
import { array } from 'prop-types'
import DateRange from './DateRange'
import SelectFilter from './Select'
import { connect } from 'react-redux'

class Filters extends Component {
    static propTypes = {
        articles: array
    };

    static defaultProps = {
        articles: []
    };

    render() {
        return (
            <div>
                <SelectFilter articles = {this.props.articles}/>
                <DateRange />
            </div>
        )
    }
}

export default connect(state => ({
  articles: state.articles
}))(Filters)