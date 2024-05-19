import { Container, VStack, Text, Box, Heading, HStack, IconButton, Link, SimpleGrid, Image, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMoon, FaSun } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(<FaMoon />, <FaSun />);
  const bgColor = useColorModeValue("gray.800", "gray.900");
  const textColor = useColorModeValue("whiteAlpha.900", "whiteAlpha.900");

  return (
    <Container maxW="container.lg" p={4} bg={bgColor} color={textColor} fontFamily="monospace">
      <VStack spacing={8} align="stretch">
        <HStack justifyContent="space-between">
          <Heading as="h1" size="xl">
            John Doe
          </Heading>
          <IconButton aria-label="Toggle dark mode" icon={colorModeIcon} onClick={toggleColorMode} />
        </HStack>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            About Me
          </Heading>
          <Text>I am a passionate programmer with experience in web development, specializing in React and Node.js. I love creating modern and responsive web applications.</Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Portfolio
          </Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={4}>
            <Box bg="gray.700" p={4} borderRadius="md">
              <Image src="https://images.unsplash.com/photo-1606161290889-77950cfb67d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3MTYxNTY0NTN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 1" borderRadius="md" />
              <Text mt={2}>Project 1</Text>
            </Box>
            <Box bg="gray.700" p={4} borderRadius="md">
              <Image src="https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxwcm9qZWN0JTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3MTYxNTY0NTN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 2" borderRadius="md" />
              <Text mt={2}>Project 2</Text>
            </Box>
            <Box bg="gray.700" p={4} borderRadius="md">
              <Image src="https://images.unsplash.com/photo-1566241477600-ac026ad43874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxwcm9qZWN0JTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3MTYxNTY0NTN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 3" borderRadius="md" />
              <Text mt={2}>Project 3</Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Skills
          </Heading>
          <SimpleGrid columns={[2, 3, 4]} spacing={4}>
            <Box bg="gray.700" p={4} borderRadius="md">
              <Text>JavaScript</Text>
            </Box>
            <Box bg="gray.700" p={4} borderRadius="md">
              <Text>React</Text>
            </Box>
            <Box bg="gray.700" p={4} borderRadius="md">
              <Text>Node.js</Text>
            </Box>
            <Box bg="gray.700" p={4} borderRadius="md">
              <Text>HTML & CSS</Text>
            </Box>
            <Box bg="gray.700" p={4} borderRadius="md">
              <Text>Git</Text>
            </Box>
            <Box bg="gray.700" p={4} borderRadius="md">
              <Text>SQL</Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Blog
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box bg="gray.700" p={4} borderRadius="md">
              <Heading as="h3" size="md">
                Blog Post 1
              </Heading>
              <Text mt={2}>A brief description of blog post 1.</Text>
            </Box>
            <Box bg="gray.700" p={4} borderRadius="md">
              <Heading as="h3" size="md">
                Blog Post 2
              </Heading>
              <Text mt={2}>A brief description of blog post 2.</Text>
            </Box>
          </VStack>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Contact
          </Heading>
          <HStack spacing={4}>
            <Link href="https://github.com" isExternal>
              <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
            </Link>
            <Link href="mailto:email@example.com" isExternal>
              <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" />
            </Link>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
