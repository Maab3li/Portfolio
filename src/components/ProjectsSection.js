import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading , SimpleGrid} from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "To-do App",
    description:
      "A small app to organize work.",
    getImageSrc: () => require("../images/to-do list.png"),
    url: "https://todo-list-app99.vercel.app"
  },
  {
    title: "Mina Clinic",
    description:
      "A modern website design for a dental clinic.",
    getImageSrc: () => require("../images/pc-home.png"),
    url :"https://mina-clinic.vercel.app"
  },
  {
  title: 'CRUDS Product Management System',
  description: 'a create, read, update, delete and search system to help managers manage their stocks.',
  getImageSrc: () => require("../images/cruds.png"),
  url :'https://product-cruds.vercel.app/'
  }
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      bgGradient="linear(to-b, pink.400, pink.400)"
      _dark={{bgGradient:'linear(to-b, black, black)'}}
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section" color='#28282B' _dark={{color:'#FFF'}}>
       My projects
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg:2}}
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url = {project.url}
          />
        ))}
      </SimpleGrid>
    </FullScreenSection>
  );
};

export default ProjectsSection;
