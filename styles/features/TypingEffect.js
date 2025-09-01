import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function TypingEffect({ text = 'Welcome to my life 🌸'}) {
    const ref = useRef()
    const isInView = useInView(ref, { once: true });

    return (
        <h2
        ref={ref}>
            {text.split('').map((letter, index) => (
                <motion.span
                key={index}
                initial={{opacity:0}}
                animate={isInView ? {opacity:1} : {}}
                transition={{ duration: 0.2, delay: index * 0.1}}>
                    {letter}
                </motion.span>
            ))}
        </h2>
    )

}