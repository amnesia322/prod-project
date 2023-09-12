import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "pages/MainPage/MainPage.async";
import {Suspense} from "react";
import {classNames} from "helpers/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";


export const App = () => {
    const {theme, toggleTheme } = useTheme();

    return <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>TOGGLE</button>
        <Link to={'/'}>Main</Link>
        <Link to={'/about'}>About</Link>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={'/about'} element={<AboutPageAsync/>}/>
                <Route path={'/'} element={<MainPageAsync/>}/>
            </Routes>
        </Suspense>
    </div>
}