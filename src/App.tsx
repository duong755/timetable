import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Subject, { SubjectInfoFilter } from './Subject';

const App: React.FC = () => {
  const [showLabels, setShowLabels] = React.useState<SubjectInfoFilter>({
    name: true,
    room: true,
    lecturer: true,
    note: true
  });

  return (
    <div>
      <div className="text-center p-3">
        <h3>Thời khóa biểu học kỳ 2, năm học 2019-2020</h3>
      </div>
      <div className="row text-center">
        <div className="col-sm-3 col-xs-12">
          <label>
            <input
              type="checkbox"
              checked={showLabels.name}
              onChange={(event) => {
                setShowLabels({ ...showLabels, name: event.target.checked });
              }}
            />
            &nbsp;Tên môn học
          </label>
        </div>
        <div className="col-sm-3 col-xs-12">
          <label>
            <input
              type="checkbox"
              checked={showLabels.room}
              onChange={(event) => {
                setShowLabels({ ...showLabels, room: event.target.checked });
              }}
            />
            &nbsp;Phòng học
          </label>
        </div>
        <div className="col-sm-3 col-xs-12">
          <label>
            <input
              type="checkbox"
              checked={showLabels.lecturer}
              onChange={(event) => {
                setShowLabels({
                  ...showLabels,
                  lecturer: event.target.checked
                });
              }}
            />
            &nbsp;Giảng viên
          </label>
        </div>
        <div className="col-sm-3 col-xs-12">
          <label>
            <input
              type="checkbox"
              checked={showLabels.note}
              onChange={(event) => {
                setShowLabels({ ...showLabels, note: event.target.checked });
              }}
            />
            &nbsp;Ghi chú
          </label>
        </div>
      </div>
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
            <td rowSpan={3}>
              <Subject
                id="INT2206 1"
                name={showLabels.name ? 'Nguyên lý hệ điều hành' : ''}
                room={showLabels.room ? '107 G2' : ''}
                lecturer={showLabels.lecturer ? 'TS. Trần Mai Vũ' : ''}
              />
            </td>
            <td rowSpan={3}>
              <Subject
                id="INT3110 8"
                name={showLabels.name ? 'Phân tích thiết kế hướng đối tượng' : ''}
                room={showLabels.room ? '3 G3' : ''}
                lecturer={showLabels.lecturer ? 'TS. Đặng Đức Hạnh' : ''}
              />
            </td>
            <td rowSpan={3}>
              <Subject
                id="INT3401 11"
                name={showLabels.name ? 'Trí tuệ nhân tạo' : ''}
                room={showLabels.room ? '309 GĐ2' : ''}
                lecturer={showLabels.lecturer ? 'TS. Đỗ Đức Đông' : ''}
              />
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
            <td rowSpan={3}>
              <Subject
                id="INT1003 8"
                name={showLabels.name ? 'Tin học cơ sở 1' : ''}
                room={showLabels.room ? 'PM207 G2' : ''}
                lecturer={showLabels.lecturer ? 'CN. Nguyễn Thành Sơn' : ''}
                note={showLabels.note ? '(học ngày 05/02 & 26/02/2020)' : ''}
              />
            </td>
            <td rowSpan={3}>
              <Subject
                id="INT3209 2"
                name={showLabels.name ? 'Khai phá dữ liệu' : ''}
                room={showLabels.room ? '107 G2' : ''}
                lecturer={showLabels.lecturer ? 'PGS.TS. Phan Xuân Hiếu' : ''}
              />
            </td>
            <td rowSpan={3}>
              <Subject
                id="HIS1002 1"
                name={showLabels.name ? 'Đường lối' : ''}
                room={showLabels.room ? '303 GĐ2' : ''}
                lecturer={showLabels.lecturer ? 'Trường ĐHKHXH&NV' : ''}
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
            <td rowSpan={2}>
              <Subject
                id="INT2207 4"
                name={showLabels.name ? 'Cơ sở dữ liệu' : ''}
                room={showLabels.room ? 'PM207 G2' : ''}
                lecturer={showLabels.lecturer ? 'ThS. Vương Thị Hải Yến' : ''}
              />
            </td>
            <td></td>
            <td rowSpan={2}>
              <Subject
                id="INT2207 4"
                name={showLabels.name ? 'Cơ sở dữ liệu' : ''}
                room={showLabels.room ? '303 GĐ2' : ''}
                lecturer={showLabels.lecturer ? 'PGS.TS. Nguyễn Hải Châu' : ''}
              />
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
            <td rowSpan={2}>
              <Subject
                id="PES1025 6"
                name={showLabels.name ? 'Bóng đá' : ''}
                room={showLabels.room ? 'Sân ĐHNN' : ''}
              />
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
            <td rowSpan={2}>
              <Subject
                id="INT1003 8"
                name={showLabels.name ? 'Tin học cơ sở 1' : ''}
                room={showLabels.room ? '107-G2' : ''}
                lecturer={showLabels.lecturer ? 'ThS. Lương Việt Nguyên' : ''}
                note={showLabels.note ? '(học ngày 14/02 và 06/03/2020)' : ''}
              />
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td></td>
            <td rowSpan={3}>
              <Subject
                id="INT3120 ?"
                name={showLabels.name ? 'Phát triển ứng dụng di động' : ''}
                room={showLabels.room ? '3-G3' : ''}
              />
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
    </div>
  );
};

export default App;
