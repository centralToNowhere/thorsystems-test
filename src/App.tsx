import '@/styles/global.scss'

import React from 'react'

import { Container } from '@/components/Cafe'
import { store, StoreProvider } from '@/store/store'

function App() {
  return (
    <React.StrictMode>
      <StoreProvider value={store}>
        <Container />
      </StoreProvider>
    </React.StrictMode>
  )
}

export default App
