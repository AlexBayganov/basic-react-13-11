import React, {Component} from 'react'

class Comments extends Component {
    constructor() {
        super()

        this.state = {
            isOpen: false
        }
    }

    commentsList(comments) {
        if (!comments.length) {
            return <section>Article has no comments</section>
        }

        return <section>
            {comments.map(comment => <div key={comment.id}>
                <h4>{comment.user}</h4>
                <div>{comment.text}</div>
                <hr />
            </div>)}
        </section>
    }

    render() {
        const {comments} = this.props
        const body = this.state.isOpen && this.commentsList(comments);
        return (
            <div>
                <h3>
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'Hide comments' : 'Show comments'}
                    </button>
                </h3>
                {body}
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}


export default Comments
