import {
  BlockContact,
  BlockFeatures,
  BlockHero,
  BlockHeroStory,
  BlockMainBanner,
  BlockSteps,
  PageBlocks,
} from "@/app/_types/directusTypes";
import { HeroSection } from "./ui/HeroSection";
import { FeaturedCards } from "./ui/FeaturedCards/FeaturedCards";
import { StepCards } from "./ui/StepCards/StepCards";
import { ContactBanner } from "./ui/ContactBanner";
import { MainBanner } from "./ui/MainBanner";
import HeroStory from "./ui/HeroStory";

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
        return (
          <FeaturedCards
            key={block.id}
            blockItems={item}
            background={block.background}
          />
        );
      }

      case "block_steps": {
        if (!block.item) return null;
        const item = block.item as BlockSteps;
        return <StepCards key={block.id} {...item} />;
      }

      case "block_contact": {
        if (!block.item) return null;
        const item = block.item as BlockContact;
        return <ContactBanner key={block.id} {...item} />;
      }

      case "block_main_banner": {
        if (!block.item) return null;
        const item = block.item as BlockMainBanner;
        return <MainBanner key={block.id} {...item} />;
      }

      case "block_hero_story": {
        if (!block.item) return null;
        const item = block.item as BlockHeroStory;
        return <HeroStory key={block.id} blockItem={item} />;
      }

      default:
        console.log("UNKNOWN", block);
        return null;
    }
  });
};
