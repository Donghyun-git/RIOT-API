import React from 'react';
import { Box } from './style';

type TooltipProps = {
  message?: string;
};

const Tooltip = ({ message }: TooltipProps) => {
  return <Box>{message}</Box>;
};

export default Tooltip;
