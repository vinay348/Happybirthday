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
          <source src="/videos/friend2.mp4" type="video/mp4" />
        </video>

        <video controls>
          <source src="/videos/friend3.mp4" type="video/mp4" />
        </video>
        <video controls>
          <source src="/videos/friend4.mp4" type="video/mp4" />
        </video><video controls>
          <source src="/videos/friend5.mp4" type="video/mp4" />
        </video><video controls>
          <source src="/videos/friend6.mp4" type="video/mp4" />
        </video><video controls>
          <source src="/videos/friend7.mp4" type="video/mp4" />
        </video><video controls>
          <source src="/videos/friend8.mp4" type="video/mp4" />
        </video><video controls>
          <source src="/videos/friend9.mp4" type="video/mp4" />
        </video>
          <video controls>
          <source src="/videos/friend10.mp4" type="video/mp4" />
        </video>
         <video controls>
          <source src="/videos/friend11.mp4" type="video/mp4" />
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
