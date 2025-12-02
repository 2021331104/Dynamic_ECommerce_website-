import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const TopProductsChart = () => {
  const { topSellingProducts } = useSelector((state) => state.admin);
  const CustomYAxisTick = ({ x, y, payload }) => {
    return (
      <foreignObject x={x - 36} y={y - 16} width={32} height={32}>
        <img
          src={payload.value}
          alt="product"
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </foreignObject>
    );
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length > 0) {
      const product = payload[0].payload;
      return (
        <div className="bg-white p-2 rounded shadow border text-sm">
          <p className="font-semibold">Title: {product.name}</p>
          <p>Sold: {product.total_sold}</p>
        </div>
      );
    }
    return null;
  };

  
};

export default TopProductsChart;
