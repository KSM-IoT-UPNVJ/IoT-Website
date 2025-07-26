import { useState } from "react";

export default function Form() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
      const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      setFormSubmitted(true);
      return;
    }
    // form valid
    alert('Form submitted!');
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
    const getInputStyle = (fieldValue) => {
    `border-2 border-biru-sedang bg-biru-muda inset-shadow-sm inset-shadow-blue-500/50 focus:outline focus:outline-biru-tua rounded-2xl py-3 px-[19px] w-full ${formSubmitted && !fieldValue ?  'border-red-500' : 'border-gray-300'}`;
    }

    return(
        <div className=" flex-3/5 p-10">
            <form method="post" onSubmit={handleSubmit} noValidate className="flex flex-col w-full gap-2.5">
                <input type="text" name="name" required placeholder="Name" value={formData.name} onChange={handleChange} className={getInputStyle(formData.name)}/>
                <div className="flex gap-2 justify-center">
                    <input type="email" name="email" required placeholder="Email" value={formData.email} onChange={handleChange} className={getInputStyle(formData.email)} />
                    <input type="text" name="phone" required placeholder="Phone" value={formData.phone} onChange={handleChange} className={getInputStyle(formData.phone)}/>
                </div> 
                <textarea name="message" required placeholder="Message" value={formData.message} onChange={handleChange} className={getInputStyle(formData.message)}></textarea>
                <button type="submit" className="bg-biru-sedang w-[231px] h-12 rounded-xl text-white shadow-lg shadow-blue-500/50">Submit</button>
            </form>
        </div>
    )
}