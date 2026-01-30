import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { User, Mail, Lock, Loader2, ArrowRight } from "lucide-react";
import Navcomponent from "../components/Navcomponent";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const data = {
      "username": username,
      "email": email,
      "password": password
    };

    try {
      const response = await axios.post('/user/registration', data);
      
      console.log(response);
      
      navigate('/');
    } catch (err) {
      console.error(err.response);
      if(err.response.status==400){
        
      setError("User alredy exist try with new mail.");
      }else { 
         setError("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF6] text-[#1a1a1a] selection:bg-[#B8860B]/20 selection:text-[#1a1a1a] flex flex-col">
      <Navcomponent />

      <div className="flex-grow flex items-center justify-center px-4 relative">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-[#B8860B]/5 rounded-full blur-[80px] animate-blob" />
          <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-[#B8860B]/5 rounded-full blur-[80px] animate-blob [animation-delay:2000ms]" />
        </div>

        <div className="relative w-full max-w-md bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-[#1a1a1a]/5 border border-[#1a1a1a]/5 animate-fade-in-up">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-[#1a1a1a] mb-2">Create Account</h2>
            <p className="text-[#4A4A4A]">Join us to craft your perfect resume</p>
          </div>

          {error && (
            <div className="mb-6 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#1a1a1a] ml-1">Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#1a1a1a]/40">
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  placeholder="johndoe"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#FDFBF6] border border-[#1a1a1a]/10 rounded-lg focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] transition-all placeholder:text-[#1a1a1a]/30"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#1a1a1a] ml-1">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#1a1a1a]/40">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#FDFBF6] border border-[#1a1a1a]/10 rounded-lg focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] transition-all placeholder:text-[#1a1a1a]/30"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#1a1a1a] ml-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#1a1a1a]/40">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#FDFBF6] border border-[#1a1a1a]/10 rounded-lg focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] transition-all placeholder:text-[#1a1a1a]/30"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#1a1a1a] text-white rounded-lg font-medium text-lg hover:bg-[#B8860B] active:scale-[0.98] transition-all duration-300 flex justify-center items-center gap-2 mt-4 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Sign Up <ArrowRight className="w-4 h-4" /></>}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-[#4A4A4A]">
            Already have an account?{" "}
            <Link to="/signin" className="font-bold text-[#1a1a1a] hover:text-[#B8860B] transition-colors underline decoration-[#B8860B]/30 hover:decoration-[#B8860B]">
              Sign in
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Signup;
