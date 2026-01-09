import { useState, useEffect } from "react";
import "../styles/loveLetter.css";

const letterText = `
My Love,

Ninnu entha premistunnano cheppadaniki words saripovu.
Na heart nunchi vachina feeling idhi.

Prathi sari netho matladinappudu na face lo smile automatic ga vastundi. Ninnu chusinappudu, netho unnapudu, na life lo unna anni tensions, problems anni marchipothanu. Nuvvu na pakkana unte, na mind calm avuthundi, na heart happy ga feel avuthundi. Nuvvu na happiness, na peace.

Life lo e situation vachina, e problem vachina, manam rendu kalisi face cheddam ani na full heart tho chepthunna. Neeku problem vachinappudu, neeku support kavalsinappudu, nenu epudu nee pakkane untanu. Nee cheyi viduvanu, neeku alone ga feel avvanivvanu.

Please na tho ee 100 years bear cheyyi. Na life motham netho ne spend cheyyali ani na heart korukuntundi. Netho unte na life complete ayinattu feel avuthundi. Netho undadam valla nenu nijamga happy ga untanu.

Nee smile ante naaku chala ishtam — adhi na darkest days lo kuda light la untundi. Nee innocence, nee cute behavior, nee caring nature, nannu nuvvu ardham chesukune vidhanam — anni naaku chala chala ishtam. Nuvvu unna vidhanam lo prathi chinna vishayam kuda na heart ni touch chestundi.

Nuvvu na girlfriend maatrame kaadu — nuvvu na happiness, na strength, na life lo na forever wish.
Happy Birthday, na bangaram.
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
