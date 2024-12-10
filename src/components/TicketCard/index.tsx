import styles from './index.module.scss';
import { FC, useEffect } from 'react';
import { Col, Flex, Row } from 'antd';
import turkish_airlines_logo from '../../assets/turkish_airlines_logo.png';
import aeroflot_logo from '../../assets/aeroflot_logo.png';
import s7_airlines_logo from '../../assets/s7_airlines_logo.png';
import british_airways_logo from '../../assets/british_airways_logo.jpg';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { pluralize } from '../../utils.ts';
import FilterStore from '../../stores/FilterStore.ts';
import { observer } from 'mobx-react-lite';

const carrierLogos: Record<string, string> = {
  TK: turkish_airlines_logo,
  SU: aeroflot_logo,
  S7: s7_airlines_logo,
  BA: british_airways_logo,
};

const TicketCard: FC<ITicket> = ({
  origin,
  origin_name,
  destination,
  destination_name,
  departure_time,
  departure_date,
  arrival_time,
  arrival_date,
  carrier,
  stops,
  price,
}) => {
  useEffect(() => {
    dayjs.locale('ru');
  }, []);

  return (
    <div className={styles.ticketCard}>
      <div className={styles.left}>
        <img width={200} src={carrierLogos[carrier]} alt="" />
        <button className={styles.buyBtn}>
          Купить
          <br />
          за {price} {FilterStore.currency}
        </button>
      </div>

      <div className={styles.right}>
        <Row gutter={[16, 16]} align="middle">
          <Col span={8}>
            <p className={styles.time}>{departure_time}</p>
          </Col>
          <Col span={8}>
            <p className={styles.stops}>
              {pluralize(stops, ['ПЕРЕСАДКА', 'ПЕРЕСАДКИ', 'ПЕРЕСАДОК'])}
            </p>
          </Col>
          <Col span={8}>
            <p className={styles.time}>{arrival_time}</p>
          </Col>
        </Row>

        <Flex justify="space-between">
          <Flex vertical gap={8}>
            <p className={styles.location}>{`${origin}, ${origin_name}`}</p>
            <p className={styles.date}>{dayjs(departure_date).format('D MMM YYYY, dd')}</p>
          </Flex>

          <Flex vertical align="end" gap={8}>
            <p className={styles.location}>{`${destination}, ${destination_name}`}</p>
            <p className={styles.date}>{dayjs(arrival_date).format('D MMM YYYY, dd')}</p>
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default observer(TicketCard);
