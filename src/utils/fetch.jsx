export const loginUser = async (email, password) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    console.log('Réponse des informations de connexion: ', data);

    return { data };
  } catch (error) {
    console.error('Erreur de la récupération des informations de copnnexion: ', error);
    throw error;
  }
};

import { TOKEN_STORAGE_KEY } from "../features/authSlice";

export const fetchUserProfile = async () => {
  const token = localStorage.getItem(TOKEN_STORAGE_KEY) || sessionStorage.getItem(TOKEN_STORAGE_KEY);
  
  if (!token) {
    console.log('Token non trouvé');
    return null;
  }
  
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    if (response.ok) {
      const data = await response.json();
      return data.body;
    } else {
      console.log('Erreur lors de la récupération du profil utilisateur');
      return null;
    }
  } catch (error) {
    console.log('Erreur lors de la récupération du profil utilisateur', error);
    return null;
  }
};

export const updateUserProfile = async (firstName, lastName, token) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName
      })
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Erreur de mise à jour du profil utilisateur');
    }
  } catch (error) {
    throw new Error('Erreur de mise à jour du profil utilisateur');
  }
};