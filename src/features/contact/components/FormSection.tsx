import React from 'react';
import { Input } from '../../../components/ui/input';
import { Textarea } from '../../../components/ui/textarea';
import { Button } from '../../../components/ui/button';
import { useI18n } from '../../../shared/hooks/useI18n';
import { toast } from "sonner";
import { contactService } from '../services/contactService';
import ConfirmationModal from './ConfirmationModal';
import SuccessNotification from './SuccessNotification';

export default function FormSection() {
  const { t } = useI18n();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });
  const [isConfirmOpen, setIsConfirmOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[FormSection] handleSubmit called', formData);
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      console.log('[FormSection] Validation failed');
      toast.error(t('contact_error_required'));
      return;
    }
    console.log('[FormSection] Opening confirmation dialog');
    setIsConfirmOpen(true);
  };

  const handleConfirmSend = async () => {
    console.log('[FormSection] handleConfirmSend START');
    console.log('[FormSection] Closing dialog...');
    setIsConfirmOpen(false);
    console.log('[FormSection] Setting loading to true...');
    setIsLoading(true);
    console.log('[FormSection] State updated, about to call API');

    try {
      console.log('[FormSection] Calling contactService.sendMessage...');
      const response = await contactService.sendMessage(formData);
      console.log('[FormSection] Service returned:', response);

      if (response.success) {
        // Show custom success notification
        setSuccessMessage(t('contact_success_message'));
        setShowSuccess(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          organization: '',
          subject: '',
          message: ''
        });
      } else {
        toast.error(t('contact_error_failed'));
        console.log('[FormSection] Message sending failed:', response.message);
      }
    } catch (error) {
      console.error('[FormSection] An error occurred during message sending:', error);
      toast.error(t('contact_error_network'));
    } finally {
      console.log('[FormSection] Finally block - setting isLoading to false');
      setIsLoading(false);
      console.log('[FormSection] handleConfirmSend COMPLETE');
    }
  };

  return (
    <div className="p-12">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            type="text"
            placeholder={t('contact_name')}
            className="border-2 focus:border-[#3b82f6]"
            style={{ borderColor: '#e2e8f0', backgroundColor: '#f8fafc' }}
            required
          />
        </div>

        <div>
          <Input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            type="email"
            placeholder={t('contact_email_ph')}
            className="border-2 focus:border-[#3b82f6]"
            style={{ borderColor: '#e2e8f0', backgroundColor: '#f8fafc' }}
            required
          />
        </div>

        <div>
          <Input
            name="organization"
            value={formData.organization}
            onChange={handleInputChange}
            type="text"
            placeholder={t('contact_org')}
            className="border-2 focus:border-[#3b82f6]"
            style={{ borderColor: '#e2e8f0', backgroundColor: '#f8fafc' }}
          />
        </div>

        <div>
          <Input
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            type="text"
            placeholder={t('contact_subject')}
            className="border-2 focus:border-[#3b82f6]"
            style={{ borderColor: '#e2e8f0', backgroundColor: '#f8fafc' }}
          />
        </div>

        <div>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your message"
            rows={6}
            className="border-2 focus:border-[#3b82f6] resize-none"
            style={{ borderColor: '#e2e8f0' }}
            required
          />
        </div>

        <Button 
          type="submit" 
          className="w-full hover:opacity-90 py-6" 
          style={{ backgroundColor: '#3b82f6' }}
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : t('contact_send')}
        </Button>
      </form>

      <ConfirmationModal
        isOpen={isConfirmOpen}
        onClose={() => {
          console.log('[FormSection] Modal closed');
          setIsConfirmOpen(false);
        }}
        onConfirm={handleConfirmSend}
        title={t('contact_confirm_title')}
        message={t('contact_confirm_message')}
        confirmText={t('contact_confirm_send')}
        cancelText={t('contact_confirm_cancel')}
      />

      <SuccessNotification
        isVisible={showSuccess}
        message={successMessage}
        onClose={() => setShowSuccess(false)}
      />
    </div>
  );
}
