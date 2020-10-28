import React from 'react';
import { Icon } from 'semantic-ui-react'
import '../css/QuoteBox.css'
import { useEffect, useState } from 'react'
import randomQuote from '../utils/randomQuote'

function randomColor(colors, background_color) {
    const randomIndex = Math.floor((Math.random() * 4));
    let color = colors[randomIndex];
    while (color == background_color) {
        color = colors[Math.floor((Math.random() * 4))];
    }
    console.log(color);
    return color;
}
export default function QuoteBox() {
    const [text, setText] = useState("If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.");
    const [author, setAuthor] = useState("Author");
    const [background_color, setBackground_color] = useState("rgb(115, 168, 87)")

    useEffect(() => {
        randomQuote().then(
            (result) => {
                const textQuote = result.content;
                const authorQuote = result.author;
                setText(textQuote);
                setAuthor(authorQuote);
            },
            (error) => {
                console.log("error handle button");
            });
        document.body.style.backgroundColor = "rgb(115, 168, 87)";
    }, [])

    const colors = ["rgb(115, 168, 87)", "rgb(155, 89, 182)", "rgb(231, 76, 60)", "rgb(189, 187, 153)"];
    const handleButton = () => {
        randomQuote().then(
            (result) => {
                const textQuote = result.content;
                const authorQuote = result.author;
                setText(textQuote);
                setAuthor(authorQuote);
            },
            (error) => {
                console.log("error handle button");
            });

        let color = randomColor(colors, background_color);
        let colorBackground = color;

        setBackground_color(colorBackground);
        document.body.style.backgroundColor = colorBackground;
    }

    return (
        <div>
            <div id='quote-box'>
                <p id='text' style={{ color: background_color }}> <Icon name='quote left' /> {text} <Icon name='quote right' /></p>
                <p id='author' style={{ color: background_color }}>-{author}</p>
                {/* eslint-disable-next-line */}
                <a id="tweet-quote" href='twitter.com/intent/tweet' target="_blank" style={{ backgroundColor: background_color }}>
                    <Icon.Group size='large'>
                        <Icon name='twitter' className="icon-twitter inverted white" />
                    </Icon.Group>
                </a>
                <button id='new-quote' style={{ backgroundColor: background_color }} onClick={handleButton}>New quote</button>
            </div>
            <p style={{ textAlign: "center", color: "white" }}>by khoibm</p>
        </div>
    );
}
