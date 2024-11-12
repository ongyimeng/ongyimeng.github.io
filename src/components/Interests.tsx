import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';

interface Interest {
  title: string;
  description: string;
  image?: string;
}

const interests: Interest[] = [
  {
    title: "Finance and Technology",
    description: `
      I am fascinated by how trading systems, especially high-frequency trading (HFT) platforms work. In my free time, I read about low-latency application concepts in C++, such as efficient memory management, concurrency and network optimization techniques.

      I am also interested in Cryptocurrency and Blockchain, particularly in decentralized finance (DeFi). I am currently exploring smart contracts and studying the security measures necessary to safeguard them.
    `,
    image: "./solidity.png",
  },
  {
    title: "Software Engineering",
    description: `
      I enjoy engineering work, whether it is building software to solve problems or cloning systems to better understand them.

      I like spending time doing backend development to solve complex problems and DevOps to make deployment processes efficient.

      I am always striving to improve, so I read books to enhance both my knowledge and the quality of my code. Currently, I am reading The Pragmatic Programmer.
    `,
    image: "./book.png",
  },
];

const InterestCard: React.FC<Interest> = ({ title, description, image }) => (
  <Card sx={{ display: 'flex', width: '100%', mb: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
    {/* Left side with text */}
    <CardContent sx={{ flex: 2, padding: 3 }}>
      <Typography variant="h6" component="div" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>
        {description}
      </Typography>
    </CardContent>

    {/* Right side with image, if available */}
    {image && (
      <CardMedia
        component="img"
        sx={{
          flex: 1,
          minWidth: 150,
          height: 'auto',
          objectFit: 'cover',
        }}
        image={image}
      />
    )}
  </Card>
);

const Interests: React.FC = () => {
  return (
    <Box
      padding={3}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      maxWidth="md"
      margin="auto"
    >
      <Typography variant="h4" gutterBottom textAlign="center" marginBottom={5}>
        Interests
      </Typography>
      {interests.map((interest, index) => (
        <InterestCard key={index} {...interest} />
      ))}
    </Box>
  );
};

export default Interests;
