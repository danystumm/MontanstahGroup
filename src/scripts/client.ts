// =============================================================================
// Client-side language switcher, scroll effects, reveal-on-scroll
// Bundled by Astro into the final page (no runtime fetch required).
// =============================================================================
import { strings, langs, type Lang } from '../data/i18n';

export function initClient() {
  // -------- nav scroll state --------
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // -------- reveal on scroll --------
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  // -------- i18n --------
  function setLang(lang: Lang) {
    document.documentElement.lang = lang;
    const dict = strings[lang] ?? strings.en;
    document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (key && dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });
    document.querySelectorAll<HTMLButtonElement>('.lang-switch button').forEach((b) => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
    try {
      localStorage.setItem('mg-lang', lang);
    } catch {}
  }

  document.querySelectorAll<HTMLButtonElement>('.lang-switch button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = (btn.dataset.lang as Lang) ?? 'en';
      setLang(lang);
    });
  });

  // Init: stored choice → browser language → en
  let initLang: Lang = 'en';
  try {
    const saved = localStorage.getItem('mg-lang');
    if (saved && (langs as string[]).includes(saved)) {
      initLang = saved as Lang;
    } else {
      const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
      if ((langs as string[]).includes(browser)) {
        initLang = browser as Lang;
      }
    }
  } catch {}
  setLang(initLang);
}
