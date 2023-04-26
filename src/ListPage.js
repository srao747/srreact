import { useEffect, useState } from 'react';
import axios from 'axios';
//xml file reader
import XMLParser from 'react-xml-parser';
import { Link, useNavigate } from "react-router-dom";


export default function ListPage({ showListPage }) {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('XMLData.xml', {
            "Content-Type": "application/xml; charset=utf-8"
        }).then(res => {
            const jsonDataFromXml = new XMLParser().parseFromString(res.data);
            setPosts(jsonDataFromXml.getElementsByTagName('post'))


        });

    }, [])



    const showPost = (item) => {

    }

    return (

        <div>
            {posts.map((item, index) => {
                let summary = item.getElementsByTagName('summary')[0]?.children[1]?.getElementsByTagName('text')[0]?.value;
                var imagePath = item.getElementsByTagName('summary')[0]?.children[0]?.getElementsByTagName('image_path')[0]?.value;
                return (
                    <div className='blog_post'>
                        <img src={imagePath} alt='img' />
                        <div className='blog_content'>
                        <Link to="/blogpost" state={{ imagePath: imagePath,post:(item.getElementsByTagName('body')[0])?.value }}>   <span ><h3>{(item.getElementsByTagName('title')[0])?.value}</h3></span></Link>
                        <p >{summary}</p>
                        <div className='d-flex justify-content-between'>
                           <p >{(item.getElementsByTagName('date')[0])?.value}</p>
                           <p >{(item.getElementsByTagName('author')[0])?.value}</p>
                        </div>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}