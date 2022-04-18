import { Th } from '@chakra-ui/react';

export const ThElement = ({ text }: { text: string }) => {
  const customWidth = text.length > 0 ? '74px' : '74px';
  const customText = text === 'retencionLicencia' ? 'Retencion' : text;
  return (
    <Th
      textTransform="capitalize"
      color="#606162"
      fontSize={'14px'}
      paddingX="4px"
      textAlign={'center'}
      // width={customWidth}
    >
      {customText}
    </Th>
  );
};
