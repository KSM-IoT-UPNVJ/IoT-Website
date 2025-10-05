import { useState } from 'react';
import { sendContact } from '../../../services/ContactApi';

export function useContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inputValidity, setInputValidity] = useState({
    name: true,
    email: true,
    phone: true,
    message: true,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const newValidity = {
      name: form.name.validity.valid,
      email: form.email.validity.valid,
      phone: form.phone.validity.valid,
      message: form.message.validity.valid,
    };

    setInputValidity(newValidity);
    setFormSubmitted(true);

    const allValid = Object.values(newValidity).every(Boolean);
    if (!allValid) return;

    try {
      await sendContact(formData);
      alert('Pesan berhasil dikirim!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error('Error dari backend:', err);
      alert('Gagal mengirim pesan: ' + err.message);
    }
  };

  const getInputStyle = (field) => {
    const isInvalid = formSubmitted && !inputValidity[field];
    return `
      border-2
      ${isInvalid ? 'border-red-500' : 'border-biru-sedang'}
      border-biru-sedang bg-biru-muda
      inset-shadow-sm inset-shadow-blue-500/50
      focus:outline focus:outline-biru-tua
      rounded-2xl py-3 px-[19px] w-full hover:scale-102 duration-150
    `;
  };

  return { formData, handleChange, handleSubmit, getInputStyle };
}
