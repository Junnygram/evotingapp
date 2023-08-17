export { default } from 'next-auth/middleware';
export const config = {
  matcher: ['/profile', '/app/:path*', '/other/:path*, "/help/:path'],
};
