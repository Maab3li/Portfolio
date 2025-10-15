import FullScreenSection from "../components/FullScreenSection";
import { Heading , SimpleGrid} from "@chakra-ui/react";
import Card from "../components/Card";
import { TextAnimation } from "../Features/TextAnimation";

const projects = [
  {
    title: "To-do App",
    description:
      "Useful app to use",
    getImageSrc: () => require("../images/to-do list.png"),
    url: "https://maab3li.github.io/TODOList-app"
  },
  {
    title: "Mina Clinic",
    description:
      "modern website for clinic",
    getImageSrc: () => require("../images/pc-home.png"),
    url :"https://maab3li.github.io/Mina-clinic"
  },
  {
  title: 'CRUDS Product Management System',
  description: 'a create, read, update, delete and search system for managers',
  getImageSrc: () => require("../images/cruds.png"),
  url :''
  }
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      bgGradient="linear(to-b, white, white)"
      _dark={{bgGradient:'linear(to-b, black, black)'}}
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <TextAnimation>
        <Heading as="h1" id="projects-section" color='#28282B' _dark={{color:'#FFF'}}>
          My projects
        </Heading>
      </TextAnimation>
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
