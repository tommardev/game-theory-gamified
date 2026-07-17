import { scenarios } from "../../../features/game/data/scenarios";

export function generateStaticParams() {
  return scenarios.map((scenario) => ({
    id: scenario.id,
  }));
}

export default function ScenarioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
