export default function auth(to, from, next) {
  if (!localStorage.getItem('userToken') && !localStorage.getItem('userData')) {
    return next();
  }
  return next();
}
//! changement ligne 3 = return next({ name: 'Login' });
