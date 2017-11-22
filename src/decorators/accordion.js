import React, { Component } from 'react'

export default (OriginalComponent) => class DecoratedComponent extends Component {

    state = {
        openAccordionItemId: null
    }

    handleSetId = id => {
        const openAccordionItemId = (id !== this.state.openAccordionItemId) ? id : null
        this.setState({ openAccordionItemId })
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} setAccordionItemId = {this.handleSetId} />
    }
}
