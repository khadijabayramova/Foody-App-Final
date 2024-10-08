import React from "react";

function TableComponent({ headers = [], children }) {
  console.log(headers, "heaad");
  return (
    <div className="overflow-y-auto h-[61vh] mt-4">
      <table className="min-w-full bg-bgwt text-black border text-sm">
        <thead>
          <tr>
            {headers?.map((header, index) => (
              <th key={index} className="px-10 py-4 text-start">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export default TableComponent;
