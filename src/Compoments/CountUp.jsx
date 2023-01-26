import CountUp from "react-countup";
const Count = () => {
  return (
    <div className="bg-green-300 m-0 p-0">
      <h1 className="text-2xl font-extrabold">
        <CountUp end={300} />
      </h1>

      <br />
      <h1 className="text-3xl font-bold">
        <CountUp end={500} duration={5} />
      </h1>
      <br />
      <h1 className="text-4xl font-bold">
        <CountUp start={500} end={1100} duration={7} />
      </h1>
      <br/>
      <h1 className=" text-3xl font-semibold ">
        <CountUp
          start={200}
          end={2000}
          prefix="$"
          suffix="USD"
          duration={8}
          decimals={2}
        />
      </h1>
    </div>
  );
};
export default Count;
