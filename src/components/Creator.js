const Creator = ({ createdName, createdDate, avatarURL }) => {
  return (
    <div>
      <p>Author: {createdName}</p>
      <p>created Date: {createdDate}</p>
      <img src={avatarURL} alt={createdName} width="40" height="40" />
    </div>
  );
};

export default Creator;
