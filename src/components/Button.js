const Button = ({ name, onClickHandler, className }) => {
  const buttonEl = document.createElement("button");
  buttonEl.textContent = name;
  buttonEl.classList.add(className);
  buttonEl.addEventListener("click", onClickHandler);

  return buttonEl;
};

export default Button;
