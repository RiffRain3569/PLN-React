// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { StrictMode } from 'react';
import BaseRoutes from './routes/BaseRoutes';

function App() {
    return (
        <StrictMode>
            <BaseRoutes />
        </StrictMode>
    );
}

export default App;
