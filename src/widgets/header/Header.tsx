import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header
      className={styles.header}
      data-testid="header"
    >
      <div className={styles.wrapper}>
        <svg className={styles.icon}>
          <use href="sprite.svg#SpaceXLogo"></use>
        </svg>
      </div>
    </header>
  );
};
