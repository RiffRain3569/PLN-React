import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PcLayout from '../layouts/PcLayout';
import { NotFound, Test } from '../views';

const BaseRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PcLayout />}>
                    <Route index element={<Test />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default BaseRoutes;
