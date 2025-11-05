import {
  BlockFeatures,
  BlockHero,
  BlockSteps,
  PageBlocks,
} from "@/app/_types/directusTypes";
import { HeroSection } from "./ui/HeroSection";
import { FeaturedCards } from "./ui/FeaturedCards/FeaturedCards";
import { StepCards } from "./ui/StepCards/StepCards";

interface BlockRenderedProps {
  blocks: PageBlocks[];
}

export const BlockRenderer = ({ blocks }: BlockRenderedProps) => {
  return blocks?.map((block) => {
    const singleBlock = block.collection;
    switch (singleBlock) {
      case "block_hero": {
        if (!block.item /* or typeof block.item !== "object" */) return null;
        const item = block.item as BlockHero;

        return <HeroSection key={block.id} {...item} />;
      }
      case "block_features": {
        if (!block.item) return null;
        const item = block.item as BlockFeatures;
        return <FeaturedCards key={block.id} {...item} />;
      }

      case "block_steps": {
        if (!block.item) return null;
        const item = block.item as BlockSteps;
        return <StepCards key={block.id} {...item} />;
      }

      default:
        console.log("UNKNOWN", block);
        return null;
    }
  });
};
