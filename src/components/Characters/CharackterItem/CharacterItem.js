import React from "react";

import classes from "./CharacterItem.module.scss";

const CharacterItem = ({ item }) => {
    return (
        <div className={classes.card}>
            <div className={classes.cardInner}>
                <div className={classes.cardFront}>
                    <img src={item.img} alt="" />
                </div>
                <div className={classes.cardBack}>
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Actor Name:</strong> {item.portrayed}
                        </li>
                        <li>
                            <strong>Nickname:</strong> {item.nickname}
                        </li>
                        <li>
                            <strong>Birthday:</strong> {item.birthday}
                        </li>
                        <li>
                            <strong>Status:</strong> {item.status}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CharacterItem;
