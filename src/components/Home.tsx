import { Box, Typography } from '@mui/material';

const Home: React.FC = () => {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="80vh"
        sx={{
          flexDirection: { xs: 'column', md: 'row' }, // Responsive layout
          gap: 2,                                     // Space between text and image
          padding: 3,
          maxWidth: '60%',                          // Limit the max width for wide screens
          margin: '0 auto',                           // Center the layout horizontally
        }}
      >
        {/* Text Section */}
        <Box flex={1} textAlign="center">
          <Typography variant="h2" component="h1" gutterBottom>
            Hi, I'm Yi Meng
          </Typography>
          <Typography variant="body1">
            Welcome to my personal site
          </Typography>
        </Box>

        {/* Image Section */}
        <Box flex={1} display="flex" justifyContent="center">
          <img
            src='./home.png'
            style={{ maxWidth: '100%', height: 'auto', borderRadius: 8 }}
          />
        </Box>
      </Box>
    );
  };
  
  export default Home;