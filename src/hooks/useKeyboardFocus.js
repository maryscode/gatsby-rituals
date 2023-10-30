import { useState, useEffect, useRef } from 'react';

function useKeyboardFocus() {
  const [isFocused, setIsFocused] = useState(false);
  const [isKeyboardUsed, setIsKeyboardUsed] = useState(false);
  const ref = useRef(null);

  function handleKeyDown(event) {
    if (event.key === 'Tab') {
      setIsKeyboardUsed(true);
    }
  }

  function handleFocus() {
    if (isKeyboardUsed) {
      setIsFocused(true);
    }
  }

  function handleBlur() {
    setIsFocused(false);
    setIsKeyboardUsed(false);
  }

  useEffect(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener('keydown', handleKeyDown, true);
      node.addEventListener('focus', handleFocus, true);
      node.addEventListener('blur', handleBlur, true);

      if (isFocused) {
        node.classList.add('focused');
      } else {
        node.classList.remove('focused');
      }
    }

    return () => {
      if (node) {
        node.removeEventListener('keydown', handleKeyDown, true);
        node.removeEventListener('focus', handleFocus, true);
        node.removeEventListener('blur', handleBlur, true);
      }
    };
  }, [isFocused, isKeyboardUsed]);

  return ref;
}

export default useKeyboardFocus;
