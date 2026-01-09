import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PASSWORD } from "../utils/dateConfig";
import "../styles/password.css";

function PasswordPage() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const[count,setcount]=useState(0);
  const navigate = useNavigate();

  const handleUnlock = () => {
    if (input === PASSWORD) {
      navigate("/countdown");
    } else {
      setError("Hmm… try again, love 😉");
        setcount(count+1);
    }
    if(count==3){
      setError("Are you sure you remember our special date? 😢");
    }

    if(count==4){
      setError("Give it another shot, darling! 💖 i will give hint in the next attemp hehe");
    }

    if(count==5){
      setError("Password Length is 8 😘");
    }

  };

  return (
    <div className="password-container">
      <h1>🔒 This surprise is only for you ❤️</h1>
      <p className="hint">Hint: Our special date 💫</p>

      <input
        type="password"
        placeholder="Enter our special date"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleUnlock}>Unlock 🔓</button>

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default PasswordPage;
