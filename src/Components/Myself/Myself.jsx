import React from 'react';
import Special from '../Special/Special';

const Myself = ({ring}) => {
    return (
        <div>
            <h2>Me myshelf</h2>
            <section>
                <Special ring={ring}></Special>
            </section>
        </div>
    );
};

export default Myself;