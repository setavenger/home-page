import React, { useState, useEffect } from 'react';

const Typewriter = ({ onEnd }) => {
    const texts = ['Software Developer', 'Bitcoiner', 'Entrepreneur', ""];
    const [textIndex, setTextIndex] = useState(0);
    const [typingIndex, setTypingIndex] = useState(0);

    useEffect(() => {
        let timeoutId;
        if (typingIndex < texts[textIndex].length) {
            timeoutId = setTimeout(() => {
                setTypingIndex(typingIndex + 1);
            }, 75);
        } else {
            if (textIndex === texts.length - 1) {
                if (onEnd) {
                    onEnd();
                }
                setTextIndex(0);
                setTypingIndex(0);
            } else {
                timeoutId = setTimeout(() => {
                    setTextIndex(textIndex + 1);
                    setTypingIndex(0);
                }, 2000);
            }
        }
        return () => clearTimeout(timeoutId);
    }, [textIndex, typingIndex, texts, onEnd]);

    return (
        <div className="text-white font-['JetBrainsMonoBold'] text-slate-200 relative">
            {texts[textIndex].slice(0, typingIndex)}
            <span className="opacity-50 animate-typewriter-cursor-blink text-orange-500">|</span>
        </div>
    );
};

export default Typewriter;
