import { useSelector } from 'react-redux';
import { translationStrings } from '../utils/translations';

// simple helper that returns a translation function and current language
export function useTranslation() {
  const lang = useSelector((state) => state.language.current);

  const t = (keyPath) => {
    if (!keyPath) return '';
    const parts = keyPath.split('.');
    let result = translationStrings[lang];
    for (const part of parts) {
      if (result == null) break;
      result = result[part];
    }
    // fallback to the key if translation missing
    return result ?? keyPath;
  };

  return { t, lang };
}
