import React from 'react';
import './App.css';
import {RouterProvider} from "react-router-dom";
import {router} from "./router/Router";
import {RecoilRoot} from 'recoil';


function App() {
    return (
        <div>
            <RecoilRoot>
                <RouterProvider router={router}/>
            </RecoilRoot>
        </div>
    );
}

export default App;
