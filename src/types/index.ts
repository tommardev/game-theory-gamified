export type SpectrumShift = "rational" | "human" | "neutral";

export interface Choice {
  id: string;
  text: string;
  subtext: string;
  outcomeText: string;
  spectrumShift: SpectrumShift;
}

export interface Scenario {
  id: string;
  title: string;
  concept: string;
  setup: string;
  choices: Choice[];
  breakdown: string;
}
