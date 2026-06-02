import type { Metadata } from "next";
import { AudiencePage } from "@/components/audience-pages";

export const metadata: Metadata = {
  title: "FanPass for Coaches",
  description:
    "See how FanPass helps coaches keep team access and tournament entry organized."
};

export default function CoachesPage() {
  return <AudiencePage audience="coaches" />;
}
