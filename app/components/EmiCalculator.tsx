"use client";

import { useMemo, useState } from "react";
import type { Project } from "../data/projects";

function formatCurrency(value: number, currency: Project["currency"]) {
  if (currency === "BDT") {
    return `৳${Math.round(value).toLocaleString("en-IN")}`;
  }
  return `$${Math.round(value).toLocaleString("en-US")}`;
}

const defaultsByCurrency: Record<Project["currency"], { rate: number; tenure: number }> = {
  BDT: { rate: 10.5, tenure: 15 },
  USD: { rate: 6.5, tenure: 25 },
};

export default function EmiCalculator({ project }: { project: Project }) {
  const defaults = defaultsByCurrency[project.currency];
  const [price, setPrice] = useState(project.priceNumeric);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [tenureYears, setTenureYears] = useState(defaults.tenure);
  const [interestRate, setInterestRate] = useState(defaults.rate);

  const { emi, loanAmount, totalInterest, totalPayment } = useMemo(() => {
    const loan = price * (1 - downPaymentPercent / 100);
    const monthlyRate = interestRate / 100 / 12;
    const months = tenureYears * 12;
    const monthlyPayment =
      monthlyRate === 0
        ? loan / months
        : (loan * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const total = monthlyPayment * months;
    return {
      emi: monthlyPayment,
      loanAmount: loan,
      totalInterest: total - loan,
      totalPayment: total,
    };
  }, [price, downPaymentPercent, tenureYears, interestRate]);

  return (
    <div className="bg-cream p-7 md:p-9 border border-line">
      <p className="font-mono text-[10px] uppercase tracking-[.07em] text-moss mb-2">Investment calculator</p>
      <h3 className="font-serif text-[24px] mb-6">Estimate your monthly payment</h3>

      <div className="grid gap-6 mb-8">
        <div>
          <div className="flex justify-between mb-2 text-[13px]">
            <span className="text-muted">Property price</span>
            <span className="font-medium">{formatCurrency(price, project.currency)}</span>
          </div>
          <input
            type="range"
            min={project.priceNumeric * 0.6}
            max={project.priceNumeric * 1.4}
            step={project.currency === "BDT" ? 100000 : 5000}
            value={price}
            onChange={(event) => setPrice(Number(event.target.value))}
            className="w-full accent-moss"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2 text-[13px]">
            <span className="text-muted">Down payment</span>
            <span className="font-medium">
              {downPaymentPercent}% ({formatCurrency((price * downPaymentPercent) / 100, project.currency)})
            </span>
          </div>
          <input
            type="range"
            min={10}
            max={50}
            step={5}
            value={downPaymentPercent}
            onChange={(event) => setDownPaymentPercent(Number(event.target.value))}
            className="w-full accent-moss"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2 text-[13px]">
            <span className="text-muted">Loan tenure</span>
            <span className="font-medium">{tenureYears} years</span>
          </div>
          <input
            type="range"
            min={5}
            max={30}
            step={1}
            value={tenureYears}
            onChange={(event) => setTenureYears(Number(event.target.value))}
            className="w-full accent-moss"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2 text-[13px]">
            <span className="text-muted">Interest rate</span>
            <span className="font-medium">{interestRate.toFixed(1)}%</span>
          </div>
          <input
            type="range"
            min={4}
            max={16}
            step={0.1}
            value={interestRate}
            onChange={(event) => setInterestRate(Number(event.target.value))}
            className="w-full accent-moss"
          />
        </div>
      </div>

      <div className="bg-paper p-6 border border-line">
        <p className="font-mono text-[10px] uppercase tracking-[.07em] text-moss mb-2">Estimated monthly payment</p>
        <p className="font-serif text-[38px] md:text-[44px] leading-none mb-6">
          {formatCurrency(emi, project.currency)}
          <span className="text-[14px] font-sans text-muted"> / month</span>
        </p>
        <div className="grid grid-cols-3 gap-4 pt-5 border-t border-line text-[13px]">
          <div>
            <div className="text-muted mb-1">Loan amount</div>
            <div className="font-medium">{formatCurrency(loanAmount, project.currency)}</div>
          </div>
          <div>
            <div className="text-muted mb-1">Total interest</div>
            <div className="font-medium">{formatCurrency(totalInterest, project.currency)}</div>
          </div>
          <div>
            <div className="text-muted mb-1">Total payment</div>
            <div className="font-medium">{formatCurrency(totalPayment, project.currency)}</div>
          </div>
        </div>
      </div>
      <p className="text-muted text-[11px] mt-4 leading-[1.5]">
        This is an estimate for planning purposes only. Actual loan terms depend on your bank or financial
        institution's assessment.
      </p>
    </div>
  );
}
