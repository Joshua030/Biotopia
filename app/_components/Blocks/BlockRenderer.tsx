interface BlockRendererProps {
  blocks: { collection: string }[];
}

export const BlockRenderer = ({ blocks }: BlockRendererProps) => {
  return blocks?.map((block) => {
    switch (block.collection) {
      default:
        console.log("UNKNOWN", block);
        return null;
    }
  });
};
