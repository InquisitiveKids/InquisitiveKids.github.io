/*
 * Tiny client-side i18n loader — no build step, no framework.
 * See i18n/CLAUDE.md for how to add strings or languages.
 */
(function (global) {
    'use strict';

    var SUPPORTED = ['en', 'zh', 'ja', 'es', 'fr'];
    var STORAGE_KEY = 'ik-lang';
    var cache = {};
    var current = 'en';

    function detectInitialLanguage() {
        var saved = null;
        try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* localStorage unavailable */ }
        if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;

        var browserLangs = navigator.languages || [navigator.language || 'en'];
        for (var i = 0; i < browserLangs.length; i++) {
            var short = String(browserLangs[i]).split('-')[0].toLowerCase();
            if (SUPPORTED.indexOf(short) !== -1) return short;
        }
        return 'en';
    }

    function loadDictionary(lang) {
        if (cache[lang]) return Promise.resolve(cache[lang]);
        return fetch('i18n/' + lang + '.json')
            .then(function (res) {
                if (!res.ok) throw new Error('Failed to load dictionary: ' + lang);
                return res.json();
            })
            .then(function (dict) {
                cache[lang] = dict;
                return dict;
            })
            .catch(function () {
                return cache.en || {};
            });
    }

    function apply(el, dict, fallback) {
        var key = el.getAttribute('data-i18n');
        var value = dict[key];
        if (value === undefined) value = fallback[key];
        if (value === undefined) return;

        var attr = el.getAttribute('data-i18n-attr');
        if (attr) {
            el.setAttribute(attr, value);
        } else {
            el.textContent = value;
        }
    }

    function applyTo(root) {
        root = root || document.body;
        var dict = cache[current] || {};
        var fallback = cache.en || {};
        var nodes = root.querySelectorAll ? root.querySelectorAll('[data-i18n]') : [];
        Array.prototype.forEach.call(nodes, function (el) {
            apply(el, dict, fallback);
        });
    }

    function setLanguage(lang) {
        if (SUPPORTED.indexOf(lang) === -1) lang = 'en';
        return loadDictionary(lang).then(function () {
            current = lang;
            try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* localStorage unavailable */ }
            document.documentElement.setAttribute('lang', lang);
            applyTo(document.body);
        });
    }

    function init() {
        var initial = detectInitialLanguage();
        return loadDictionary('en').then(function () {
            if (initial === 'en') {
                current = 'en';
                document.documentElement.setAttribute('lang', 'en');
                return;
            }
            return loadDictionary(initial).then(function () {
                current = initial;
                document.documentElement.setAttribute('lang', initial);
            });
        });
    }

    global.I18n = {
        SUPPORTED: SUPPORTED,
        init: init,
        setLanguage: setLanguage,
        applyTo: applyTo,
        getCurrentLanguage: function () { return current; }
    };
})(window);
