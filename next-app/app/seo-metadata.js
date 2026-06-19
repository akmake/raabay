import { buildUrl, getAlternates } from './seo-utils';

const IMAGE = {
  url: '/rebbe.webp',
  width: 1200,
  height: 630,
};

const SEO = {
  he: {
    home: {
      title: 'כתיבה לרבי | מכתב לרבי ושליחת פ״נ אונליין',
      description: 'כתבו ושלחו מכתב לרבי מליובאוויטש או פ״נ אונליין. מדריכים לכתיבה לרבי, נוסח פדיון נפש ושליחת המכתב לאוהל הקדוש.',
    },
    write: {
      title: 'כתיבה לרבי אונליין | שליחת מכתב לרבי מליובאוויטש',
      description: 'כתבו מכתב לרבי מליובאוויטש אונליין ושלחו אותו לאוהל הקדוש. אפשר לכתוב טקסט חופשי או לצרף צילום של מכתב בכתב יד.',
    },
    writePidyon: {
      title: 'כתיבת פ״נ אונליין | שליחת פדיון נפש לרבי',
      description: 'כתבו פ״נ לרבי מליובאוויטש בנוסח המקובל ושלחו אותו אונליין לאוהל הקדוש בקווינס, ניו יורק.',
    },
    mikhtav: {
      title: 'איך כותבים מכתב לרבי | נוסח מכתב לרבי',
      description: 'מדריך מלא לכתיבת מכתב לרבי מליובאוויטש: איך מתחילים, מה כותבים, שם ושם האם, נוסח המכתב ושליחתו לאוהל.',
    },
    pidyon: {
      title: 'איך כותבים פ״נ | נוסח פדיון נפש לרבי',
      description: 'איך כותבים פ״נ לרבי: משמעות פדיון נפש, ההכנה לכתיבה, הנוסח המקובל, שם ושם האם ומתי נהוג לכתוב.',
    },
    maala: {
      title: 'כתיבה לרבי | מעלת כתיבת מכתב לרבי',
      description: 'מהי מעלת הכתיבה לרבי, מדוע כותבים מכתב לרבי מליובאוויטש גם היום ומה משמעות הקשר שנוצר באמצעות הכתיבה.',
    },
    ohel: {
      title: 'האוהל של הרבי | שליחת מכתב לאוהל הקדוש',
      description: 'מהו האוהל של הרבי מליובאוויטש בקווינס, מה משמעות הכתיבה לאוהל וכיצד שולחים אליו מכתב או פדיון נפש.',
    },
    contact: {
      title: 'צור קשר | כתיבה לרבי',
      description: 'צרו קשר עם מיזם כתיבה לרבי לשאלות על שליחת מכתב לרבי, הצעות, תמיכה ושיתופי פעולה.',
    },
  },
  en: {
    home: {
      title: 'Writing to the Rebbe | Send a Letter to the Rebbe Online',
      description: 'Write and send a letter or Pidyon Nefesh to the Lubavitcher Rebbe online, with practical guides and delivery to the Ohel in Queens.',
    },
    write: {
      title: 'Send a Letter to the Rebbe Online | Writing to the Rebbe',
      description: 'Write a personal letter to the Lubavitcher Rebbe online or upload a handwritten letter for delivery to the Rebbe’s Ohel in Queens.',
    },
    writePidyon: {
      title: 'Write a Pan Online | Send a Pidyon Nefesh to the Rebbe',
      description: 'Write a Pan, or Pidyon Nefesh, using the traditional formula and send it online to the Lubavitcher Rebbe’s Ohel.',
    },
    mikhtav: {
      title: 'How to Write a Letter to the Rebbe | Complete Guide',
      description: 'Learn how to write a letter to the Lubavitcher Rebbe: how to begin, what to include, the traditional approach and how to send it.',
    },
    pidyon: {
      title: 'How to Write a Pan | Pidyon Nefesh Guide and Formula',
      description: 'A complete guide to writing a Pan or Pidyon Nefesh: meaning, preparation, traditional wording, names and customary occasions.',
    },
    maala: {
      title: 'Writing to the Rebbe | The Meaning of a Personal Letter',
      description: 'Discover the meaning and spiritual value of writing a personal letter to the Lubavitcher Rebbe and why the custom continues today.',
    },
    ohel: {
      title: 'The Rebbe’s Ohel | Send a Letter to the Ohel',
      description: 'Learn about the Lubavitcher Rebbe’s Ohel in Queens and how to send a letter or Pidyon Nefesh to be delivered there.',
    },
    contact: {
      title: 'Contact | Writing to the Rebbe',
      description: 'Contact Writing to the Rebbe with questions about sending a letter, suggestions, support or collaboration.',
    },
  },
  fr: {
    home: {
      title: 'Écrire au Rabbi | Envoyer une lettre au Rabbi en ligne',
      description: 'Écrivez et envoyez en ligne une lettre ou un Pidyon Nefesh au Rabbi de Loubavitch, avec remise à l’Ohel du Rabbi à New York.',
    },
    write: {
      title: 'Envoyer une lettre au Rabbi en ligne | Écrire au Rabbi',
      description: 'Écrivez une lettre personnelle au Rabbi de Loubavitch ou téléversez une lettre manuscrite pour la faire parvenir à l’Ohel.',
    },
    writePidyon: {
      title: 'Écrire un Pan en ligne | Envoyer un Pidyon Nefesh au Rabbi',
      description: 'Rédigez un Pan ou Pidyon Nefesh selon la formule traditionnelle et envoyez-le en ligne à l’Ohel du Rabbi.',
    },
    mikhtav: {
      title: 'Comment écrire une lettre au Rabbi | Guide complet',
      description: 'Comment écrire au Rabbi de Loubavitch : introduction, contenu, nom hébraïque, nom de la mère et envoi de la lettre à l’Ohel.',
    },
    pidyon: {
      title: 'Comment écrire un Pan | Guide du Pidyon Nefesh',
      description: 'Guide complet du Pan ou Pidyon Nefesh : signification, préparation, formule traditionnelle, noms et moments particuliers.',
    },
    maala: {
      title: 'Écrire au Rabbi | Le sens d’une lettre personnelle',
      description: 'Découvrez le sens spirituel d’une lettre au Rabbi de Loubavitch et pourquoi cette coutume se poursuit aujourd’hui.',
    },
    ohel: {
      title: 'L’Ohel du Rabbi | Envoyer une lettre à l’Ohel',
      description: 'Découvrez l’Ohel du Rabbi de Loubavitch à Queens et comment y faire parvenir une lettre ou un Pidyon Nefesh.',
    },
    contact: {
      title: 'Contact | Écrire au Rabbi',
      description: 'Contactez le projet Écrire au Rabbi pour toute question, suggestion, aide ou proposition de collaboration.',
    },
  },
  es: {
    home: {
      title: 'Escribir al Rebe | Enviar una carta al Rebe en línea',
      description: 'Escribe y envía en línea una carta o un Pidyon Nefesh al Rebe de Lubavitch para que llegue al Ohel del Rebe en Nueva York.',
    },
    write: {
      title: 'Enviar una carta al Rebe en línea | Escribir al Rebe',
      description: 'Escribe una carta personal al Rebe de Lubavitch o sube una carta manuscrita para enviarla al Ohel del Rebe.',
    },
    writePidyon: {
      title: 'Escribir un Pan en línea | Enviar un Pidyon Nefesh al Rebe',
      description: 'Escribe un Pan o Pidyon Nefesh con la fórmula tradicional y envíalo en línea al Ohel del Rebe de Lubavitch.',
    },
    mikhtav: {
      title: 'Cómo escribir una carta al Rebe | Guía completa',
      description: 'Cómo escribir al Rebe de Lubavitch: inicio, contenido, nombre hebreo, nombre de la madre y envío de la carta al Ohel.',
    },
    pidyon: {
      title: 'Cómo escribir un Pan | Guía del Pidyon Nefesh',
      description: 'Guía completa para escribir un Pan o Pidyon Nefesh: significado, preparación, fórmula tradicional, nombres y ocasiones.',
    },
    maala: {
      title: 'Escribir al Rebe | El significado de una carta personal',
      description: 'Descubre el valor espiritual de escribir una carta al Rebe de Lubavitch y por qué esta costumbre continúa hoy.',
    },
    ohel: {
      title: 'El Ohel del Rebe | Enviar una carta al Ohel',
      description: 'Conoce el Ohel del Rebe de Lubavitch en Queens y cómo enviar allí una carta o un Pidyon Nefesh.',
    },
    contact: {
      title: 'Contacto | Escribir al Rebe',
      description: 'Contacta con Escribir al Rebe para preguntas, sugerencias, apoyo o propuestas de colaboración.',
    },
  },
  it: {
    home: {
      title: 'Scrivere al Rebbe | Inviare una lettera al Rebbe online',
      description: 'Scrivi e invia online una lettera o un Pidyon Nefesh al Rebbe di Lubavitch, con consegna all’Ohel del Rebbe a New York.',
    },
    write: {
      title: 'Inviare una lettera al Rebbe online | Scrivere al Rebbe',
      description: 'Scrivi una lettera personale al Rebbe di Lubavitch o carica una lettera scritta a mano da inviare all’Ohel del Rebbe.',
    },
    writePidyon: {
      title: 'Scrivere un Pan online | Inviare un Pidyon Nefesh al Rebbe',
      description: 'Scrivi un Pan o Pidyon Nefesh con la formula tradizionale e invialo online all’Ohel del Rebbe di Lubavitch.',
    },
    mikhtav: {
      title: 'Come scrivere una lettera al Rebbe | Guida completa',
      description: 'Come scrivere al Rebbe di Lubavitch: apertura, contenuto, nome ebraico, nome della madre e invio della lettera all’Ohel.',
    },
    pidyon: {
      title: 'Come scrivere un Pan | Guida al Pidyon Nefesh',
      description: 'Guida completa al Pan o Pidyon Nefesh: significato, preparazione, formula tradizionale, nomi e occasioni speciali.',
    },
    maala: {
      title: 'Scrivere al Rebbe | Il significato di una lettera personale',
      description: 'Scopri il valore spirituale di scrivere una lettera al Rebbe di Lubavitch e perché questa usanza continua ancora oggi.',
    },
    ohel: {
      title: 'L’Ohel del Rebbe | Inviare una lettera all’Ohel',
      description: 'Scopri l’Ohel del Rebbe di Lubavitch nel Queens e come inviarvi una lettera o un Pidyon Nefesh.',
    },
    contact: {
      title: 'Contatti | Scrivere al Rebbe',
      description: 'Contatta Scrivere al Rebbe per domande, suggerimenti, sostegno o proposte di collaborazione.',
    },
  },
  ru: {
    home: {
      title: 'Написать Ребе | Отправить письмо Ребе онлайн',
      description: 'Напишите и отправьте письмо или Пидьон Нефеш Любавичскому Ребе онлайн для передачи в Оэль Ребе в Нью-Йорке.',
    },
    write: {
      title: 'Отправить письмо Ребе онлайн | Написать Ребе',
      description: 'Напишите личное письмо Любавичскому Ребе или загрузите рукописное письмо для отправки в Оэль Ребе.',
    },
    writePidyon: {
      title: 'Написать Пан онлайн | Отправить Пидьон Нефеш Ребе',
      description: 'Напишите Пан, или Пидьон Нефеш, по традиционной формуле и отправьте его онлайн в Оэль Любавичского Ребе.',
    },
    mikhtav: {
      title: 'Как написать письмо Ребе | Полное руководство',
      description: 'Как написать Любавичскому Ребе: начало письма, содержание, еврейское имя, имя матери и отправка письма в Оэль.',
    },
    pidyon: {
      title: 'Как написать Пан | Руководство по Пидьон Нефеш',
      description: 'Полное руководство по написанию Пан или Пидьон Нефеш: смысл, подготовка, традиционная формула, имена и особые даты.',
    },
    maala: {
      title: 'Написать Ребе | Смысл личного письма',
      description: 'Узнайте о духовном значении письма Любавичскому Ребе и о том, почему эта традиция продолжается сегодня.',
    },
    ohel: {
      title: 'Оэль Ребе | Отправить письмо в Оэль',
      description: 'Узнайте об Оэле Любавичского Ребе в Квинсе и о том, как отправить туда письмо или Пидьон Нефеш.',
    },
    contact: {
      title: 'Контакты | Написать Ребе',
      description: 'Свяжитесь с проектом «Написать Ребе» по вопросам, с предложениями, поддержкой или идеями сотрудничества.',
    },
  },
};

export function getSeoPage(locale, page) {
  return SEO[locale]?.[page] || SEO.he[page];
}

export function createPageMetadata(locale, page, path, type = 'website') {
  const content = getSeoPage(locale, page);
  const url = buildUrl(locale, path);
  const image = { ...IMAGE, alt: content.title };

  return {
    title: { absolute: content.title },
    description: content.description,
    alternates: getAlternates(locale, path),
    openGraph: {
      type,
      url,
      title: content.title,
      description: content.description,
      siteName: content.title.split('|')[0].trim(),
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.description,
      images: [image],
    },
  };
}
