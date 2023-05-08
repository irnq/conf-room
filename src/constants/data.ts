import { IOption } from '../interface/IOption';

interface IData {
  name: string;
  value: IOption[];
}

export const towers: IData = {
  name: 'tower',
  value: [
    {
      label: 'Tower А',
      value: 'A',
    },
    {
      label: 'Tower B',
      value: 'B',
    },
  ],
};

export const floors: IData = {
  name: 'floor',
  value: Array(25)
    .fill(3)
    .map((floor, index) => {
      floor += index;
      return { label: `Floor ${floor}`, value: floor.toString() };
    }),
};

export const rooms: IData = {
  name: 'room',
  value: Array(10)
    .fill(1)
    .map((room, index) => {
      room += index;
      return { label: `Room ${room}`, value: room.toString() };
    }),
};
