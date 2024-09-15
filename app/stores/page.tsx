"use client";

import React from "react";
import { useState } from "react";

const Stores = () => {
  const steps = [
    {
      stepNumber: 1,
      stepTitle: "Kubbella Hesabını Oluştur",
      stepIcon: "🎯",
    },
    {
      stepNumber: 2,
      stepTitle: "Hizmet Noktaları Sekmesinden Lokasyonunu İşaretle",
      stepIcon: "☀",
    },
    {
      stepNumber: 3,
      stepTitle:
        "Son Olarak `Haber Bekliyorum` Butonuna Tıkla ve Bizden Haber Bekle",
      stepIcon: "✔",
    },
  ];

  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="h-screen flex flex-col mt-24 items-center">
      <h1 className="font-bold">3 Adımda Kubbella Noktası Ol 🎉</h1>

      <div className="h-1/3 mt-36 w-1/3 text-center gap-3">
        <div className="flex justify-between mb-16">
          {steps.map((step) => (
            <div
              key={step.stepNumber}
              className={`rounded-full w-12 h-12 flex justify-center items-center font-semibold cursor-pointer ${
                step.stepNumber === activeStep
                  ? "bg-purple-400 text-white"
                  : "bg-white text-black"
              }  `}
              onClick={() => setActiveStep(step.stepNumber)}
            >
              <span>{step.stepNumber}</span>
            </div>
          ))}
        </div>

        <p className="font-semibold">
          {steps.filter((step) => step.stepNumber === activeStep)[0].stepTitle}
        </p>
      </div>

      {/* buttons */}
      <div>
        <button>Önceki</button>
        <button>Sonraki</button>
      </div>
    </div>
  );
};

export default Stores;
