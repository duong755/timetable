import React from 'react';
import clsx from 'clsx';

import Subject from './Subject';
import useStyles from './styles';

const NgoQuangDuong: React.FC = () => {
  const classes = useStyles();
  return (
    <table className="table table-striped table-hover table-bordered">
      <thead>
        <tr>
          <td></td>
          <td>mon</td>
          <td>tue</td>
          <td>wed</td>
          <td>thu</td>
          <td>fri</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td className={clsx(classes.subject)} rowSpan={3}>
            <Subject id="INT2206 1" name="Nguyên lý hệ điều hành" room="107 G2" lecturer="TS. Trần Mai Vũ" />
          </td>
          <td className={clsx(classes.subject)} rowSpan={3}>
            <Subject
              id="INT3110 8"
              name="Phân tích thiết kế hướng đối tượng"
              room="3 G3"
              lecturer="TS. Đặng Đức Hạnh"
            />
          </td>
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
        </tr>
        <tr>
          <td>3</td>
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
              note="(học ngày 05/02 & 26/02/2020)"
            />
          </td>
          <td className={clsx(classes.subject)} rowSpan={3}>
            <Subject id="INT3209 2" name="Khai phá dữ liệu" room="107 G2" lecturer="PGS.TS. Phan Xuân Hiếu" />
          </td>
          <td className={clsx(classes.subject)} rowSpan={3}>
            <Subject id="HIS1002 1" name="Đường lối" room="303 GĐ2" lecturer="Trường ĐHKHXH&NV" />
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
            <Subject id="INT2207 4" name="Cơ sở dữ liệu" room="PM207 G2" lecturer="ThS. Vương Thị Hải Yến" />
          </td>
          <td></td>
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
          <td></td>
        </tr>
        <tr>
          <td>9</td>
          <td></td>
          <td className={clsx(classes.subject)} rowSpan={2}>
            <Subject id="PES1025 6" name="Bóng đá" room="Sân ĐHNN" />
          </td>
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
              note="(học ngày 14/02 và 06/03/2020)"
            />
          </td>
        </tr>
        <tr>
          <td>12</td>
          <td></td>
          <td className={clsx(classes.subject)} rowSpan={3}>
            <Subject id="INT3120 ?" name="Phát triển ứng dụng di động" room="3-G3" />
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

export default NgoQuangDuong;
