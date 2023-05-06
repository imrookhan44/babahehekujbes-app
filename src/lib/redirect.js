export function getRedirectStatus(req) {
  const host = req.headers.host || '';
  const isVercelDomain = host.endsWith('.vercel.app');
  return isVercelDomain ? 301 : 302;
}
