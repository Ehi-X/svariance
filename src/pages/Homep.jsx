import React from 'react';

const Homep = () => {
  return (
    <main className="min-h-screen p-10">

      
      <div className="flex justify-around ml-[-200]  mt-14 text-center">
        <div>
          <p className="bg-amber-500 text-white text-center text-2xl w-70 px-6 py-3 rounded-lg shadow-md">
            Pending
          </p>
        </div>

        <div>
          <p className="bg-green-500 w-70 text-white text-2xl px-6 py-3 rounded-lg shadow-md">
            Successful
          </p>
        </div>

        <div>
          <p className="bg-red-500 w-70  text-white  text-2xl px-6 py-3 rounded-lg shadow-md">
            Failed
          </p>
        </div>
      </div>

      
      <div className="p-5">
      <h2 className="text-lg font-semibold mb-4 mt-20">Transaction History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">

          <thead>
            <tr className="bg-gray-500">
              <th className="py-2 px-4 text-white border">T/N</th>
              <th className="py-2 px-4 text-white border">Status</th>
              <th className="py-2 px-4 text-white border">Date</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border">
              <td className="py-2 px-4  border-gray-500 border">------</td>
              <td className="py-2 px-4 border border-gray-500 text-red-500">Failed</td>
              <td className="py-2 px-4  border-gray-500 border">-----</td>
            </tr>
            <tr className="border">
              <td className="py-2 px-4  border-gray-500 border">-----</td>
              <td className="py-2 px-4 border  border-gray-500 text-green-500">Success</td>
              <td className="py-2 px-4   border-gray-500 border">-----</td>
            </tr>
            <tr className="border">
              <td className="py-2 px-4  border-gray-500 border">-----</td>
              <td className="py-2 px-4 border  border-gray-500 text-yellow-500">Pending</td>
              <td className="py-2 px-4  border-gray-500 border">-----</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    </main>
  );
};

export default Homep;
