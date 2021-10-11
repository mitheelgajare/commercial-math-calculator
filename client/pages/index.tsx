import React, { useState, useEffect } from "react";
import type { NextPage } from "next";

const Index: NextPage = () => {
  // variables

  const [costPrice, setCostPrice] = useState<number>(0);
  const [sellingPrice, setSellingPrice] = useState<number>(0);
  const [markedPrice, setMarkedPrice] = useState<number>(0);
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [profitOrLoss, setProfitOrLoss] = useState<number>(0);
  const [profitOrLossPercent, setProfitOrLossPercent] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [gstPercent, setGstPercent] = useState<number>(0);
  const [priceAfterDiscount, setPriceAfterDiscount] = useState<number>(0);
  const [gst, setGst] = useState<number>(0);
  const [priceAfterGst, setPriceAfterGst] = useState<number>(0);

  // useEffects

  useEffect(() => {
    if (costPrice && sellingPrice) {
      setProfitOrLoss(sellingPrice - costPrice);

      // if (profitOrLoss >= 0) {
      //   console.log(profitOrLoss);

      //   setProfitOrLossPercent((profitOrLoss / costPrice) * 100);
      // } else {
      //   setProfitOrLossPercent(((profitOrLoss * -1) / costPrice) * 100);
      // }
    } else {
      setProfitOrLoss(0);
      setProfitOrLossPercent(0);
    }
  }, [costPrice, sellingPrice]);

  return (
    <div className="index-page">
      <div className="profit-loss common">
        <h2>Profit and Loss</h2>
        <form action="">
          <input
            type="number"
            placeholder="Cost Price ( CP )"
            value={costPrice}
            required
            onChange={e => setCostPrice(parseFloat(e.target.value))}
          />
          <br />
          <input
            type="number"
            placeholder="Selling Price ( SP )"
            value={sellingPrice}
            required
            onChange={e => setSellingPrice(parseFloat(e.target.value))}
          />
          <div className="output">
            {profitOrLoss >= 0 ? (
              <React.Fragment>
                <span>Profit: {profitOrLoss}</span> <br />
                <span>Profit %: {profitOrLossPercent}</span>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <span>Loss: {profitOrLoss * -1}</span> <br />
                <span>Loss%: {profitOrLossPercent}</span>
              </React.Fragment>
            )}{" "}
          </div>
        </form>
      </div>
      <div className="discount common">
        <h2>Discount %</h2>
      </div>
      <div className="gst common">
        <h2>Taxes ( GST )</h2>
      </div>
    </div>
  );
};

export default Index;
