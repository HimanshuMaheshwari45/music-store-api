export function logging(req, res, next) {
  console.log(`Request: ${req.url} at ${new Date().toISOString()}`);
  next();
}
