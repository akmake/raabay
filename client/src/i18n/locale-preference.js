export const MANUAL_LOCALE_COOKIE = 'SITE_LOCALE';
export const AUTO_LOCALE_COOKIE = 'SITE_AUTO_LOCALE';

export const LOCALE_COOKIE_OPTIONS = {
  path: '/',
  sameSite: 'lax',
  maxAge: 60 * 60 * 24 * 365,
};

const SPANISH_COUNTRIES = new Set([
  'AR', 'BO', 'CL', 'CO', 'CR', 'CU', 'DO', 'EC', 'ES', 'GQ',
  'GT', 'HN', 'MX', 'NI', 'PA', 'PE', 'PR', 'PY', 'SV', 'UY', 'VE',
]);

const ITALIAN_COUNTRIES = new Set(['IT', 'SM', 'VA']);

export function isSupportedLocale(locale) {
  return ['he', 'en', 'fr', 'es', 'it', 'ru'].includes(locale);
}

export function localeFromCountry(countryCode) {
  const country = countryCode?.trim().toUpperCase();

  if (country === 'IL') return 'he';
  if (SPANISH_COUNTRIES.has(country)) return 'es';
  if (ITALIAN_COUNTRIES.has(country)) return 'it';
  if (country === 'RU') return 'ru';
  return country?.length === 2 ? 'en' : null;
}

const RUSSIAN_TIME_ZONES = new Set([
  'Europe/Kaliningrad', 'Europe/Kirov', 'Europe/Moscow', 'Europe/Samara',
  'Europe/Saratov', 'Europe/Ulyanovsk', 'Europe/Volgograd',
  'Asia/Anadyr', 'Asia/Barnaul', 'Asia/Chita', 'Asia/Irkutsk',
  'Asia/Kamchatka', 'Asia/Khandyga', 'Asia/Krasnoyarsk', 'Asia/Magadan',
  'Asia/Novokuznetsk', 'Asia/Novosibirsk', 'Asia/Omsk', 'Asia/Sakhalin',
  'Asia/Srednekolymsk', 'Asia/Tomsk', 'Asia/Ust-Nera', 'Asia/Vladivostok',
  'Asia/Yakutsk', 'Asia/Yekaterinburg',
]);

const SPANISH_TIME_ZONES = new Set([
  'Europe/Madrid', 'Atlantic/Canary', 'Africa/Ceuta', 'Africa/Malabo',
  'America/La_Paz', 'America/Bogota', 'America/Caracas', 'America/Costa_Rica',
  'America/Havana', 'America/Guayaquil', 'Pacific/Galapagos',
  'America/El_Salvador', 'America/Guatemala', 'America/Tegucigalpa',
  'America/Managua', 'America/Panama', 'America/Asuncion', 'America/Lima',
  'America/Puerto_Rico', 'America/Santo_Domingo', 'America/Montevideo',
  'America/Santiago', 'Pacific/Easter',
  'America/Bahia_Banderas', 'America/Cancun', 'America/Chihuahua',
  'America/Ciudad_Juarez', 'America/Hermosillo', 'America/Matamoros',
  'America/Mazatlan', 'America/Merida', 'America/Mexico_City',
  'America/Monterrey', 'America/Ojinaga', 'America/Tijuana',
]);

export function localeFromTimeZone(timeZone) {
  if (timeZone === 'Asia/Jerusalem' || timeZone === 'Asia/Tel_Aviv') return 'he';
  if (['Europe/Rome', 'Europe/San_Marino', 'Europe/Vatican'].includes(timeZone)) return 'it';
  if (RUSSIAN_TIME_ZONES.has(timeZone)) return 'ru';
  if (timeZone?.startsWith('America/Argentina/') || SPANISH_TIME_ZONES.has(timeZone)) return 'es';
  return 'en';
}
