//: Verification auth User en cas de d'echec redirigé vers login page
export default function auth(to, from, next) {
  console.log(to);
  if (!localStorage.getItem('userToken') || !localStorage.getItem('userData')) {
    return next({ name: 'Login' });
  }
  return next();
}
