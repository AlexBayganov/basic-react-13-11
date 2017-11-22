import React from 'react'
import { shape, string } from 'prop-types'

function Comment({comment}) {
    return (
        <div>
            {comment.text} <b>by {comment.user}</b>
        </div>
    )
}

Comment.propTypes = {
    comment: shape({
        id: string.isRequired,
        user: string,
        texts: string
    }).isRequired,
}

export default Comment
