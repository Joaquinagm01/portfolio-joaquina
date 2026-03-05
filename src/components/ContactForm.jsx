import React, { useState, useCallback, memo } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.css';

const ContactForm = memo(() => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'
  const [touched, setTouched] = useState({});

  const validateField = useCallback((name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return t('contact.form.error_name_required');
        if (value.trim().length < 2) return t('contact.form.error_name_short');
        return '';
      case 'email':
        if (!value.trim()) return t('contact.form.error_email_required');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return t('contact.form.error_email_invalid');
        return '';
      case 'subject':
        if (!value.trim()) return t('contact.form.error_subject_required');
        return '';
      case 'message':
        if (!value.trim()) return t('contact.form.error_message_required');
        if (value.trim().length < 10) return t('contact.form.error_message_short');
        return '';
      default:
        return '';
    }
  }, [t]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate on change if field was touched
    setTouched(prevTouched => {
      if (prevTouched[name]) {
        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
      }
      return prevTouched;
    });
  }, [validateField]);

  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  }, [validateField]);

  const validateForm = useCallback(() => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    return newErrors;
  }, [formData, validateField]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({
        name: true,
        email: true,
        subject: true,
        message: true
      });
      return;
    }

    setStatus('sending');

    try {
      // Get EmailJS credentials from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Check if EmailJS is configured
      if (serviceId && templateId && publicKey) {
        // Send email using EmailJS
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_name: 'Joaquina', // Your name
          },
          publicKey
        );
        
        console.log('✅ Email sent successfully via EmailJS');
      } else {
        // Development mode: simulate email sending
        console.warn('⚠️ EmailJS not configured. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in .env file');
        console.log('📧 Form data (DEV MODE):', formData);
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      setTouched({});
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error('❌ Error sending email:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  }, [validateForm, formData]);

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        <div className={styles.formHeader}>
          <h3 className={styles.formTitle}>{t('contact.form.title')}</h3>
          <p className={styles.formSubtitle}>{t('contact.form.subtitle')}</p>
        </div>

        <div className={styles.formGrid}>
          {/* Name Field */}
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>
              {t('contact.form.name')} <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${styles.formInput} ${errors.name ? styles.inputError : ''}`}
              placeholder={t('contact.form.name_placeholder')}
              disabled={status === 'sending'}
            />
            {errors.name && touched.name && (
              <span className={styles.errorMessage}>{errors.name}</span>
            )}
          </div>

          {/* Email Field */}
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>
              {t('contact.form.email')} <span className={styles.required}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${styles.formInput} ${errors.email ? styles.inputError : ''}`}
              placeholder={t('contact.form.email_placeholder')}
              disabled={status === 'sending'}
            />
            {errors.email && touched.email && (
              <span className={styles.errorMessage}>{errors.email}</span>
            )}
          </div>
        </div>

        {/* Subject Field */}
        <div className={styles.formGroup}>
          <label htmlFor="subject" className={styles.formLabel}>
            {t('contact.form.subject')} <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${styles.formInput} ${errors.subject ? styles.inputError : ''}`}
            placeholder={t('contact.form.subject_placeholder')}
            disabled={status === 'sending'}
          />
          {errors.subject && touched.subject && (
            <span className={styles.errorMessage}>{errors.subject}</span>
          )}
        </div>

        {/* Message Field */}
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.formLabel}>
            {t('contact.form.message')} <span className={styles.required}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows="6"
            className={`${styles.formInput} ${styles.formTextarea} ${errors.message ? styles.inputError : ''}`}
            placeholder={t('contact.form.message_placeholder')}
            disabled={status === 'sending'}
          ></textarea>
          {errors.message && touched.message && (
            <span className={styles.errorMessage}>{errors.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'sending'}
          className={`${styles.submitButton} ${status === 'sending' ? styles.buttonLoading : ''}`}
        >
          {status === 'sending' ? (
            <>
              <span className={styles.loadingSpinner}></span>
              {t('contact.form.sending')}
            </>
          ) : (
            <>
              {t('contact.form.submit')}
              <span className={styles.buttonIcon}>→</span>
            </>
          )}
        </button>

        {/* Status Messages */}
        {status === 'success' && (
          <div className={styles.successMessage}>
            <span className={styles.successIcon}>✓</span>
            {t('contact.form.success')}
          </div>
        )}
        {status === 'error' && (
          <div className={styles.errorMessageBox}>
            <span className={styles.errorIcon}>✕</span>
            {t('contact.form.error')}
          </div>
        )}
      </form>
    </div>
  );
});

export default ContactForm;
