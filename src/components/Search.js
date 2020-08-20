import React from 'react'

export default function Search({handleInput, search}) {
    return (
        <section className="search-section">
            <input type="text"
            className="search-input"
            onChange={handleInput}
            onKeyPress={search}
            />
        </section>
    )
}
