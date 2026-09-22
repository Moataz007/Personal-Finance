import { ChevronDown } from "lucide-react";

export default function ExpensesComparison() {
  const data = [
    {month: "Jan", last: 60, current: 90 },
    { month: "Feb", last: 25, current: 35 },
    { month: "Mar", last: 45, current: 20 },
    { month: "Apr", last: 45, current: 50 },
    { month: "May", last: 30, current: 48 },
    { month: "Jun", last: 67, current: 46 },
    { month: "July", last: 28, current: 45 },
    { month: "Aug", last: 28, current: 60 },
    { month: "Sep", last: 60, current: 65 },
    { month: "Oct", last: 60, current: 65 },
    { month: "Nov", last: 60, current: 40 },
    { month: "Dec", last: 60, current: 75 },
  ];

  return (
    <>
    <div className="">
      <div className="min-w-200 pr-7">
        <div className="w-full mb-8">
      <p className="mb-5 text-[24px] inter-font font-medium text-[#878787]">
        Expenses Comparison
      </p>
      {/* White Box */}
      <div className="w-full rounded-2xl bg-white px-8 py-7">

        {/* Top Section */}
        <div className="flex items-center justify-between">

          {/* Weekly Comparison */}
          <div className="flex items-center gap-2">
            <span className="text-[18px] font-semibold text-[#191919]">
              Monthly Comparison
            </span>
            <ChevronDown
              size={20}
              className="text-[#191919]"
            />
          </div>
          {/* Legend */}
          <div className="flex items-center gap-7">
            {/* This month */}
            <div className="flex items-center gap-2">
              <span className="h-3 w-7 rounded-sm bg-[#299D91]"></span>
              <span className="text-sm text-[#777]">
                This Month
              </span>
            </div>
            {/* Last motth */}
            <div className="flex items-center gap-2">
              <span className="h-3 w-7 rounded-sm bg-[#E8DAD6]"></span>
              <span className="text-sm text-[#777]">
                Last Month
              </span>
            </div>
          </div>
        </div>
        {/* Chart */}
        <div className="mt-9 flex">
          {/* Y Axis (Money meter) */}
          <div className="flex flex-col justify-between text-sm text-[#999]">
            <p>$250k</p>
            <p>$50k</p>
            <p>$10k</p>
            <p>$2k</p>
            <p>$0</p>
          </div>
          {/* Chart */}
          <div className="ml-5 flex-1">
            {/* Bars */}
            <div className="flex h-65 items-end justify-between border-b border-[#E5E5E5] px-5">
              {data.map((item) => (
                <div
                  key={item.month}
                  className="flex h-full items-end gap-2"
                >
                  {/* Last Week */}
                  <div
                    className="w-7 rounded-t-md bg-[#E8DAD6]"
                    style={{
                      height: `${item.last}%`,
                    }}
                  ></div>
                  {/* This Week */}
                  <div
                    className="w-7 rounded-t-md bg-[#299D91]"
                    style={{
                      height: `${item.current}%`,
                    }}
                  ></div>
                </div>
              ))}
            </div>
            {/* Months */}
            <div className="flex justify-between px-2 pt-4">
              {data.map((item) => (
                <span
                  key={item.month}
                  className="text-sm text-[#999]"
                >
                  {item.month}
                </span>
              ))}

            </div>

          </div>
        </div>
      </div>
        </div>
      </div>

    </div>
    
    </>
  );
}