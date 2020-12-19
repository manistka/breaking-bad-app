import { getSuggestedQuery } from "@testing-library/react";
import React, { useState } from "react";

import classes from "./Search.module.scss";
const Search = ({ getQuery }) => {
    const [text, setText] = useState("");
    const onChange = (q) => {
        setText(q);
        getQuery(q);
    };
    return (
        <section className={classes.Search}>
            <form>
                <input
                    type="text"
                    className={classes.formControl}
                    placeholder="Search characters"
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus
                ></input>
            </form>
        </section>
    );
};

export default Search;
