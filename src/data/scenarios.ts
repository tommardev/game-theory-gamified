import { Scenario } from "../types";

export const scenarios: Scenario[] = [
  {
    id: "kitchen_standoff",
    title: "The Messy Kitchen Standoff",
    concept: "The 'Chicken' Game",
    setup:
      "You and your roommate share a kitchen. The sink is full of dishes. Neither of you wants to wash them. The longer they sit, the grosser it gets.",
    choices: [
      {
        id: "c1",
        text: "Hold out",
        subtext: "Refuse to wash them, hoping your roommate breaks first.",
        outcomeText: "You both hold out. The kitchen is a disaster.",
        spectrumShift: "rational",
      },
      {
        id: "c2",
        text: "Give in",
        subtext: "Just wash the dishes because you can't stand the smell.",
        outcomeText: "You lose 20 minutes to chores, but the smell is gone.",
        spectrumShift: "human",
      },
    ],
    breakdown:
      "This is the Game of Chicken (like two cars speeding toward each other). If you both 'Hold out,' the kitchen becomes an unlivable disaster (the collision). If one person 'gives in,' they lose time doing chores, but the disaster is avoided. Your decision entirely depends on how stubborn you think your roommate is!",
  },
];
