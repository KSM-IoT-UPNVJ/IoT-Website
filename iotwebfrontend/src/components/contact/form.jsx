import { useState } from 'react';

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
    rounded-2xl py-3 px-[19px] w-full
  `;
  };

  return (
    <div className=" flex-3/5 p-10">
      <form
        method="post"
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col w-full gap-2.5"
      >
        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className={getInputStyle('name')}
        />
        <div className="flex gap-2 justify-center">
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
        <textarea
          name="message"
          required
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className={getInputStyle('message')}
        ></textarea>
        <button
          type="submit"
          className="bg-biru-sedang w-[231px] h-12 rounded-xl text-white shadow-lg shadow-blue-500/50"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
