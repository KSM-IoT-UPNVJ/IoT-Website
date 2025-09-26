import { useState } from 'react';
import FadeIn from '../../utils/fadeIn';

export default function Form() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [inputValidity, setInputValidity] = useState({
    name: true,
    email: true,
    phone: true,
    message: true,
  });

  const handleSubmit = (e) => {
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

    // form valid
    alert('Form submitted!');
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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

  return (
    <div className="flex-1 lg:flex-3/5 p-4 sm:p-6 md:p-8 lg:p-10">
      <form
        method="post"
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col w-full gap-3 sm:gap-4"
      >
        <FadeIn delay={0.4} direction={'left'}>
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className={getInputStyle('name')}
          />
        </FadeIn>

        <FadeIn delay={0.6} direction={'left'}>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={getInputStyle('email')}
            />
            <input
              type="text"
              name="phone"
              required
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className={getInputStyle('phone')}
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.8} direction={'left'}>
          <textarea
            name="message"
            required
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className={`${getInputStyle('message')} resize-none`}
          ></textarea>
        </FadeIn>
        <FadeIn delay={1} direction={'left'}>
          <button
            type="submit"
            className="bg-biru-sedang w-full sm:w-auto sm:min-w-[200px] lg:w-[231px] h-10 sm:h-12 rounded-xl text-white shadow-lg shadow-blue-500/50 cursor-pointer hover:scale-105 duration-150 text-sm sm:text-base"
          >
            Submit
          </button>
        </FadeIn>
      </form>
    </div>
  );
}
