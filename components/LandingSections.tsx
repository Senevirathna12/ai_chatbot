import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Check, X } from "lucide-react";

const LandingSections = () => {
  return (
    <div>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Collaborate & Create with ANS Team Application
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-400">
                  The all-in-one platform for teams to brainstorm, share ideas,
                  and keep every note, task, and decision in one place.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/signup">Get Started</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Why Teams Love ANS
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <FeatureCard
                icon={
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                }
                title="Effortless Collaboration"
                desc="Capture ideas instantly and share them with your whole team in real time."
              />
              <FeatureCard
                icon={
                  <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                }
                title="Secure Cloud Storage"
                desc="Your team’s data stays encrypted, safe, and always accessible."
              />
              <FeatureCard
                icon={<circle cx="11" cy="11" r="8" />}
                title="Lightning Search"
                desc="Find the right document, chat, or note in seconds with smart search."
              />
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Flexible Plans for Every Team
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  name: "Starter",
                  desc: "For small teams",
                  price: "$0",
                  perks: ["Up to 20 notes", "Basic search"],
                  missing: ["Priority support"],
                },
                {
                  name: "Pro",
                  desc: "For growing teams",
                  price: "$12",
                  perks: ["Unlimited notes", "Advanced search"],
                  missing: ["Dedicated success manager"],
                },
                {
                  name: "Enterprise",
                  desc: "For large organizations",
                  price: "$49",
                  perks: [
                    "Unlimited everything",
                    "Priority support",
                    "Custom onboarding",
                  ],
                  missing: [],
                },
              ].map((plan, idx) => (
                <PricingCard key={idx} {...plan} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Bring Your Team Together Today
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join thousands of teams already collaborating smarter with ANS Team Application.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full" asChild>
                  <Link href="/signup">Start for Free</Link>
                </Button>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  No credit card required. Upgrade any time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 ANS Team Application. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, desc }: any) => (
  <div className="flex flex-col items-center space-y-4 text-center">
    <div className="rounded-full bg-primary p-3">
      <svg
        className="h-6 w-6 text-white"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {icon}
      </svg>
    </div>
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-gray-500 dark:text-gray-400">{desc}</p>
  </div>
);

// Pricing Card Component
const PricingCard = ({ name, desc, price, perks, missing }: any) => (
  <Card>
    <CardHeader>
      <CardTitle>{name}</CardTitle>
      <CardDescription>{desc}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-4xl font-bold">{price}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">per month</p>
      <ul className="mt-4 space-y-2">
        {perks.map((perk: string, idx: number) => (
          <li key={idx} className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-green-500" />
            {perk}
          </li>
        ))}
        {missing.map((miss: string, idx: number) => (
          <li key={idx} className="flex items-center">
            <X className="mr-2 h-4 w-4 text-red-500" />
            {miss}
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button className="w-full">
        {price === "$0" ? "Get Started" : `Upgrade to ${name}`}
      </Button>
    </CardFooter>
  </Card>
);

export default LandingSections;
