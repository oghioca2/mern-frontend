import React from 'react';
import styled from 'styled-components';
import avatar from '../../img/avatar.png';
import { menuItems } from '../../utils/menuItems';
import { signout } from '../../utils/icons';

function Navigation({ active, setActive, toggleNavVisibility }) {
    const handleItemClick = (itemId) => {
        setActive(itemId);
        if (window.innerWidth <= 768) {
            toggleNavVisibility();
        }
    };

    return (
        <NavStyled>
            <div className="user-con">
                <img src={avatar} alt="avatar img" />
                <div className="text">
                    <h2>Ovidiu</h2>
                    <p>Your Money</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => handleItemClick(item.id)}
                        className={active === item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: var(--background-color);
    border: 3px solid var(--color-white);
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-con {
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: var(--background-image);
            border: 2px solid var(--color-white);
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2 {
            color: var(--primary-color2);
        }
        p{
            color: var(--primary-color4);
        }
    }

    .menu-items {
        flex: 1;
        display: flex;
        flex-direction: column;
        li {
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: var(--primary-color4);
            padding-left: 1rem;
            position: relative;
            i {
                color: var(--primary-color4);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }

    .active {
        color: var(--primary-color2) !important;
        i {
            color: var(--primary-color2) !important;
        }

        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: var(--primary-color);
            border-radius: 0 10px 10px 0;
        }
    }

    @media only screen and (max-width: 1200px) {
        width: 200px;
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 1rem;

        .menu-items {
            li {
                grid-template-columns: auto;
                justify-content: center;
                text-align: center;
                padding-left: 0.5rem;
            }
        }
    }
`;

export default Navigation