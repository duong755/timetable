import React from 'react';
import clsx from 'clsx';

import Subject from './Subject';
import useStyles from './styles';

const Classes: React.FC = () => {
  const classes = useStyles();
  return (
    <table className="table table-striped table-hover table-bordered">
      <thead>
        <tr>
          <th></th>
          <th>mon</th>
          <th>tue</th>
          <th>wed</th>
          <th>thu</th>
          <th>fri</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td className={clsx(classes.subject)} rowSpan={3}>
            <Subject id="INT2206 1" name="Nguyên lý hệ điều hành" room="107 G2" lecturer="TS. Trần Mai Vũ" />
          </td>
          <td></td>
          <td className={clsx(classes.subject)} rowSpan={3}>
            <Subject id="INT3401 11" name="Trí tuệ nhân tạo" room="309 GĐ2" lecturer="TS. Đỗ Đức Đông" />
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td></td>
          <td></td>
          <td className={clsx(classes.subject)} rowSpan={3}>
            <Subject
              id="INT1003 8"
              name="Tin học cơ sở 1"
              room="PM207 G2"
              lecturer="CN. Nguyễn Thành Sơn"
            />
          </td>
          <td></td>
          <td className={clsx(classes.subject)} rowSpan={3}>
            <Subject
              id="INT3110 4"
              name="Phân tích và thiết kế hướng đối tượng"
              room="309 GĐ2"
              lecturer="TS. Tô Văn Khánh"
            />
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>6</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>7</td>
          <td className={clsx(classes.subject)} rowSpan={2}>
            <Subject id="INT2207 4" name="Cơ sở dữ liệu" room="PM207 G2" lecturer="CN. Nguyễn Thị Thu Trang A" />
          </td>
          <td className={clsx(classes.subject)} rowSpan={3}>
            <Subject id="HIS1002 13" name="Đường lối" room="309 GĐ2" lecturer="ThS. Lê Thị Thùy Linh" />
          </td>
          <td className={clsx(classes.subject)} rowSpan={2}>
            <Subject id="INT2207 4" name="Cơ sở dữ liệu" room="303 GĐ2" lecturer="PGS.TS. Nguyễn Hải Châu" />
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>8</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>9</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>10</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>11</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className={clsx(classes.subject)} rowSpan={2}>
            <Subject
              id="INT1003 8"
              name="Tin học cơ sở 1"
              room="107-G2"
              lecturer="ThS. Lương Việt Nguyên"
            />
          </td>
        </tr>
        <tr>
          <td>12</td>
          <td></td>
          <td className={clsx(classes.subject)} rowSpan={3}>
            <Subject id="INT3120 4" name="Phát triển ứng dụng di động" room="3-G3" lecturer="PGS. Trương Anh Hoàng" />
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>13</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>14</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Classes;
