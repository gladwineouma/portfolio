import { useState, useEffect } from 'react'

function Typewriter({ words = [] }) {
    const [displayText, setDisplayText] = useState('')
    const [wordIndex, setWordIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        if (words.length === 0) return

        const currentWord = words[wordIndex]
        let timeout

        if (!isDeleting) {
            if (charIndex < currentWord.length) {
                timeout = setTimeout(() => {
                    setDisplayText(currentWord.substring(0, charIndex + 1))
                    setCharIndex(charIndex + 1)
                }, 100)
            } else {
                timeout = setTimeout(() => setIsDeleting(true), 2000)
            }
        } else {
            if (charIndex > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(currentWord.substring(0, charIndex - 1))
                    setCharIndex(charIndex - 1)
                }, 50)
            } else {
                setIsDeleting(false)
                setWordIndex((prev) => (prev + 1) % words.length)
            }
        }

        return () => clearTimeout(timeout)
    }, [charIndex, isDeleting, wordIndex, words])

    return (
        <span className="text-purple-400 font-semibold inline">
            {displayText}
            <span className="animate-pulse">|</span>
        </span>
    )
}

export default Typewriter