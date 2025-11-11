import React from 'react';
import { Input } from '../../../components/ui/input';
import { Textarea } from '../../../components/ui/textarea';
import { Button } from '../../../components/ui/button';
import { useI18n } from '../../../App';

export default function FormSection() {
  const { t } = useI18n();

  return (
    <div className="p-12">
      <form className="space-y-6">
        <div>
          <Input
            type="text"
            placeholder={t('contact_name')}
            className="border-2 border-gray-200 focus:border-[#53bedd]"
          />
        </div>

        <div>
          <Input
            type="email"
            placeholder={t('contact_email_ph')}
            className="border-2 border-gray-200 focus:border-[#53bedd]"
          />
        </div>

        <div>
          <Input
            type="text"
            placeholder={t('contact_org')}
            className="border-2 border-gray-200 focus:border-[#53bedd]"
          />
        </div>

        <div>
          <Input
            type="text"
            placeholder={t('contact_subject')}
            className="border-2 border-gray-200 focus:border-[#53bedd]"
          />
        </div>

        <div>
          <Textarea
            placeholder="Your message"
            rows={6}
            className="border-2 border-gray-200 focus:border-[#53bedd] resize-none"
          />
        </div>

        <Button className="w-full bg-[#53bedd] hover:bg-[#53bedd]/90 py-6">
          {t('contact_send')}
        </Button>
      </form>
    </div>
  );
}
