import axios from 'axios';

// Base URL sẽ được lấy từ vite.config.ts proxy
// Vì đang dùng proxy /api -> target, nên không cần set baseURL
export const jobApiClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

// Response interceptor for error handling
jobApiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('[Job API Error]:', error);
    return Promise.reject(error);
  }
);
