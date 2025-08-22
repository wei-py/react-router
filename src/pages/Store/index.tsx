import usePriceStore from "../../store/price";

export default function Store() {
  const { price, incrementPrice, decrementPrice, resetPrice, getPrice }
    = usePriceStore();
  return (
    <div>
      <p>
        价格:
        {price}
      </p>
      <button type="button" onClick={incrementPrice}>
        增加
      </button>
      <button type="button" onClick={decrementPrice}>
        减少
      </button>
      <button type="button" onClick={resetPrice}>
        重置
      </button>
      <button type="button" onClick={getPrice}>
        获取价格
      </button>
    </div>
  );
}
