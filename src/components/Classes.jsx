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
          <td className={classes.subject} rowSpan={3}>
            <Subject id="INT3507 1" name="Các vấn đề hiện đại của CNTT" room="308 G2" lecturer="PGS. TS. Lê Thanh Hà" />
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td></td>
          <td className={classes.subject} rowSpan={3}>
            <Subject id="ELT2028 4" name="Chuyên nghiệp trong công nghệ" room="413 Viện cơ học" lecturer="TS Nguyễn Hoàng Nam" />
          </td>
          <td className={classes.subject} rowSpan={3}>
            <Subject id="INT3305 1" name="Truyền thông đa phương tiện" room="" lecturer="TS Hoàng Xuân Tùng" />
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>5</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>6</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>7</td>
          <td className={classes.subject} rowSpan={3}>
            <Subject id="ELT2035 1" room="215 GĐ3" lecturer="TS Lâm Sinh Công" name="Tín hiệu và hệ thống"  />
          </td>
          <td></td>
          <td></td>
          <td className={classes.subject} rowSpan={4}>
            <Subject id="INT2212 4" room="303 G2" lecturer="PGS. TS Nguyễn Trí Thành" name="Kiến trúc máy tính" />
          </td>
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
          <td className={classes.subject} rowSpan={4}>
            <Subject id="POL1001 1" name="Tư tưởng Hồ Chí Minh" room="101 G2" lecturer="ThS Hoàng Thị Ngọc Minh" />
          </td>
          <td></td>
        </tr>
        <tr>
          <td>10</td>
          <td></td>
          <td className={classes.subject} rowSpan={3}>
            <Subject id="INT3206 1" name="Cơ sở dữ liệu phân tán" room="308 G2" lecturer="ThS Vũ Bá Duy" />
          </td>
          <td></td>
        </tr>
        <tr>
          <td>11</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>12</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Classes;
