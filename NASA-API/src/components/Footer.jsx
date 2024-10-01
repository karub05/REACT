/* eslint-disable react/prop-types */
export default function Footer({ handleToggleModal, data }) {
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1>BANKAI</h1>
        <h2>{data?.title}</h2>
      </div>
      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}