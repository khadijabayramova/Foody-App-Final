import React from "react";
import AdminLayout from "../../components/layout/AdminLayout/AdminLayout";
import Rectangle from "../../components/pages/dashboard/Rectangle";
import Square from "../../components/pages/dashboard/square";
import DoughnutChart from "../../components/pages/charts/Doughnut";
import LineChart from "../../components/pages/charts/Line";

export default function Dashboard() {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-10 w-[82%]  ">
        <div className="flex gap-6  justify-end w-full">
          <Square title="Orders">
            <DoughnutChart />
          </Square>

          <Rectangle title="Total Salary" children="Chart">
            <LineChart />
          </Rectangle>
        </div>
        <div className="flex gap-6 justify-end w-full">
          <Rectangle
            children="There are no risks assigned."
            title="Assigned Risks"
          />
          <Square
            children="There are no action items assigned."
            title="Assigned Action Items"
          />
        </div>
      </div>
    </AdminLayout>
  );
}
