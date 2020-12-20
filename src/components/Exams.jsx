import React from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  exam: {
    '&:hover': {
      backgroundColor: '#0099FF',
      color: '#FFFFFF',
    },
    '&.incoming': {
      border: '3px solid #0099FF',
      boxSizing: 'border-box',
    },
    '&.passed': {
      display: 'none',
    },
  },
});

/**
 * @typedef {{ id: string; name: string; room: string; datetime: string; }} Exam
 */

/**
 * @type {Exam[]}
 */
const exams = [
  {
    id: 'INT3507 1',
    name: 'Các vấn đề hiện đại của công nghệ thông tin',
    room: '101-G2',
    datetime: '2020-12-21 15:30:00'
  },
  {
    id: 'ELT2028 4',
    name: 'Chuyên nghiệp trong công nghệ',
    room: '305-GĐ2',
    datetime: '2020-12-22 07:00:00'
  },
  {
    id: 'INT2212 4',
    name: 'Kiến trúc máy tính',
    room: '311-E3',
    datetime: '2020-12-22 15:30:00'
  },
  {
    id: 'INT3305 1',
    name: 'Truyền thông đa phương tiện',
    room: 'PM(201, 208, 305)-G2',
    datetime: '2020-12-26 09:30:00'
  },
  {
    id: 'ELT2035 1',
    name: 'Tín hiệu và hệ thống',
    room: '312, 313 GĐ2',
    datetime: '2020-12-30 15:30:00'
  },
  {
    id: 'INT3206 1',
    name: 'Cơ sở dữ liệu phân tán',
    room: '3a-G3, 3b-G3',
    datetime: '2021-01-06 15:30:00'
  }
];

/**
 * @type {React.FC<{ data: Exam }>}
 */
const ExamItem = (props) => {
  const classes = useStyles();
  const incoming = React.useMemo(() => {
    const datediff = dayjs().diff(props.data.datetime, 'day');
    return datediff >= -3 && datediff <= 0;
  }, [props.data.datetime]);
  const passed = React.useMemo(() => dayjs().diff(props.data.datetime, 'day') > 0, [props.data.datetime]);

  return (
    <div className={clsx('p-3', 'm-3', 'shadow-lg', classes.exam, { incoming: incoming, passed: passed })}>
      <div>
        <strong>{props.data.id}</strong>
      </div>
      <div>{props.data.name}</div>
      <div>{props.data.room}</div>
      <div>{dayjs(props.data.datetime).format('dddd, MMMM D, HH:mm')}</div>
    </div>
  );
};

/**
 * @type {React.FC}
 */
const Exams = () => {
  return (
    <>
      {exams.map((exam) => (
        <ExamItem key={exam.id} data={exam} />
      ))}
    </>
  );
};

export default Exams;
