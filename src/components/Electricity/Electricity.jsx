import { useState, useEffect } from "react";
import {
  Counter,
  CounterWrapper,
  ElectricityHeader,
  ElectricityWrapper,
  UnitOfMeasurement,
  VerticalLine,
} from "./Electricity.styled";

const Electricity = () => {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("electricityCount");
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("electricityCount", count);
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedCount = count
    .toLocaleString("en-US", { useGrouping: true, minimumFractionDigits: 0 })
    .replace(/,/g, ".");

  return (
    <ElectricityWrapper>
      <ElectricityHeader>
        Electricity we produced for all time
      </ElectricityHeader>
      <VerticalLine />
      <CounterWrapper>
        <Counter>{formattedCount}</Counter>
        <UnitOfMeasurement>kWh</UnitOfMeasurement>
      </CounterWrapper>
    </ElectricityWrapper>
  );
};

export default Electricity;
