import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaGoogle } from "react-icons/fa6";

// Shared profile card used by every page.
// TODO: change photo (public/profile.png), name and student ID to your own.
const PROFILE = {
  photo: "/profile.png",
  name: "Witsanu",
  studentId: "STU ID: 6852410011",
  role: "Interactive Web Developer",
};

const socials = [
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { icon: FaXTwitter, href: "https://x.com", label: "X" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaGoogle, href: "https://google.com", label: "Google" },
];

export default function MyCard() {
  return (
    <aside className="my-card">
      <div className="my-card__brand">
        <span>W</span>itsanu
      </div>
      <img className="my-card__photo" src={PROFILE.photo} alt={PROFILE.name} />
      <p className="my-card__id">{PROFILE.studentId}</p>
      <p className="my-card__role">{PROFILE.role}</p>
      <div className="my-card__socials">
        {socials.map(({ icon: Icon, href, label }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
            <Icon />
          </a>
        ))}
      </div>
      <a className="btn" href="/contactme">HIRE ME!</a>
    </aside>
  );
}
