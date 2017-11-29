import React, { Component } from 'react'
import { connect } from 'react-redux'
import { string, shape, func } from 'prop-types'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import { articleFilterDateRange } from '../../AC'

class DateRange extends Component {
    static propTypes = {
        dateRange: shape({}).isRequired,
        handleArticleFilterDateRange: func.isRequired
    };

    handleDayClick = (day) => this.props.handleArticleFilterDateRange(DateUtils.addDayToRange(day, this.props.dateRange))

    render() {
        const { from, to } = this.props.dateRange
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        )
    }
}

export default connect(state => ({
    dateRange: state.filters.dateRange
}), {
    handleArticleFilterDateRange: articleFilterDateRange
})(DateRange)