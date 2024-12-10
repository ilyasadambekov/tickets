import styles from './index.module.scss';
import { Checkbox, Flex, Radio } from 'antd';
import FilterStore, { Currency } from '../../stores/FilterStore.ts';
import { observer } from 'mobx-react-lite';
import CustomCheckbox from '../Checkbox';

const FilterBlock = () => {
  return (
    <div className={styles.filterBlock}>
      <Flex vertical gap={16}>
        <p className={styles.label}>ВАЛЮТА</p>

        <Radio.Group
          options={[
            { label: 'RUB', value: Currency.rub },
            { label: 'USD', value: Currency.usd },
            { label: 'EUR', value: Currency.eur },
          ]}
          defaultValue="rub"
          optionType="button"
          buttonStyle="solid"
          value={FilterStore.currency}
          onChange={(e) => FilterStore.setCurrency(e.target.value)}
        />
      </Flex>

      <Flex vertical gap={16}>
        <p className={styles.label}>КОЛИЧЕСТВО ПЕРЕСАДОК</p>

        <Checkbox
          indeterminate={FilterStore.stops.length > 0 && FilterStore.stops.length < 4}
          checked={FilterStore.stops.length === 4}
          onChange={(e) => FilterStore.setStops(e.target.checked ? [0, 1, 2, 3] : [])}
        >
          Все
        </Checkbox>

        <Checkbox.Group value={FilterStore.stops} onChange={(value) => FilterStore.setStops(value)}>
          <Flex vertical gap={16} style={{ width: '100%' }}>
            <CustomCheckbox value={0}>Без пересадок</CustomCheckbox>
            <CustomCheckbox value={1}>1 пересадка</CustomCheckbox>
            <CustomCheckbox value={2}>2 пересадки</CustomCheckbox>
            <CustomCheckbox value={3}>3 пересадки</CustomCheckbox>
          </Flex>
        </Checkbox.Group>
      </Flex>
    </div>
  );
};

export default observer(FilterBlock);
