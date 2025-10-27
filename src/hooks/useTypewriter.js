import { useEffect, useState } from "react";

/**
 * Simple typewriter hook
 * @param {string[]} words - array of words/phrases to cycle
 * @param {number} typingSpeed - ms per char
 * @param {number} pause - ms between words
 */
export default function useTypewriter(words = [], typingSpeed = 80, pause = 1200) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const current = words[wordIndex % words.length];
    let tickDelay = typingSpeed;

    if (isDeleting) tickDelay = Math.floor(typingSpeed / 2);

    const timer = setTimeout(() => {
      setText(prev => {
        const next = isDeleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1);
        return next;
      });

      // when finished typing
      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), pause / 2);
      }

      // when deletion finished
      if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex(prev => prev + 1);
      }
    }, tickDelay);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, isDeleting, wordIndex, words]);

  return text;
}
