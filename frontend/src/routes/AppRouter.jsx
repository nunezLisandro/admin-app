import {BrowserRouter, Routes, Route} from 'react-router-dom';
import home from '../pages/home';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;