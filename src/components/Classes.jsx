import React from 'react';
import clsx from 'clsx';

import Subject from './Subject';
import useStyles from './styles';

/**
 * @type {React.FC}
 */
const Classes = () => {
  const classes = useStyles();
  return (
    <table className={clsx("table", "table-striped", "table-hover", "table-bordered")}>
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
          <td></td>
          <td className={clsx(classes.subject)} rowSpan={3}>
            <Subject id="INT3506 2" name="Các hệ thống thương mại điện tử" room="307-GĐ2" lecturer="PGS. Bùi Quang Hưng" />
          </td>
          <td></td>
          <td className={clsx(classes.subject)} rowSpan={3}>
            <Subject id="INT3213 1" name="Nhập môn an toàn thông tin" room="101-G8" lecturer="TS. Lê Phê Đô" />
          </td>
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
          <td className={clsx(classes.subject)} rowSpan={3}>
            <Subject id="INT3117 1" name="Kiểm thử" room="308-G2" lecturer="ThS. Nguyễn Thu Trang" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>5</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>6</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>7</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className={clsx(classes.subject)} rowSpan={3}>
            <Subject id="INT3207 1" name="Kho dữ liệu" room="107-G2" lecturer="PGS. Bùi Quang Hưng" />
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td></td>
          <td></td>
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
          <td className={clsx(classes.subject)} rowSpan={3}>
            <Subject id="INT3505 1" name="Kiến trúc hướng dịch vụ" room="308-G2" lecturer="TS. Võ Đình Hiếu" />
          </td>
        </tr>
        <tr>
          <td>11</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>12</td>
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
