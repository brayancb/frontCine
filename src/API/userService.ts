import axiosBackend from './axios_Backend';

// Registrar usuario
export const registerUser = async (registerData: any) => {
  try {
    const response = await axiosBackend.post('/authentication/register', registerData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Login usuario
export const loginUser = async (loginData: any) => {
  try {
    const response = await axiosBackend.post('/authentication/login', loginData);
    return response.data;
  } catch (error) {
    throw error;
  }
};