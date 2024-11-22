import {rune} from "$lib/translations/rune";
import {useReadable, useWritable} from "$lib/stores/sharedStore";

export const updateTranslation = (translation: any, fallbackTranslation) => useWritable('translation', rune(translation, fallbackTranslation).get());
export const readTranslation = () => useReadable('translation', null);

export const updateLang = (lang: string) => useWritable('lang', lang);

export const readLang = (lang: string) => useWritable('lang', null);
