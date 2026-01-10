import "../styles/wishes.css";
import { useNavigate } from "react-router-dom";

function WishesPage() {
  
  const navigate = useNavigate();

  return (
    <div className="wishes-container">
      <h1>Birthday Wishes Just for You 💖</h1>
      <p className="subtitle">
        So many people wanted to make your day special 🎉
      </p>

      <div className="videos">
        <video controls>
          <source src="/videos/friend1.mp4" type="video/mp4" />
        </video>

        <video controls>
          <source src="/wishes/friend2.mp4" type="video/mp4" />
        </video>

        <video controls>
          <source src="/wishes/friend3.mp4" type="video/mp4" />
        </video>
      </div>

      <p className="ending">You are loved beyond words ❤️</p>

      <button className="final-btn" onClick={() => navigate("/forever")}>
        One Last Surprise Just for You ❤️
      </button>
    </div>
  );
}

export default WishesPage;
