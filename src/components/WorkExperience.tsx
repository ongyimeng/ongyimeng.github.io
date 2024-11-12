import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

const WorkExperience: React.FC = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Cryptocurrency Exchange',
      dates: 'Apr 2024 - Present',
      description: `
        Develop solutions in Python that use LLMs to assist smart contract auditors by automating vulnerability scan analysis. This reduces manual work by filtering false positives, allowing auditors to focus on actual vulnerabilities and speed up the auditing process.
        
        Collaborate with different teams to deploy their applications into Kubernetes(EKS), enabling them to test and validate their services. 
      `
    },
    {
      title: 'Cloud Engineer Intern',
      company: 'Bosch',
      dates: 'Jan 2024 - Apr 2024',
      description: `
        Supported pre-sales activities by engaging with customers to understand their needs, addressing issues, and preparing pricing as part of customized solutions.
        
        Contributed to development tasks as needed, using React TypeScript and Spring Boot. Deployed application into Azure Kubernetes Service (AKS)
      `,
    },
    {
      title: 'DevSecOps Engineer',
      company: 'IBM',
      dates: 'Aug 2023 - Dec 2023',
      description: `
        Developed a solution to streamline management of Red Hat SSO server configuration data. Implemented GitOps, enabling engineers to make changes to configuration code in GitLab, which automatically processes and propagates updates to EC2 instances hosting the RH SSO servers.

        `,
    },
  ];

  return (
    <Box
      padding={3}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="85vh"
    >
      <Typography variant="h4" gutterBottom textAlign="center" marginBottom={5}>
        Work Experience
      </Typography>

      {experiences.map((experience, index) => (
        <Box key={index} maxWidth="600px" textAlign="left" marginBottom={3}>
          <Typography variant="h6" component="div" gutterBottom>
            {experience.title} - {experience.company}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            {experience.dates}
          </Typography>
          <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
            {experience.description}
          </Typography>
          {index < experiences.length - 1 && <Divider sx={{ marginY: 2 }} />}
        </Box>
      ))}
    </Box>
  );
};

export default WorkExperience;
