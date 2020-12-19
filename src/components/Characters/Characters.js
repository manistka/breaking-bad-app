import React from "react";
import CharacterItem from "../Characters/CharackterItem/CharacterItem";
import classes from "./Characters.module.scss";
const Characters = ({ items, isLoading }) => {
    return isLoading ? (
        <h1 style={{ color: "white" }}>loading...</h1>
    ) : (
        <section className={classes.Cards}>
            {items.map((item) => (
                <CharacterItem key={item.char_id} item={item}></CharacterItem>
            ))}
        </section>
    );
};

export default Characters;
