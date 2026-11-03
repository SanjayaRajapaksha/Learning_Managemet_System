# Translation System Guide

Your website now has full translation support for **English**, **Sinhala**, and **Japanese** using Google Translate API.

## Features Added

✅ Language selector button in navbar (desktop & mobile)
✅ Language preference saved to browser
✅ Automatic translation using Google Translate API
✅ Cached translations for better performance
✅ Easy-to-use translation components and hooks

---

## How to Use Translations in Your Components

### Option 1: Using `<TranslatableText>` Component (Easiest for Static Text)

```jsx
import { TranslatableText } from '../utils/TranslatableText'

export function MyComponent() {
  return (
    <div>
      <h1><TranslatableText text="Welcome to Our School" /></h1>
      <p><TranslatableText text="Learn Japanese with us" /></p>
    </div>
  )
}
```

### Option 2: Using `useTranslatableText` Hook (For Dynamic Content)

```jsx
import { useTranslatableText } from '../utils/TranslatableText'

export function MyComponent({ title }) {
  const translatedTitle = useTranslatableText(title)
  
  return <h1>{translatedTitle}</h1>
}
```

### Option 3: Using `useTranslation` Hook (For Advanced Control)

```jsx
import { useTranslation } from '../context/TranslationContext'

export function MyComponent() {
  const { currentLanguage, translateText } = useTranslation()
  const [translated, setTranslated] = useState('')

  useEffect(() => {
    const translate = async () => {
      const result = await translateText('Hello', currentLanguage)
      setTranslated(result)
    }
    translate()
  }, [currentLanguage, translateText])

  return <div>{translated}</div>
}
```

### Option 4: Using `translateBatch` for Multiple Texts

```jsx
import { translateBatch } from '../utils/TranslatableText'

async function translateMultiple() {
  const texts = ['Hello', 'Welcome', 'Learn Japanese']
  const translated = await translateBatch(texts, 'si') // 'si' for Sinhala
  console.log(translated)
}
```

---

## Language Codes

- `en` - English
- `si` - Sinhala (සිංහල)
- `ja` - Japanese (日本語)

---

## Current Implementation

The translation system is set up and working with:

1. **Navbar** - Language selector dropdown added to both desktop and mobile views
2. **Context** - `TranslationContext` manages global language state
3. **Utilities** - Helper components and hooks for easy translation

---

## Next Steps to Complete Translation

To fully translate your website, update your page components (Home, About, Courses, etc.) to use the translation components:

### Example: Updating the Home Page

```jsx
import { TranslatableText } from '../utils/TranslatableText'

export function Home() {
  return (
    <div>
      <h1><TranslatableText text="Welcome to KN Japanese Institute" /></h1>
      <p><TranslatableText text="Learn Japanese language and culture" /></p>
      <button>
        <TranslatableText text="Enroll Now" />
      </button>
    </div>
  )
}
```

---

## Important Notes

⚠️ **Google Translate API Key**: Your API key is embedded in the context. For production, consider:
- Moving the API key to a `.env` file
- Using a backend API to translate text (more secure)
- Pre-translating static content instead of real-time translation

📱 **Performance**: Translations are cached in the application state to avoid duplicate API calls.

💾 **Language Persistence**: The selected language is saved in `localStorage`, so it persists across page reloads.

---

## Troubleshooting

If translations aren't working:

1. Check browser console for errors
2. Verify Google Translate API key is valid
3. Ensure `TranslationProvider` wraps your entire app (it's in `App.jsx`)
4. Clear browser cache and localStorage if needed

---

**Happy translating!** 🌍
