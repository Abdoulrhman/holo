/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GithubService from '../../network/githubService';
import './styles.scss';

const UserInfo: React.FC = () => {
    const { getSingleUser } = GithubService
    const [userData, setUserData] = useState<any>(null);
    const { id } = useParams();

    const getUser = async (username: string) => {

        const response = await getSingleUser(username);
        return response;


    };

    useEffect(() => {
        if (id) {

            getUser(id).then((data) => {
                setUserData(data);
            }
            );
        }
    }, [id])




    return (
        <>

            {
                userData && (
                    <div className="github-user-card">
                        <div className="github-user-card__avatar">
                            <img
                                src={userData?.avatar_url}
                                alt="avatar"
                            />
                        </div>
                        <div className="github-user-card__info">
                            <div className="github-user-card__name">{
                                userData?.login
                            }</div>
                            <div className="github-user-card__bio">
                                {
                                    userData?.bio
                                }
                            </div>

                            <div className="github-user-card__location">
                                {
                                    userData?.location
                                }

                            </div>
                            <div className="github-user-card__email">
                                {
                                    userData?.email
                                }

                            </div>
                            <button className="github-user-card__link">
                                <a href={userData?.html_url}>
                                    View
                                </a>

                            </button>
                        </div>
                    </div >
                )
            }
        </>

    );
};

export default UserInfo;
