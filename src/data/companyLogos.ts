export type CompanyLogoKey = "kearney" | "perelman" | "wlu";

interface CompanyLogoMeta {
  /** Direct URL to an officially published logo asset. */
  src: string;
  /** Accessible alternative text describing the brand. */
  alt: string;
  /** Optional utility classes to fine-tune the image presentation. */
  className?: string;
  /** Optional classes for the logo container background. */
  backgroundClassName?: string;
}

export const companyLogos: Record<CompanyLogoKey, CompanyLogoMeta> = {
  kearney: {
    src: "https://upload.wikimedia.org/wikipedia/commons/1/12/A.T._Kearney_logo.svg",
    alt: "Kearney consulting firm logo",
    className: "scale-90"
  },
  perelman: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/5c/Perelman_School_of_Medicine_logo.svg",
    alt: "University of Pennsylvania Perelman School of Medicine logo",
    backgroundClassName: "bg-white"
  },
  wlu: {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Washington_and_Lee_University_seal.svg",
    alt: "Washington and Lee University crest",
    className: "scale-110"
  }
};
