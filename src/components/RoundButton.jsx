function RoundButton({ option, id, type, setOption, text, changeScreen }) {
  const off = option == 3 ? 'me-2' : 'ms-2';
  const changeOptionPage = function (e, page) {
    setOption(page);
    changeScreen(page + 5);
  };

  const handleMouseEnter = function (e, page) {
    if (page !== option) {
      e.target.style.backgroundColor = '#1B4965';
      e.target.classList.add('text-white');
      e.target.style.borderRadius = '500px';
    }
  };

  const handleMouseLeave = function (e, page) {
    if (page !== option) {
      e.target.style.backgroundColor = '#CAE9FF';
      e.target.style.borderRadius = '500px';
      e.target.classList.remove('text-white');
    }
  };

  return (
    <button
      className={
        option === id
          ? 'btn btn-outline-primary w-25 text-white border-0 border-id' + off
          : 'btn btn-outline-primary w-25 text-secondary border-0 border-id' +
            off
      }
      onMouseEnter={(e) => handleMouseEnter(e, id)}
      onMouseLeave={(e) => handleMouseLeave(e, id)}
      onClick={(e) => changeOptionPage(e, id)}
      style={
        option === id ? { backgroundColor: '#1B4965' } : { color: '#CAE9FF' }
      }
    >
      {' '}
      <i className={'bi bi-' + type + ' me-2'}></i>
      {text}
    </button>
  );
}

export default RoundButton;
