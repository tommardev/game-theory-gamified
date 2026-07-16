import { Scenario } from "../types";

export const scenarios: Scenario[] = [
  {
    id: "kitchen_standoff",
    title: "The Messy Kitchen Standoff",
    concept: "The 'Chicken' Game",
    setup:
      "You and your roommate share a kitchen. The sink is full of dishes. Neither of you wants to wash them. The longer they sit, the grosser it gets.",
    iconName: "KitchenIcon",
    accentColor: "var(--color-theme-1)",
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
  {
    id: "split_bill",
    title: "The Split Bill Dilemma",
    concept: "Prisoner's Dilemma",
    setup:
      "You're out to dinner with a large group. Everyone agreed beforehand to split the bill evenly. It's time to order.",
    iconName: "BillIcon",
    accentColor: "var(--color-theme-2)",
    choices: [
      {
        id: "c1",
        text: "Order the lobster",
        subtext: "It's expensive, but since the cost is split, you only pay a fraction.",
        outcomeText: "Everyone ordered the lobster. The bill is astronomical.",
        spectrumShift: "rational",
      },
      {
        id: "c2",
        text: "Order a salad",
        subtext: "Keep the cost low for everyone.",
        outcomeText: "You ate a sad salad, but paid for a fraction of everyone else's lobster.",
        spectrumShift: "human",
      },
    ],
    breakdown:
      "This is a classic Prisoner's Dilemma. The rational choice for an individual is to order the most expensive item (maximizing value while sharing cost). But if everyone acts rationally, you all end up paying way more than you wanted to!",
  },
  {
    id: "office_snacks",
    title: "The Office Snack Hoard",
    concept: "Tragedy of the Commons",
    setup:
      "Management just restocked the free snack pantry with premium donuts. They are supposed to last all week.",
    iconName: "SnackIcon",
    accentColor: "var(--color-theme-3)",
    choices: [
      {
        id: "c1",
        text: "Take 3 donuts now",
        subtext: "Grab them before someone else does.",
        outcomeText: "The pantry is empty by Tuesday. No more snacks for anyone.",
        spectrumShift: "rational",
      },
      {
        id: "c2",
        text: "Take just 1",
        subtext: "Leave enough for others so they last.",
        outcomeText: "You took one, but Janet from Accounting took four. They're gone anyway.",
        spectrumShift: "human",
      },
    ],
    breakdown:
      "The Tragedy of the Commons occurs when individuals, acting independently according to their own self-interest, deplete a shared resource, even when it's contrary to the group's long-term best interests.",
  },
  {
    id: "commute_shortcut",
    title: "The Commute Shortcut",
    concept: "Braess's Paradox",
    setup:
      "Traffic on the main highway is terrible. You know a secret shortcut through a residential neighborhood.",
    iconName: "TrafficIcon",
    accentColor: "var(--color-theme-4)",
    choices: [
      {
        id: "c1",
        text: "Take the shortcut",
        subtext: "Save yourself 10 minutes.",
        outcomeText:
          "Everyone else's GPS found the shortcut too. You're now stuck in gridlock in a neighborhood.",
        spectrumShift: "rational",
      },
      {
        id: "c2",
        text: "Stay on the highway",
        subtext: "It's slow, but it's meant for heavy traffic.",
        outcomeText: "It was a slow, agonizing drive, but you eventually made it.",
        spectrumShift: "human",
      },
    ],
    breakdown:
      "Braess's Paradox states that adding a new road to a congested traffic network can actually increase overall journey time, as self-interested drivers all flock to the 'faster' route, clogging it entirely.",
  },
  {
    id: "group_project",
    title: "The Group Project Slacker",
    concept: "Free Rider Problem",
    setup:
      "Your group has a presentation due tomorrow. Your two partners haven't contributed anything yet.",
    iconName: "ProjectIcon",
    accentColor: "var(--color-theme-5)",
    choices: [
      {
        id: "c1",
        text: "Slack off too",
        subtext: "Why should you do all the work?",
        outcomeText: "The presentation is a disaster. You all fail.",
        spectrumShift: "rational",
      },
      {
        id: "c2",
        text: "Do all the work",
        subtext: "Pull an all-nighter to save your grade.",
        outcomeText: "You get an A. Your partners also get an A for doing absolutely nothing.",
        spectrumShift: "human",
      },
    ],
    breakdown:
      "The Free Rider Problem occurs when those who benefit from resources, public goods, or services do not pay for them or contribute. It's the classic dilemma of collective action.",
  },
  {
    id: "price_match",
    title: "The Price Match Guarantee",
    concept: "Collusion",
    setup:
      "You run a local electronics store. Your competitor across the street sells the same TV. They just advertised a 'Price Match Guarantee'.",
    iconName: "PriceTagIcon",
    accentColor: "var(--color-theme-6)",
    choices: [
      {
        id: "c1",
        text: "Keep prices high",
        subtext: "Since they match you, neither of you needs to lower prices.",
        outcomeText: "You both keep prices high and make great profits.",
        spectrumShift: "rational",
      },
      {
        id: "c2",
        text: "Lower your price",
        subtext: "Try to steal their customers.",
        outcomeText: "They match your lower price immediately. You both lose profit.",
        spectrumShift: "human",
      },
    ],
    breakdown:
      "A 'Price Match Guarantee' sounds great for consumers, but in game theory, it's a mechanism for tacit collusion. It removes the incentive for competitors to undercut each other, artificially keeping prices high.",
  },
  {
    id: "first_date",
    title: "The First Date Check",
    concept: "Signaling Theory",
    setup:
      "You're on a first date. The dinner went well, and the waiter drops the check on the table.",
    iconName: "DateIcon",
    accentColor: "var(--color-theme-7)",
    choices: [
      {
        id: "c1",
        text: "Wait for them",
        subtext: "See if they offer to pay first.",
        outcomeText: "An awkward silence ensues. They think you're cheap.",
        spectrumShift: "rational",
      },
      {
        id: "c2",
        text: "Grab the check",
        subtext: "Pay for the whole meal.",
        outcomeText:
          "You lost $80, but successfully signaled that you are generous and interested.",
        spectrumShift: "human",
      },
    ],
    breakdown:
      "This is Signaling Theory. Paying the check is a 'costly signal'—an action that is difficult to fake because it requires actual resources (money). It signals wealth, generosity, and interest to the other party.",
  },
  {
    id: "salary_negotiation",
    title: "The Salary Negotiation",
    concept: "Ultimatum Game",
    setup:
      "You are offered a job. The HR manager says: 'Here is our offer. It is non-negotiable. Take it or leave it.'",
    iconName: "HandshakeIcon",
    accentColor: "var(--color-theme-8)",
    choices: [
      {
        id: "c1",
        text: "Take it",
        subtext: "It's lower than you wanted, but it's money.",
        outcomeText: "You get the job, but the company exploited your need for employment.",
        spectrumShift: "rational",
      },
      {
        id: "c2",
        text: "Leave it",
        subtext: "Refuse out of principle.",
        outcomeText: "You have no job and no money, but you kept your pride.",
        spectrumShift: "human",
      },
    ],
    breakdown:
      "In the Ultimatum Game, the 'Proposer' makes a take-it-or-leave-it offer. Pure rationality says you should accept *any* non-zero amount. However, humans will frequently reject unfair offers to punish the proposer, even at a cost to themselves.",
  },
  {
    id: "concert_queue",
    title: "The Concert Queue",
    concept: "Hawk-Dove Game",
    setup:
      "You are waiting in a massive, unorganized crowd to get to the front of the stage at a concert.",
    iconName: "TicketIcon",
    accentColor: "var(--color-theme-1)",
    choices: [
      {
        id: "c1",
        text: "Push forward (Hawk)",
        subtext: "Elbow your way to the front.",
        outcomeText: "You bump into another 'Hawk'. A fight breaks out.",
        spectrumShift: "rational",
      },
      {
        id: "c2",
        text: "Wait patiently (Dove)",
        subtext: "Let others pass if they push.",
        outcomeText: "You are pushed to the very back, but you avoid a fight.",
        spectrumShift: "human",
      },
    ],
    breakdown:
      "The Hawk-Dove game models conflict. If two Hawks meet, it's a disaster. If two Doves meet, they share. But a Hawk will always exploit a Dove. In a crowd of Doves, it pays to be a Hawk... until everyone becomes a Hawk.",
  },
  {
    id: "used_car",
    title: "The Used Car Purchase",
    concept: "Asymmetric Information",
    setup:
      "You're buying a used car. The seller assures you it runs perfectly and 'only was driven to church on Sundays.'",
    iconName: "CarIcon",
    accentColor: "var(--color-theme-2)",
    choices: [
      {
        id: "c1",
        text: "Assume it's a lemon",
        subtext: "Offer a lowball price to mitigate your risk.",
        outcomeText: "The seller is insulted and refuses. You don't get the car.",
        spectrumShift: "rational",
      },
      {
        id: "c2",
        text: "Trust them",
        subtext: "Pay the asking price.",
        outcomeText: "The transmission blows up two days later. It was a lemon.",
        spectrumShift: "human",
      },
    ],
    breakdown:
      "The 'Market for Lemons' describes Asymmetric Information: the seller knows the true quality of the car, but you don't. Because buyers can't tell a good car from a lemon, they only offer low prices, which drives good cars out of the market entirely.",
  },
  {
    id: "gym_membership",
    title: "The Gym Membership",
    concept: "Sunk Cost Fallacy",
    setup:
      "You paid $500 upfront for a year-long gym membership. You hate going, it hurts, and you dread it every day.",
    iconName: "GymIcon",
    accentColor: "var(--color-theme-3)",
    choices: [
      {
        id: "c1",
        text: "Stop going",
        subtext: "Accept that the money is gone and stop torturing yourself.",
        outcomeText: "You lost $500, but you feel much happier staying home.",
        spectrumShift: "rational",
      },
      {
        id: "c2",
        text: "Keep going",
        subtext: "You paid for it, so you have to use it to 'get your money's worth'.",
        outcomeText: "You are miserable every day, and the money is still gone.",
        spectrumShift: "human",
      },
    ],
    breakdown:
      "The Sunk Cost Fallacy is the human tendency to continue an endeavor once an investment in money, effort, or time has been made. A perfectly rational robot ignores past costs and only makes decisions based on future utility.",
  },
  {
    id: "silent_auction",
    title: "The Silent Auction",
    concept: "The Winner's Curse",
    setup:
      "You are at a charity auction. There is a mystery box containing gift cards, but no one knows the exact value.",
    iconName: "GavelIcon",
    accentColor: "var(--color-theme-4)",
    choices: [
      {
        id: "c1",
        text: "Bid conservatively",
        subtext: "Bid less than you think it's worth.",
        outcomeText: "You lose the auction. Someone else won the box.",
        spectrumShift: "rational",
      },
      {
        id: "c2",
        text: "Bid aggressively",
        subtext: "Bid high to make sure you win it.",
        outcomeText: "You won! ...But you paid $200 for a box containing $50 in gift cards.",
        spectrumShift: "human",
      },
    ],
    breakdown:
      "The Winner's Curse occurs in auctions with incomplete information. The winning bid is usually the one with the most wildly optimistic estimation of the item's value. Therefore, the winner almost always overpays.",
  },
  {
    id: "tip_jar",
    title: "The Tip Jar",
    concept: "Public Goods Game",
    setup:
      "You order a coffee. The barista turns around to make it. There is a tip jar, but literally no one is looking.",
    iconName: "TipJarIcon",
    accentColor: "var(--color-theme-5)",
    choices: [
      {
        id: "c1",
        text: "Keep your change",
        subtext: "Why pay extra if no one sees you do it?",
        outcomeText: "You kept your $1. The barista remains underpaid.",
        spectrumShift: "rational",
      },
      {
        id: "c2",
        text: "Leave a tip",
        subtext: "It's the right thing to do.",
        outcomeText:
          "You lost $1, but you contributed to the barista's livelihood out of pure reciprocity.",
        spectrumShift: "human",
      },
    ],
    breakdown:
      "Tipping when unobserved violates strict rational self-interest. It is an example of strong reciprocity and social norms, where humans will incur a personal cost to reward others, even with no expectation of future gain.",
  },
];
