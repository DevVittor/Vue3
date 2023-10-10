import jwtDecode from 'jwt-decode';

export function isTokenValid(token) {
  if (!token) return false;

  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; // em segundos

    // Verifique se o token expirou
    return decodedToken.exp > currentTime;
  } catch (error) {
    return false; // Erro ao decodificar o token
  }
}
