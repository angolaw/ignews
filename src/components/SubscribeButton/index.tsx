import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  title: string;
  onPress: () => void;
  priceId: string;
}

export function SubscribeButton({
  title,
  priceId,
  ...rest
}: SubscribeButtonProps) {
  return (
    <button {...rest} className={styles.button}>
      {title}
    </button>
  );
}
