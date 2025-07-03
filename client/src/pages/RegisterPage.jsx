import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";
import { register } from "../store/authSlice";
import { useNavigate } from "react-router-dom";


const RegisterPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register data:", form);

    dispatch(register(form))
  };

  useEffect( () => {

    if(user){
      navigator("/login")
    }
  } , [user , navigator])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded px-8 pt-6 pb-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
        <InputField label="Full Name" name="name" value={form.name} onChange={handleChange} />
        <InputField label="Email" name="email" value={form.email} onChange={handleChange} />
        <InputField label="Password" type="password" name="password" value={form.password} onChange={handleChange} />
        <SubmitButton label="Create Account" />
      </form>
    </div>
  );
};

export default RegisterPage;
