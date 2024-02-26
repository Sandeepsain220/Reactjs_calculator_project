import styles from "./ButtonContainer.module.css";
const ButtonContainer = ({onButtonClick}) => {
  const ButtonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "=",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {ButtonNames.map((buttonName) => (
        <button className={styles.button} onClick = {() => onButtonClick(buttonName)}>{buttonName}</button>
      ))}
    </div>
  );
};

export default ButtonContainer;