
import React from 'react';
import useTranslations from '@/hooks/useTranslations';

interface TranslationExampleProps {
  translationKey: string;
  fallback?: string;
}

/**
 * Example component that demonstrates how to use the new translations system
 * without modifying protected files
 */
const TranslationExample: React.FC<TranslationExampleProps> = ({ 
  translationKey,
  fallback
}) => {
  // Use both original and new translation systems
  const { t, tNew, language } = useTranslations();
  
  // Try to get translation from original system first
  const originalTranslation = t(translationKey);
  
  // If the original translation returns the key itself, try the new system
  const translation = 
    originalTranslation === translationKey 
      ? tNew(translationKey) 
      : originalTranslation;
  
  // If both systems fail, use the fallback
  const displayText = translation === translationKey ? fallback || translationKey : translation;
  
  return (
    <span className="translation-text" data-lang={language}>
      {displayText}
    </span>
  );
};

export default TranslationExample;
