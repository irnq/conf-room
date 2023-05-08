import { DatePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { FC } from 'react';

interface Props {
  onChange: (dateString: string) => void;
}

const disabledDate = (date: Dayjs): boolean => {
  return date < dayjs().startOf('day');
};

export const FormDatePicker: FC<Props> = ({ onChange }) => {
  const handleChange = (_: Dayjs | null, dateString: string) => {
    onChange(dateString);
  };
  return <DatePicker size='large' disabledDate={disabledDate} allowClear onChange={handleChange} />;
};
