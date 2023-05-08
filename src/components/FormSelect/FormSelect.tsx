import { Select } from 'antd';
import { FC } from 'react';
import { IOption } from '../../interface/IOption';

interface Props {
  name: string;
  options: IOption[];
  onChange?: (value: string) => void;
}

export const FormSelect: FC<Props> = ({ name, options, onChange = () => {} }) => {
  return (
    <Select
      placeholder={`Pick ${name}`}
      onChange={onChange}
      allowClear
      size='large'
      options={options}
    ></Select>
  );
};
