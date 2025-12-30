import axios from 'axios';
import { ContactFormData, ContactResponse } from '../features/contact/index';

const API_URL = import.meta.env.VITE_API_CONTACT_URL;

export const contactService = {
  sendMessage: async (data: ContactFormData): Promise<ContactResponse> => {
    console.log('[ContactService] sendMessage called', { url: API_URL, data });
    try {
      const response = await axios.post<ContactResponse>(API_URL, data, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        timeout: 60000, 
      });

      console.log('[ContactService] SUCCESS', response.data);
      return response.data;
    } catch (error) {
      console.error('[ContactService] ERROR:', error);
      throw error;
    }
  },
};

