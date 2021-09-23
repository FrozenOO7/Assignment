import React from 'react';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUser } from '../redux/action/user';

function Search(props) {

    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const searchUser = async (e) => {
        e.preventDefault();
        props.setNotFound('');
        try {
            const { data } = await axios.get(`https://api.github.com/users/${search}`);
            dispatch(getUser(data));
        } catch (error) {
            props.setNotFound(error.response.data.message);
        }


    }
    return (
        <form onSubmit={searchUser}>
            <div className="input">
                <span className="search-icon"><AiOutlineSearch size={40} /></span>
                <input type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)} className="search-form" placeholder="Search Github username..." autoComplete="off" />
                <button className="search-btn">Search</button>
            </div>
        </form>

    )
}

export default Search
