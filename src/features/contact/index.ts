export interface ContactFormData {
  name: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}
