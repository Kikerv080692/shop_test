import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'


import App from './App'
import { AppProvider } from '@/context/AppContext'
import '@/styles/global.css'
import {Provider} from "react-redux";
import {store} from "@/store/index.js";


createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <BrowserRouter>
        <AppProvider>
            <App />
        </AppProvider>
    </BrowserRouter>
</Provider>
)
