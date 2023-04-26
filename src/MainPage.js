import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import BlogPost from './BlogPost';
import ListPage from './ListPage'


export default function MainPage() {
    const [IsListPage, setIsListPage] = useState(true);
    const showListPage = (isShowListPage) => {
        setIsListPage(isShowListPage);
    }

    useEffect(() => {

    }, [])

    return (
        <Routes>
            <Route path='/' element={<ListPage />} />
            <Route path='/blogpost' element={<BlogPost />} />
        </Routes>

    )
}