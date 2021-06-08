import styles from "./styles.module.scss";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

export function CustomButton({ title, ...rest }: CustomButtonProps) {
  return (
    <button {...rest} className={styles.button}>
      {title}
    </button>
  );
}
