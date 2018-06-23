'use strict'

import React, { Component } from 'react'

import './css/style.css'

const App extnds Component {

  construtor() {
    super()
    this.state = { value: ''}

    this.handleSubmit = (e) => {
      e.preventDefault()
      console.log(e.target.textarea.value)
      this.setState({
        value: e.target.textarea.value
      })
    }

  }


  render(){
return (

<div className='editor'>
  <form onSubmit={handleSubmit}>
  <textarea name='textarea' />
  <button>Renderizar markup</button>
  </form>
  <div className="view" >
    {this.state.value}
  </div>
</div>

)
  }

}

export default App
