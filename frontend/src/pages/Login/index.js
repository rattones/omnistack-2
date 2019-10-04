import React, { useState } from 'react'

import api from '../../services/api'

export default function Login() {

    const [ email, setEmail ] = useState('')

    async function handleSumit(event) {
      event.preventDefault()
      
      const response = await api.post('/sessions', { email })
  
      const { _id } = response.data
  
      localStorage.setItem('user', _id)
    }
  
      return (
        <>
          <p>
            Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para a sua empresa
          </p>
  
          <form onSubmit={handleSumit}>
            <label htmlFor="email">E-mail *</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="E-mail de contato"
              onChange={event => setEmail(event.target.value)}
            />
            <button className="btn" type="submit">Entrar</button>
          </form>
        </>
      )
}