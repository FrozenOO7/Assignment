import React from 'react';
import { GoLocation } from 'react-icons/go';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { FaBloggerB } from 'react-icons/fa';
import { useSelector } from 'react-redux';

function Details(props) {
    const users = useSelector(state => state.users.users);

    return (
        <div className="details">
            {
                !users ? <div className="message">No User</div> :
                    !props.notFound ? users.map((user, index) => (
                        <div>
                            <div className="image">
                                <img src={user.avatar_url} alt="" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                                <div className="user-info">
                                    <h2>{user.name}</h2>
                                    <p>Joined on <span style={{ color: 'blue' }}>{user.created_at}</span></p>
                                </div>
                            </div>
                            <div className="info">

                                <div className="bio">
                                    <p>{user.bio || 'No bio found'}</p>
                                </div>
                                <div className="followers">
                                    <ul>
                                        <li>Repos <b>{user.public_repos}</b></li>
                                        <li>Followers <b>{user.followers}</b></li>
                                        <li>Following <b>{user.following}</b></li>
                                    </ul>
                                </div>
                                <div className="social">
                                    <ul>
                                        <li><GoLocation size={20} style={{ paddingRight: "0.5rem" }} />{user.location}</li>
                                        <li><AiOutlineTwitter size={20} style={{ paddingRight: "0.5rem" }} />{user.twitter_username}</li>
                                        <li><FaBloggerB size={20} style={{ paddingRight: "0.5rem" }} />{user.blog}</li>
                                        <li><AiOutlineMail size={20} style={{ paddingRight: "0.5rem" }} />{user.email}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )) :
                        <div className="message">{props.notFound}</div>
            }


        </div>
    )
}

export default Details
