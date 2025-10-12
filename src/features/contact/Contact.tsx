import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Button } from '../../components/ui/button';

export default function Contact() {
  return (
    <div className="pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left - Contact Info */}
            <div className="bg-gradient-to-br from-[#53bedd] to-[#2a9cbd] p-12 text-white">
              <h2 className="text-white mb-4">Get in touch</h2>
              <p className="text-white/90 mb-12">
                We'd love to hear from you. Send us a message and we'll respond as soon as
                possible.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white mb-1">Address</h4>
                    <p className="text-white/90">
                      19n7b KĐT Trung Hòa Nhân Chính, Thanh Xuân, Hà Nội
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white mb-1">Phone</h4>
                    <a href="tel:0865903798" className="text-white/90 hover:text-white">
                      0865903798
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white mb-1">Email</h4>
                    <a
                      href="mailto:Contact@aidccompany.com"
                      className="text-white/90 hover:text-white"
                    >
                      Contact@aidccompany.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white mb-1">Office hours</h4>
                    <p className="text-white/90">Mon - Sat: 8 am - 5 pm</p>
                    <p className="text-white/90">Sunday: CLOSED</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="p-12">
              <form className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Your name"
                    className="border-2 border-gray-200 focus:border-[#53bedd]"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="border-2 border-gray-200 focus:border-[#53bedd]"
                  />
                </div>

                <div>
                  <Input
                    type="text"
                    placeholder="Your organize"
                    className="border-2 border-gray-200 focus:border-[#53bedd]"
                  />
                </div>

                <div>
                  <Input
                    type="text"
                    placeholder="Subject"
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
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
