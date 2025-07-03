import { useEffect, useState } from "react";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";
import { useDispatch ,useSelector } from "react-redux";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", form);

    dispatch(login(form))
  };

  useEffect(() => {

    if (token) {
      navigator("/");
    }
  }, [token, navigator]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded px-8 pt-6 pb-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <InputField label="Email" name="email" value={form.email} onChange={handleChange} />
        <InputField label="Password" type="password" name="password" value={form.password} onChange={handleChange} />
        <SubmitButton label="Log In" />
      </form>
    </div>
  );
};

export default LoginPage;
