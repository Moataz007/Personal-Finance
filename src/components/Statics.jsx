import { ChevronDown } from "lucide-react";

export default function Statics() {
  const data = [
    { day: "17 Sun", last: 45, current: 75 },
    { day: "18 Mon", last: 25, current: 35 },
    { day: "19 Tue", last: 45, current: 20 },
    { day: "20 Wed", last: 45, current: 50 },
    { day: "21 Thu", last: 30, current: 48 },
    { day: "22 Fri", last: 15, current: 68 },
    { day: "23 Sat", last: 28, current: 45 },
  ];

  return (
    <>
    <div className="w-full overflow-x-auto">
      <div className="min-w-200">
    <div className="w-full mb-8">
      <h2 className="mb-5 text-[24px] font-medium text-[#878787]">
        Statistics
      </h2>

      {/* White Box */}
      <div className="w-full rounded-2xl bg-white px-8 py-7">

        {/* Top Section */}
        <div className="flex items-center justify-between">

          {/* Weekly Comparison */}
          <div className="flex items-center gap-2">
            <span className="text-[18px] font-semibold text-[#191919]">
              Weekly Comparison
            </span>

            <ChevronDown
              size={20}
              className="text-[#191919]"
            />
          </div>

          {/* Legend */}
          <div className="flex items-center gap-7">

            {/* This Week */}
            <div className="flex items-center gap-2">
              <span className="h-3 w-7 rounded-sm bg-[#299D91]"></span>

              <span className="text-sm text-[#777]">
                This week
              </span>
            </div>

            {/* Last Week */}
            <div className="flex items-center gap-2">
              <span className="h-3 w-7 rounded-sm bg-[#E8DAD6]"></span>

              <span className="text-sm text-[#777]">
                Last week
              </span>
            </div>

          </div>
        </div>

        {/* Chart */}
        <div className="mt-9 flex">

          {/* Y Axis */}
          <div className="flex flex-col justify-between text-sm text-[#999]">
            <span>$250k</span>
            <span>$50k</span>
            <span>$10k</span>
            <span>$2k</span>
            <span>$0</span>
          </div>

          {/* Chart */}
          <div className="ml-5 flex-1">

            {/* Bars */}
            <div className="flex h-65 items-end justify-between border-b border-[#E5E5E5] px-5">

              {data.map((item) => (
                <div
                  key={item.day}
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

            {/* Days */}
            <div className="flex justify-between px-2 pt-4">

              {data.map((item) => (
                <span
                  key={item.day}
                  className="text-sm text-[#999]"
                >
                  {item.day}
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