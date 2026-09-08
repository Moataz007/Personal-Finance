import { useState } from "react";

export default function PopUpGoals() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {/* الصفحة الأساسية */}
      <div className="p-10">
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#299D91] text-white px-5 py-3 rounded-lg">
          Open Popup
        </button>
      </div>


      {/* Popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* الخلفية الغامقة */}
          <div
            onClick={() => setShowModal(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"/>
          {/* محتوى الـ Popup */}
          
          <div className="relative z-10 rounded-xl bg-white shadow-2xl mb-6 flex flex-col items-center px-19 py-16">
            <div className="inter-font mb-6 text-[16px] w-80">
                <p className=" font-semibold text-[#525256] mb-2">Target Amounts</p>
                <input
                 className="rounded-lg border w-full border-[#4B5768] p-3 font-normal text-[#878787]"
                type="Number"
                name="Number"
                autoComplete="Number"
                placeholder="$500000"/>
            </div>
            <div className="inter-font text-[16px] mb-8">
                <p className=" font-semibold text-[#525256] mb-2">Present Amounts</p>
                <input
                className="rounded-lg border border-[#4B5768] p-3 font-normal text-[#878787] w-80"
                type="Number"
                name="Number"
                autoComplete="Number"
                placeholder="Write presents amounts here"/>
            </div>

            <button onClick={() => setShowModal(false)}
              className=" bg-[#299D91] text-white px-5 py-2 rounded-lg inter-font font-bold text-[16px] w-50">
              Save</button>
          </div>
        </div>
      )}
    </div>
  );
}