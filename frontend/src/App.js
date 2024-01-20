import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import router from './routers';
import { nanoid } from 'nanoid';
import DefaultComponent from './components/DefaultComponent';
const App = () => {
    return (
        <Router>
            <Routes>
                {router.map((root) => {
                    const Page = root.page;
                    const Layout = root.isShowHeader
                        ? DefaultComponent
                        : Fragment;
                    return (
                        <Route
                            key={nanoid()}
                            path={root.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
};
export default App;
