import { FC, useCallback, useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { TimePicker, TimeRangePickerProps } from 'antd';

const { RangePicker } = TimePicker;
interface Props {
  pickedDate: string;
  onChange: (formatStrings: string[]) => void;
}

const range = (start: number, end: number) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};

const format = 'HH:mm';

type RangeValue = [Dayjs | null, Dayjs | null] | null;

export const FormTimeIntervalPicker: FC<Props> = ({ onChange, pickedDate }) => {
  const [interval, setInterval] = useState<RangeValue>(null);

  const disabledTime: TimeRangePickerProps['disabledTime'] = useCallback(() => {
    if (pickedDate === dayjs().format('YYYY-MM-DD')) {
      return {
        disabledHours: () => range(0, 24).splice(0, dayjs().hour() + 1),
      };
    }
    return {};
  }, [pickedDate]);

  useEffect(() => {
    setInterval(null);
  }, [pickedDate]);

  const handleChange = (range: RangeValue, formatStrings: string[]) => {
    setInterval(range);
    onChange(formatStrings);
  };

  return (
    <RangePicker
      size='large'
      disabledTime={disabledTime}
      hideDisabledOptions
      value={interval}
      minuteStep={15}
      format={format}
      disabled={!pickedDate}
      onChange={handleChange}
      allowClear
    />
  );
};
