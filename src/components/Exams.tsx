import React from 'react';
import clsx from 'clsx';
import moment from 'moment';
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

interface Exam {
  id: string;
  name: string;
  room: string;
  datetime: string;
}

const exams: Exam[] = [
  {
    id: 'INT2206 1',
    name: 'Nguyên lý hệ điều hành',
    room: '309-GĐ2',
    datetime: '2020-06-22 13:00:00',
  },
  {
    id: 'INT3110 4',
    name: 'Phân tích và thiết kế hướng đối tượng',
    room: '(304,307)-GĐ2',
    datetime: '2020-06-26 13:00:00',
  },
  {
    id: 'INT1002 13',
    name: 'Đường lối',
    room: '(301,302,303)-GĐ2',
    datetime: '2020-06-30 07:00:00',
  },
  {
    id: 'INT3120 4',
    name: 'Phát triển ứng dụng di động',
    room: '301-G2',
    datetime: '2020-07-06 07:00:00',
  },
  {
    id: 'INT3401 11',
    name: 'Trí tuệ nhân tạo',
    room: '(302,303)-GĐ2',
    datetime: '2020-07-06 13:00:00'
  },
  {
    id: 'INT2207 4',
    name: 'Cơ sở dữ liệu',
    room: 'PM 201-G2',
    datetime: '2020-07-10 07:00:00',
  },
  {
    id: 'INT1003 8',
    name: 'Tin học cơ sở 1',
    room: 'PM (202,307)-G2',
    datetime: '2020-07-12 09:30:00',
  },
];

const ExamItem: React.FC<{ data: Exam }> = (props) => {
  const classes = useStyles();
  const incoming = React.useMemo(() => {
    const datediff = moment().diff(props.data.datetime, 'days');
    return datediff >= -3 && datediff <= 0;
  }, [props.data.datetime]);
  const passed = React.useMemo(() => moment().diff(props.data.datetime, 'days') > 0, [props.data.datetime]);

  return (
    <div className={clsx('p-3', 'm-3', 'shadow-lg', classes.exam, { incoming: incoming, passed: passed })}>
      <div>
        <strong>{props.data.id}</strong>
      </div>
      <div>{props.data.name}</div>
      <div>{props.data.room}</div>
      <div>{moment(props.data.datetime).format('dddd, MMMM D, HH:mm')}</div>
    </div>
  );
};

const Exams: React.FC = () => {
  return (
    <>
      {exams.map((exam) => (
        <ExamItem key={exam.id} data={exam} />
      ))}
    </>
  );
};

export default Exams;
