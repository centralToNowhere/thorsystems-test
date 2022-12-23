import React from 'react'

import { CafeContainer } from '@/components/Cafe'
import { store, StoreProvider } from '@/store/store'

function App() {
  return (
    <React.StrictMode>
      <StoreProvider value={store}>
        <CafeContainer />
      </StoreProvider>
    </React.StrictMode>
  )
}

export default App
