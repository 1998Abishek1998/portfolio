import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import useAlert from "../hooks/useAlert";
import { Alert, Footer } from "../components";
import EarthCanvas from '../components/canvas/EarthCanvas';
import Recaptcha from '../components/Recaptcha';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Abishek Timsina",
          from_email: form.email,
          to_email: "timabishek98@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: "",
              email: "",
              message: "",
            });
            setVerified(false)
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setVerified(false)

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  const onRecapchaChange = () => {
    setVerified(true)
  }

  return (
    <>
      <div className=' max-container bg-black-300' id="contact">
        <div className='flex lg:flex-row flex-col mt-20'>

          {alert.show && <Alert {...alert} />}

          <div className='flex-1 min-w-[50%] flex flex-col'>
            <h1 className='head-text'>Get in Touch</h1>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='w-full flex flex-col gap-7 mt-14'
            >
              <label className='text-black-500 font-semibold'>
                Name
                <input
                  type='text'
                  name='name'
                  className='input'
                  placeholder='John'
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </label>
              <label className='text-black-500 font-semibold'>
                Email
                <input
                  type='email'
                  name='email'
                  className='input'
                  placeholder='John@gmail.com'
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </label>
              <label className='text-black-500 font-semibold'>
                Your Message
                <textarea
                  name='message'
                  rows='4'
                  className='textarea'
                  placeholder='Write your thoughts here...'
                  value={form.message}
                  onChange={handleChange}
                />
              </label>

              {
                form.name.length > 2 && form.email.length > 7 && form.message.length > 5 &&
                < Recaptcha onChange={onRecapchaChange} />
              }
              <button
                type='submit'
                disabled={loading || !verified}
                className='btn'
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>

          <div className='w-full lg:h-auto md:h-[550px] h-[350px]'>
            <EarthCanvas />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
