import { CSVLink } from "react-csv";
import { useSelector } from "react-redux";
import {
  generateAverageGrowth,
  generateTotalRevenue,
} from "../../utils/generateRevenue";
import { headers } from "../../utils/CSVConstants";

function RevenueSummary() {
  const GrowthData = useSelector((state) => state.GrowthData || []);

  return GrowthData?.length > 0 ? (
    <div className="w-full h-full p-3 bg-slate-100">
      <div className="w-full flex justify-end py-3 px-1">
        <CSVLink
          data={GrowthData}
          headers={headers}
          className="px-3 py-1 rounded-full bg-blue-600 shadow-md text-white flex items-center gap-2"
          filename="RevenueSummary.csv"
          bom={true}
        >
          <span className="tracking-wider">Export</span>
          <img src="/export.png" className="h-4 w-4" alt="Export" />
        </CSVLink>
      </div>
      <table className="table-auto border-collapse border border-gray-300 w-full text-gray-600">
        <tbody className="tracking-wider">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left bg-gray-200">
              Total Revenue (INR)
            </th>
            <td className="border border-gray-300 px-4 py-2">
              ₹ {generateTotalRevenue(GrowthData)}
            </td>
          </tr>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left bg-gray-200">
              Average Annual Growth (percent %)
            </th>
            <td className="border border-gray-300 px-4 py-2">
              {generateAverageGrowth(GrowthData)} %
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ) : (
    <div className="w-full h-full p-3 bg-slate-100 flex items-center justify-center">
      <span className="tracking-wider">No Data Available</span>
    </div>
  );
}

export default RevenueSummary;
