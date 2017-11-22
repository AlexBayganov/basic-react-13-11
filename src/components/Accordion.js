import React, { Component } from 'react'

class Accordion extends Component {
    state = {
       openAccordionItemId: null
    }

    setAccordionItemId = id => {
        const openAccordionItemId = (id !== this.state.openAccordionItemId) ? id : null
        this.setState({ openAccordionItemId })
    }
}

export default Accordion
