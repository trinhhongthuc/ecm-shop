const CheckOutDetail = () => {
  return (
    <div className="check-out-detail">
      <div className="check-out-detail__title">Billing Detail</div>

      <div className="check-out-detail__wrapper check-out-detail__wrapper--name">
        <input type="text" name="" placeholder="First name*" id="" />
        <input type="text" name="" placeholder="Last name*" id="" />
      </div>
      <div className="check-out-detail__wrapper">
        <input type="text" name="" placeholder="Company name*" id="" />
      </div>
      <div className="check-out-detail__wrapper">
        <input type="text" name="" placeholder="Street Address*" id="" />
      </div>
      <div className="check-out-detail__wrapper">
        <input type="text" name="" placeholder="Postcode / ZIP*" id="" />
      </div>
      <div className="check-out-detail__wrapper">
        <input type="text" name="" placeholder="Town / City*" id="" />
      </div>
      <div className="check-out-detail__wrapper">
        <input type="text" name="" placeholder="Phone*" id="" />
      </div>
      <div className="check-out-detail__wrapper">
        <input type="text" name="" placeholder="Email*" id="" />
      </div>

      <div className="check-out-detail__accept">
        <input type="checkbox" name="" id="accept-create" />
        <label htmlFor="accept-create">Create an account</label>
      </div>

      <div className="check-out-detail__accept">
        <input type="checkbox" name="" id="accept-ship" />
        <label htmlFor="accept-ship">Ship to different address</label>
      </div>

      <div className="check-out-detail__wrapper">
        <input type="text" name="" placeholder="Order note" id="" />
      </div>
    </div>
  );
};

export default CheckOutDetail;
