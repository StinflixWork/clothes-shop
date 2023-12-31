import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.tsx'
import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<ChakraProvider>
					<App />
				</ChakraProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
)
