import React, { createContext, useState, useCallback, useEffect } from 'react'

export const TranslationContext = createContext()

const GOOGLE_API_KEY = 'AIzaSyAh7R5bcqARHppd5Aler-sDCUamF1INUT8'
const TRANSLATION_API_URL = 'https://translation.googleapis.com/language/translate/v2'

const SUPPORTED_LANGUAGES = {
  en: 'English',
  si: 'Sinhala',
  ja: 'Japanese (日本語)'
}

export function TranslationProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState('en')
  const [translatedContent, setTranslatedContent] = useState({})
  const [isTranslating, setIsTranslating] = useState(false)

  // Load saved language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage')
    if (savedLanguage && SUPPORTED_LANGUAGES[savedLanguage]) {
      setCurrentLanguage(savedLanguage)
    }
  }, [])

  // Save language preference
  const changeLanguage = useCallback((languageCode) => {
    if (SUPPORTED_LANGUAGES[languageCode]) {
      setCurrentLanguage(languageCode)
      localStorage.setItem('preferredLanguage', languageCode)
    }
  }, [])

  // Translate text using Google Translate API
  const translateText = useCallback(async (text, targetLanguage) => {
    if (!text || targetLanguage === 'en' || !targetLanguage) {
      return text
    }

    const cacheKey = `${text}_${targetLanguage}`
    
    // Check cache first
    if (translatedContent[cacheKey]) {
      return translatedContent[cacheKey]
    }

    try {
      setIsTranslating(true)
      
      const response = await fetch(`${TRANSLATION_API_URL}?key=${GOOGLE_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: text,
          target: targetLanguage,
          source: 'en'
        })
      })

      if (!response.ok) {
        console.error('Translation API error:', response.statusText)
        return text
      }

      const data = await response.json()
      const translatedText = data.data?.translations?.[0]?.translatedText || text
      
      // Cache the translation
      setTranslatedContent(prev => ({
        ...prev,
        [cacheKey]: translatedText
      }))

      return translatedText
    } catch (error) {
      console.error('Translation error:', error)
      return text
    } finally {
      setIsTranslating(false)
    }
  }, [translatedContent])

  const value = {
    currentLanguage,
    changeLanguage,
    translateText,
    isTranslating,
    supportedLanguages: SUPPORTED_LANGUAGES,
    languageList: Object.entries(SUPPORTED_LANGUAGES).map(([code, name]) => ({
      code,
      name
    }))
  }

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  )
}

// Custom hook to use translation
export function useTranslation() {
  const context = React.useContext(TranslationContext)
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider')
  }
  return context
}
