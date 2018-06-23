'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const MarkdownEditor = ({ value, handleChange, getMarkup }) => (

  <div className='editor'>
    <textarea value={value} onChange={handleChange} autoFocus/>
    <div className="view" dangerouslySetInnerHTML={getMarkup()}>

    </div>
  </div>

)

MarkdownEditor.PropTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default MarkdownEditor
