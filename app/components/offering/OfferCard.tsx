import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import ThemedButton from "../ui/theme/button/ThemedButton";
import { cn } from "@/lib/utils";

type OfferCardProps = {
  children: React.ReactNode;
  className?:string;
};
function OfferCard({ children,className }: OfferCardProps) {
  return (
    <Card className={cn("min-w-2.5 rounded-2xl shadow-booking-card-shadow font-euclid h-fit",className)}>
      <CardHeader>
      <CardDescription>
        <ThemedButton mode="solid" colorTheme="skobeloff" className="px-4 py-1 xl:py-1  text-xs xl:text-xs lg:text-xs font-semibold bg-gainsboro text-Skobeloff rounded-full hover:bg-gainsboro hover:text-Skobeloff border-none">
            Popular
          </ThemedButton>
        </CardDescription>
        <CardTitle className="text-lg lg:text-2xl font-semibold mb-1 text-Skobeloff">Create project</CardTitle>
     
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default OfferCard;
