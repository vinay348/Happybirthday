import { useState, useEffect } from "react";
import "../styles/loveLetter.css";

const letterText = `
My Love,

Ninnu entha premistunnano cheppadaniki words saripovu.
Na heart nunchi vachina feeling idhi.

Prathi sari netho matladinappudu na face lo smile automatic ga vastundi. Ninnu chusinappudu, netho unnapudu, na life lo unna anni tensions, problems anni marchipothanu. Nuvvu na pakkana unte, na mind calm and happy ga untundi, na heart happy ga feel avuthundi. Nuve na happiness, na peace.

Life lo ey situation vachina, ey problem vachina, manam iddaram kalisi face cheddam ani na  heart full tho chepthunna. Neeku problem vachinappudu, neeku support kavalsinappudu, nenu epudu nithoney untanu. Nee cheyi viduvanu, neeku alone ga feel avvanivvanu.

Please nanu ey 100 years barinchu. Na life motham netho ne spend cheyyali ani na manasu korukuntundi. Netho unte na life chala happy ga vuthundi. Netho undadam valla nenu nijamga happy ga untanu.

Nee smile ante naaku chala ishtam — adhi na darkest days lo kuda light la untundi. Nee innocence, nee cute behavior, nee caring nature, nannu nuvvu ardham chesukune vidhanam — anni naaku chala ante chala istam. Ni life lo prathi chinna vishayam kuda na heart ni touch chestundi.

Nuvvu na girlfriend maatrame kaadu — nuvvu na happiness, na strength, na life lo na forever nuvu.
Happy Birthday,  bangaram.
Naa life loki vachinanduku, nannu ila premisthunnanduku thank you.

Forever nee vaadini ❤️
`;

function LoveLetter() {
  const [open, setOpen] = useState(false);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (!open) return;

    let i = 0;
    const interval = setInterval(() => {
      setTypedText(letterText.slice(0, i));
      i++;
      if (i > letterText.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, [open]);

  return (
    <div className="letter-wrapper">
      {!open ? (
        <div className="envelope">
          <div className="envelope-body">✉️</div>
          <p className="envelope-text">This letter is only for you…</p>
          <button className="open-btn" onClick={() => setOpen(true)}>
            Open the Letter 💌
          </button>
        </div>
      ) : (
        <div className="paper">
          <pre>{typedText}</pre>
        </div>
      )}
    </div>
  );
}

export default LoveLetter;
