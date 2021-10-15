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
    } else {
      setProfitOrLoss(0);
      setProfitOrLossPercent(0);
    }
  }, [costPrice, sellingPrice]);

  useEffect(() => {
    if (!profitOrLoss) {
      setProfitOrLossPercent(0);
      return;
    }

    if (profitOrLoss >= 0) {
      setProfitOrLossPercent((profitOrLoss / costPrice) * 100);
    } else {
      setProfitOrLossPercent(((profitOrLoss * -1) / costPrice) * 100);
    }
  }, [profitOrLoss]);

  useEffect(() => {
    if (!(markedPrice && discount)) {
      setDiscountPercent(0);
      setPriceAfterDiscount(0);
      return;
    }

    setDiscountPercent((discount / markedPrice) * 100);
    setPriceAfterDiscount(markedPrice - discount);
  }, [markedPrice, discount]);

  useEffect(() => {
    if (!(gstPercent && priceAfterDiscount)) {
      setGstPercent(0);
      return;
    }

    let GST: number = (gstPercent / 100) * priceAfterDiscount;
    setGst(GST);
    setPriceAfterGst(priceAfterDiscount + GST);
  }, [gstPercent, priceAfterDiscount]);

  return (
    <div className="index-page">
      {/* Part Two */}

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

      {/* Part Two */}

      <div className="discount common">
        <h2>Discount %</h2>

        <form action="">
          <input
            type="number"
            placeholder="Marked Price ( MP )"
            required
            value={markedPrice}
            onChange={e => setMarkedPrice(parseFloat(e.target.value))}
          />
          <br />
          <input
            type="number"
            placeholder="Discount"
            required
            value={discount}
            onChange={e => setDiscount(parseFloat(e.target.value))}
          />
          <div className="output">
            <span>Discount %: {discountPercent}</span> <br />
            <span>Price After Discount: {priceAfterDiscount}</span>
          </div>
        </form>
      </div>
      <div className="gst common">
        <h2>Taxes ( GST )</h2>
        <form action="">
          <input
            type="number"
            required
            placeholder="Price after discount"
            value={priceAfterDiscount}
            onChange={e => setPriceAfterDiscount(parseFloat(e.target.value))}
          />
          <br />
          <input
            type="number"
            required
            placeholder="GST / Tax Percent"
            value={gstPercent}
            onChange={e => setGstPercent(parseFloat(e.target.value))}
          />
          <div className="output">
            <span>GST: {gst}</span> <br />
            <span>Price After GST: {priceAfterGst}</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
