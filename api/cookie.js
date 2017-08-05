// creates a random userId
export default function createCookie() {
  const cookie = {
    userId: Math.random().toString(36).substr(2),
    firstVisit: false,
  };
  return cookie;
}
