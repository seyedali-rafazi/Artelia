export type AboutStat = {
  id: string;
  value: string;
  label: string;
  description: string;
};

export type AboutValue = {
  id: string;
  iconName: "ShieldCheck" | "Palette" | "PackageCheck" | "Sparkles";
  title: string;
  description: string;
};

export type AboutCurator = {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialty: string;
  imageUrl: string;
};
