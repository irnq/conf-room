import { useState } from 'react';
import { Form, Typography, Button, Input } from 'antd';
import { FormSelect } from '../../components/FormSelect/FormSelect';
import { towers, floors, rooms } from '../../constants/data';
import styles from './BookingForm.module.scss';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import { IForm } from '../../interface/IForm';
import { FormDatePicker } from '../../components/FormDatePicker/FormDatePicker';
import { FormTimeIntervalPicker } from '../../components/FormTimeIntervalPicker/FormTimeIntervalPicker';

const { Title } = Typography;
const { TextArea } = Input;

export const BookingForm = () => {
  // const formRef = useRef<FormInstance>(null);
  const [form] = Form.useForm();

  const [pickedDate, setPickedDate] = useState('');

  const handleReset = () => {
    form.resetFields();
  };

  const handleDatePick = (dateString: string) => {
    setPickedDate(dateString);
    form.setFieldValue('date', dateString);
    form.setFieldValue('time', '');
  };

  const handleTimePick = (formatStrings: string[]) => {
    form.setFieldValue('time', formatStrings.join('-'));
  };

  const handleSubmit = (values: IForm) => {
    console.log(JSON.stringify(values, null, 2));
    form.resetFields();
  };

  return (
    <div className={styles.layout}>
      <Title className={styles.title}>Choose a room</Title>
      <Form form={form} layout='vertical' className={styles.form} onFinish={handleSubmit}>
        {[towers, floors, rooms].map((key) => {
          return (
            <Form.Item
              key={key.name}
              name={key.name}
              label={capitalizeFirstLetter(key.name)}
              rules={[{ required: true }]}
            >
              <FormSelect name={key.name} options={key.value} />
            </Form.Item>
          );
        })}

        <Form.Item label='Date' name='date' rules={[{ required: true }]}>
          <FormDatePicker onChange={handleDatePick} />
        </Form.Item>

        <Form.Item label='Time' name='time' rules={[{ required: true }]}>
          <FormTimeIntervalPicker onChange={handleTimePick} pickedDate={pickedDate} />
        </Form.Item>

        <Form.Item label='Commentary' name='commentary' rules={[{ max: 200 }]}>
          <TextArea rows={4} allowClear />
        </Form.Item>

        <Form.Item className={styles.btnContainer}>
          <Button className={styles.btn} htmlType='button' onClick={handleReset} size='large'>
            Reset
          </Button>
          <Button className={styles.btn} type='primary' htmlType='submit' size='large'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
