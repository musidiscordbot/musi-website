const openPopup = (url) => {
  window.open(url, 'popupWindow', 'width=800,height=600');
};

const JoinNow = () => {
  return (
    <>
      <section className="joinUs">
        <div className="h-color joinUs-header">
          <h3>Join us now!</h3>
        </div>
        <div className="joinUs-para p-color">
          Invite our bot to your Discord server!{" "}
        </div>
        <button className="btn">
          <a className="h-color no-decoration" onClick={() => openPopup('https://discord.com/oauth2/authorize?client_id=1137417865016918149&permissions=8&response_type=code&redirect_uri=https%3A%2F%2Fmusi.lol%2Fadded&scope=bot+identify')}>
            Invite now!
          </a>
        </button>
      </section>
    </>
  );
};

export default JoinNow;
