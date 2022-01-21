import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">

    <Link to="#/">
      <Image src="https://picsum.photos/400/200" alt="product"></Image>

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          12/12/2021
        </Box>

        <Box mt="1px" fontWeight="semibold" as="h4" lineHeight="tight">
          Macbook pro
        </Box>

        <Box>100 TL</Box>
      </Box>
    </Link>

    <Button colorScheme="pink">
      Add to basket
    </Button>
      
    </Box>
  )
}
