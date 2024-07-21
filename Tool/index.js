const { logger } = require("./logger");

const ParentLang = "en"

const locales = {
    de: require("../de.json"),
    en: require('../en.json'),
    es: require("../es.json"),
    fr: require("../fr.json"),
    it: require("../it.json"),
};

function getNestedKeys(obj, prefix = '') {
    return Object.keys(obj).flatMap(key => {
        const fullPath = prefix ? `${prefix}.${key}` : key;
        return typeof obj[key] === 'object' && obj[key] !== null ? getNestedKeys(obj[key], fullPath) : fullPath;
    });
}

function checkTranslationExists(localeObj, keyPath) {
    const keys = keyPath.split('.');
    let current = localeObj;

    for (let key of keys) {
        if (current?.[key]) {
            current = current[key];
        } else {
            return false;
        }
    }

    return true;
}

function getUntranslatedKeys(locale, nokeys) {
    const localeKeys = getNestedKeys(locales[ParentLang]);
    let translatedCount = 0;

    for (let key of localeKeys) {
        if (checkTranslationExists(locales[locale], key)) {
            translatedCount++;
        } else {
            if(!nokeys) {
                logger("info", 'I18N', `Untranslated Key (${locale}):`, key);
            }
        }
    }

    const percentage = (translatedCount / localeKeys.length) * 100;
    return logger("info", 'I18N', `Translated (${locale}):`, `${percentage.toFixed(2)}%`);
}

(async () => {
    let mode = process.argv[2];
    let nokeys = process.argv.find(x => x.includes("nokeys")) !== undefined;

    if (Object.keys(locales).includes(mode)) {
        const locale = mode;

        if (locale && locales[locale]) {
            return getUntranslatedKeys(locale, nokeys);
        } else {
            return logger(
                "warn",
                'I18N',
                `Cannot find "${locale ?? 'Unknown'}"! Current supported locales: ${Object.keys(locales).join(', ')}`,
            );
        }
    }

    if (mode !== 'all') {
        mode = "all";
        logger("warn", "I18N", "The tool was started with the default flag 'all'")
    }

    Object.keys(locales).forEach((key) => {
        getUntranslatedKeys(key, nokeys);
    });
    return logger("success", 'I18N', `Everything done!`);
})();
