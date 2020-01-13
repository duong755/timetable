import React from 'react';

import Subject from './Subject';

const VuTienAnh: React.FC = () => {
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
          <td>sat</td>
          <td>sun</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td></td>
          <td rowSpan={2}>
            <Subject id="" name="DSA (practice)" room="?" lecturer="" />
          </td>
          <td rowSpan={2}>
            <Subject id="" name="C/C++ (practice)" room="206CT1" lecturer="" />
          </td>
          <td rowSpan={2}>
            <Subject id="" name="Python (theory)" room="202T4" lecturer="" />
          </td>
          <td rowSpan={3}>
            <Subject id="" name="Genetics (theory)" room="306T5" lecturer="" />
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
          <td rowSpan={3}>
            <Subject id="" name="Botany (theory)" room="306T5" lecturer="" />
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td rowSpan={2}>
            <Subject id="" name="C/C++ (theory)" room="511T4" lecturer="" />
          </td>
          <td rowSpan={2}>
            <Subject id="" name="Botany (practice)" room="232T1" lecturer="" />
          </td>
          <td rowSpan={2}>
            <Subject id="" name="Vertebrate (practice)" room="136T1" lecturer="" />
          </td>
          <td></td>
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
          <td rowSpan={2}>
            <Subject id="" name="Animal physiology (theory)" room="514T4" lecturer="" />
          </td>
          <td rowSpan={2}>
            <Subject id="" name="Evolution (practice)" room="235T1" lecturer="" />
          </td>
          <td rowSpan={3}>
            <Subject id="" name="DSA (theory)" room="103T4" lecturer="" />
          </td>
          <td rowSpan={2}>
            <Subject id="" name="Vertebrate (theory)" room="306T5" lecturer="" />
          </td>
          <td rowSpan={3}>
            <Subject id="" name="Differential equation" room="403T5" lecturer="" />
          </td>
          <td rowSpan={2}>
            <Subject id="" name="Animal phisiology (practice)" room="432T1" lecturer="" />
          </td>
          <td></td>
        </tr>
        <tr>
          <td>7</td>
          <td></td>
        </tr>
        <tr>
          <td>8</td>
          <td rowSpan={2}>
            <Subject id="" name="Python (practice)" room="?" lecturer="" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>9</td>
          <td></td>
          <td rowSpan={2}>
            <Subject id="" name="Genetics (practice)" room="235T1" lecturer="" />
          </td>
          <td></td>
          <td rowSpan={2}>
            <Subject id="" name="Evolution (theory)" room="403T5" lecturer="" />
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>10</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default VuTienAnh;
