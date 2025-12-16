import React from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SuccessNotificationProps {
  isVisible: boolean;
  message: string;
  onClose: () => void;
}

export default function SuccessNotification({ isVisible, message, onClose }: SuccessNotificationProps) {
  React.useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Auto-close after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            top: '2rem',
            right: '2rem',
            zIndex: 9999,
            maxWidth: '400px',
            width: '90%'
          }}
        >
          <div
            style={{
              backgroundColor: '#10b981',
              borderRadius: '12px',
              padding: '1rem 1.25rem',
              boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3), 0 4px 10px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              border: '2px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            {/* Checkmark Icon */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <CheckCircle2
                size={24}
                style={{
                  color: 'white',
                  strokeWidth: 2.5
                }}
              />
            </div>

            {/* Message */}
            <div style={{ flex: 1 }}>
              <p
                style={{
                  color: 'white',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  margin: 0,
                  lineHeight: 1.5
                }}
              >
                {message}
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '0.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '4px',
                transition: 'background-color 0.2s',
                flexShrink: 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <X
                size={20}
                style={{
                  color: 'white'
                }}
              />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
