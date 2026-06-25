import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { setLocale } from './index';

/**
 * Drop-in replacement for next-intl's <Link href="...">.
 * - Internal paths -> react-router <Link to="...">
 * - Hash, mailto, tel and external URLs -> plain <a>
 */
export function Link({ href, to, children, ...rest }) {
  const dest = href ?? to ?? '/';
  const isPlainAnchor =
    typeof dest === 'string' &&
    (dest.startsWith('#') ||
      dest.startsWith('/#') ||
      dest.startsWith('http') ||
      dest.startsWith('mailto:') ||
      dest.startsWith('tel:'));

  if (isPlainAnchor) {
    return (
      <a href={dest} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <RouterLink to={dest} {...rest}>
      {children}
    </RouterLink>
  );
}

/** Drop-in replacement for next-intl's usePathname(). */
export function usePathname() {
  return useLocation().pathname;
}

/**
 * Drop-in replacement for next-intl's useRouter().
 * The only locale-aware call in the codebase is router.replace(path, { locale }),
 * which here just switches the active language (there is no per-locale URL).
 */
export function useRouter() {
  const navigate = useNavigate();
  return {
    push: (path, opts) => {
      if (opts?.locale) setLocale(opts.locale);
      else if (path) navigate(path);
    },
    replace: (path, opts) => {
      if (opts?.locale) setLocale(opts.locale);
      else if (path) navigate(path, { replace: true });
    },
  };
}
