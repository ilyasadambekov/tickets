import { FC, ReactNode, useState } from 'react';
import { Checkbox, Flex } from 'antd';
import FilterStore from '../../stores/FilterStore.ts';

interface IProps {
  value: number;
  children: ReactNode;
}

const CustomCheckbox: FC<IProps> = ({ value, children }) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <Flex
      align="center"
      justify="space-between"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <Checkbox value={value} style={{ width: '100%' }}>
        {children}
      </Checkbox>

      {onHover && <a onClick={() => FilterStore.setStops([value])}>ТОЛЬКО</a>}
    </Flex>
  );
};

export default CustomCheckbox;
