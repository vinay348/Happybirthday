import "../styles/birthday.css";
import { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import LoveLetter from "../components/LoveLetter";
import { useNavigate } from "react-router-dom";

function BirthdayPage() {
  const [cut, setCut] = useState(false);
  const [text, setText] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const navigate = useNavigate();

  const fullMessage =
    "I may not say it every day, but you mean everything to me. Your smile makes my bad days better, and your presence makes my life complete. I promise to stand by you, today and always ❤️";

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.loop = true;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Audio play blocked:", err);
        });
    }
  };

  // ✨ Smooth typewriter
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (!document.hidden) {
        setText(fullMessage.slice(0, i));
        i++;
      }
      if (i > fullMessage.length) clearInterval(interval);
    }, 70);

    return () => clearInterval(interval);
  }, []);

  // ❤️ Floating hearts (optimized)
  function Hearts() {
    return (
      <div className="hearts">
        {Array.from({ length: 80 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${14 + Math.random() * 16}px`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>
    );
  }

  // 🎊 Heart confetti (throttled)
  const fireHeartConfetti = () => {
    const duration = 2000;
    const end = Date.now() + duration;
    const heart = confetti.shapeFromText({ text: "❤️", scalar: 1.6 });
    let last = 0;

    (function frame(time) {
      if (time - last > 90) {
        confetti({
          particleCount: 3,
          spread: 80,
          startVelocity: 22,
          shapes: [heart],
          scalar: 1.4,
          origin: { x: Math.random(), y: Math.random() - 0.2 },
        });
        last = time;
      }
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };

  const handleCakeCut = () => {
    setCut(true);
    fireHeartConfetti();
  };

  return (
    <div className="birthday-container">
      <Hearts />

      {/* 💌 Welcome */}
      <section className="welcome">
        <h1>Happy Birthday Sadvika ❤️</h1>
        <p>
          Today is special… because the most beautiful person in my life was
          born 💖
        </p>
        <div>
          {" "}
          {/* Keep audio element in DOM */}
          <audio ref={audioRef} src="/music.mp3" preload="auto" />
          <button className="music-btn" onClick={toggleMusic}>
            {isPlaying ? "Stop Music ✋" : "Play Music 🎵"}
          </button>
        </div>
      </section>

      {/* 📖 Our Story */}
      <section className="story">
        <h2>Our Story 💞</h2>

        <div className="timeline">
          <div className="event">
            <div className="date">💫 Aug 2024</div>
            <b>The day I met you — and everything changed.</b>
            <p>
              Niku gurthunda…? 💭❤️ First time nenu ninu kalisina aa moment na
              life lo chala special ✨ Lulu Mall bayata ninu kalisina aa kshanam
              ippatiki na kalla mundu undi 👀💫 Nuvu white-pink shade dress lo
              🤍🌸 simple ga, cute ga bale unav anipinchav chudagane 💕
              Spectacles petukoni, chala bagunnav 👓✨ Nenu ninu chusinappudu na
              mind lo okkate thought 💓 “Ilaanti ammai kuda untara… intha andham
              ga?” 😍 Aa okka look lone na heart silent ayipoyindi 💖 Aa smile
              😊, aa eyes 👁️✨ cheppaleni feeling okati na lopala puttindi 💫 Aa
              roju naku teliyaledu… 😌 aa ammai na life lo inta important
              avuthundi ani, okaroju na pellam 👰‍♀️, na life 🌍, na happiness 💞
              avuthundi ani. Ipudu alochiste… 🤍 aa first look lone na destiny
              naku signal ichindi emo ani anipistundi 🫶✨
            </p>
          </div>

          <div className="event">
            <div className="date">💬 Aug 2024</div>
            <b>Our first conversation that I never wanted to end.</b>
            <p>
              Mana first conversation niku gurthunda…? 💭💖 manam flirting tho
              start cheskunam mana chatting gani talks gani idaram flirt
              cheskuntu, jokes veskuntu ala matladukunevalam 😄✨ Appudu adhi
              anthaa joke gane start chesam kani aa matalu, aa navvulu lopala
              chala deep ga touch chesayi 💓 Aa time lo asalu uhinchaledu kada…
              “videy na future husband… na mogudu, na priyudu avuthadu” ani 😌❤️
              Kalalo kuda anipinchaledu kada haha 😄 Kani chusava… destiny
              manani ela lead chesindo 🫶 Appatlo manam bale chat chese vallam
              📱💬 Asalu lovers laga matladukunnam andaru links petti tease
              chese varu 😍 Nuvu istam unattu navvadam 😊 aa smile chusinapudu
              na heart automatic ga melt ayipoyindi 💖 Aa navvule… na manasulo
              prema chigurinchela chesindi 🌱❤️ Nitho unte chala baguntundi ani
              anipinchindi 🤍 Nitho unte santosham ga untanemo ani na heart feel
              aindi ✨ Netho chat chesthunappudu time teliyaledu ⏳💫 Na
              problems anni marchipoyi, calm ga happy ga feel ayye vadini 💕
              Anduke… nenu ninu nijam gane premincha 💖 Starting lo joke gane
              start cheskunam 😅 kani appudu teliyaledu… ide na life lo nijam
              ayipothundi ani, nuve na forever avuthavu ani 🫶❤️
            </p>
          </div>

          <div className="event">
            <div className="date">😊 22 Dec 2024</div>
            <b>Our Happy Moments</b>
            <p>
              Niku gurthunda…? 💭❤️ Manam first time idaram kalisi bayataki
              vellina aa kshanalu. Aa roju dating laga anukoni velam , Nehru
              Zoological Park ki kalisi vellam 🐾🌿 Aa roju ippatiki na heart lo
              fresh ga untundi. Manam idaram kalisi nadichina aa moments,
              matladina aa matalu aa navvulu 😊✨ Aa kshanalu anni chala special
              ga anipinchayi. Aa roju nenu chala santosham ga unnanu 💕
              Endhukante… nuvu naatho unnavu. Manam idaram ey place ki vellina,
              aa roju adhi na life lo happiest moment anukunna 🤍 Taravata oka
              vishayam ardham ayyindi… Happiness place lo ledu 🌍❌ Na pakana
              unna manishi lo undi ❤️ Nitho unte chalu… **I am very happy** 😊💖
              Ee nijam aa roju nenu telusukunna 🫶
            </p>
          </div>
        </div>
      </section>

      {/* 📸 Gallery */}
      <section className="gallery">
        <h2>Our Memories 📸</h2>
        <div className="photos">
          <img src="/img1.jpeg" alt="memory" />
          <img src="/img2.jpeg" alt="memory" />
          <img src="/img3.jpeg" alt="memory" />
          <img src="/img4.jpeg" alt="memory" />
          <img src="/img5.jpeg" alt="memory" />
          <img src="/img6.jpeg" alt="memory" />
          <img src="/img7.jpeg" alt="memory" />
          <img src="/img8.jpeg" alt="memory" />
          <img src="/img9.jpeg" alt="memory" />
          <img src="/img10.jpeg" alt="memory" />
          <img src="/img11.jpeg" alt="memory" />
          <img src="/img12.jpeg" alt="memory" />
          <img src="/img13.jpeg" alt="memory" />
          <img src="/img14.jpeg" alt="memory" />
          <img src="/img15.jpeg" alt="memory" />
          <img src="/img16.jpeg" alt="memory" />
          <img src="/img17.jpeg" alt="memory" />
          <img src="/img18.jpeg" alt="memory" />
          <img src="/img19.jpeg" alt="memory" />
          <img src="/img20.jpeg" alt="memory" />
          <img src="/img21.jpeg" alt="memory" />
          <img src="/img22.jpeg" alt="memory" />
          <img src="/img23.jpeg" alt="memory" />
        </div>
      </section>

      {/* 💌 Message */}
      <section className="message">
        <h2>A Message From My Heart 💌</h2>
        <p>{text}</p>
      </section>

      {/* 🎂 Cake */}
      <section className="cake">
        <h2>Make a wish 🎂</h2>

        {!cut ? (
          <>
            <div className="cake-svg" onClick={handleCakeCut}>
              🎂
            </div>
            <p className="cake-hint">Tap the cake to cut it 💕</p>
          </>
        ) : (
          <p className="wish">
            Wish granted ✨ Because I’m already here for you ❤️
          </p>
        )}
      </section>

      <section className="love-letter">
        <h2>A Letter Just for You 💌</h2>
        <LoveLetter />
      </section>

      <button className="see-wishes-btn" onClick={() => navigate("/wishes")}>
        See Your Wishes 💌
      </button>
    </div>
  );
}

export default BirthdayPage;
