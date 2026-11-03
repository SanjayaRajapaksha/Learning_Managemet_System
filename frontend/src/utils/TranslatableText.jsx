import React, { useState, useEffect } from 'react'
import { useTranslation } from '../context/TranslationContext'

/**
 * TranslatableText Component
 * Automatically translates text based on the current language setting
 * Usage: <TranslatableText text="Hello" />
 */
export function TranslatableText({ text, className = '' }) {
  const { currentLanguage, translateText } = useTranslation()
  const [displayText, setDisplayText] = useState(text)

  useEffect(() => {
    const translate = async () => {
      if (currentLanguage !== 'en') {
        const translated = await translateText(text, currentLanguage)
        setDisplayText(translated)
      } else {
        setDisplayText(text)
      }
    }

    translate()
  }, [text, currentLanguage, translateText])

  return <span className={className}>{displayText}</span>
}

/**
 * useTranslatableText Hook
 * Hook to get translated text for any component
 * Usage: const translated = useTranslatableText("Hello")
 */
export function useTranslatableText(text) {
  const { currentLanguage, translateText } = useTranslation()
  const [displayText, setDisplayText] = useState(text)

  useEffect(() => {
    const translate = async () => {
      if (currentLanguage !== 'en' && text) {
        const translated = await translateText(text, currentLanguage)
        setDisplayText(translated)
      } else {
        setDisplayText(text)
      }
    }

    translate()
  }, [text, currentLanguage, translateText])

  return displayText
}

/**
 * Batch Translation Function
 * Translate multiple texts at once
 * Usage: const translated = await translateBatch(['Hello', 'World'], 'si')
 */
export async function translateBatch(texts, targetLanguage, apiKey = 'AIzaSyAh7R5bcqARHppd5Aler-sDCUamF1INUT8') {
  if (targetLanguage === 'en' || !texts || texts.length === 0) {
    return texts
  }

  try {
    const response = await fetch('https://translation.googleapis.com/language/translate/v2?key=' + apiKey, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: texts,
        target: targetLanguage,
        source: 'en'
      })
    })

    if (!response.ok) {
      console.error('Translation API error:', response.statusText)
      return texts
    }

    const data = await response.json()
    return data.data?.translations?.map(t => t.translatedText) || texts
  } catch (error) {
    console.error('Batch translation error:', error)
    return texts
  }
}
