export default function auth(to, from, next) {
  console.log(localStorage.getItem('userToken'));
  console.log(localStorage.getItem('userData'));
  console.log(to);
  if (!localStorage.getItem('userToken') || !localStorage.getItem('userData')) {
    return next({ name: 'Login' });
  }
  return next();
}
//! changement ligne 3 => " return next({ name: 'Login' });"
