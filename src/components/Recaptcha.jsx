import ReCAPTCHA from "react-google-recaptcha";


const Recaptcha = ({ onChange }) => {

  return (
    <ReCAPTCHA
      sitekey={import.meta.env.VITE_APP_RECAPTCHA_KEY}
      onChange={onChange}
    />
  )
}

export default Recaptcha
