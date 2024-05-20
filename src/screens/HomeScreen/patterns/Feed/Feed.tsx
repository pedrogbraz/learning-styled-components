import React from "react";

import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";

interface FeedProps {
  children: React.ReactNode
}

export default function Feed({ children }) {
  return (
    <Box>
      <Text>Feed Base</Text>
      {children}
    </Box>
  );
}

Feed.Header = () => {
  return <Text>Feed Header</Text>;
};

Feed.Posts = () => {
  return <Text>Feed Posts</Text>;
};
