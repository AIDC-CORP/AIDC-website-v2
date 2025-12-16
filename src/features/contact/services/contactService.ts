import axios from 'axios';
import { ContactFormData, ContactResponse } from '../index';

const API_URL = 'https://aidc-web-services.onrender.com/api/v1/contact';

export const contactService = {
  sendMessage: async (data: ContactFormData): Promise<ContactResponse> => {
    console.log('[ContactService] sendMessage called', { url: API_URL, data });
    try {
      const response = await axios.post<ContactResponse>(API_URL, data, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        timeout: 10000, 
      });

      console.log('[ContactService] SUCCESS', response.data);
      return response.data;
    } catch (error) {
      console.error('[ContactService] ERROR:', error);
      throw error;
    }
  },
};

