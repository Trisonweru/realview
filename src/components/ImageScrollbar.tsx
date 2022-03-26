import { Box, Flex, Icon } from '@chakra-ui/react';
import Image from 'next/image';
import { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent='center' alignItems='center' marginRight='1'>
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize='2xl'
        cursor='pointer'
        d={['none', 'none', 'none', 'block']}
      />
    </Flex>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent='center' alignItems='center' marginLeft='1'>
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize='2xl'
        cursor='pointer'
        d={['none', 'none', 'none', 'block']}
      />
    </Flex>
  );
};
const style = { overflow: 'hidden' };
export default function ImageSrollbar({ data }: any) {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      style={() => style}
    >
      {data.map((item: any) => (
        <Box width='910px' overflow='hidden' p='1' key={item.id}>
          <Image
            placeholder='blur'
            blurDataURL={item.url}
            src={item.url}
            width={1000}
            height={500}
            sizes='(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px'
            alt=''
          />
        </Box>
      ))}
    </ScrollMenu>
  );
}
